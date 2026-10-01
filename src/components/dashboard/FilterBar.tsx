'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Cable,
  Layers,
  FileText,
  Shield,
  Globe2,
  ArrowUpDown,
  ChevronDown,
  X,
  LayoutGrid,
} from 'lucide-react';
import { CH, TOPIC_NAMES, FORMAT_NAMES } from '../../data/catalog';

/* ── Types ── */
export type PermissionFilter = 'all' | 'read-only' | 'supervised' | 'autonomous';
export type SourceFilter = 'all' | 'official' | 'community';
export type SortOrder = 'default' | 'az' | 'za';

export interface FilterBarProps {
  resourceTypeFilter: string;       // channelId as string
  domainFilter: string;             // topic
  formatFilter: string;             // format
  permissionFilter: PermissionFilter;
  sourceFilter: SourceFilter;
  sortOrder: SortOrder;
  onResourceTypeChange: (val: string) => void;
  onDomainChange: (val: string) => void;
  onFormatChange: (val: string) => void;
  onPermissionChange: (val: PermissionFilter) => void;
  onSourceChange: (val: SourceFilter) => void;
  onSortChange: (val: SortOrder) => void;
  onClearAll: () => void;
  hasActiveFilters: boolean;
  totalFilteredCount?: number;
}

/* ── MCP sub-categories from README ── */
const MCP_CATEGORIES: { label: string; keywords: string[] }[] = [
  { label: 'AI & Search', keywords: ['ai', 'search', 'anthropic', 'gemini', 'deepseek', 'openai mcp', 'perplexity', 'exa', 'tavily', 'brave', 'deepl'] },
  { label: 'Communication', keywords: ['slack', 'discord', 'telegram', 'bluesky', 'twitter', 'front', 'mastodon'] },
  { label: 'Developer Tools', keywords: ['github', 'gitlab', 'linear', 'sentry', 'supabase', 'neon', 'clerk', 'posthog'] },
  { label: 'Finance & Commerce', keywords: ['stripe', 'shopify', 'paddle', 'gumroad', 'polar', 'wise', 'ynab', 'ramp', 'mercury'] },
  { label: 'Cloud Infrastructure', keywords: ['vercel', 'cloudflare', 'fly.io', 'railway', 'render', 'netlify', 'trigger'] },
  { label: 'Productivity', keywords: ['notion', 'airtable', 'todoist', 'asana', 'clickup', 'coda', 'readwise', 'mem0'] },
  { label: 'Hardware & IoT', keywords: ['philips hue', 'tesla', 'smartthings', 'home assistant', 'nest', 'tuya', 'switchbot'] },
  { label: 'Email & Marketing', keywords: ['resend', 'sendgrid', 'postmark', 'kit', 'beehiiv', 'loops', 'buttondown'] },
  { label: 'Content & Media', keywords: ['canva', 'figma', 'youtube', 'spotify', 'twitch', 'cloudinary', 'unsplash', 'webflow'] },
];

/* ── Hover-open dropdown wrapper ── */
interface HoverDropdownProps {
  triggerContent: React.ReactNode;
  isActive: boolean;
  content: React.ReactNode;
  contentClassName?: string;
  align?: 'start' | 'center' | 'end';
}

const HoverDropdown: React.FC<HoverDropdownProps> = ({
  triggerContent,
  isActive,
  content,
  contentClassName = 'w-52',
  align = 'start',
}) => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const clear = () => { if (timerRef.current) clearTimeout(timerRef.current); };
  const handleEnter = () => { clear(); setOpen(true); };
  const handleLeave = () => { timerRef.current = setTimeout(() => setOpen(false), 140); };

  return (
    <div className="inline-flex flex-1 min-w-0" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
        <DropdownMenuTrigger asChild>
          <button type="button" className={`f-trigger-btn ${isActive ? 'on' : ''}`}>
            {triggerContent}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={contentClassName}
          align={align}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {content}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

/* ── Main FilterBar ── */
export const FilterBar: React.FC<FilterBarProps> = ({
  resourceTypeFilter,
  domainFilter,
  formatFilter,
  permissionFilter,
  sourceFilter,
  sortOrder,
  onResourceTypeChange,
  onDomainChange,
  onFormatChange,
  onPermissionChange,
  onSourceChange,
  onSortChange,
  onClearAll,
  hasActiveFilters,
}) => {
  const resourceLabel = React.useMemo(() => {
    if (!resourceTypeFilter) return 'Resource Type';
    const ch = CH.find(c => String(c.i) === resourceTypeFilter);
    return ch ? ch.name : 'Resource Type';
  }, [resourceTypeFilter]);

  const domainLabel = domainFilter || 'Domain';
  const formatLabel = formatFilter || 'Format';

  const permissionLabel = React.useMemo(() => ({
    'all': 'Permission',
    'read-only': 'Read-Only',
    'supervised': 'Supervised',
    'autonomous': 'Autonomous',
  }[permissionFilter]), [permissionFilter]);

  const sourceLabel = React.useMemo(() => ({
    'all': 'Source',
    'official': 'Official OpenAI',
    'community': 'Community',
  }[sourceFilter]), [sourceFilter]);

  const sortLabel = React.useMemo(() => ({
    'default': 'Sort',
    'az': 'A → Z',
    'za': 'Z → A',
  }[sortOrder]), [sortOrder]);

  return (
    <div className="filter-grid-row">

      {/* ── Box 1: Resource Type + Domain/Track ── */}
      <div className="filter-box col-1">

        {/* 1. Resource Type (channelId) */}
        <HoverDropdown
          isActive={!!resourceTypeFilter}
          contentClassName="w-60 max-h-72 overflow-y-auto"
          triggerContent={
            <>
              <LayoutGrid className="f-btn-icon" size={12} />
              <span className="f-btn-text truncate">{resourceLabel}</span>
              <ChevronDown className="f-chevron" size={11} />
            </>
          }
          content={
            <>
              <DropdownMenuItem onClick={() => onResourceTypeChange('')} selected={!resourceTypeFilter}>
                All Resource Types
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {CH.map(ch => (
                <DropdownMenuItem
                  key={ch.i}
                  onClick={() => onResourceTypeChange(String(ch.i))}
                  selected={resourceTypeFilter === String(ch.i)}
                >
                  {ch.name}
                  <span className="ml-auto text-[10px] text-[#aaaef8] font-mono">{ch.label}</span>
                </DropdownMenuItem>
              ))}
            </>
          }
        />

        {/* 2. Domain / Operational Track */}
        <HoverDropdown
          isActive={!!domainFilter}
          contentClassName="w-56 max-h-72 overflow-y-auto"
          triggerContent={
            <>
              <Layers className="f-btn-icon" size={12} />
              <span className="f-btn-text truncate">{domainLabel}</span>
              <ChevronDown className="f-chevron" size={11} />
            </>
          }
          content={
            <>
              <DropdownMenuItem onClick={() => onDomainChange('')} selected={!domainFilter}>
                All Domains
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {TOPIC_NAMES.map(t => (
                <DropdownMenuItem
                  key={t}
                  onClick={() => onDomainChange(t)}
                  selected={domainFilter === t}
                >
                  {t}
                </DropdownMenuItem>
              ))}
            </>
          }
        />
      </div>

      {/* ── Box 2: Format + Permission Mode ── */}
      <div className="filter-box col-2">

        {/* 3. Format */}
        <HoverDropdown
          isActive={!!formatFilter}
          contentClassName="w-52"
          triggerContent={
            <>
              <FileText className="f-btn-icon" size={12} />
              <span className="f-btn-text truncate">{formatLabel}</span>
              <ChevronDown className="f-chevron" size={11} />
            </>
          }
          content={
            <>
              <DropdownMenuItem onClick={() => onFormatChange('')} selected={!formatFilter}>
                All Formats
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {FORMAT_NAMES.map(f => (
                <DropdownMenuItem
                  key={f}
                  onClick={() => onFormatChange(f)}
                  selected={formatFilter === f}
                >
                  {f}
                </DropdownMenuItem>
              ))}
            </>
          }
        />

        {/* 4. Permission Mode */}
        <HoverDropdown
          isActive={permissionFilter !== 'all'}
          contentClassName="w-52"
          triggerContent={
            <>
              <Shield className="f-btn-icon" size={12} />
              <span className="f-btn-text">{permissionLabel}</span>
              <ChevronDown className="f-chevron" size={11} />
            </>
          }
          content={
            <>
              <DropdownMenuItem onClick={() => onPermissionChange('all')} selected={permissionFilter === 'all'}>
                All Permissions
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onPermissionChange('read-only')} selected={permissionFilter === 'read-only'}>
                <span>Read-Only</span>
                <span className="ml-auto text-[10px] text-[#c9ff0f] font-mono">safe</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onPermissionChange('supervised')} selected={permissionFilter === 'supervised'}>
                <span>Supervised</span>
                <span className="ml-auto text-[10px] text-[#aaaef8] font-mono">--confirm</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onPermissionChange('autonomous')} selected={permissionFilter === 'autonomous'}>
                <span>Autonomous</span>
                <span className="ml-auto text-[10px] text-orange-400 font-mono">auto</span>
              </DropdownMenuItem>
            </>
          }
        />
      </div>

      {/* ── Box 3: Source + Sort ── */}
      <div className="filter-box col-3">

        {/* 5. Source (Official OpenAI vs Community) */}
        <HoverDropdown
          isActive={sourceFilter !== 'all'}
          contentClassName="w-48"
          triggerContent={
            <>
              <Globe2 className="f-btn-icon" size={12} />
              <span className="f-btn-text">{sourceLabel}</span>
              <ChevronDown className="f-chevron" size={11} />
            </>
          }
          content={
            <>
              <DropdownMenuItem onClick={() => onSourceChange('all')} selected={sourceFilter === 'all'}>
                All Sources
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onSourceChange('official')} selected={sourceFilter === 'official'}>
                <span>Official OpenAI</span>
                <span className="ml-auto text-[10px] text-[#c9ff0f] font-mono">✦</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSourceChange('community')} selected={sourceFilter === 'community'}>
                Community
              </DropdownMenuItem>
            </>
          }
        />

        {/* 6. Sort */}
        <HoverDropdown
          isActive={sortOrder !== 'default'}
          contentClassName="w-44"
          triggerContent={
            <>
              <ArrowUpDown className="f-btn-icon" size={12} />
              <span className="f-btn-text">{sortLabel}</span>
              <ChevronDown className="f-chevron" size={11} />
            </>
          }
          content={
            <>
              <DropdownMenuItem onClick={() => onSortChange('default')} selected={sortOrder === 'default'}>
                Default Order
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onSortChange('az')} selected={sortOrder === 'az'}>
                A → Z
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSortChange('za')} selected={sortOrder === 'za'}>
                Z → A
              </DropdownMenuItem>
            </>
          }
        />
      </div>

      {/* ── Box 4: MCP Category + Clear All ── */}
      <div className="filter-box col-4">

        {/* 7. MCP Sub-Category quick-filter */}
        <HoverDropdown
          isActive={false}
          contentClassName="w-52 max-h-72 overflow-y-auto"
          triggerContent={
            <>
              <Cable className="f-btn-icon" size={12} />
              <span className="f-btn-text">MCP Category</span>
              <ChevronDown className="f-chevron" size={11} />
            </>
          }
          content={
            <>
              <div className="px-2.5 py-1.5 text-[10px] text-[#6b6b6b] font-mono uppercase tracking-wider">
                Jump to category
              </div>
              <DropdownMenuSeparator />
              {MCP_CATEGORIES.map(cat => (
                <DropdownMenuItem
                  key={cat.label}
                  onClick={() => {
                    // Sets resource type to MCP Connectors (channelId 2) + domain search via keyword
                    onResourceTypeChange('2');
                  }}
                >
                  {cat.label}
                </DropdownMenuItem>
              ))}
            </>
          }
        />

        {/* 8. Clear All — always visible, active only when filters are set */}
        <button
          type="button"
          onClick={hasActiveFilters ? onClearAll : undefined}
          className={`f-reset-btn ${hasActiveFilters ? 'active' : ''}`}
          title={hasActiveFilters ? 'Clear all filters' : 'No active filters'}
          aria-label="Clear all filters"
        >
          <X size={12} />
          <span>Clear</span>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
