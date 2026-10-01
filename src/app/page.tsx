'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FilterBar, type PermissionFilter, type SourceFilter, type SortOrder } from '@/components/dashboard/FilterBar';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import { StarOnGithub } from '@/components/ui/github-star';
import { HomePage } from '@/components/home/HomePage';
import { PROJECTS, ProjectItem } from '@/data/catalog';

// Official company names that map to "official" source
const OFFICIAL_COMPANIES = new Set(['OpenAI']);

// Tags that signal permission mode (from README descriptions)
function inferPermission(item: ProjectItem): 'read-only' | 'supervised' | 'autonomous' {
  const haystack = `${item.description} ${item.tags.join(' ')} ${item.title}`.toLowerCase();
  // Signals from README: "Read-only" = safe, "—confirm" = supervised, skills/connectors w/ writes = autonomous
  if (haystack.includes('read-only') || haystack.includes('read only')) return 'read-only';
  if (haystack.includes('--confirm') || haystack.includes('supervised')) return 'supervised';
  if (
    item.format === 'Dot Skill' ||
    haystack.includes('autonomous') ||
    haystack.includes('background') ||
    haystack.includes('continuous')
  ) return 'autonomous';
  if (item.format === 'MCP Connector') return 'supervised'; // default for connectors
  return 'read-only'; // safe default for docs, blueprints, guides
}

export default function DashboardPage() {
  const [view, setView] = useState<'home' | 'dashboard'>('home');
  const [searchQuery, setSearchQuery] = useState('');

  // ── Filter state ──
  const [resourceTypeFilter, setResourceTypeFilter] = useState('');   // channelId
  const [domainFilter, setDomainFilter] = useState('');               // topic
  const [formatFilter, setFormatFilter] = useState('');               // format
  const [permissionFilter, setPermissionFilter] = useState<PermissionFilter>('all');
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>('all');
  const [sortOrder, setSortOrder] = useState<SortOrder>('default');

  // Pagination
  const [visibleCount, setVisibleCount] = useState(50);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Hash routing
  useEffect(() => {
    const handleHash = () => {
      setView(window.location.hash === '#dashboard' ? 'dashboard' : 'home');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigateToDashboard = () => {
    window.location.hash = 'dashboard';
    setView('dashboard');
  };

  const handleGoHome = () => {
    window.location.hash = '';
    setView('home');
  };

  // Keyboard shortcut: '/' or Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const el = document.querySelector('form input[type="text"]') as HTMLInputElement | null;
      if ((e.key === '/' && document.activeElement !== el) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault(); el?.focus(); el?.select();
      } else if (e.key === 'Escape' && document.activeElement === el) {
        el?.blur();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const handleClearAll = () => {
    setSearchQuery('');
    setResourceTypeFilter('');
    setDomainFilter('');
    setFormatFilter('');
    setPermissionFilter('all');
    setSourceFilter('all');
    setSortOrder('default');
    setVisibleCount(50);
  };

  const hasActiveFilters = Boolean(
    searchQuery ||
    resourceTypeFilter ||
    domainFilter ||
    formatFilter ||
    permissionFilter !== 'all' ||
    sourceFilter !== 'all' ||
    sortOrder !== 'default'
  );

  // Reset pagination on filter change
  useEffect(() => {
    setVisibleCount(50);
  }, [searchQuery, resourceTypeFilter, domainFilter, formatFilter, permissionFilter, sourceFilter, sortOrder]);

  // ── Filter + sort computation ──
  const filteredProjects = useMemo(() => {
    const toks = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);

    const out = PROJECTS.filter((item: ProjectItem) => {
      // 1. Resource Type (channelId)
      if (resourceTypeFilter) {
        if (item.channelId !== Number(resourceTypeFilter)) return false;
      }

      // 2. Domain / Topic
      if (domainFilter && item.topic !== domainFilter) return false;

      // 3. Format
      if (formatFilter && item.format !== formatFilter) return false;

      // 4. Permission Mode
      if (permissionFilter !== 'all') {
        if (inferPermission(item) !== permissionFilter) return false;
      }

      // 5. Source (Official vs Community)
      if (sourceFilter !== 'all') {
        const isOfficial = OFFICIAL_COMPANIES.has(item.company);
        if (sourceFilter === 'official' && !isOfficial) return false;
        if (sourceFilter === 'community' && isOfficial) return false;
      }

      // 6. Search tokens
      if (toks.length > 0) {
        const hay = `${item.title} ${item.description} ${item.company} ${item.topic} ${item.format} ${item.tags.join(' ')}`.toLowerCase();
        return toks.every(k => hay.includes(k));
      }

      return true;
    });

    // Sort
    if (sortOrder === 'az') out.sort((a, b) => a.title.localeCompare(b.title));
    if (sortOrder === 'za') out.sort((a, b) => b.title.localeCompare(a.title));
    // 'default' = original catalog order (no-op)

    return out;
  }, [searchQuery, resourceTypeFilter, domainFilter, formatFilter, permissionFilter, sourceFilter, sortOrder]);

  const visibleProjects = useMemo(() => filteredProjects.slice(0, visibleCount), [filteredProjects, visibleCount]);

  // Infinite scroll
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && visibleCount < filteredProjects.length) setVisibleCount(p => p + 50); },
      { rootMargin: '350px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [filteredProjects.length, visibleCount]);

  const searchPlaceholders = [
    'Search 484+ Dots resources — MCP connectors, skills, plugins…',
    'Search by resource type (MCP Connector, Dot Skill, Official Plugin…)',
    'Search by domain (Engineering, Research, Productivity, Finance…)',
    'Search by permission mode (read-only, supervised, autonomous…)',
  ];

  if (view === 'home') {
    return <HomePage onNavigateToDashboard={handleNavigateToDashboard} />;
  }

  return (
    <div id="dash">
      {/* ── 1. Top Header Row ── */}
      <section className="search-grid-row" aria-label="Top Bar">
        <div className="search-col-side left">
          <div className="flex items-center w-full h-full px-4 sm:px-6 py-3">
            <button
              type="button"
              onClick={handleGoHome}
              className="font-sans font-bold text-[16px] text-[#0a0a0a] tracking-tight whitespace-nowrap hover:opacity-70 transition-opacity cursor-pointer border-none bg-transparent p-0"
              title="Return to Home"
            >
              Awesome Dots
            </button>
          </div>
        </div>

        <div className="search-col-center">
          <PlaceholdersAndVanishInput
            placeholders={searchPlaceholders}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
          />
        </div>

        <div className="search-col-side right">
          <div className="flex items-center justify-end w-full h-full px-4 sm:px-6 py-3">
            <StarOnGithub />
          </div>
        </div>
      </section>

      {/* ── 2. Filter Bar ── */}
      <section className="filter-section-row">
        <FilterBar
          resourceTypeFilter={resourceTypeFilter}
          domainFilter={domainFilter}
          formatFilter={formatFilter}
          permissionFilter={permissionFilter}
          sourceFilter={sourceFilter}
          sortOrder={sortOrder}
          onResourceTypeChange={setResourceTypeFilter}
          onDomainChange={setDomainFilter}
          onFormatChange={setFormatFilter}
          onPermissionChange={setPermissionFilter}
          onSourceChange={setSourceFilter}
          onSortChange={setSortOrder}
          onClearAll={handleClearAll}
          hasActiveFilters={hasActiveFilters}
          totalFilteredCount={filteredProjects.length}
        />
      </section>

      {/* ── 3. Projects Grid ── */}
      {filteredProjects.length === 0 ? (
        <div className="empty-state-row">
          <p className="font-bold text-base text-black">No resources match your current filters</p>
          <p className="text-sm text-[#6b6b6b]">Try modifying your search or clearing some filters.</p>
          <button type="button" onClick={handleClearAll} className="bg-black text-white font-mono text-xs px-4 py-2 hover:bg-[#333] cursor-pointer">
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          <main className="tiles st" id="projectsGrid" aria-label="Projects Grid">
            {visibleProjects.map((project, idx) => {
              const blkClass = `b${idx % 4}`;
              // Trim tags: max 2 if any tag > 12 chars, else max 3
              const rawTags = (project.tags || []).filter(Boolean);
              const hasLongTag = rawTags.some(t => t.length > 12);
              const displayTags = rawTags.slice(0, hasLongTag ? 2 : 3);
              const isBlue = idx % 2 === 1;

              return (
                <article key={project.id} className="tile prj-card group">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                      <i className={`blk-sm ${blkClass}`} aria-hidden="true" />
                      <span className="font-mono text-[11px] text-[#6b6b6b] uppercase tracking-wider truncate">
                        {project.format}
                      </span>
                    </div>

                    <h2 className="prj-title transition-transform duration-150 group-hover:translate-x-0.5">
                      {project.title}
                    </h2>

                    <p className="prj-description" title={project.description}>
                      {project.description}
                    </p>
                  </div>

                  <div className="card-footer-row">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {displayTags.map((tag, ti) => (
                        <span key={`${ti}-${tag}`} className="tag-chip">{tag}</span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`card-link-btn ${isBlue ? 'peri' : 'lime'}`}
                      title={`View ${project.title}`}
                    >
                      <span>View</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </main>

          {visibleCount < filteredProjects.length && (
            <div className="load-more-bar">
              <button type="button" onClick={() => setVisibleCount(p => p + 50)} className="load-more-btn">
                <span>LOAD NEXT 50</span>
                <span className="font-normal opacity-80">({filteredProjects.length - visibleCount} more)</span>
              </button>
            </div>
          )}

          <div ref={sentinelRef} className="h-6 w-full" aria-hidden="true" />
        </>
      )}
    </div>
  );
}
