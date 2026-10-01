// Auto-generated from 0x-Shashi/awesome-dots repository
export interface Channel {
  i: number;
  name: string;
  label: string;
  coName: string;
  unlisted?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  company: string;
  channelId: number;
  topic: string;
  format: string;
  year: number;
  access: 'public' | 'unlisted';
  duration: 'short' | 'medium' | 'long';
  date: string;
  tags: string[];
  url: string;
}

export const CO: string[] = [
  "OpenAI",
  "Microsoft",
  "Google",
  "Anthropic",
  "GitHub",
  "Vercel",
  "Supabase",
  "Stripe",
  "AWS",
  "Community"
];

export const CH: Channel[] = [
  {
    "i": 1,
    "name": "Official Core",
    "label": "Core",
    "coName": "OpenAI"
  },
  {
    "i": 2,
    "name": "MCP Connectors",
    "label": "MCP",
    "coName": "Community"
  },
  {
    "i": 3,
    "name": "Skills Library",
    "label": "Skills",
    "coName": "OpenAI"
  },
  {
    "i": 4,
    "name": "Official Plugins",
    "label": "Plugins",
    "coName": "OpenAI"
  },
  {
    "i": 5,
    "name": "Multi-Agent & Tunnels",
    "label": "Agents",
    "coName": "Community"
  },
  {
    "i": 6,
    "name": "Developer Tools",
    "label": "DevTools",
    "coName": "GitHub"
  },
  {
    "i": 7,
    "name": "Cloud & Infrastructure",
    "label": "Cloud",
    "coName": "Vercel"
  },
  {
    "i": 8,
    "name": "Enterprise Safety",
    "label": "Safety",
    "coName": "Microsoft"
  },
  {
    "i": 9,
    "name": "Frontier Research",
    "label": "Research",
    "coName": "Anthropic"
  },
  {
    "i": 10,
    "name": "Data & Intelligence",
    "label": "Data",
    "coName": "Google"
  }
];

export const TOPIC_NAMES: string[] = [
  "Engineering & DevOps",
  "AI & Multi-Agent",
  "Systems & Architecture",
  "Productivity & Admin",
  "Data & Cloud",
  "Finance & Commerce",
  "Research & Intelligence",
  "Security & Safety"
];

export const FORMAT_NAMES: string[] = [
  "MCP Connector",
  "Dot Skill",
  "Official Plugin",
  "Architecture Blueprint",
  "Policy & Governance",
  "Tutorial & Guide",
  "Open Source Tool"
];

export const YEARS: number[] = [
  2026,
  2025,
  2024
];

export const HAS_UNKNOWN_YEAR = false;

export const PROJECTS: ProjectItem[] = [
  {
    "id": "openai-dots-launch",
    "title": "Introducing Dots",
    "description": "Official launch announcement covering cloud sandboxes, persistent memory, safety architecture, and platform tiers.",
    "company": "OpenAI",
    "channelId": 1,
    "topic": "Systems & Architecture",
    "format": "Architecture Blueprint",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-15",
    "tags": [
      "Official",
      "Launch",
      "Sandboxes",
      "Architecture"
    ],
    "url": "https://openai.com/index/introducing-dots/"
  },
  {
    "id": "openai-devday-2026",
    "title": "DevDay 2026 Platform Index",
    "description": "Index of DevDay 2026 keynote sessions, product launches, persistent agentic runtime, and partner demonstrations.",
    "company": "OpenAI",
    "channelId": 1,
    "topic": "Systems & Architecture",
    "format": "Architecture Blueprint",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-20",
    "tags": [
      "DevDay",
      "Keynote",
      "Agents",
      "Platform"
    ],
    "url": "https://openai.com/index/devday-2026-recap/"
  },
  {
    "id": "openai-agents-api",
    "title": "Agents API Specification",
    "description": "Technical specification for deploying persistent cloud agents powered by the open-source Codex harness.",
    "company": "OpenAI",
    "channelId": 1,
    "topic": "Engineering & DevOps",
    "format": "Architecture Blueprint",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-22",
    "tags": [
      "Agents API",
      "Codex",
      "Runtime",
      "Cloud"
    ],
    "url": "https://openai.com/index/introducing-the-agents-api/"
  },
  {
    "id": "gpt-6-1-sol",
    "title": "GPT-6.1 Sol Model Spec",
    "description": "Frontier reasoning model designed for autonomous agentic workflows and multi-step tool execution loops.",
    "company": "OpenAI",
    "channelId": 9,
    "topic": "AI & Multi-Agent",
    "format": "Architecture Blueprint",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-25",
    "tags": [
      "Reasoning",
      "Frontier",
      "Agentic",
      "Model"
    ],
    "url": "https://openai.com/index/introducing-gpt-6-1-sol/"
  },
  {
    "id": "learn-dots-docs",
    "title": "ChatGPT Learn: Dots Docs",
    "description": "Comprehensive product documentation covering getting started, channels, memory, tool approvals, and safety rules.",
    "company": "OpenAI",
    "channelId": 1,
    "topic": "Systems & Architecture",
    "format": "Tutorial & Guide",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-28",
    "tags": [
      "Documentation",
      "Memory",
      "Channels",
      "Rules"
    ],
    "url": "https://learn.chatgpt.com/docs/dots"
  },
  {
    "id": "dots-workspace-admin",
    "title": "Managing Dots in Workspaces",
    "description": "Enterprise administration guide for policy enforcement, local computer tunnels, and cloud browser isolation.",
    "company": "Microsoft",
    "channelId": 8,
    "topic": "Security & Safety",
    "format": "Policy & Governance",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-29",
    "tags": [
      "Enterprise",
      "Security",
      "Tunnels",
      "Policies"
    ],
    "url": "https://help.openai.com/en/articles/20001554-manage-dots-in-chatgpt-workspaces"
  },
  {
    "id": "starter-safety-policy",
    "title": "Baseline 5-Rule Safety Policy",
    "description": "Standardized operational constraints preventing autonomous outbound writes, unauthorized data exfiltration, and prompt injection.",
    "company": "OpenAI",
    "channelId": 8,
    "topic": "Security & Safety",
    "format": "Policy & Governance",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-30",
    "tags": [
      "Safety",
      "Governance",
      "Rules",
      "Security"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/starter-policy.md"
  },
  {
    "id": "plugin-introducing-dots",
    "title": "Introducing Dots Plugin",
    "description": "Official launch announcement covering capabilities, cloud sandboxes, safety architecture, and pricing tiers.",
    "company": "Community",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Introducing Dots",
      "Community"
    ],
    "url": "https://openai.com/index/introducing-dots/"
  },
  {
    "id": "plugin-devday-2026-recap",
    "title": "DevDay 2026 Recap Plugin",
    "description": "Complete index of DevDay 2026 product launches, keynote recordings, and platform features.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "DevDay 2026 Recap",
      "Community"
    ],
    "url": "https://openai.com/index/devday-2026-recap/"
  },
  {
    "id": "plugin-introducing-the-agents-api",
    "title": "Introducing the Agents API Plugin",
    "description": "Technical specification for deploying persistent cloud agents powered by the open-source Codex harness.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Introducing the Agents API",
      "Community"
    ],
    "url": "https://openai.com/index/introducing-the-agents-api/"
  },
  {
    "id": "plugin-introducing-gpt-6-1-sol",
    "title": "Introducing GPT-6.1 Sol Plugin",
    "description": "Frontier reasoning model designed for complex agentic workflows and multi-step tool execution.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Introducing GPT-6.1 Sol",
      "Community"
    ],
    "url": "https://openai.com/index/introducing-gpt-6-1-sol/"
  },
  {
    "id": "plugin-chatgpt-learn-dots-documentation",
    "title": "ChatGPT Learn: Dots Documentation Plugin",
    "description": "Comprehensive official product documentation covering getting started, channels, memory, and permissions.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "ChatGPT Learn: Dots Documentation",
      "OpenAI"
    ],
    "url": "https://learn.chatgpt.com/docs/dots"
  },
  {
    "id": "plugin-managing-dots-in-workspaces",
    "title": "Managing Dots in Workspaces Plugin",
    "description": "Enterprise administration guide for policy enforcement, local computer tunnels, and cloud browser isolation.",
    "company": "Community",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Managing Dots in Workspaces",
      "Community"
    ],
    "url": "https://help.openai.com/en/articles/20001554-manage-dots-in-chatgpt-workspaces"
  },
  {
    "id": "plugin-getting-started-with-your-dot",
    "title": "Getting Started With Your Dot Plugin",
    "description": "Official onboarding checklist for configuring initial tasks, app connections, and scheduled routines.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Getting Started With Your Dot",
      "Community"
    ],
    "url": "https://help.openai.com/en/articles/20001530-getting-started-with-your-dot"
  },
  {
    "id": "plugin-dots-privacy-security-and-safety-faq",
    "title": "Dots Privacy, Security, and Safety FAQ Plugin",
    "description": "Detailed breakdown of credential protection, automated safety scans, and prompt injection mitigations.",
    "company": "Community",
    "channelId": 4,
    "topic": "Security & Safety",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Dots Privacy, Security, and Safety FAQ",
      "Community"
    ],
    "url": "https://help.openai.com/en/articles/20001529-dots-privacy-security-and-safety-faqs"
  },
  {
    "id": "plugin-github",
    "title": "GitHub Plugin",
    "description": "Work with repositories, pull requests, issues, and continuous delivery workflows.",
    "company": "GitHub",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "GitHub",
      "GitHub"
    ],
    "url": "https://chatgpt.com/plugins/plugin_connector_1p_1a69035c238881919c4190932b2df699"
  },
  {
    "id": "plugin-supabase",
    "title": "Supabase Plugin",
    "description": "Manage and query relational databases with structured schemas.",
    "company": "Supabase",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Supabase",
      "Supabase"
    ],
    "url": "https://chatgpt.com/plugins/plugin_asdk_app_69d3e5ee6a708191baa733f7b8931995"
  },
  {
    "id": "plugin-exa",
    "title": "Exa Plugin",
    "description": "Neural web search designed specifically for autonomous AI agents.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Exa",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/plugin_asdk_app_69ea4ed2cf7c8191b742ef3622479ddd"
  },
  {
    "id": "plugin-firecrawl",
    "title": "Firecrawl Plugin",
    "description": "Search and extract clean markdown data from web pages.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Firecrawl",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/plugin_asdk_app_6a314a73f8ac819195b0d55e36b9c609"
  },
  {
    "id": "plugin-vercel",
    "title": "Vercel Plugin",
    "description": "Build, deploy, and inspect cloud web applications and agent endpoints.",
    "company": "Vercel",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Vercel",
      "Vercel"
    ],
    "url": "https://chatgpt.com/plugins/vercel"
  },
  {
    "id": "plugin-base44",
    "title": "Base44 Plugin",
    "description": "Build apps and responsive websites with conversational guidance.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Base44",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/base44"
  },
  {
    "id": "plugin-lovable",
    "title": "Lovable Plugin",
    "description": "Generate full-stack web applications from conversational prompts.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Lovable",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/lovable"
  },
  {
    "id": "plugin-replit",
    "title": "Replit Plugin",
    "description": "Turn software ideas into running code in cloud development sandboxes.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Replit",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/replit"
  },
  {
    "id": "plugin-remote-desktop-commander",
    "title": "Remote Desktop Commander Plugin",
    "description": "Automate tasks on authorized desktop workstations via secure client bridges.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Security & Safety",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Remote Desktop Commander",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/remote-desktop-commander"
  },
  {
    "id": "plugin-wix",
    "title": "Wix Plugin",
    "description": "Manage websites, pages, and online storefronts.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Wix",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/wix"
  },
  {
    "id": "plugin-gmail",
    "title": "Gmail Plugin",
    "description": "Read email threads, extract commitments, and prepare draft replies.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Gmail",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/plugin_connector_1p_95d39881713c8191931482a62d6edff9"
  },
  {
    "id": "plugin-google-drive",
    "title": "Google Drive Plugin",
    "description": "Work across Docs, Sheets, Slides, and cloud storage folders.",
    "company": "Google",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Google Drive",
      "Google"
    ],
    "url": "https://chatgpt.com/plugins/plugin_connector_1p_ab21a553bfbc81919ea8fd1858e3ffa7"
  },
  {
    "id": "plugin-google-calendar",
    "title": "Google Calendar Plugin",
    "description": "Inspect schedule commitments, resolve conflicts, and insert focus blocks.",
    "company": "Google",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Google Calendar",
      "Google"
    ],
    "url": "https://chatgpt.com/plugins/google-calendar"
  },
  {
    "id": "plugin-notion",
    "title": "Notion Plugin",
    "description": "Query workspace databases, retrieve pages, and draft documentation.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Notion",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/notion"
  },
  {
    "id": "plugin-slack",
    "title": "Slack Plugin",
    "description": "Pull team channel context, read history, and draft status updates.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Slack",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/slack"
  },
  {
    "id": "plugin-microsoft-teams",
    "title": "Microsoft Teams Plugin",
    "description": "Summarize organizational team discussions and follow up on action items.",
    "company": "Microsoft",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Microsoft Teams",
      "Microsoft"
    ],
    "url": "https://chatgpt.com/plugins/teams"
  },
  {
    "id": "plugin-outlook-email",
    "title": "Outlook Email Plugin",
    "description": "Triage corporate inboxes and organize correspondence.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Outlook Email",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/outlook-email"
  },
  {
    "id": "plugin-outlook-calendar",
    "title": "Outlook Calendar Plugin",
    "description": "Manage business calendars and schedule team meetings.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Outlook Calendar",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/outlook-calendar"
  },
  {
    "id": "plugin-dropbox",
    "title": "Dropbox Plugin",
    "description": "Search, organize, and access files in shared Dropbox storage.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Dropbox",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/dropbox"
  },
  {
    "id": "plugin-sharepoint",
    "title": "SharePoint Plugin",
    "description": "Summarize enterprise SharePoint documents and team sites.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "SharePoint",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/sharepoint"
  },
  {
    "id": "plugin-airtable",
    "title": "Airtable Plugin",
    "description": "Add and query structured relational records in Airtable bases.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Airtable",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/airtable"
  },
  {
    "id": "plugin-todoist",
    "title": "Todoist Plugin",
    "description": "Synchronize tasks, due dates, and personal reminders.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Todoist",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/plugin_asdk_app_6943b73823548191a9f9216c6790c453"
  },
  {
    "id": "plugin-ticktick",
    "title": "TickTick Plugin",
    "description": "Organize checklists, habit routines, and calendar schedules.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "TickTick",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/ticktick-to-do-list-and-calendar"
  },
  {
    "id": "plugin-trello",
    "title": "Trello Plugin",
    "description": "Move task cards, update project boards, and assign owners.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Trello",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/trello"
  },
  {
    "id": "plugin-asana",
    "title": "Asana Plugin",
    "description": "Convert chat decisions into structured project milestones and tasks.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Asana",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/asana"
  },
  {
    "id": "plugin-clickup",
    "title": "ClickUp Plugin",
    "description": "Track engineering sprints, docs, and company goals.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "ClickUp",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/clickup"
  },
  {
    "id": "plugin-linear",
    "title": "Linear Plugin",
    "description": "Manage software product cycles, bug tickets, and roadmaps.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Linear",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/linear"
  },
  {
    "id": "plugin-plaud",
    "title": "Plaud Plugin",
    "description": "Retrieve transcribed insights, summaries, and action items from voice recordings.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Plaud",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/plaud"
  },
  {
    "id": "plugin-adobe-photoshop",
    "title": "Adobe Photoshop Plugin",
    "description": "Inspect, combine, and process creative visual assets.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Adobe Photoshop",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/adobe-photoshop"
  },
  {
    "id": "plugin-canva",
    "title": "Canva Plugin",
    "description": "Create, review, and edit marketing presentations and graphics.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Research & Intelligence",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Canva",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/canva"
  },
  {
    "id": "plugin-figma",
    "title": "Figma Plugin",
    "description": "Inspect UI design components, extract tokens, and translate designs to code.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Figma",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/figma"
  },
  {
    "id": "plugin-product-design",
    "title": "Product Design Plugin",
    "description": "Prototype interactive interfaces and design specifications.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Product Design",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/product-design"
  },
  {
    "id": "plugin-creative-production",
    "title": "Creative Production Plugin",
    "description": "Generate marketing visuals and campaign creative from product briefs.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Research & Intelligence",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Creative Production",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/creative-production"
  },
  {
    "id": "plugin-higgsfield",
    "title": "Higgsfield Plugin",
    "description": "Interface with visual generation and motion synthesis models.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Higgsfield",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/plugin_asdk_app_6a3293e129088191abf0875820e839da"
  },
  {
    "id": "plugin-runway",
    "title": "Runway Plugin",
    "description": "Generate video assets and cinematic motion sequences.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Runway",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/plugin_asdk_app_6a05e3b201788191be12b590b43e6ce3"
  },
  {
    "id": "plugin-shopify",
    "title": "Shopify Plugin",
    "description": "Manage e-commerce product catalogs, orders, and customer listings.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Shopify",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/shopify"
  },
  {
    "id": "plugin-hubspot",
    "title": "HubSpot Plugin",
    "description": "Query CRM contact records, deal stages, and customer engagement history.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "HubSpot",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/hubspot"
  },
  {
    "id": "plugin-apollo-io",
    "title": "Apollo.io Plugin",
    "description": "Enrich prospect accounts, identify key buyers, and draft outbound campaigns.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Apollo.io",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/apollo"
  },
  {
    "id": "plugin-vidiq",
    "title": "vidIQ Plugin",
    "description": "Analyze YouTube channel performance, keyword opportunities, and video tags.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "vidIQ",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/vidiq"
  },
  {
    "id": "plugin-indeed",
    "title": "Indeed Plugin",
    "description": "Search job postings and analyze talent market trends.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Indeed",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/indeed"
  },
  {
    "id": "plugin-data",
    "title": "Data Plugin",
    "description": "Query datasets and execute statistical Python analysis in the sandbox.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Data",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/Plugin_fc9843a6fb34819195d6c7802398a8a7"
  },
  {
    "id": "plugin-consensus",
    "title": "Consensus Plugin",
    "description": "Search peer-reviewed scientific literature and extract findings.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Consensus",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/consensus"
  },
  {
    "id": "plugin-zotero",
    "title": "Zotero Plugin",
    "description": "Manage research libraries, retrieve PDF notes, and format citations.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Zotero",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/zotero"
  },
  {
    "id": "plugin-scispace",
    "title": "SciSpace Plugin",
    "description": "Summarize academic research papers and compare experimental methodologies.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "SciSpace",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/scispace"
  },
  {
    "id": "plugin-public-equity-investing",
    "title": "Public Equity Investing Plugin",
    "description": "Review public market disclosures, quarterly earnings, and equity filings.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Research & Intelligence",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Public Equity Investing",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/public-equity-investing"
  },
  {
    "id": "plugin-interactive-brokers",
    "title": "Interactive Brokers Plugin",
    "description": "Review market indices, watchlist movements, and portfolio status.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Research & Intelligence",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Interactive Brokers",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/interactive-brokers-ibkr"
  },
  {
    "id": "plugin-binance",
    "title": "Binance Plugin",
    "description": "Query public market prices, volume trends, and trading pairs.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Research & Intelligence",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Binance",
      "OpenAI"
    ],
    "url": "https://chatgpt.com/plugins/binance"
  },
  {
    "id": "plugin-build-ios-apps",
    "title": "Build iOS Apps Plugin",
    "description": "Source implementation for building, testing, and debugging SwiftUI iOS applications with App Intents.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Build iOS Apps",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/build-ios-apps"
  },
  {
    "id": "plugin-build-macos-apps",
    "title": "Build macOS Apps Plugin",
    "description": "Guidance and tool harnesses for AppKit and SwiftUI macOS desktop apps.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Build macOS Apps",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/build-macos-apps"
  },
  {
    "id": "plugin-build-web-apps",
    "title": "Build Web Apps Plugin",
    "description": "Full-stack web app development with frontend generation, database integration, and browser testing.",
    "company": "Community",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Build Web Apps",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/build-web-apps"
  },
  {
    "id": "plugin-build-web-data-visualization",
    "title": "Build Web Data Visualization Plugin",
    "description": "Interactive chart and visualization generation with D3 and web standards.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Build Web Data Visualization",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/build-web-data-visualization"
  },
  {
    "id": "plugin-circleci",
    "title": "CircleCI Plugin",
    "description": "CI/CD pipeline triggers and build artifact inspection.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "CircleCI",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/circleci"
  },
  {
    "id": "plugin-cloudflare",
    "title": "Cloudflare Plugin",
    "description": "Cloudflare Workers deployment and DNS management via official MCP server.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Cloudflare",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/cloudflare"
  },
  {
    "id": "plugin-coderabbit",
    "title": "CodeRabbit Plugin",
    "description": "Automated AI pull request code reviews and regression checks.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "CodeRabbit",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/coderabbit"
  },
  {
    "id": "plugin-datadog",
    "title": "Datadog Plugin",
    "description": "Observability data queries, APM metrics, and alert incident triage.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Datadog",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/datadog"
  },
  {
    "id": "plugin-expo",
    "title": "Expo Plugin",
    "description": "React Native and Expo mobile app development and device builds.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Expo",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/expo"
  },
  {
    "id": "plugin-game-studio",
    "title": "Game Studio Plugin",
    "description": "Browser game prototyping and canvas asset generation.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Game Studio",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/game-studio"
  },
  {
    "id": "plugin-magicpath",
    "title": "MagicPath Plugin",
    "description": "UI component discovery and authoring tools.",
    "company": "Community",
    "channelId": 4,
    "topic": "Security & Safety",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "MagicPath",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/magicpath"
  },
  {
    "id": "plugin-nvidia",
    "title": "NVIDIA Plugin",
    "description": "GPU computing guidance, robotics simulation, and Omniverse workflows.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "NVIDIA",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/nvidia"
  },
  {
    "id": "plugin-openai-developers",
    "title": "OpenAI Developers Plugin",
    "description": "Reference implementation for developing native ChatGPT Apps and agent tools.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "OpenAI Developers",
      "OpenAI"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/openai-developers"
  },
  {
    "id": "plugin-plugin-eval",
    "title": "Plugin Eval Plugin",
    "description": "Local testing and benchmarking framework for evaluating plugin performance.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Plugin Eval",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/plugin-eval"
  },
  {
    "id": "plugin-sentry",
    "title": "Sentry Plugin",
    "description": "Official error tracking and stack trace investigation integration.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Sentry",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/sentry"
  },
  {
    "id": "plugin-superpowers",
    "title": "Superpowers Plugin",
    "description": "Structured coding workflow orchestrator for complex software projects.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Superpowers",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/superpowers"
  },
  {
    "id": "plugin-temporal",
    "title": "Temporal Plugin",
    "description": "Resilient workflow orchestration and durable execution patterns.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Temporal",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/temporal"
  },
  {
    "id": "plugin-test-android-apps",
    "title": "Test Android Apps Plugin",
    "description": "Automated UI testing and log capture across Android emulators.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Test Android Apps",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/test-android-apps"
  },
  {
    "id": "plugin-twilio-developer-kit",
    "title": "Twilio Developer Kit Plugin",
    "description": "Communication APIs for SMS dispatch, phone verification, and voice calling.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Twilio Developer Kit",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/twilio-developer-kit"
  },
  {
    "id": "plugin-teams",
    "title": "Teams Plugin",
    "description": "Microsoft Teams bot bridge for organizational collaboration.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Teams",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/teams"
  },
  {
    "id": "plugin-zoom",
    "title": "Zoom Plugin",
    "description": "Meeting transcript ingestion and recording summary generation.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Zoom",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/zoom"
  },
  {
    "id": "plugin-adobe",
    "title": "Adobe Plugin",
    "description": "Creative Cloud integration for asset manipulation.",
    "company": "Community",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Adobe",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/adobe"
  },
  {
    "id": "plugin-chatcut",
    "title": "ChatCut Plugin",
    "description": "Conversational video editing and clip assembly.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "ChatCut",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/chatcut"
  },
  {
    "id": "plugin-hyperframes-by-heygen",
    "title": "HyperFrames by HeyGen Plugin",
    "description": "HTML-based video composition and rendering.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "HyperFrames by HeyGen",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/hyperframes"
  },
  {
    "id": "plugin-remotion",
    "title": "Remotion Plugin",
    "description": "Programmatic React-based video generation for agents.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Remotion",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/remotion"
  },
  {
    "id": "plugin-atlassian-rovo",
    "title": "Atlassian Rovo Plugin",
    "description": "Enterprise search across Jira issues and Confluence knowledge spaces.",
    "company": "Community",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Atlassian Rovo",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/atlassian-rovo"
  },
  {
    "id": "plugin-granola",
    "title": "Granola Plugin",
    "description": "Meeting note synchronization and context retrieval.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Granola",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/granola"
  },
  {
    "id": "plugin-monday-com",
    "title": "monday.com Plugin",
    "description": "Work operating system and CRM board management.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "monday.com",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/monday-com"
  },
  {
    "id": "plugin-stripe",
    "title": "Stripe Plugin",
    "description": "Revenue workflow automation, payment audits, and invoice tracking.",
    "company": "Stripe",
    "channelId": 4,
    "topic": "Finance & Commerce",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Stripe",
      "Stripe"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/stripe"
  },
  {
    "id": "plugin-codex-security",
    "title": "Codex Security Plugin",
    "description": "Static security analysis, dependency vulnerability scans, and secret leakage detection.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Codex Security",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/codex-security"
  },
  {
    "id": "plugin-boltz",
    "title": "Boltz Plugin",
    "description": "Molecular structure prediction, protein binder screening, and computational chemistry.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Boltz",
      "Community"
    ],
    "url": "https://github.com/openai/plugins/tree/main/plugins/boltz-api-cli"
  },
  {
    "id": "plugin-how-to-create-your-first-dot",
    "title": "How to Create Your First Dot Plugin",
    "description": "Step-by-step setup walkthrough explaining the distinction between one-off requests and continuous responsibilities.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "How to Create Your First Dot",
      "Community"
    ],
    "url": "https://dotsguide.com/get-started"
  },
  {
    "id": "plugin-a-deep-dive-into-openai-dots",
    "title": "A Deep Dive Into OpenAI Dots Plugin",
    "description": "Practical guide demonstrating how to safely connect communication feeds and structure ongoing tasks.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "A Deep Dive Into OpenAI Dots",
      "OpenAI"
    ],
    "url": "https://flaviocopes.com/openai-dots/"
  },
  {
    "id": "plugin-chatgpt-dot-setup-and-practice-guide",
    "title": "ChatGPT Dot Setup and Practice Guide Plugin",
    "description": "Guide on starting with bounded single-run briefs before promoting to recurring background execution.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "ChatGPT Dot Setup and Practice Guide",
      "Community"
    ],
    "url": "https://app.therundown.ai/guides/how-to-use-chatgpt-dot"
  },
  {
    "id": "plugin-continuous-bug-triage-and-reproduction",
    "title": "Continuous Bug Triage and Reproduction Plugin",
    "description": "Production workflow that ingests customer feedback, traces code paths, and drafts reproduction scripts.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Continuous Bug Triage and Reproduction",
      "OpenAI"
    ],
    "url": "https://learn.chatgpt.com/docs/dots#work-with-your-dot"
  },
  {
    "id": "plugin-single-interview-to-multi-format-assets",
    "title": "Single Interview to Multi-Format Assets Plugin",
    "description": "Case study repurposing an hour-long recorded interview into release articles, slide outlines, and social copy.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Single Interview to Multi-Format Assets",
      "OpenAI"
    ],
    "url": "https://learn.chatgpt.com/docs/dots#work-with-your-dot"
  },
  {
    "id": "plugin-dynamic-sales-proposal-updates",
    "title": "Dynamic Sales Proposal Updates Plugin",
    "description": "Workflow that synchronizes client requirement changes with proposal documents and flags unreviewed scope adjustments.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Dynamic Sales Proposal Updates",
      "OpenAI"
    ],
    "url": "https://learn.chatgpt.com/docs/dots#work-with-your-dot"
  },
  {
    "id": "plugin-continuous-competitor-intelligence-watch",
    "title": "Continuous Competitor Intelligence Watch Plugin",
    "description": "Read-only research routine that monitors competitor releases and delivers morning briefings with source citations.",
    "company": "Community",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Continuous Competitor Intelligence Watch",
      "Community"
    ],
    "url": "https://frankchiu.io/ai-chatgpt-dots/"
  },
  {
    "id": "plugin-insurhot-insurance-intelligence",
    "title": "InsurHOT Insurance Intelligence Plugin",
    "description": "Specialized Dot deployment collecting public insurance disclosures and formatting findings into relational databases.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "InsurHOT Insurance Intelligence",
      "Community"
    ],
    "url": "https://github.com/alongor666/InsurHOT"
  },
  {
    "id": "plugin-dot-os-multi-agent-cluster",
    "title": "Dot OS Multi-Agent Cluster Plugin",
    "description": "Architecture utilizing eight specialized Dot nodes running in parallel with automated state reconciliation.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Dot OS Multi-Agent Cluster",
      "Community"
    ],
    "url": "https://github.com/evan-till/dot-os"
  },
  {
    "id": "plugin-enterprise-workspace-controls",
    "title": "Enterprise Workspace Controls Plugin",
    "description": "Guide for IT administrators to manage desktop tunnel access, disable web browsing, and mandate human sign-off.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Enterprise Workspace Controls",
      "Community"
    ],
    "url": "https://help.openai.com/en/articles/20001554-manage-dots-in-chatgpt-workspaces"
  },
  {
    "id": "plugin-multi-dot-department-deployment",
    "title": "Multi-Dot Department Deployment Plugin",
    "description": "Organizational planning guide covering plan allocations, usage thresholds, and role separation across teams.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Multi-Dot Department Deployment",
      "Community"
    ],
    "url": "https://dotsguide.com/pricing"
  },
  {
    "id": "plugin-dotlink",
    "title": "dotlink Plugin",
    "description": "Local machine bridge allowing an OpenAI Dot to read local files, trigger Git operations, and run test suites via MCP tunnels.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "dotlink",
      "Community"
    ],
    "url": "https://github.com/abird-ai/dotlink"
  },
  {
    "id": "plugin-codex-docs-mirror",
    "title": "codex-docs Mirror Plugin",
    "description": "Git-tracked documentation mirror following official platform changes and API revisions.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "codex-docs Mirror",
      "Community"
    ],
    "url": "https://github.com/chenrui333/codex-docs"
  },
  {
    "id": "plugin-codex-docs-skill",
    "title": "Codex Docs Skill Plugin",
    "description": "Agent context retrieval skill enabling Dots to query up-to-date platform documentation.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Codex Docs Skill",
      "Community"
    ],
    "url": "https://github.com/mehmetbaykar/codex-docs-skill"
  },
  {
    "id": "plugin-openai-plugins-repository",
    "title": "OpenAI Plugins Repository Plugin",
    "description": "Official repository for building and testing ChatGPT plugins that extend Dot capabilities.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "OpenAI Plugins Repository",
      "OpenAI"
    ],
    "url": "https://github.com/openai/plugins"
  },
  {
    "id": "plugin-mcp-extensions-framework",
    "title": "MCP Extensions Framework Plugin",
    "description": "Official foundation repository for building native Model Context Protocol extensions.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "MCP Extensions Framework",
      "Community"
    ],
    "url": "https://github.com/openai/mcp-extensions"
  },
  {
    "id": "plugin-dot-panel",
    "title": "Dot Panel Plugin",
    "description": "Touch-friendly companion dashboard pushing approval decisions and status summaries to a secondary display.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Dot Panel",
      "Community"
    ],
    "url": "https://github.com/graydeon/dot-panel"
  },
  {
    "id": "plugin-dots-mcp",
    "title": "dots-mcp Plugin",
    "description": "Model Context Protocol server enabling Claude, Cursor, and other IDEs to query curated Dots resources.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "dots-mcp",
      "Community"
    ],
    "url": "https://github.com/mergisi/dots-mcp"
  },
  {
    "id": "plugin-openai-tunnel-client",
    "title": "OpenAI Tunnel Client Plugin",
    "description": "Secure client library used by bridge applications to safely expose local compute resources to cloud agents.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "OpenAI Tunnel Client",
      "OpenAI"
    ],
    "url": "https://github.com/openai/tunnel-client"
  },
  {
    "id": "plugin-kotodama-project",
    "title": "Kotodama Project Plugin",
    "description": "Desktop-bridged Discord bot connecting server channels to a personal Dot with approval checkpoints.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Kotodama Project",
      "Community"
    ],
    "url": "https://github.com/Kotodama-Project/Kotodama-project"
  },
  {
    "id": "plugin-superdotats-whatsapp-gateway",
    "title": "superDOTats WhatsApp Gateway Plugin",
    "description": "Bridge integrating WhatsApp messaging with autonomous Dot workflows.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "superDOTats WhatsApp Gateway",
      "Community"
    ],
    "url": "https://github.com/carlesrabadagarces-hub/dots-catala"
  },
  {
    "id": "plugin-omarchy-dot-plugin",
    "title": "Omarchy Dot Plugin Plugin",
    "description": "Dedicated browser frame providing direct access to the live Dot interface using existing credentials.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Omarchy Dot Plugin",
      "Community"
    ],
    "url": "https://github.com/tcballard/omarchy-plugin-openai-dot"
  },
  {
    "id": "plugin-developer-plugins-guide",
    "title": "Developer Plugins Guide Plugin",
    "description": "Official documentation on building, testing, and distributing extensions for ChatGPT and Dots.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Developer Plugins Guide",
      "Community"
    ],
    "url": "https://developers.openai.com/plugins"
  },
  {
    "id": "plugin-mcp-events-specification",
    "title": "MCP Events Specification Plugin",
    "description": "Event architecture allowing connected tools to trigger background agent tasks when external state changes.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "MCP Events Specification",
      "Community"
    ],
    "url": "https://developers.openai.com/plugins/build/mcp-events"
  },
  {
    "id": "plugin-agent-handoff-bridge",
    "title": "agent-handoff-bridge Plugin",
    "description": "Self-hosted MCP queue enabling supervised handoffs between Codex, an OpenAI Dot, and external agent instances.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "agent-handoff-bridge",
      "Community"
    ],
    "url": "https://github.com/1ststepai/agent-handoff-bridge"
  },
  {
    "id": "plugin-agent-tincan",
    "title": "Agent Tincan Plugin",
    "description": "Multi-agent adapter allowing Dots to receive and dispatch tasks within larger agent teams under human supervision.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Agent Tincan",
      "Community"
    ],
    "url": "https://github.com/mvanhorn/agent-tincan"
  },
  {
    "id": "plugin-msg-lmm-best",
    "title": "msg.lmm.best Plugin",
    "description": "Open communication channel built for continuous agent collaboration with human team members.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "msg.lmm.best",
      "Community"
    ],
    "url": "https://github.com/TokenNotIncluded/msg.lmm.best"
  },
  {
    "id": "plugin-agentforeach",
    "title": "AgentForEach Plugin",
    "description": "Backend framework for building agent collectives with shared memory, cron scheduling, and approval pipelines.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "AgentForEach",
      "Community"
    ],
    "url": "https://github.com/AgentForEach/AgentForEach"
  },
  {
    "id": "plugin-opendots",
    "title": "opendots Plugin",
    "description": "Open-source, model-agnostic, always-on personal agent designed for self-hosted cloud environments.",
    "company": "Community",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "opendots",
      "Community"
    ],
    "url": "https://github.com/diggerhq/opendots"
  },
  {
    "id": "plugin-opendot",
    "title": "opendot Plugin",
    "description": "Self-hosted assistant running Codex or Claude Code within locked-down execution containers.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "opendot",
      "Community"
    ],
    "url": "https://github.com/defog-ai/opendot"
  },
  {
    "id": "plugin-openbot",
    "title": "OpenBot Plugin",
    "description": "Local alternative leveraging existing model subscriptions to deliver continuous personal assistant capabilities.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "OpenBot",
      "Community"
    ],
    "url": "https://github.com/PrisacariuRobert/openbot"
  },
  {
    "id": "plugin-open-dot-via-composio",
    "title": "Open Dot via Composio Plugin",
    "description": "Agent framework pairing OpenAI reasoning with Composio application connectors.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Open Dot via Composio",
      "Community"
    ],
    "url": "https://github.com/composio-community/open-dot"
  },
  {
    "id": "plugin-dots-runtime",
    "title": "dots runtime Plugin",
    "description": "Architecture separating agent operations into planning, execution, and supervision roles.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "dots runtime",
      "Community"
    ],
    "url": "https://github.com/dots-oai/dots"
  },
  {
    "id": "plugin-mobile-seamless-opendots",
    "title": "mobile-seamless-opendots Plugin",
    "description": "Mobile-friendly self-hosted workspace for chat, tool invocation, and approval workflows.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "mobile-seamless-opendots",
      "Community"
    ],
    "url": "https://github.com/danvoulez/mobile-seamless-opendots"
  },
  {
    "id": "plugin-zeruel",
    "title": "zeruel Plugin",
    "description": "Experimental framework exploring personal agent workflows and continuous execution loops.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "zeruel",
      "Community"
    ],
    "url": "https://github.com/zero-phoenix/zeruel"
  },
  {
    "id": "plugin-openai-dots-always-on-agents-explained",
    "title": "OpenAI Dots: Always-On Agents Explained Plugin",
    "description": "Comprehensive architectural overview of virtual browsers, memory mechanics, and safety boundaries.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "OpenAI Dots: Always-On Agents Explained",
      "OpenAI"
    ],
    "url": "https://www.datacamp.com/blog/openai-dots"
  },
  {
    "id": "plugin-email-and-openai-dots-guide",
    "title": "Email and OpenAI Dots Guide Plugin",
    "description": "Guide to configuring safe email triaging without autonomous outbound sending.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Email and OpenAI Dots Guide",
      "OpenAI"
    ],
    "url": "https://www.dragapp.com/blog/openai-dots/"
  },
  {
    "id": "plugin-chatgpt-dots-delegation-guide",
    "title": "ChatGPT Dots Delegation Guide Plugin",
    "description": "Practical guide demonstrating how to delegate research tasks while maintaining factual boundaries.",
    "company": "Community",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "ChatGPT Dots Delegation Guide",
      "Community"
    ],
    "url": "https://frankchiu.io/ai-chatgpt-dots/"
  },
  {
    "id": "plugin-configuring-chatgpt-dots",
    "title": "Configuring ChatGPT Dots Plugin",
    "description": "Walkthrough covering initial account setup, permissions, and oversight modes.",
    "company": "Community",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Configuring ChatGPT Dots",
      "Community"
    ],
    "url": "https://aimatters.co.kr/ai-tool/53699/"
  },
  {
    "id": "plugin-persistent-agent-architecture-study",
    "title": "Persistent Agent Architecture Study Plugin",
    "description": "Technical study analyzing persistent agent execution paradigms and state isolation.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Persistent Agent Architecture Study",
      "Community"
    ],
    "url": "https://github.com/beamnxw"
  },
  {
    "id": "plugin-dots-animation-motion-study",
    "title": "Dots Animation Motion Study Plugin",
    "description": "Visual animation project illustrating persistent agent operational cycles.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Dots Animation Motion Study",
      "Community"
    ],
    "url": "https://github.com/QuarkOS"
  },
  {
    "id": "plugin-techcrunch-openai-launches-dots",
    "title": "TechCrunch: OpenAI Launches Dots Plugin",
    "description": "Launch coverage evaluating the user interface, agentic behavior, and industry positioning.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "TechCrunch: OpenAI Launches Dots",
      "OpenAI"
    ],
    "url": "https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/"
  },
  {
    "id": "plugin-the-new-stack-why-dots-matter-for-developers",
    "title": "The New Stack: Why Dots Matter for Developers Plugin",
    "description": "Deep dive into developer implications, extension APIs, and the Codex execution harness.",
    "company": "Community",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "The New Stack: Why Dots Matter for Developers",
      "Community"
    ],
    "url": "https://thenewstack.io/openai-dots-gpt6-agents/"
  },
  {
    "id": "plugin-every-vibe-check-on-openai-devday-2026",
    "title": "Every: Vibe Check on OpenAI DevDay 2026 Plugin",
    "description": "Hands-on evaluation of launch builds, highlighting permission friction and browser sandbox behavior.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Every: Vibe Check on OpenAI DevDay 2026",
      "OpenAI"
    ],
    "url": "https://every.to/vibe-check/vibe-check-openai-devday-2026"
  },
  {
    "id": "plugin-the-decoder-openai-launches-always-on-dots",
    "title": "The Decoder: OpenAI Launches Always-On Dots Plugin",
    "description": "Industry analysis evaluating OpenAI always-on agents against rival persistent platforms.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Engineering & DevOps",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "The Decoder: OpenAI Launches Always-On Dots",
      "OpenAI"
    ],
    "url": "https://the-decoder.com/openai-launches-always-on-dots-agents/"
  },
  {
    "id": "plugin-engadget-dots-are-openai-new-personal-agents",
    "title": "Engadget: Dots Are OpenAI New Personal Agents Plugin",
    "description": "Overview of voice calling, mobile access, and multi-dot roadmap capabilities.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Engadget: Dots Are OpenAI New Personal Agents",
      "OpenAI"
    ],
    "url": "https://www.engadget.com/2272230/dots-are-openais-new-personal-agents-and-soon-youll-be-able-to-control-several-of-them/"
  },
  {
    "id": "plugin-axios-meet-openai-dots",
    "title": "Axios: Meet OpenAI Dots Plugin",
    "description": "Business analysis examining the enterprise shift toward autonomous agents.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Axios: Meet OpenAI Dots",
      "OpenAI"
    ],
    "url": "https://www.axios.com/2026/09/29/openai-dots-ai-assistant-devday"
  },
  {
    "id": "plugin-bloomberg-openai-unveils-always-on-ai-agent-dots",
    "title": "Bloomberg: OpenAI Unveils Always-On AI Agent Dots Plugin",
    "description": "Financial analysis of infrastructure costs and enterprise pricing tiers.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Bloomberg: OpenAI Unveils Always-On AI Agent Dots",
      "OpenAI"
    ],
    "url": "https://www.bloomberg.com/news/articles/2026-09-29/openai-unveils-always-on-ai-agent-dots-new-500-paid-tier"
  },
  {
    "id": "plugin-hacker-news-launch-discussion",
    "title": "Hacker News Launch Discussion Plugin",
    "description": "Community discussion evaluating security boundaries, cloud sandboxes, and developer tools.",
    "company": "Community",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Hacker News Launch Discussion",
      "Community"
    ],
    "url": "https://news.ycombinator.com/item?id=49896604"
  },
  {
    "id": "plugin-repetitive-approval-prompts",
    "title": "Repetitive Approval Prompts Plugin",
    "description": "Permission prompts can occasionally loop or re-request sign-off when session cookies expire in the cloud sandbox.",
    "company": "Community",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Repetitive Approval Prompts",
      "Community"
    ],
    "url": "https://every.to/vibe-check/vibe-check-openai-devday-2026"
  },
  {
    "id": "plugin-isolated-browser-authentication",
    "title": "Isolated Browser Authentication Plugin",
    "description": "The Dot cloud browser operates in a distinct container and does not inherit desktop browser cookies.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Data & Cloud",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Isolated Browser Authentication",
      "OpenAI"
    ],
    "url": "https://learn.chatgpt.com/docs/dots/computers-and-apps"
  },
  {
    "id": "plugin-manual-slack-monitoring-confirmation",
    "title": "Manual Slack Monitoring Confirmation Plugin",
    "description": "Inviting a Dot to a Slack channel requires an explicit monitoring confirmation before it begins scanning messages.",
    "company": "OpenAI",
    "channelId": 4,
    "topic": "Productivity & Admin",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Manual Slack Monitoring Confirmation",
      "OpenAI"
    ],
    "url": "https://learn.chatgpt.com/docs/dots/channels"
  },
  {
    "id": "plugin-memory-reset-mechanics",
    "title": "Memory Reset Mechanics Plugin",
    "description": "Individual memories cannot be pruned selectively; clearing learned context requires a full agent memory reset.",
    "company": "Community",
    "channelId": 4,
    "topic": "AI & Multi-Agent",
    "format": "Official Plugin",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-18",
    "tags": [
      "Plugin",
      "Memory Reset Mechanics",
      "Community"
    ],
    "url": "https://help.openai.com/en/articles/20001529-dots-privacy-security-and-safety-faqs"
  },
  {
    "id": "dotlink",
    "title": "dotlink",
    "description": "Connects local workspace to OpenAI Dot via secure MCP tunnel to inspect code, run tests, and manage Git repositories.",
    "company": "OpenAI",
    "channelId": 6,
    "topic": "Engineering & DevOps",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Software Engineering",
      "coding-shipping",
      "read-write"
    ],
    "url": "https://github.com/abird-ai/dotlink"
  },
  {
    "id": "codex-docs",
    "title": "codex-docs Mirror",
    "description": "Git-tracked documentation mirror tracking official changes across OpenAI Dots and Codex platform docs.",
    "company": "OpenAI",
    "channelId": 6,
    "topic": "Engineering & DevOps",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Documentation",
      "coding-shipping",
      "read-only"
    ],
    "url": "https://github.com/chenrui333/codex-docs"
  },
  {
    "id": "email-triage-guide",
    "title": "Email Triage Strategy",
    "description": "Safe operational pattern for reading and drafting incoming emails without granting autonomous outbound sending.",
    "company": "Community",
    "channelId": 6,
    "topic": "Productivity & Admin",
    "format": "Tutorial & Guide",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Personal and Executive Admin",
      "inbox-calendar",
      "read-only"
    ],
    "url": "https://www.dragapp.com/blog/openai-dots/"
  },
  {
    "id": "competitor-changelog-tracker",
    "title": "Competitor Changelog Tracker",
    "description": "Continuous crawler monitoring competitor release notes, documentation, and pricing pages while separating facts from conjecture.",
    "company": "Community",
    "channelId": 6,
    "topic": "Research & Intelligence",
    "format": "Tutorial & Guide",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Market Intelligence",
      "research-briefings",
      "read-only"
    ],
    "url": "https://frankchiu.io/ai-chatgpt-dots/"
  },
  {
    "id": "sales-proposal-sync",
    "title": "Dynamic Sales Proposal Synchronizer",
    "description": "Maintains alignment between client requirements and proposal slide decks, alerting account leads of discrepancies.",
    "company": "Community",
    "channelId": 6,
    "topic": "Productivity & Admin",
    "format": "Architecture Blueprint",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Sales and Account Management",
      "customer-sales",
      "read-write"
    ],
    "url": "https://learn.chatgpt.com/docs/dots#work-with-your-dot"
  },
  {
    "id": "subscription-auditor",
    "title": "Recurring Subscription Auditor",
    "description": "Audits recurring software subscriptions and cloud service bills to identify unused seats and renewal deadlines.",
    "company": "Community",
    "channelId": 6,
    "topic": "Finance & Commerce",
    "format": "Architecture Blueprint",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Finance and Operations",
      "finance-ops",
      "read-only"
    ],
    "url": "https://help.openai.com/en/articles/20001530-getting-started-with-your-dot"
  },
  {
    "id": "content-repurposer",
    "title": "Multi-Format Content Repurposer",
    "description": "Transforms raw interview transcripts into structured articles, social posts, and presentation decks.",
    "company": "Community",
    "channelId": 6,
    "topic": "Productivity & Admin",
    "format": "Architecture Blueprint",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Content and Marketing",
      "content-publishing",
      "read-write"
    ],
    "url": "https://learn.chatgpt.com/docs/dots#work-with-your-dot"
  },
  {
    "id": "morning-briefing",
    "title": "Executive Morning Standup Briefing",
    "description": "Generates a consolidated briefing covering daily calendar commitments, urgent emails, and pending task approvals.",
    "company": "Community",
    "channelId": 6,
    "topic": "Productivity & Admin",
    "format": "Tutorial & Guide",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Personal Productivity",
      "personal-admin",
      "read-only"
    ],
    "url": "https://dotsguide.com/get-started"
  },
  {
    "id": "agent-handoff-bridge",
    "title": "agent-handoff-bridge",
    "description": "Self-hosted MCP queue enabling supervised handoffs between Codex, an OpenAI Dot, and external bot instances.",
    "company": "OpenAI",
    "channelId": 5,
    "topic": "AI & Multi-Agent",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Multi-Agent Coordination",
      "teams-handoffs",
      "read-write"
    ],
    "url": "https://github.com/1ststepai/agent-handoff-bridge"
  },
  {
    "id": "dot-os",
    "title": "Dot OS",
    "description": "Demonstrates eight specialized Dot nodes operating in parallel with automated conflict resolution.",
    "company": "Community",
    "channelId": 5,
    "topic": "AI & Multi-Agent",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Multi-Agent Coordination",
      "teams-handoffs",
      "read-write"
    ],
    "url": "https://github.com/evan-till/dot-os"
  },
  {
    "id": "chatgpt-plugin-github",
    "title": "GitHub ChatGPT Plugin",
    "description": "Official ChatGPT store plugin to work with repositories, pull requests, issues, and code workflows.",
    "company": "GitHub",
    "channelId": 6,
    "topic": "Engineering & DevOps",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Software Engineering",
      "coding-shipping",
      "read-write"
    ],
    "url": "https://chatgpt.com/plugins/plugin_connector_1p_1a69035c238881919c4190932b2df699"
  },
  {
    "id": "chatgpt-plugin-supabase",
    "title": "Supabase ChatGPT Plugin",
    "description": "Official ChatGPT store plugin to query and manage relational PostgreSQL database instances.",
    "company": "Community",
    "channelId": 6,
    "topic": "Engineering & DevOps",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Database Management",
      "coding-shipping",
      "read-write"
    ],
    "url": "https://chatgpt.com/plugins/plugin_asdk_app_69d3e5ee6a708191baa733f7b8931995"
  },
  {
    "id": "chatgpt-plugin-exa",
    "title": "Exa Neural Search Plugin",
    "description": "Official neural web search plugin purpose-built for autonomous AI agents.",
    "company": "Community",
    "channelId": 6,
    "topic": "Research & Intelligence",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Web Intelligence",
      "research-briefings",
      "read-only"
    ],
    "url": "https://chatgpt.com/plugins/plugin_asdk_app_69ea4ed2cf7c8191b742ef3622479ddd"
  },
  {
    "id": "chatgpt-plugin-firecrawl",
    "title": "Firecrawl Web Extraction Plugin",
    "description": "Official web crawler plugin converting dynamic web pages into clean LLM-ready markdown.",
    "company": "Community",
    "channelId": 6,
    "topic": "Research & Intelligence",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Data Extraction",
      "research-briefings",
      "read-only"
    ],
    "url": "https://chatgpt.com/plugins/plugin_asdk_app_6a314a73f8ac819195b0d55e36b9c609"
  },
  {
    "id": "chatgpt-plugin-vercel",
    "title": "Vercel Deployment Plugin",
    "description": "Official plugin to inspect deployment previews, manage domains, and monitor cloud apps.",
    "company": "Vercel",
    "channelId": 6,
    "topic": "Engineering & DevOps",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Cloud Deployment",
      "coding-shipping",
      "read-write"
    ],
    "url": "https://chatgpt.com/plugins/vercel"
  },
  {
    "id": "chatgpt-plugin-gmail",
    "title": "Gmail ChatGPT Plugin",
    "description": "Official Google Workspace plugin to triage inbox correspondence, extract dates, and prepare draft replies.",
    "company": "Google",
    "channelId": 6,
    "topic": "Productivity & Admin",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Email Management",
      "inbox-calendar",
      "read-write"
    ],
    "url": "https://chatgpt.com/plugins/plugin_connector_1p_95d39881713c8191931482a62d6edff9"
  },
  {
    "id": "chatgpt-plugin-gdrive",
    "title": "Google Drive ChatGPT Plugin",
    "description": "Official Google Drive plugin working seamlessly across Docs, Sheets, Slides, and folder structures.",
    "company": "Google",
    "channelId": 6,
    "topic": "Productivity & Admin",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Document Management",
      "content-publishing",
      "read-write"
    ],
    "url": "https://chatgpt.com/plugins/plugin_connector_1p_ab21a553bfbc81919ea8fd1858e3ffa7"
  },
  {
    "id": "chatgpt-plugin-notion",
    "title": "Notion ChatGPT Plugin",
    "description": "Official Notion plugin to search team docs, retrieve task boards, and insert documentation drafts.",
    "company": "Community",
    "channelId": 6,
    "topic": "Productivity & Admin",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Knowledge Base",
      "content-publishing",
      "read-write"
    ],
    "url": "https://chatgpt.com/plugins/notion"
  },
  {
    "id": "chatgpt-plugin-slack",
    "title": "Slack ChatGPT Plugin",
    "description": "Official Slack plugin to retrieve discussion threads, summarize channels, and draft team updates.",
    "company": "Community",
    "channelId": 6,
    "topic": "Productivity & Admin",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Team Communication",
      "inbox-calendar",
      "read-write"
    ],
    "url": "https://chatgpt.com/plugins/slack"
  },
  {
    "id": "chatgpt-plugin-linear",
    "title": "Linear ChatGPT Plugin",
    "description": "Official Linear plugin to query active product cycles, create issues, and update project backlogs.",
    "company": "Community",
    "channelId": 6,
    "topic": "Engineering & DevOps",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Issue Tracking",
      "coding-shipping",
      "read-write"
    ],
    "url": "https://chatgpt.com/plugins/linear"
  },
  {
    "id": "chatgpt-plugin-hubspot",
    "title": "HubSpot ChatGPT Plugin",
    "description": "Official HubSpot plugin to query CRM records, analyze deal velocity, and prepare outreach.",
    "company": "Community",
    "channelId": 6,
    "topic": "Productivity & Admin",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "CRM & Sales",
      "customer-sales",
      "read-write"
    ],
    "url": "https://chatgpt.com/plugins/hubspot"
  },
  {
    "id": "chatgpt-plugin-shopify",
    "title": "Shopify ChatGPT Plugin",
    "description": "Official Shopify plugin to query store catalogs, order fulfillment status, and customer records.",
    "company": "Community",
    "channelId": 6,
    "topic": "Finance & Commerce",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "E-Commerce Ops",
      "finance-ops",
      "read-write"
    ],
    "url": "https://chatgpt.com/plugins/shopify"
  },
  {
    "id": "chatgpt-plugin-consensus",
    "title": "Consensus Research Plugin",
    "description": "Official scientific paper search plugin synthesizing peer-reviewed empirical evidence.",
    "company": "Community",
    "channelId": 6,
    "topic": "Research & Intelligence",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Scientific Research",
      "research-briefings",
      "read-only"
    ],
    "url": "https://chatgpt.com/plugins/consensus"
  },
  {
    "id": "chatgpt-plugin-zotero",
    "title": "Zotero Citation Plugin",
    "description": "Official Zotero plugin enabling Dots to retrieve research papers and format structured bibliographic citations.",
    "company": "Community",
    "channelId": 6,
    "topic": "Research & Intelligence",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Citation Management",
      "research-briefings",
      "read-only"
    ],
    "url": "https://chatgpt.com/plugins/zotero"
  },
  {
    "id": "usecase-error-triage-patch",
    "title": "Automated Error Triage to Patch Verification",
    "description": "Cross-tool workflow connecting Sentry error traces, local repository inspection, test reproduction, and PR drafting.",
    "company": "Community",
    "channelId": 6,
    "topic": "Engineering & DevOps",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Software Engineering",
      "coding-shipping",
      "read-write"
    ],
    "url": "docs/use-cases/engineering-and-product.md#1-automated-error-triage-to-patch-verification"
  },
  {
    "id": "usecase-release-readiness-audit",
    "title": "Release Readiness and Verification Audit",
    "description": "Audits open PRs, Linear milestone targets, and Vercel preview builds to generate a go/no-go release sheet.",
    "company": "Vercel",
    "channelId": 6,
    "topic": "Engineering & DevOps",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "DevOps & Release",
      "coding-shipping",
      "read-only"
    ],
    "url": "docs/use-cases/engineering-and-product.md#2-release-readiness-and-verification-audit"
  },
  {
    "id": "usecase-launch-content-workspace",
    "title": "Product Launch Content Workspace",
    "description": "Coordinates Notion specs, Figma design tokens, and Canva assets to draft launch announcements and checklists.",
    "company": "Community",
    "channelId": 6,
    "topic": "Productivity & Admin",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Product Marketing",
      "content-publishing",
      "read-write"
    ],
    "url": "docs/use-cases/launch-and-operations.md#1-product-launch-content-workspace"
  },
  {
    "id": "usecase-support-trend-gap-audit",
    "title": "Customer Support Trend and Documentation Gap Audit",
    "description": "Analyzes support inquiries across Slack and Gmail, detects recurring confusion points, and drafts documentation fixes in Notion.",
    "company": "Community",
    "channelId": 6,
    "topic": "Productivity & Admin",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Customer Operations",
      "customer-sales",
      "read-only"
    ],
    "url": "docs/use-cases/launch-and-operations.md#2-customer-support-trend-and-documentation-gap-audit"
  },
  {
    "id": "usecase-competitor-watch",
    "title": "Continuous Industry Beat and Competitor Watch",
    "description": "Autonomous web crawler tracking competitor changelogs and patent filings, separating facts from speculation.",
    "company": "Community",
    "channelId": 6,
    "topic": "Research & Intelligence",
    "format": "Open Source Tool",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-21",
    "tags": [
      "Market Intelligence",
      "research-briefings",
      "read-only"
    ],
    "url": "docs/use-cases/research-and-knowledge.md#1-continuous-industry-beat-and-competitor-watch"
  },
  {
    "id": "dots-mcp-airtable",
    "title": "Airtable MCP",
    "description": "List Airtable bases, read table records, and add records.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "airtable",
      "4 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/airtable.md"
  },
  {
    "id": "dots-mcp-alphavantage",
    "title": "Alphavantage MCP",
    "description": "Stock quotes and daily price history. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "alphavantage",
      "2 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/alphavantage.md"
  },
  {
    "id": "dots-mcp-amadeus",
    "title": "Amadeus MCP",
    "description": "Search travel with Amadeus: flight offers and prices, airport autocomplete, hotel offers, cheapest dates.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "amadeus",
      "5 actions",
      "Business Services"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/amadeus.md"
  },
  {
    "id": "dots-mcp-anthropic",
    "title": "Anthropic MCP",
    "description": "Check your Anthropic API access and list available Claude models. Read-only.",
    "company": "Anthropic",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "anthropic",
      "1 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/anthropic.md"
  },
  {
    "id": "dots-mcp-apollo",
    "title": "Apollo MCP",
    "description": "Search B2B contacts and enrich people and companies.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "apollo",
      "4 actions",
      "Sales and CRM"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/apollo.md"
  },
  {
    "id": "dots-mcp-aqara",
    "title": "Aqara MCP",
    "description": "Read device attributes and send control commands to Aqara devices through the Aqara Open Cloud API: plugs and wall switches, lights (brightness, color temperature), air conditioners, supported locks, curtain motors, and saved scenes, organized by homes and rooms. Use it when the user asks about or wants to change anything in their Aqara setup. Zigbee devices need an Aqara hub online. Commands drive real physical hardware, so writes are confirmation-gated (see Operating Rules).",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "aqara",
      "12 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/aqara.md"
  },
  {
    "id": "dots-mcp-asana",
    "title": "Asana MCP",
    "description": "View your assigned Asana tasks and create new ones.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "asana",
      "4 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/asana.md"
  },
  {
    "id": "dots-mcp-ashby",
    "title": "Ashby MCP",
    "description": "Search Ashby public job boards (no key needed) and read/write the Ashby ATS: candidates, jobs, applications.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "ashby",
      "7 actions",
      "Sales and CRM"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/ashby.md"
  },
  {
    "id": "dots-mcp-attio",
    "title": "Attio MCP",
    "description": "Query CRM records, upsert by matching attribute, add notes and tasks.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "attio",
      "6 actions",
      "Sales and CRM"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/attio.md"
  },
  {
    "id": "dots-mcp-beatoven",
    "title": "Beatoven MCP",
    "description": "Beatoven.ai royalty-free music generation: compose tracks, poll tasks, download audio, fetch individual stems.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "beatoven",
      "8 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/beatoven.md"
  },
  {
    "id": "dots-mcp-beehiiv",
    "title": "Beehiiv MCP",
    "description": "List publications, subscribers, and posts; add subscribers.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "beehiiv",
      "5 actions",
      "Email and Marketing"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/beehiiv.md"
  },
  {
    "id": "dots-mcp-black-forest-labs",
    "title": "Black Forest Labs MCP",
    "description": "Black Forest Labs FLUX image generation: flux-2-pro and flux-2-flex text-to-image with async polling.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "black-forest-labs",
      "6 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/black-forest-labs.md"
  },
  {
    "id": "dots-mcp-bluesky",
    "title": "Bluesky MCP",
    "description": "Read timelines, search posts, post and follow.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "bluesky",
      "7 actions",
      "Communication"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/bluesky.md"
  },
  {
    "id": "dots-mcp-brave-search",
    "title": "Brave Search MCP",
    "description": "Independent web search from Brave's own index. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "brave-search",
      "2 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/brave-search.md"
  },
  {
    "id": "dots-mcp-buttondown",
    "title": "Buttondown MCP",
    "description": "Read and write Buttondown: list subscribers and emails, add subscribers, draft emails.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "buttondown",
      "6 actions",
      "Email and Marketing"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/buttondown.md"
  },
  {
    "id": "dots-mcp-buzzsprout",
    "title": "Buzzsprout MCP",
    "description": "Manage podcast episodes on Buzzsprout: list and fetch episodes, create, update, or delete them, and list embed players. Use when the user wants to publish or manage podcast episodes on a Buzzsprout-hosted show.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "buzzsprout",
      "7 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/buzzsprout.md"
  },
  {
    "id": "dots-mcp-calcom",
    "title": "Calcom MCP",
    "description": "List bookings and event types, create bookings.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "calcom",
      "5 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/calcom.md"
  },
  {
    "id": "dots-mcp-calendly",
    "title": "Calendly MCP",
    "description": "Read and manage Calendly: list scheduled events, event types, invitees, and availability schedules; cancel bookings.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "calendly",
      "6 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/calendly.md"
  },
  {
    "id": "dots-mcp-canva",
    "title": "Canva MCP",
    "description": "Read and manage Canva designs through the Canva Connect API: list designs and folders, inspect a design, create designs, upload assets, and export designs. Exports are async jobs: submit with export, then poll with export-status until the job succeeds.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "canva",
      "11 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/canva.md"
  },
  {
    "id": "dots-mcp-cartesia",
    "title": "Cartesia MCP",
    "description": "Generate spoken audio from text with Cartesia's Sonic models (40+ languages) and browse the Cartesia voice library. Reach for this when the user wants narration, voiceovers, or spoken-audio files produced from a script.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "cartesia",
      "5 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/cartesia.md"
  },
  {
    "id": "dots-mcp-clerk",
    "title": "Clerk MCP",
    "description": "List, create, update, and delete users.",
    "company": "Community",
    "channelId": 2,
    "topic": "Engineering & DevOps",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "clerk",
      "6 actions",
      "Developer Tools"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/clerk.md"
  },
  {
    "id": "dots-mcp-clickup",
    "title": "Clickup MCP",
    "description": "List ClickUp workspaces and tasks, and create tasks.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "clickup",
      "3 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/clickup.md"
  },
  {
    "id": "dots-mcp-cloudflare",
    "title": "Cloudflare MCP",
    "description": "List your Cloudflare zones and read DNS records. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "Data & Cloud",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "cloudflare",
      "2 actions",
      "Cloud Infrastructure"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/cloudflare.md"
  },
  {
    "id": "dots-mcp-cloudinary",
    "title": "Cloudinary MCP",
    "description": "Manage media on Cloudinary through the Upload and Admin APIs: upload images and videos, list and inspect assets, update metadata and tags, delete assets, and check plan usage (credits, storage, bandwidth, transformations).",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "cloudinary",
      "9 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/cloudinary.md"
  },
  {
    "id": "dots-mcp-coda",
    "title": "Coda MCP",
    "description": "List docs, read tables and rows, add rows. Your docs as a database.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "coda",
      "5 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/coda.md"
  },
  {
    "id": "dots-mcp-deepgram",
    "title": "Deepgram MCP",
    "description": "Transcribe prerecorded audio files to text (with optional diarization, summaries, topics, sentiment) and synthesize speech with Deepgram's Aura voices. Reach for this when the user has an audio file to transcribe or wants spoken audio generated from text.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "deepgram",
      "5 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/deepgram.md"
  },
  {
    "id": "dots-mcp-deepl",
    "title": "Deepl MCP",
    "description": "Translate text between 30+ languages, check usage.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "deepl",
      "4 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/deepl.md"
  },
  {
    "id": "dots-mcp-deepseek",
    "title": "Deepseek MCP",
    "description": "Chat with DeepSeek's models and check account balance: OpenAI-compatible chat completions with thinking mode, model listing, and balance lookup via the official API.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "deepseek",
      "5 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/deepseek.md"
  },
  {
    "id": "dots-mcp-descript",
    "title": "Descript MCP",
    "description": "Work with Descript's API (open beta): list projects, inspect Underlord/agent jobs, submit a publish job, and poll a job until it finishes. Use when the user wants to drive Descript editing or publishing programmatically.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "descript",
      "8 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/descript.md"
  },
  {
    "id": "dots-mcp-devto",
    "title": "Devto MCP",
    "description": "Read and write dev.to: own profile, own articles (published, drafts, all), public articles by username, create and update articles with a safe draft default.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "devto",
      "7 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/devto.md"
  },
  {
    "id": "dots-mcp-digitalocean",
    "title": "Digitalocean MCP",
    "description": "List your DigitalOcean droplets and domains. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "Data & Cloud",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "digitalocean",
      "2 actions",
      "Cloud Infrastructure"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/digitalocean.md"
  },
  {
    "id": "dots-mcp-discord",
    "title": "Discord MCP",
    "description": "Read servers and channels, send messages and DMs.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "discord",
      "6 actions",
      "Communication"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/discord.md"
  },
  {
    "id": "dots-mcp-docusign",
    "title": "Docusign MCP",
    "description": "Draft and send signature envelopes (demo environment by default), check envelope status, and download signed documents.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "docusign",
      "7 actions",
      "Business Services"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/docusign.md"
  },
  {
    "id": "dots-mcp-dub",
    "title": "Dub MCP",
    "description": "Create short links, read analytics, track conversions.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "dub",
      "8 actions",
      "Email and Marketing"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/dub.md"
  },
  {
    "id": "dots-mcp-ecovacs",
    "title": "Ecovacs MCP",
    "description": "Control Ecovacs DEEBOT robot vacuums through the official Ecovacs Open Platform: list bound robots, read robot state and battery, start/pause/resume/stop cleaning, send the robot back to its dock, and set the sweep/mop work mode. Use when the user mentions their DEEBOT or robot vacuum.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "ecovacs",
      "12 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/ecovacs.md"
  },
  {
    "id": "dots-mcp-elai",
    "title": "Elai MCP",
    "description": "Build AI avatar presenter videos with Elai: list available avatars, inspect videos and their render status, submit renders, and poll until a render finishes. Reach for this when the user wants a talking-head video generated from a script or slide deck.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "elai",
      "6 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/elai.md"
  },
  {
    "id": "dots-mcp-elevenlabs",
    "title": "Elevenlabs MCP",
    "description": "Check ElevenLabs subscription usage, list voices, and generate text-to-speech audio (TTS needs --confirm, spends characters).",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "elevenlabs",
      "5 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/elevenlabs.md"
  },
  {
    "id": "dots-mcp-etsy",
    "title": "Etsy MCP",
    "description": "Read Etsy shop data: receipts, listings, transactions, payment ledger; create listings.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "etsy",
      "6 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/etsy.md"
  },
  {
    "id": "dots-mcp-exa",
    "title": "Exa MCP",
    "description": "Neural web search with page text: one call returns ranked sources with snippets. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "exa",
      "2 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/exa.md"
  },
  {
    "id": "dots-mcp-fal-ai",
    "title": "Fal Ai MCP",
    "description": "Generate media with fal.ai: images, video, audio, music on one key. Submit jobs to 100s of models, poll status, fetch results, upload files.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "fal-ai",
      "6 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/fal-ai.md"
  },
  {
    "id": "dots-mcp-figma",
    "title": "Figma MCP",
    "description": "Look up your Figma user, read file metadata, and post comments on files.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "figma",
      "4 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/figma.md"
  },
  {
    "id": "dots-mcp-firecrawl",
    "title": "Firecrawl MCP",
    "description": "Scrape pages, crawl sites, search the web.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "firecrawl",
      "6 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/firecrawl.md"
  },
  {
    "id": "dots-mcp-flyio",
    "title": "Flyio MCP",
    "description": "List apps and machines, manage machine lifecycle.",
    "company": "Community",
    "channelId": 2,
    "topic": "Data & Cloud",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "flyio",
      "9 actions",
      "Cloud Infrastructure"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/flyio.md"
  },
  {
    "id": "dots-mcp-framer",
    "title": "Framer MCP",
    "description": "Verify a Framer project's Server API connection. Framer's Server API is WebSocket/SDK-only (there is no REST surface): the official framer-api npm package opens a long-lived connection to wss://api.framer.com/channel/headless-plugin with the header Authorization: Token <api_key>, keyed to one project. This connector's CLI performs that same official handshake as a connection check, so auth proves the API key and project pair work.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "framer",
      "1 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/framer.md"
  },
  {
    "id": "dots-mcp-front",
    "title": "Front MCP",
    "description": "Read your Front shared inbox, and reply, assign teammates, and add tags on conversations (writes need --confirm).",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "front",
      "8 actions",
      "Communication"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/front.md"
  },
  {
    "id": "dots-mcp-gemini",
    "title": "Gemini MCP",
    "description": "Google Gemini media generation: Nano Banana images, Imagen 4 images, Veo video, TTS, model listing.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "gemini",
      "8 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/gemini.md"
  },
  {
    "id": "dots-mcp-github",
    "title": "Github MCP",
    "description": "View your profile, list repos, list open issues, and create issues.",
    "company": "GitHub",
    "channelId": 2,
    "topic": "Engineering & DevOps",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "github",
      "4 actions",
      "Developer Tools"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/github.md"
  },
  {
    "id": "dots-mcp-gitlab",
    "title": "Gitlab MCP",
    "description": "Your GitLab user, projects, open merge requests, and issue creation.",
    "company": "Community",
    "channelId": 2,
    "topic": "Engineering & DevOps",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "gitlab",
      "4 actions",
      "Developer Tools"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/gitlab.md"
  },
  {
    "id": "dots-mcp-google-nest",
    "title": "Google Nest MCP",
    "description": "Read traits and execute commands on Google Nest devices through the Smart Device Management (SDM) API: thermostats (mode, setpoints, ambient readings), cameras and doorbells (events, live-stream generation). Use it when the user asks about their Nest thermostat, wants to change heating/cooling, or wants camera/doorbell state. Thermostat commands start or stop real HVAC, so they are confirmation-gated (see Operating Rules).",
    "company": "Google",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "google-nest",
      "3 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/google-nest.md"
  },
  {
    "id": "dots-mcp-gumroad",
    "title": "Gumroad MCP",
    "description": "View your Gumroad products and sales. Read-only by design.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "gumroad",
      "3 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/gumroad.md"
  },
  {
    "id": "dots-mcp-heygen",
    "title": "Heygen MCP",
    "description": "HeyGen avatar and talking-head video: prompt-to-video agent, multi-scene avatar video, status polling, avatar and voice lists.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "heygen",
      "6 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/heygen.md"
  },
  {
    "id": "dots-mcp-home-assistant",
    "title": "Home Assistant MCP",
    "description": "Read entity states and call services on your Home Assistant instance. Service calls are confirmed first.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "home-assistant",
      "3 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/home-assistant.md"
  },
  {
    "id": "dots-mcp-homey",
    "title": "Homey MCP",
    "description": "Read device state and write capability values on a Homey Pro (local) or Homey cloud account through the Homey Web API: lights and outlets, dimmers and color, thermostats, connected locks, blinds and curtains, plus listing Flows (automations). Use it when the user asks about or wants to change anything paired to their Homey. Writes drive real physical hardware, so they are confirmation-gated (see Operating Rules).",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "homey",
      "3 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/homey.md"
  },
  {
    "id": "dots-mcp-hubitat",
    "title": "Hubitat MCP",
    "description": "Read device states and invoke capability commands on a Hubitat Elevation hub through the official Maker API app: lights and dimmers, deadbolt locks, garage door controllers, thermostats, location modes, and the Hubitat Safety Monitor (HSM). Use it when the user asks about or wants to change anything paired to their Hubitat hub. Commands drive real physical hardware, so writes are confirmation-gated (see Operating Rules).",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "hubitat",
      "3 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/hubitat.md"
  },
  {
    "id": "dots-mcp-hubspot",
    "title": "Hubspot MCP",
    "description": "List and search contacts, create contacts, and list deals in your HubSpot CRM.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "hubspot",
      "4 actions",
      "Sales and CRM"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/hubspot.md"
  },
  {
    "id": "dots-mcp-huggingface",
    "title": "Huggingface MCP",
    "description": "Verify your Hugging Face account and search the model hub. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "huggingface",
      "2 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/huggingface.md"
  },
  {
    "id": "dots-mcp-hume-ai",
    "title": "Hume Ai MCP",
    "description": "Synthesize speech with Hume's Octave TTS models and read EVI (Empathic Voice Interface) conversational configs. Reach for this when the user wants expressive TTS audio from text or wants to inspect an EVI voice-agent configuration.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "hume-ai",
      "4 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/hume-ai.md"
  },
  {
    "id": "dots-mcp-ideogram",
    "title": "Ideogram MCP",
    "description": "Ideogram text-to-image generation with the strongest text rendering in the catalog: generate, edit, remix, upscale, describe, balance.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "ideogram",
      "7 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/ideogram.md"
  },
  {
    "id": "dots-mcp-kit",
    "title": "Kit MCP",
    "description": "Read and write Kit (ConvertKit): list subscribers, broadcasts, sequences, tags; draft broadcasts.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "kit",
      "7 actions",
      "Email and Marketing"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/kit.md"
  },
  {
    "id": "dots-mcp-kling",
    "title": "Kling MCP",
    "description": "Kling AI video generation with client-side JWT auth: text-to-video, image-to-video, status polling, clip extend, lip-sync.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "kling",
      "6 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/kling.md"
  },
  {
    "id": "dots-mcp-langfuse",
    "title": "Langfuse MCP",
    "description": "Query traces and observations, manage prompts and scores.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "langfuse",
      "9 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/langfuse.md"
  },
  {
    "id": "dots-mcp-leaf-agriculture",
    "title": "Leaf Agriculture MCP",
    "description": "Read and manage farm data through Leaf Agriculture, a unified farm-data API that aggregates the partner-gated OEM platforms under self-serve access: John Deere, CNH Industrial (Case IH/New Holland), Climate FieldView, Trimble, Raven and AgLeader. The primitives it exposes (fields, boundaries, machine operation files for planting/harvest/application/tillage, plus as-applied irrigation) are exactly what a farmer-first fintech and supply-chain digitization product consumes. This is the practical route to partner-gated OEM data without a partnership agreement: individual provider connections need that grower's OAuth consent, which is the normal data-access model rather than a partnership gate.",
    "company": "Community",
    "channelId": 2,
    "topic": "Data & Cloud",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "leaf-agriculture",
      "10 actions",
      "Data Services"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/leaf-agriculture.md"
  },
  {
    "id": "dots-mcp-lemon-squeezy",
    "title": "Lemon Squeezy MCP",
    "description": "Read Lemon Squeezy revenue: list orders, subscriptions, customers, products; create checkout links.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "lemon-squeezy",
      "6 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/lemon-squeezy.md"
  },
  {
    "id": "dots-mcp-letta",
    "title": "Letta MCP",
    "description": "Work with Letta agent memory: list agents, read core-memory blocks, list or add archival passages, create blocks, message an agent to record memory.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "letta",
      "7 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/letta.md"
  },
  {
    "id": "dots-mcp-linear",
    "title": "Linear MCP",
    "description": "View your assigned issues and create issues, over Linear's GraphQL API.",
    "company": "Community",
    "channelId": 2,
    "topic": "Engineering & DevOps",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "linear",
      "3 actions",
      "Developer Tools"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/linear.md"
  },
  {
    "id": "dots-mcp-lob",
    "title": "Lob MCP",
    "description": "Send physical mail through Lob's Print and Mail API: verify US addresses; create postcards and letters that get printed and mailed; list what was sent; cancel a piece while it is still before production. Reach for this when the user wants a real letter or postcard in the mail rather than an email.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "lob",
      "9 actions",
      "Business Services"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/lob.md"
  },
  {
    "id": "dots-mcp-loops",
    "title": "Loops MCP",
    "description": "Manage email contacts, trigger loops, send transactional email.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "loops",
      "6 actions",
      "Email and Marketing"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/loops.md"
  },
  {
    "id": "dots-mcp-luma",
    "title": "Luma MCP",
    "description": "Luma Dream Machine video generation: text-to-video and image-to-video, status polling, cancel, image upload.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "luma",
      "7 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/luma.md"
  },
  {
    "id": "dots-mcp-mastodon",
    "title": "Mastodon MCP",
    "description": "Read and write Mastodon: verify the account, list own posts and followers, publish toots with native scheduling, upload media.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "mastodon",
      "6 actions",
      "Communication"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/mastodon.md"
  },
  {
    "id": "dots-mcp-mem0",
    "title": "Mem0 MCP",
    "description": "Mem0 memory CLI: add memories from messages, semantic search, read or delete memories, poll async events.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "mem0",
      "9 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/mem0.md"
  },
  {
    "id": "dots-mcp-mercury",
    "title": "Mercury MCP",
    "description": "View Mercury bank accounts and transactions. Read-only by design.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "mercury",
      "3 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/mercury.md"
  },
  {
    "id": "dots-mcp-mistral",
    "title": "Mistral MCP",
    "description": "Mistral AI's La Plateforme API: chat completions, embeddings, document OCR, and model listing via Bearer API key.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "mistral",
      "8 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/mistral.md"
  },
  {
    "id": "dots-mcp-monday",
    "title": "Monday MCP",
    "description": "List boards, read items, create items. Project management over GraphQL.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "monday",
      "4 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/monday.md"
  },
  {
    "id": "dots-mcp-moonraker",
    "title": "Moonraker MCP",
    "description": "Control a Klipper-based 3D printer through the Moonraker API server (the backend behind Mainsail, Fluidd and RatOS): read server and print status, list and upload gcode files, start/pause/resume/cancel prints, trigger the emergency stop, toggle smart-plug devices, and (gated) run raw G-code. Use when the user mentions Moonraker, Klipper, Mainsail, or Fluidd.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "moonraker",
      "11 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/moonraker.md"
  },
  {
    "id": "dots-mcp-n8n",
    "title": "N8N MCP",
    "description": "List and manage workflows, read executions.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "n8n",
      "7 actions",
      "Automation"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/n8n.md"
  },
  {
    "id": "dots-mcp-neon",
    "title": "Neon MCP",
    "description": "Inspect Neon serverless Postgres projects, branches, and databases. Branch create and delete need exact-match confirmation; connection passwords are masked.",
    "company": "Community",
    "channelId": 2,
    "topic": "Engineering & DevOps",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "neon",
      "7 actions",
      "Developer Tools"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/neon.md"
  },
  {
    "id": "dots-mcp-netlify",
    "title": "Netlify MCP",
    "description": "List your Netlify sites and recent deploys. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "Data & Cloud",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "netlify",
      "2 actions",
      "Cloud Infrastructure"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/netlify.md"
  },
  {
    "id": "dots-mcp-newsapi",
    "title": "Newsapi MCP",
    "description": "Top headlines and full-text news search. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "Data & Cloud",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "newsapi",
      "2 actions",
      "Data Services"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/newsapi.md"
  },
  {
    "id": "dots-mcp-notion",
    "title": "Notion MCP",
    "description": "Search and query Notion, plus create pages, append blocks, and update page properties (writes need --confirm).",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "notion",
      "8 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/notion.md"
  },
  {
    "id": "dots-mcp-octoprint",
    "title": "Octoprint MCP",
    "description": "Control an OctoPrint 3D printer over its local REST API: read printer state and temperatures, monitor print progress, start/pause/cancel/restart jobs, upload and select gcode files, set hotend and bed temperatures, jog or home axes, and (gated) run raw G-code. Use when the user mentions their OctoPrint instance or a printer it drives.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "octoprint",
      "14 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/octoprint.md"
  },
  {
    "id": "dots-mcp-openai",
    "title": "Openai MCP",
    "description": "Check your OpenAI API access and list the models your key can use. Read-only.",
    "company": "OpenAI",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "openai",
      "1 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/openai.md"
  },
  {
    "id": "dots-mcp-openrouter",
    "title": "Openrouter MCP",
    "description": "Browse the model catalog with per-token pricing; check your key usage. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "openrouter",
      "2 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/openrouter.md"
  },
  {
    "id": "dots-mcp-openweathermap",
    "title": "Openweathermap MCP",
    "description": "Current weather and 5-day forecast for any city. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "Data & Cloud",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "openweathermap",
      "2 actions",
      "Data Services"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/openweathermap.md"
  },
  {
    "id": "dots-mcp-opusclip",
    "title": "Opusclip MCP",
    "description": "Turn long-form videos into short, captioned, vertical clips with OpusClip's API: create a clip project from a video URL, check the project's render status, and list the resulting clips with their virality scores. API access requires a Pro-tier (or higher) OpusClip plan and is in beta.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "opusclip",
      "5 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/opusclip.md"
  },
  {
    "id": "dots-mcp-oura",
    "title": "Oura MCP",
    "description": "Read Oura Ring health data: sleep scores, sleep sessions, readiness, workouts, and SpO2.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "oura",
      "6 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/oura.md"
  },
  {
    "id": "dots-mcp-paddle",
    "title": "Paddle MCP",
    "description": "View Paddle transactions and customers. Read-only by design.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "paddle",
      "3 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/paddle.md"
  },
  {
    "id": "dots-mcp-patreon",
    "title": "Patreon MCP",
    "description": "Read Patreon campaigns, members, tiers, and identity (read-only).",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "patreon",
      "5 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/patreon.md"
  },
  {
    "id": "dots-mcp-perplexity",
    "title": "Perplexity MCP",
    "description": "Ask questions with citations, search the web.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "perplexity",
      "4 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/perplexity.md"
  },
  {
    "id": "dots-mcp-pexels",
    "title": "Pexels MCP",
    "description": "Search Pexels' royalty-free stock library: find photos and videos by keyword, browse curated/trending photos and popular videos, look up a single photo or video, and read collection contents. The Pexels API is read-only, so this connector cannot change anything.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "pexels",
      "9 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/pexels.md"
  },
  {
    "id": "dots-mcp-philips-hue",
    "title": "Philips Hue MCP",
    "description": "Control Philips Hue lights locally: list lights and rooms, set brightness/color, activate scenes, read sensors.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "philips-hue",
      "3 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/philips-hue.md"
  },
  {
    "id": "dots-mcp-pipedrive",
    "title": "Pipedrive MCP",
    "description": "List deals and contacts, create deals. CRM for your pipeline.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "pipedrive",
      "5 actions",
      "Sales and CRM"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/pipedrive.md"
  },
  {
    "id": "dots-mcp-plain",
    "title": "Plain MCP",
    "description": "Find customers, manage support threads.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "plain",
      "6 actions",
      "Communication"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/plain.md"
  },
  {
    "id": "dots-mcp-playht",
    "title": "Playht MCP",
    "description": "Generate spoken audio from text with PlayHT voices, browse stock and cloned voices, and create instant voice clones. Reach for this when the user wants narration or voiceovers, a voice library lookup, or a voice cloned from a sample.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "playht",
      "5 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/playht.md"
  },
  {
    "id": "dots-mcp-podbean",
    "title": "Podbean MCP",
    "description": "Manage podcast hosting on Podbean: list podcasts and their episodes, create, update, or delete episodes. Podbean's analytics endpoints are a differentiator; the download/analytics report paths are not yet mapped in this connector.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "podbean",
      "6 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/podbean.md"
  },
  {
    "id": "dots-mcp-polar",
    "title": "Polar MCP",
    "description": "Read Polar orders, subscriptions, products, and customers; create checkouts and refunds.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "polar",
      "7 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/polar.md"
  },
  {
    "id": "dots-mcp-polymarket",
    "title": "Polymarket MCP",
    "description": "Read-only prediction market data: events, markets, prices, order books. No trading, no API key needed.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "polymarket",
      "9 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/polymarket.md"
  },
  {
    "id": "dots-mcp-posthog",
    "title": "Posthog MCP",
    "description": "Your PostHog user, projects, and saved insights. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "Engineering & DevOps",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "posthog",
      "3 actions",
      "Developer Tools"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/posthog.md"
  },
  {
    "id": "dots-mcp-postmark",
    "title": "Postmark MCP",
    "description": "Send transactional email, check delivery and bounces.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "postmark",
      "4 actions",
      "Email and Marketing"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/postmark.md"
  },
  {
    "id": "dots-mcp-printful",
    "title": "Printful MCP",
    "description": "Read Printful products and orders, create orders and mockups.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "printful",
      "6 actions",
      "Business Services"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/printful.md"
  },
  {
    "id": "dots-mcp-prusa-connect",
    "title": "Prusa Connect MCP",
    "description": "Read Prusa 3D printer state through the official Prusa Connect cloud API: list printers and their state, list jobs and files, view cameras, read print statistics, and upload gcode files to printer storage. Use when the user mentions Prusa Connect or a networked Prusa printer (MK3/MK4/CORE One).",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "prusa-connect",
      "8 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/prusa-connect.md"
  },
  {
    "id": "dots-mcp-rachio",
    "title": "Rachio MCP",
    "description": "Control a Rachio smart irrigation controller through the public Rachio API. Check who is signed in, see what the controller is currently running, start watering a specific zone for a set number of seconds, and shut all water off in an emergency. Reach for this when the user asks about sprinklers, watering schedules, or irrigation zones.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "rachio",
      "7 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/rachio.md"
  },
  {
    "id": "dots-mcp-railway",
    "title": "Railway MCP",
    "description": "List projects and deployments, set variables, redeploy.",
    "company": "Community",
    "channelId": 2,
    "topic": "Data & Cloud",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "railway",
      "6 actions",
      "Cloud Infrastructure"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/railway.md"
  },
  {
    "id": "dots-mcp-ramp",
    "title": "Ramp MCP",
    "description": "Read-only view of corporate spend: transactions, cards and limits, users, departments. No spend actions by design.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "ramp",
      "8 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/ramp.md"
  },
  {
    "id": "dots-mcp-readwise",
    "title": "Readwise MCP",
    "description": "Search your highlights and books, save new highlights.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "readwise",
      "5 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/readwise.md"
  },
  {
    "id": "dots-mcp-remove-bg",
    "title": "Remove Bg MCP",
    "description": "Remove the background from an image with the remove.bg API: submit a local file or an image URL, get back a transparent PNG saved to a local path. Also check the account's remaining credits.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "remove-bg",
      "5 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/remove-bg.md"
  },
  {
    "id": "dots-mcp-render",
    "title": "Render MCP",
    "description": "List your Render services and recent deploys. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "Data & Cloud",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "render",
      "2 actions",
      "Cloud Infrastructure"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/render.md"
  },
  {
    "id": "dots-mcp-replicate",
    "title": "Replicate MCP",
    "description": "Run AI models, poll predictions.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "replicate",
      "5 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/replicate.md"
  },
  {
    "id": "dots-mcp-resend",
    "title": "Resend MCP",
    "description": "Send email through Resend and check delivery status. Every send is confirmed with you first.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "resend",
      "2 actions",
      "Email and Marketing"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/resend.md"
  },
  {
    "id": "dots-mcp-restream",
    "title": "Restream MCP",
    "description": "Manage Restream multistreaming: read your profile, list streaming destinations (channels), toggle destinations or edit channel metadata, and retrieve your stream key. Use when the user wants to control where a livestream goes without opening the Restream dashboard.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "restream",
      "7 actions",
      "Other Services"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/restream.md"
  },
  {
    "id": "dots-mcp-runway",
    "title": "Runway MCP",
    "description": "Runway developer API: text-to-video, image-to-video, task polling, video upscale, lip-sync.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "runway",
      "6 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/runway.md"
  },
  {
    "id": "dots-mcp-sendgrid",
    "title": "Sendgrid MCP",
    "description": "Send email, check stats and profile.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "sendgrid",
      "4 actions",
      "Email and Marketing"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/sendgrid.md"
  },
  {
    "id": "dots-mcp-sentry",
    "title": "Sentry MCP",
    "description": "List organizations and projects, triage unresolved issues from the last 24h, and resolve/archive/assign issues.",
    "company": "Community",
    "channelId": 2,
    "topic": "Engineering & DevOps",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "sentry",
      "6 actions",
      "Developer Tools"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/sentry.md"
  },
  {
    "id": "dots-mcp-shippo",
    "title": "Shippo MCP",
    "description": "Ship through many carriers (USPS, UPS, FedEx, DHL and others) with one API: get rates for a shipment; buy a printable postage label; track a parcel; refund unused labels. Reach for this when the user needs to price or purchase shipping for a package.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "shippo",
      "7 actions",
      "Business Services"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/shippo.md"
  },
  {
    "id": "dots-mcp-shopify",
    "title": "Shopify MCP",
    "description": "View orders, products, customers; create products and discounts with confirmation. No order or customer writes, ever.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "shopify",
      "6 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/shopify.md"
  },
  {
    "id": "dots-mcp-slack",
    "title": "Slack MCP",
    "description": "Read channels, post messages, list users. The most-requested workplace connector.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "slack",
      "6 actions",
      "Communication"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/slack.md"
  },
  {
    "id": "dots-mcp-smartcar",
    "title": "Smartcar MCP",
    "description": "Read and control connected cars across many brands (Tesla, Ford, GM, Toyota, BMW, Hyundai and others) through one standardized API. Read odometer, location, charge and battery level, fuel level and tire pressure; lock/unlock doors; start/stop charging; set charge limits and schedules; route the built-in navigation. Use when the user mentions their car and the brand has no dedicated connector here, or asks for cross-brand vehicle telemetry and control.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "smartcar",
      "10 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/smartcar.md"
  },
  {
    "id": "dots-mcp-smartthings",
    "title": "Smartthings MCP",
    "description": "Read device status and issue capability commands across a Samsung SmartThings account: locations, devices, switches, dimmers, locks, thermostats, sirens, garage door controllers, and window shades. Use it when the user asks about or wants to change the state of anything paired to their SmartThings hub or cloud account. This connector drives real physical hardware, so every write is confirmation-gated (see Operating Rules).",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "smartthings",
      "11 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/smartthings.md"
  },
  {
    "id": "dots-mcp-spotify",
    "title": "Spotify MCP",
    "description": "Read your profile, playlists, top tracks and artists, and search the catalog. Playlist and library writes need your confirmation.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "spotify",
      "10 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/spotify.md"
  },
  {
    "id": "dots-mcp-square",
    "title": "Square MCP",
    "description": "Work with a Square seller account: list locations and payments, create orders, push a checkout to a physical Square Terminal for in-person payment, charge a payment source directly, cancel a pending Terminal checkout, and refund a payment. Reach for this when the user needs to take or return money through Square.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "square",
      "10 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/square.md"
  },
  {
    "id": "dots-mcp-stripe",
    "title": "Stripe MCP",
    "description": "Read-only Stripe visibility: balance, recent charges, customers. No write commands ship: expanding to writes is a deliberate v2.",
    "company": "Stripe",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "stripe",
      "3 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/stripe.md"
  },
  {
    "id": "dots-mcp-supabase",
    "title": "Supabase MCP",
    "description": "List tables, query rows, and insert/update/delete rows in your Supabase Postgres database.",
    "company": "Supabase",
    "channelId": 2,
    "topic": "Engineering & DevOps",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "supabase",
      "3 actions",
      "Developer Tools"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/supabase.md"
  },
  {
    "id": "dots-mcp-supermemory",
    "title": "Supermemory MCP",
    "description": "Store and recall with Supermemory: add memories and documents, hybrid search, upload files, tune settings.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "supermemory",
      "6 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/supermemory.md"
  },
  {
    "id": "dots-mcp-switchbot",
    "title": "Switchbot MCP",
    "description": "Read status and send commands to SwitchBot devices over the official OpenAPI v1.1: SwitchBot Bot (physical button presser), SwitchBot Lock, Curtain and Blind Tilt motors, plugs, lights, air conditioners, infrared remotes, and saved scenes. Use it when the user asks about or wants to change anything in their SwitchBot setup. Commands drive real physical hardware, so writes are confirmation-gated (see Operating Rules).",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "switchbot",
      "11 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/switchbot.md"
  },
  {
    "id": "dots-mcp-tally",
    "title": "Tally MCP",
    "description": "List forms, read submissions, manage form blocks.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "tally",
      "6 actions",
      "Forms and Surveys"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/tally.md"
  },
  {
    "id": "dots-mcp-tavily",
    "title": "Tavily MCP",
    "description": "Fast, clean web research: one call returns an AI answer plus ranked sources with snippets. Read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "tavily",
      "1 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/tavily.md"
  },
  {
    "id": "dots-mcp-telegram",
    "title": "Telegram MCP",
    "description": "Send messages and read updates through your own Telegram bot. Bots can't message users who haven't started them first.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "telegram",
      "3 actions",
      "Communication"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/telegram.md"
  },
  {
    "id": "dots-mcp-tesla-fleet-api",
    "title": "Tesla Fleet Api MCP",
    "description": "Control Tesla vehicles through the official Tesla Fleet API: read live vehicle state, wake a sleeping car, and send signed commands (lock/unlock, keyless drive, charge control, preconditioning, honk/flash, trunk, sentry/valet, speed limit, navigation). Use when the user mentions their Tesla car or asks for vehicle actuation.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "tesla-fleet-api",
      "13 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/tesla-fleet-api.md"
  },
  {
    "id": "dots-mcp-tesla-powerwall",
    "title": "Tesla Powerwall MCP",
    "description": "Monitor and control Tesla energy sites (Powerwall, solar) through the official Tesla Fleet API. Read live power flows, battery state, and site settings; change backup reserve percentage, operation mode, and Storm Watch. Use when the user mentions their Powerwall, Tesla energy site, backup reserve, or storm mode.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "tesla-powerwall",
      "8 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/tesla-powerwall.md"
  },
  {
    "id": "dots-mcp-ticktick",
    "title": "Ticktick MCP",
    "description": "Read and write TickTick: list projects and tasks, create tasks, complete and delete tasks.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "ticktick",
      "6 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/ticktick.md"
  },
  {
    "id": "dots-mcp-tiktok",
    "title": "Tiktok MCP",
    "description": "Read your TikTok profile and video list. API access needs TikTok app approval first, and posting is not shipped.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "tiktok",
      "4 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/tiktok.md"
  },
  {
    "id": "dots-mcp-todoist",
    "title": "Todoist MCP",
    "description": "List tasks, create tasks, and mark them done in Todoist.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "todoist",
      "3 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/todoist.md"
  },
  {
    "id": "dots-mcp-transistor",
    "title": "Transistor MCP",
    "description": "Manage podcast hosting on Transistor.fm: list shows and episodes, create draft episodes, update or delete them, and upload episode audio via Transistor's two-step upload flow. Use when the user wants to publish or manage podcast episodes programmatically.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "transistor",
      "8 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/transistor.md"
  },
  {
    "id": "dots-mcp-triggerdev",
    "title": "Triggerdev MCP",
    "description": "Trigger background jobs, list runs, manage schedules.",
    "company": "Community",
    "channelId": 2,
    "topic": "Data & Cloud",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "triggerdev",
      "7 actions",
      "Cloud Infrastructure"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/triggerdev.md"
  },
  {
    "id": "dots-mcp-tuya",
    "title": "Tuya MCP",
    "description": "Read status and send control commands to Tuya Cloud / Smart Life devices: smart plugs and switches, lights, thermostats, curtain motors, and supported smart locks, plus executing saved scenes. Use it when the user asks about or wants to change anything paired through the Tuya or Smart Life app. Commands drive real physical hardware, so writes are confirmation-gated (see Operating Rules).",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "tuya",
      "7 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/tuya.md"
  },
  {
    "id": "dots-mcp-twitch",
    "title": "Twitch MCP",
    "description": "Read and write Twitch via the Helix API: channel profile, follower stats, live stream status, past videos, channel title and game updates, clip creation.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "twitch",
      "7 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/twitch.md"
  },
  {
    "id": "dots-mcp-typeform",
    "title": "Typeform MCP",
    "description": "List forms and responses, create forms, and manage response webhooks with confirmation.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "typeform",
      "7 actions",
      "Forms and Surveys"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/typeform.md"
  },
  {
    "id": "dots-mcp-uber-direct",
    "title": "Uber Direct MCP",
    "description": "Dispatch same-day couriers through Uber Direct for food, retail, grocery, or parcel deliveries. Get a price and time quote without dispatching anyone, create a delivery when the user approves, check its status, and cancel a pending one. Reach for this when the user needs something picked up and dropped off locally today.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "uber-direct",
      "5 actions",
      "Business Services"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/uber-direct.md"
  },
  {
    "id": "dots-mcp-unifi-protect",
    "title": "Unifi Protect MCP",
    "description": "Read camera state and still snapshots from a local UniFi Protect console (Protect 5.3+) through the official Integration API, and adjust camera settings: PTZ position, flood lights, chimes, talkback. Use it when the user asks what their UniFi cameras see, wants a snapshot saved, or wants to change camera behavior. Everything runs against the local console; there is no cloud dependency.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "unifi-protect",
      "3 actions",
      "Hardware and IoT"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/unifi-protect.md"
  },
  {
    "id": "dots-mcp-unsplash",
    "title": "Unsplash MCP",
    "description": "Search Unsplash's free stock photo library, browse the latest photos, look up a photo's details, browse a photographer's portfolio or a topic, and download an image while honoring Unsplash's API guidelines. At the Client-ID tier this connector is read-only.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "unsplash",
      "8 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/unsplash.md"
  },
  {
    "id": "dots-mcp-upstash",
    "title": "Upstash MCP",
    "description": "Run Redis commands over REST.",
    "company": "Community",
    "channelId": 2,
    "topic": "Data & Cloud",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "upstash",
      "3 actions",
      "Cloud Infrastructure"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/upstash.md"
  },
  {
    "id": "dots-mcp-vapi",
    "title": "Vapi MCP",
    "description": "Manage voice AI assistants, phone numbers, and calls. Outbound calls need exact-match confirmation; test numbers by default.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "vapi",
      "7 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/vapi.md"
  },
  {
    "id": "dots-mcp-veed",
    "title": "Veed MCP",
    "description": "Remove backgrounds from video with VEED's direct developer API (POST /v1/video/background-remove): standard quality, fast throughput and green-screen chroma-key with spill suppression. Outputs are VP9-with-alpha or H.264 RGB+alpha, up to 4K.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "veed",
      "4 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/veed.md"
  },
  {
    "id": "dots-mcp-vercel",
    "title": "Vercel MCP",
    "description": "See your Vercel account, projects, and recent deployments.",
    "company": "Vercel",
    "channelId": 2,
    "topic": "Data & Cloud",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "vercel",
      "3 actions",
      "Cloud Infrastructure"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/vercel.md"
  },
  {
    "id": "dots-mcp-webflow",
    "title": "Webflow MCP",
    "description": "Work with the Webflow Data API v2: list sites, inspect site details, browse CMS collections and items, create/update/delete CMS items, and publish a site. Uses a per-site token from Site Settings.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "webflow",
      "9 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/webflow.md"
  },
  {
    "id": "dots-mcp-wise",
    "title": "Wise MCP",
    "description": "View Wise profiles and multi-currency balances. Read-only by design.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "short",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "wise",
      "2 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/wise.md"
  },
  {
    "id": "dots-mcp-x",
    "title": "X MCP",
    "description": "Post, search, like, DM. Note: no usable free read tier.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "x",
      "6 actions",
      "Communication"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/x.md"
  },
  {
    "id": "dots-mcp-xai",
    "title": "Xai MCP",
    "description": "Query AI agent chat completions and list available foundation models through xAI's OpenAI-compatible API, with per-call token usage surfaced so cost is always visible.",
    "company": "Community",
    "channelId": 2,
    "topic": "AI & Multi-Agent",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "xai",
      "4 actions",
      "AI and Search"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/xai.md"
  },
  {
    "id": "dots-mcp-ynab",
    "title": "Ynab MCP",
    "description": "Read and write YNAB budgets: list budgets, accounts, balances, transactions, and categories; record transactions.",
    "company": "Community",
    "channelId": 2,
    "topic": "Finance & Commerce",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "ynab",
      "6 actions",
      "Finance and Commerce"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/ynab.md"
  },
  {
    "id": "dots-mcp-youtube",
    "title": "Youtube MCP",
    "description": "Read channels and videos, search, plus uploads and comments with confirmation.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "long",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "youtube",
      "7 actions",
      "Content and Media"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/youtube.md"
  },
  {
    "id": "dots-mcp-zep",
    "title": "Zep MCP",
    "description": "Work with Zep's temporal memory: create users and threads, append messages, read distilled facts and history.",
    "company": "Community",
    "channelId": 2,
    "topic": "Productivity & Admin",
    "format": "MCP Connector",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-12",
    "tags": [
      "MCP",
      "zep",
      "6 actions",
      "Productivity"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/connectors/zep.md"
  },
  {
    "id": "dots-skill-code-review-pro",
    "title": "Code Review Pro Skill",
    "description": "Professional code review craft: review strategy, feedback that lands, reviewer efficiency, and team review culture. Use when reviewing code or improving a team's review process.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "code-review-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/code-review-pro.md"
  },
  {
    "id": "dots-skill-ci-cd-specialist",
    "title": "Ci Cd Specialist Skill",
    "description": "Design and operate CI/CD pipelines: fast feedback, deployment strategies, environments, and pipeline reliability. Use when building, fixing, or scaling build and deploy pipelines.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "ci-cd-specialist",
      "engineering",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/ci-cd-specialist.md"
  },
  {
    "id": "dots-skill-debugging-pro",
    "title": "Debugging Pro Skill",
    "description": "Systematic debugging: reproduce, isolate, hypothesize, verify - with tooling for hard bugs. Use when stuck on a bug, flaky failure, or production incident.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "debugging-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/debugging-pro.md"
  },
  {
    "id": "dots-skill-docker-pro",
    "title": "Docker Pro Skill",
    "description": "Docker guidance - Dockerfile best practices, multi-stage builds, Compose, networking, volumes, and image security.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "docker-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/docker-pro.md"
  },
  {
    "id": "dots-skill-git-pro",
    "title": "Git Pro Skill",
    "description": "Advanced Git - rebasing, history surgery, bisecting, and recovery - use when Git gets complicated or things go wrong.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "git-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/git-pro.md"
  },
  {
    "id": "dots-skill-github-actions-pro",
    "title": "Github Actions Pro Skill",
    "description": "GitHub Actions guidance - workflow design, caching, matrices, OIDC, reusable workflows, and secure CI/CD.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "github-actions-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/github-actions-pro.md"
  },
  {
    "id": "dots-skill-kubernetes-pro",
    "title": "Kubernetes Pro Skill",
    "description": "Kubernetes guidance - workloads, services, config, RBAC, Helm/Kustomize, troubleshooting, and cluster operations.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "kubernetes-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/kubernetes-pro.md"
  },
  {
    "id": "dots-skill-python-pro",
    "title": "Python Pro Skill",
    "description": "Idiomatic Python: project layout, packaging, type hints, testing, async, and performance. Use when writing, reviewing, or structuring Python projects.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "python-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/python-pro.md"
  },
  {
    "id": "dots-skill-typescript-pro",
    "title": "Typescript Pro Skill",
    "description": "Idiomatic TypeScript: strict typing, generics, discriminated unions, project setup, and type-driven design. Use when writing or reviewing TypeScript, or configuring TS projects.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "typescript-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/typescript-pro.md"
  },
  {
    "id": "dots-skill-refactoring-pro",
    "title": "Refactoring Pro Skill",
    "description": "Systematic refactoring: safe transformations, strangler patterns, characterization tests, and large-scale change management. Use when improving code structure without changing behavior.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "refactoring-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/refactoring-pro.md"
  },
  {
    "id": "dots-skill-tdd-pro",
    "title": "Tdd Pro Skill",
    "description": "Test-driven development done right: red-green-refactor rhythm, test design, and knowing when TDD fits. Use when adopting TDD, writing tests first, or coaching teams.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "tdd-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/tdd-pro.md"
  },
  {
    "id": "dots-skill-sre-pro",
    "title": "Sre Pro Skill",
    "description": "Site reliability engineering - SLIs/SLOs, error budgets, and reliability practices - use when making systems reliable at scale.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "sre-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/sre-pro.md"
  },
  {
    "id": "dots-skill-security-auditor",
    "title": "Security Auditor Skill",
    "description": "Plan and execute security audits against controls frameworks (ISO 27001, SOC 2, NIST CSF) with evidence-based findings.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "security-auditor",
      "engineering",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/security-auditor.md"
  },
  {
    "id": "dots-skill-clean-code",
    "title": "Clean Code Skill",
    "description": "Write readable, maintainable code: naming, small functions, clear control flow, and honest abstractions. Use when writing new code, refactoring, or reviewing for readability.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "clean-code",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/clean-code.md"
  },
  {
    "id": "dots-skill-clean-architecture",
    "title": "Clean Architecture Skill",
    "description": "Clean/hexagonal architecture: dependency rules, ports and adapters, layering, and testable boundaries. Use when structuring applications for maintainability and testability.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "clean-architecture",
      "engineering",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/clean-architecture.md"
  },
  {
    "id": "dots-skill-rest-api-pro",
    "title": "Rest Api Pro Skill",
    "description": "REST API design guidance - resource modeling, versioning, pagination, auth, error formats, and documentation.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "rest-api-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/rest-api-pro.md"
  },
  {
    "id": "dots-skill-graphql-pro",
    "title": "Graphql Pro Skill",
    "description": "GraphQL API guidance - schema design, resolvers, DataLoader, pagination, auth, and production operations.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "graphql-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/graphql-pro.md"
  },
  {
    "id": "dots-skill-database-designer",
    "title": "Database Designer Skill",
    "description": "Relational schema design - normalization, keys, constraints, and evolution - use when modeling data or reviewing a schema.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "database-designer",
      "engineering",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/database-designer.md"
  },
  {
    "id": "dots-skill-postgres-pro",
    "title": "Postgres Pro Skill",
    "description": "Deep PostgreSQL know-how - indexing, tuning, JSONB, and administration - use when working with or troubleshooting Postgres.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "postgres-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/postgres-pro.md"
  },
  {
    "id": "dots-skill-redis-pro",
    "title": "Redis Pro Skill",
    "description": "Redis data structures, caching strategies, and production operations - use when adding caching, queues, or rate limiting with Redis.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "redis-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/redis-pro.md"
  },
  {
    "id": "dots-skill-incident-responder",
    "title": "Incident Responder Skill",
    "description": "Lead security incident response end to end - preparation, detection, containment, eradication, recovery, and lessons learned.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "incident-responder",
      "engineering",
      "slack"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/incident-responder.md"
  },
  {
    "id": "dots-skill-incident-commander",
    "title": "Incident Commander Skill",
    "description": "Leading incident response - roles, communication, and decision-making under pressure - use when running or improving on-call response.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "incident-commander",
      "engineering",
      "slack"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/incident-commander.md"
  },
  {
    "id": "dots-skill-incident-comms",
    "title": "Incident Comms Skill",
    "description": "Communicate during incidents - stakeholder updates, severity frameworks, war-room comms, and post-incident reviews.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "incident-comms",
      "engineering",
      "slack"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/incident-comms.md"
  },
  {
    "id": "dots-skill-sentry-pro-dev",
    "title": "Sentry Pro Dev Skill",
    "description": "Sentry guidance - error tracking setup, release health, performance monitoring, alert rules, and quota management.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "sentry-pro-dev",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/sentry-pro-dev.md"
  },
  {
    "id": "dots-skill-linux-pro",
    "title": "Linux Pro Skill",
    "description": "Linux systems guidance - filesystem, permissions, processes, networking, logs, and production server administration.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "linux-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/linux-pro.md"
  },
  {
    "id": "dots-skill-bash-pro",
    "title": "Bash Pro Skill",
    "description": "Bash scripting guidance - safe scripting patterns, quoting, error handling, pipes, and maintainable shell code.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "bash-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/bash-pro.md"
  },
  {
    "id": "dots-skill-devops-pro",
    "title": "Devops Pro Skill",
    "description": "Standardized devops pro workflow configured for OpenAI Dots.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "devops-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/devops-pro.md"
  },
  {
    "id": "dots-skill-helm-pro",
    "title": "Helm Pro Skill",
    "description": "Helm guidance - chart structure, templating, values management, releases, hooks, and chart best practices.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "helm-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/helm-pro.md"
  },
  {
    "id": "dots-skill-terraform-pro",
    "title": "Terraform Pro Skill",
    "description": "Terraform guidance - HCL structure, modules, state management, workspaces, planning discipline, and safe applies.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "terraform-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/terraform-pro.md"
  },
  {
    "id": "dots-skill-argo-cd-pro",
    "title": "Argo Cd Pro Skill",
    "description": "Argo CD guidance - GitOps workflows, Application manifests, sync strategies, AppProjects, and multi-cluster ops.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "argo-cd-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/argo-cd-pro.md"
  },
  {
    "id": "dots-skill-monorepo-pro",
    "title": "Monorepo Pro Skill",
    "description": "Run effective monorepos: workspace layout, task orchestration, versioning, CI scaling, and code sharing. Use when setting up or managing monorepos.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "monorepo-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/monorepo-pro.md"
  },
  {
    "id": "dots-skill-microservices-pro",
    "title": "Microservices Pro Skill",
    "description": "Design and operate microservices: decomposition, inter-service communication, data ownership, and operational maturity. Use when decomposing systems or reviewing service architectures.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "microservices-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/microservices-pro.md"
  },
  {
    "id": "dots-skill-nextjs-pro",
    "title": "Nextjs Pro Skill",
    "description": "Idiomatic Next.js: App Router, Server Components, data fetching/caching, and production deployment. Use when writing, reviewing, or structuring Next.js applications.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "nextjs-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/nextjs-pro.md"
  },
  {
    "id": "dots-skill-fastapi-pro",
    "title": "Fastapi Pro Skill",
    "description": "FastAPI guidance - typed endpoints, Pydantic validation, dependency injection, async patterns, and production deployment.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "fastapi-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/fastapi-pro.md"
  },
  {
    "id": "dots-skill-django-pro",
    "title": "Django Pro Skill",
    "description": "Django guidance - project structure, ORM mastery, admin, auth, async views, and production deployment.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "django-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/django-pro.md"
  },
  {
    "id": "dots-skill-react-pro",
    "title": "React Pro Skill",
    "description": "Write professional React: hooks discipline, composition, performance, error boundaries, and modern patterns. Use for any React development beyond basics.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "react-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/react-pro.md"
  },
  {
    "id": "dots-skill-testing-pro",
    "title": "Testing Pro Skill",
    "description": "Professional testing craft: test design, doubles, boundaries, maintainable suites, and testing strategy. Use when writing tests, designing test suites, or improving testing practice.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "testing-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/testing-pro.md"
  },
  {
    "id": "dots-skill-e2e-testing-pro",
    "title": "E2E Testing Pro Skill",
    "description": "End-to-end testing mastery: critical journeys, Playwright/Cypress patterns, flakiness control, and CI integration. Use when building or fixing browser E2E suites.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "e2e-testing-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/e2e-testing-pro.md"
  },
  {
    "id": "dots-skill-performance-pro",
    "title": "Performance Pro Skill",
    "description": "Systematic performance engineering: measure, profile, optimize hotspots, and set budgets. Use when diagnosing slowness or making systems faster.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "performance-pro",
      "engineering",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/performance-pro.md"
  },
  {
    "id": "dots-skill-api-integration-specialist",
    "title": "Api Integration Specialist Skill",
    "description": "Integrate third-party APIs reliably: auth, pagination, retries, webhooks, rate limits, and contract testing. Use when connecting to external REST/GraphQL APIs or building resilient API clients.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "api-integration-specialist",
      "engineering",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/api-integration-specialist.md"
  },
  {
    "id": "dots-skill-dependency-scanner",
    "title": "Dependency Scanner Skill",
    "description": "Manage software composition analysis - SBOMs, vulnerability triage, and remediation of third-party dependencies.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "dependency-scanner",
      "engineering",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/dependency-scanner.md"
  },
  {
    "id": "dots-skill-dependabot-review",
    "title": "Dependabot Review Skill",
    "description": "Review Dependabot PRs efficiently: triage, risk assessment, batching, and auto-merge policies. Use when dependency update PRs pile up or you want a sane update workflow.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "dependabot-review",
      "engineering",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/dependabot-review.md"
  },
  {
    "id": "dots-skill-vulnerability-management",
    "title": "Vulnerability Management Skill",
    "description": "Run a full vulnerability management lifecycle - discovery, prioritization, remediation SLAs, and continuous measurement.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "vulnerability-management",
      "engineering",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/vulnerability-management.md"
  },
  {
    "id": "dots-skill-container-security",
    "title": "Container Security Skill",
    "description": "Secure containerized workloads - image hardening, registry scanning, runtime protection, and supply-chain integrity.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "container-security",
      "engineering",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/container-security.md"
  },
  {
    "id": "dots-skill-cloud-security",
    "title": "Cloud Security Skill",
    "description": "Secure cloud environments - IAM, posture management, logging, and multi-account architecture across providers.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "cloud-security",
      "engineering",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/engineering/cloud-security.md"
  },
  {
    "id": "dots-skill-literature-review",
    "title": "Literature Review Skill",
    "description": "Conduct systematic literature reviews - search strategy, screening, quality appraisal, synthesis, and gap identification. Use when mapping what a field knows on a question.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "literature-review",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/literature-review.md"
  },
  {
    "id": "dots-skill-market-researcher",
    "title": "Market Researcher Skill",
    "description": "Conduct market research - sizing, segmentation, competitor analysis, surveys, and actionable market intelligence.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "market-researcher",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/market-researcher.md"
  },
  {
    "id": "dots-skill-data-scientist",
    "title": "Data Scientist Skill",
    "description": "Run the data science workflow end to end - framing, exploration, feature engineering, modeling, validation, and communicating results. Use when turning raw data into decisions or predictions.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "data-scientist",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/data-scientist.md"
  },
  {
    "id": "dots-skill-competitive-intelligence",
    "title": "Competitive Intelligence Skill",
    "description": "Standardized competitive intelligence workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "competitive-intelligence",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/competitive-intelligence.md"
  },
  {
    "id": "dots-skill-deep-work-planner",
    "title": "Deep Work Planner Skill",
    "description": "Plan and protect deep work: scheduling focus blocks, task selection, shutdown rituals, and measuring depth. Use when important work never gets sustained attention or days fill with shallow tasks.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "deep-work-planner",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/deep-work-planner.md"
  },
  {
    "id": "dots-skill-bayesian-statistics",
    "title": "Bayesian Statistics Skill",
    "description": "Bayesian data analysis - priors, likelihoods, posterior computation, model comparison, and honest reporting.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "bayesian-statistics",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/bayesian-statistics.md"
  },
  {
    "id": "dots-skill-statistical-modeling",
    "title": "Statistical Modeling Skill",
    "description": "Build statistical models properly - choosing models, checking assumptions, quantifying uncertainty, and avoiding common inferential traps. Use when moving beyond descriptives to inference or prediction with statistics.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "statistical-modeling",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/statistical-modeling.md"
  },
  {
    "id": "dots-skill-time-series-analysis",
    "title": "Time Series Analysis Skill",
    "description": "Analyze time-ordered data - decomposition, stationarity, forecasting models, changepoint detection, and proper temporal validation. Use when the order of observations matters.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "time-series-analysis",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/time-series-analysis.md"
  },
  {
    "id": "dots-skill-causal-inference",
    "title": "Causal Inference Skill",
    "description": "Estimate causal effects from observational and experimental data - DAGs, confounding control, quasi-experimental designs, and sensitivity analysis. Use when you need \"what causes what,\" not just correlation.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "causal-inference",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/causal-inference.md"
  },
  {
    "id": "dots-skill-ai-research",
    "title": "Ai Research Skill",
    "description": "Standardized ai research workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "ai-research",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/ai-research.md"
  },
  {
    "id": "dots-skill-eval-frameworks",
    "title": "Eval Frameworks Skill",
    "description": "Build evaluation frameworks for LLM systems - harness design, graders, datasets, regression tracking, and human-in-the-loop eval. Use when you need systematic measurement of model or agent quality.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "eval-frameworks",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/eval-frameworks.md"
  },
  {
    "id": "dots-skill-llm-benchmarks",
    "title": "Llm Benchmarks Skill",
    "description": "Use LLM benchmarks wisely - what major benchmarks measure, their limits, contamination risks, and how to interpret scores. Use when evaluating models or reading benchmark claims critically.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "llm-benchmarks",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/llm-benchmarks.md"
  },
  {
    "id": "dots-skill-patent-search",
    "title": "Patent Search Skill",
    "description": "Standardized patent search workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "patent-search",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/patent-search.md"
  },
  {
    "id": "dots-skill-academic-writing",
    "title": "Academic Writing Skill",
    "description": "Standardized academic writing workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "academic-writing",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/academic-writing.md"
  },
  {
    "id": "dots-skill-grant-writing",
    "title": "Grant Writing Skill",
    "description": "Standardized grant writing workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "grant-writing",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/grant-writing.md"
  },
  {
    "id": "dots-skill-survey-designer",
    "title": "Survey Designer Skill",
    "description": "Design effective surveys - question writing, response scales, sampling, bias reduction, and pilot testing. Use when collecting structured data from people and wanting answers you can trust.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "survey-designer",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/survey-designer.md"
  },
  {
    "id": "dots-skill-qualitative-analysis",
    "title": "Qualitative Analysis Skill",
    "description": "Analyze qualitative data rigorously - coding, thematic analysis, grounded theory, and trustworthy interpretation. Use when working with interviews, open-ended responses, or observational data.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "qualitative-analysis",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/qualitative-analysis.md"
  },
  {
    "id": "dots-skill-citation-manager",
    "title": "Citation Manager Skill",
    "description": "Manage citations and references - collecting sources, organizing libraries, formatting bibliographies, and keeping reference integrity. Use when writing anything that cites sources.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "citation-manager",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/citation-manager.md"
  },
  {
    "id": "dots-skill-research-paper-assistant",
    "title": "Research Paper Assistant Skill",
    "description": "Work with academic papers - find them, read efficiently, extract claims and methods, compare across papers, and track what matters. Use when doing literature-driven research with AI assistance.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "research-paper-assistant",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/research-paper-assistant.md"
  },
  {
    "id": "dots-skill-methods-writing",
    "title": "Methods Writing Skill",
    "description": "Writing reproducible Methods sections - detail calibration, reporting standards, and the reproducibility checklist.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "methods-writing",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/methods-writing.md"
  },
  {
    "id": "dots-skill-peer-review-checklist",
    "title": "Peer Review Checklist Skill",
    "description": "Conducting rigorous peer review - structured evaluation, major vs minor issues, and writing reviews authors can act on.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "peer-review-checklist",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/peer-review-checklist.md"
  },
  {
    "id": "dots-skill-experiment-designer",
    "title": "Experiment Designer Skill",
    "description": "Design rigorous experiments - hypotheses, controls, randomization, power analysis, and preregistration. Use when planning any study where you need trustworthy causal conclusions.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "experiment-designer",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/experiment-designer.md"
  },
  {
    "id": "dots-skill-trend-analyzer",
    "title": "Trend Analyzer Skill",
    "description": "Standardized trend analyzer workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "trend-analyzer",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/trend-analyzer.md"
  },
  {
    "id": "dots-skill-data-labeling",
    "title": "Data Labeling Skill",
    "description": "Design annotation pipelines that produce reliable training labels - guidelines, agreement measurement, and quality control.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "data-labeling",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/data-labeling.md"
  },
  {
    "id": "dots-skill-rag-engineer",
    "title": "Rag Engineer Skill",
    "description": "Engineer retrieval-augmented generation systems - chunking, embeddings, hybrid retrieval, reranking, and grounded generation with citations. Use when building or fixing RAG pipelines.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Research & Intelligence",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "rag-engineer",
      "research",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/research/rag-engineer.md"
  },
  {
    "id": "dots-skill-capacity-planner",
    "title": "Capacity Planner Skill",
    "description": "Capacity planning - forecasting demand, sizing infrastructure, and avoiding both outages and waste - use when scaling systems.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "capacity-planner",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/capacity-planner.md"
  },
  {
    "id": "dots-skill-backup-strategist",
    "title": "Backup Strategist Skill",
    "description": "Design backup strategies that survive real disasters: 3-2-1 rule, versioning, testing restores, and covering all devices. Use when setting up backups or auditing whether current backups actually work.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "backup-strategist",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/backup-strategist.md"
  },
  {
    "id": "dots-skill-backup-strategy",
    "title": "Backup Strategy Skill",
    "description": "Designing backup strategies for PaaS-hosted apps - what to back up, how often, and proving restores work.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "backup-strategy",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/backup-strategy.md"
  },
  {
    "id": "dots-skill-status-page",
    "title": "Status Page Skill",
    "description": "Build and maintain status pages - incident communication, uptime transparency, and subscriber notifications.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "status-page",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/status-page.md"
  },
  {
    "id": "dots-skill-runbook-writer",
    "title": "Runbook Writer Skill",
    "description": "Writing runbooks that work at 3am - structure, diagnostics, and safe procedures - use when documenting operational response.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "runbook-writer",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/runbook-writer.md"
  },
  {
    "id": "dots-skill-on-call-guide",
    "title": "On Call Guide Skill",
    "description": "Sustainable on-call - rotations, alert hygiene, handoffs, and burnout prevention - use when setting up or fixing on-call.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "on-call-guide",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/on-call-guide.md"
  },
  {
    "id": "dots-skill-on-call-handoff",
    "title": "On Call Handoff Skill",
    "description": "Run clean on-call handoffs - shift transitions, knowledge transfer, runbook currency, and sustainable rotations.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "on-call-handoff",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/on-call-handoff.md"
  },
  {
    "id": "dots-skill-cron-monitoring",
    "title": "Cron Monitoring Skill",
    "description": "Monitoring scheduled jobs - heartbeat checks, missed runs, and duration anomalies - platform-agnostic patterns.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "cron-monitoring",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/cron-monitoring.md"
  },
  {
    "id": "dots-skill-alert-rules",
    "title": "Alert Rules Skill",
    "description": "Designing alert rules that fire when it matters - thresholds, burn rates, and routing - for any monitoring stack.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "alert-rules",
      "operations",
      "sentry"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/alert-rules.md"
  },
  {
    "id": "dots-skill-escalation-policies",
    "title": "Escalation Policies Skill",
    "description": "Design escalation policies - tiers, timeouts, stakeholder matrices, and escalation paths that actually work.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "escalation-policies",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/escalation-policies.md"
  },
  {
    "id": "dots-skill-license-auditor",
    "title": "License Auditor Skill",
    "description": "Audit open-source license compliance - inventory obligations, manage copyleft risk, and build approval workflows.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "license-auditor",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/license-auditor.md"
  },
  {
    "id": "dots-skill-compliance-mapper",
    "title": "Compliance Mapper Skill",
    "description": "Map security controls across frameworks - one control set satisfying ISO 27001, SOC 2, NIST, PCI DSS, and more.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "compliance-mapper",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/compliance-mapper.md"
  },
  {
    "id": "dots-skill-cloud-pricing",
    "title": "Cloud Pricing Skill",
    "description": "Understanding and optimizing cloud/PaaS pricing - cost models, common traps, and FinOps habits - vendor-neutral.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "cloud-pricing",
      "operations",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/cloud-pricing.md"
  },
  {
    "id": "dots-skill-budget-checkin",
    "title": "Budget Checkin Skill",
    "description": "Run a monthly money check-in with an AI assistant: categorize spending, spot leaks, set one savings target, and view it through the 50/30/20 lens - judgment-free. Use once a month to stay aware of where your money goes. General educational information, not financial advice.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "budget-checkin",
      "operations",
      "stripe"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/budget-checkin.md"
  },
  {
    "id": "dots-skill-financial-modeler",
    "title": "Financial Modeler Skill",
    "description": "Build financial models - revenue forecasts, unit economics, scenario analysis, and investor-grade spreadsheets.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "financial-modeler",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/financial-modeler.md"
  },
  {
    "id": "dots-skill-saas-security-essentials",
    "title": "Saas Security Essentials Skill",
    "description": "Cover SaaS security fundamentals - auth, data protection, access control, compliance basics, and incident readiness.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "saas-security-essentials",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/saas-security-essentials.md"
  },
  {
    "id": "dots-skill-secrets-manager",
    "title": "Secrets Manager Skill",
    "description": "Design secrets management - vaulting, rotation, least-privilege access, and eliminating hardcoded credentials.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "secrets-manager",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/secrets-manager.md"
  },
  {
    "id": "dots-skill-iam-pro",
    "title": "Iam Pro Skill",
    "description": "Build identity and access management - lifecycle, privileged access, governance, and continuous access review.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "iam-pro",
      "operations",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/iam-pro.md"
  },
  {
    "id": "dots-skill-rbac-designer",
    "title": "Rbac Designer Skill",
    "description": "Design role-based access control - role engineering, permission modeling, hierarchies, and governance.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "rbac-designer",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/rbac-designer.md"
  },
  {
    "id": "dots-skill-mfa-rollout",
    "title": "Mfa Rollout Skill",
    "description": "Plan and execute organization-wide MFA adoption - phishing-resistant methods, enrollment, exceptions, and measurement.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "mfa-rollout",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/mfa-rollout.md"
  },
  {
    "id": "dots-skill-zero-trust-architect",
    "title": "Zero Trust Architect Skill",
    "description": "Design zero-trust architecture - identity-centric access, micro-segmentation, continuous verification, and phased migration.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "zero-trust-architect",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/zero-trust-architect.md"
  },
  {
    "id": "dots-skill-soc-analyst",
    "title": "Soc Analyst Skill",
    "description": "Run security operations center workflows - alert triage, investigation, escalation, and shift handover for detection and response.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "soc-analyst",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/soc-analyst.md"
  },
  {
    "id": "dots-skill-audit-logger",
    "title": "Audit Logger Skill",
    "description": "Standardized audit logger workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "audit-logger",
      "operations",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/audit-logger.md"
  },
  {
    "id": "dots-skill-procurement-gatekeeper",
    "title": "Procurement Gatekeeper Skill",
    "description": "Standardized procurement gatekeeper workflow configured for OpenAI Dots.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "procurement-gatekeeper",
      "operations",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/procurement-gatekeeper.md"
  },
  {
    "id": "dots-skill-invoice-reconciler",
    "title": "Invoice Reconciler Skill",
    "description": "Standardized invoice reconciler workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Systems & Architecture",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "invoice-reconciler",
      "operations",
      "stripe"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/operations/invoice-reconciler.md"
  },
  {
    "id": "dots-skill-sales-coach",
    "title": "Sales Coach Skill",
    "description": "Coach sales performance - discovery, objection handling, negotiation, pipeline management, and winning habits.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "sales-coach",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/sales-coach.md"
  },
  {
    "id": "dots-skill-account-based-marketing",
    "title": "Account Based Marketing Skill",
    "description": "Run ABM programs - target account selection, personalized campaigns, sales orchestration, and account-level measurement.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "account-based-marketing",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/account-based-marketing.md"
  },
  {
    "id": "dots-skill-channel-sales",
    "title": "Channel Sales Skill",
    "description": "Build indirect sales channels - partner recruitment, enablement, deal registration, and channel conflict management.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "channel-sales",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/channel-sales.md"
  },
  {
    "id": "dots-skill-crm-specialist",
    "title": "Crm Specialist Skill",
    "description": "Manage CRM systems - data architecture, pipeline design, automation, user adoption, and reporting.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "crm-specialist",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/crm-specialist.md"
  },
  {
    "id": "dots-skill-customer-success",
    "title": "Customer Success Skill",
    "description": "Run customer success - onboarding, health scoring, retention plays, expansion, and churn prevention.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "customer-success",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/customer-success.md"
  },
  {
    "id": "dots-skill-customer-support-playbook",
    "title": "Customer Support Playbook Skill",
    "description": "Build SaaS customer support - tiered support models, SLAs, macros, escalation, and support-driven product feedback.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "customer-support-playbook",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/customer-support-playbook.md"
  },
  {
    "id": "dots-skill-lead-scoring",
    "title": "Lead Scoring Skill",
    "description": "Build lead scoring models - fit and behavior criteria, thresholds, decay, and sales-ready handoff processes.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "lead-scoring",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/lead-scoring.md"
  },
  {
    "id": "dots-skill-b2b-demand-gen",
    "title": "B2B Demand Gen Skill",
    "description": "Generate B2B pipeline - campaign strategy, multi-channel programs, SDR alignment, and pipeline measurement.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "b2b-demand-gen",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/b2b-demand-gen.md"
  },
  {
    "id": "dots-skill-outbound-prospecting",
    "title": "Outbound Prospecting Skill",
    "description": "Standardized outbound prospecting workflow configured for OpenAI Dots.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "outbound-prospecting",
      "sales",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/outbound-prospecting.md"
  },
  {
    "id": "dots-skill-deal-desk",
    "title": "Deal Desk Skill",
    "description": "Standardized deal desk workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "deal-desk",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/deal-desk.md"
  },
  {
    "id": "dots-skill-contract-reviewer",
    "title": "Contract Reviewer Skill",
    "description": "Systematic contract review assistance - clause extraction, risk flagging, and comparison - use when analyzing agreements.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "contract-reviewer",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/contract-reviewer.md"
  },
  {
    "id": "dots-skill-pricing-strategist",
    "title": "Pricing Strategist Skill",
    "description": "Develop pricing strategy - research, models, packaging, testing, and communicating price changes.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "pricing-strategist",
      "sales",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/pricing-strategist.md"
  },
  {
    "id": "dots-skill-pitch-deck-creator",
    "title": "Pitch Deck Creator Skill",
    "description": "Build compelling pitch decks - narrative arc, slide-by-slide structure, and investor-focused storytelling.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "pitch-deck-creator",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/pitch-deck-creator.md"
  },
  {
    "id": "dots-skill-partnership-manager",
    "title": "Partnership Manager Skill",
    "description": "Build strategic partnerships - sourcing, structuring deals, co-marketing, and managing partner relationships.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "partnership-manager",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/partnership-manager.md"
  },
  {
    "id": "dots-skill-influencer-outreach",
    "title": "Influencer Outreach Skill",
    "description": "Plan influencer partnerships - finding creators, outreach, negotiation, campaign management, and ROI measurement.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "influencer-outreach",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/influencer-outreach.md"
  },
  {
    "id": "dots-skill-conversion-optimizer",
    "title": "Conversion Optimizer Skill",
    "description": "Increase conversion rates - CRO audits, A/B testing, landing page optimization, and experimentation programs.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "conversion-optimizer",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/conversion-optimizer.md"
  },
  {
    "id": "dots-skill-proposal-figures",
    "title": "Proposal Figures Skill",
    "description": "Designing grant proposal figures - conceptual models, preliminary-data displays, and schematics that sell the science.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "proposal-figures",
      "sales",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/proposal-figures.md"
  },
  {
    "id": "dots-skill-rfp-response-builder",
    "title": "Rfp Response Builder Skill",
    "description": "Standardized rfp response builder workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "rfp-response-builder",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/rfp-response-builder.md"
  },
  {
    "id": "dots-skill-client-onboarding",
    "title": "Client Onboarding Skill",
    "description": "Standardized client onboarding workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "client-onboarding",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/client-onboarding.md"
  },
  {
    "id": "dots-skill-retention-specialist",
    "title": "Retention Specialist Skill",
    "description": "Standardized retention specialist workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "retention-specialist",
      "sales",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/sales/retention-specialist.md"
  },
  {
    "id": "dots-skill-content-strategist",
    "title": "Content Strategist Skill",
    "description": "Design content strategies - audience research, pillar topics, editorial calendars, and measurement frameworks that tie content to revenue.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "content-strategist",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/content-strategist.md"
  },
  {
    "id": "dots-skill-copywriter",
    "title": "Copywriter Skill",
    "description": "Write persuasive copy for ads, landing pages, emails, and more - headlines, hooks, and calls-to-action that convert.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "copywriter",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/copywriter.md"
  },
  {
    "id": "dots-skill-seo-specialist",
    "title": "Seo Specialist Skill",
    "description": "Execute technical and strategic SEO - audits, keyword strategy, link building, and sustainable organic growth.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "seo-specialist",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/seo-specialist.md"
  },
  {
    "id": "dots-skill-seo-content-writer",
    "title": "Seo Content Writer Skill",
    "description": "Write search-optimized content that ranks - briefs, outlines, drafts, and on-page optimization for articles and landing pages.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "seo-content-writer",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/seo-content-writer.md"
  },
  {
    "id": "dots-skill-technical-writer",
    "title": "Technical Writer Skill",
    "description": "Standardized technical writer workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "technical-writer",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/technical-writer.md"
  },
  {
    "id": "dots-skill-changelog-pro",
    "title": "Changelog Pro Skill",
    "description": "Maintain changelogs users actually read: Keep-a-Changelog format, automation, and release-note craft. Use when writing changelogs or automating release notes.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "changelog-pro",
      "content",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/changelog-pro.md"
  },
  {
    "id": "dots-skill-changelog-comms",
    "title": "Changelog Comms Skill",
    "description": "Write and publish changelogs - release notes that users read, versioning, and launch communication cadence.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "changelog-comms",
      "content",
      "slack"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/changelog-comms.md"
  },
  {
    "id": "dots-skill-newsletter-pro",
    "title": "Newsletter Pro Skill",
    "description": "Run professional newsletters - content strategy, writing, growth, deliverability, and monetization.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "newsletter-pro",
      "content",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/newsletter-pro.md"
  },
  {
    "id": "dots-skill-email-marketer",
    "title": "Email Marketer Skill",
    "description": "Run email marketing end-to-end - list building, campaigns, automation flows, deliverability, and performance optimization.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "email-marketer",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/email-marketer.md"
  },
  {
    "id": "dots-skill-social-media-manager",
    "title": "Social Media Manager Skill",
    "description": "Plan, create, and manage social media presence - content calendars, platform strategy, engagement, and performance reporting.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "social-media-manager",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/social-media-manager.md"
  },
  {
    "id": "dots-skill-podcast-marketer",
    "title": "Podcast Marketer Skill",
    "description": "Market through podcasts - launching shows, guest booking, promotion, and measuring podcast ROI.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "podcast-marketer",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/podcast-marketer.md"
  },
  {
    "id": "dots-skill-video-editor",
    "title": "Video Editor Skill",
    "description": "Edit compelling videos with narrative structure, pacing, cuts, sound design, and color workflow.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "video-editor",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/video-editor.md"
  },
  {
    "id": "dots-skill-pr-specialist",
    "title": "Pr Specialist Skill",
    "description": "Run public relations - media outreach, press releases, thought leadership, and crisis communications.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "pr-specialist",
      "content",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/pr-specialist.md"
  },
  {
    "id": "dots-skill-documentation-pro",
    "title": "Documentation Pro Skill",
    "description": "Write documentation developers actually use: READMEs, API docs, ADRs, runbooks, and docs-as-code workflows. Use when writing or improving technical documentation.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "documentation-pro",
      "content",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/documentation-pro.md"
  },
  {
    "id": "dots-skill-speech-writer",
    "title": "Speech Writer Skill",
    "description": "Standardized speech writer workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "speech-writer",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/speech-writer.md"
  },
  {
    "id": "dots-skill-brand-guidelines",
    "title": "Brand Guidelines Skill",
    "description": "Build and apply brand guidelines - voice, visual identity, and usage rules that keep every touchpoint consistent.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "brand-guidelines",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/brand-guidelines.md"
  },
  {
    "id": "dots-skill-brand-identity",
    "title": "Brand Identity Skill",
    "description": "Build complete brand identity systems with strategy, visual language, voice, and usage guidelines.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "brand-identity",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/brand-identity.md"
  },
  {
    "id": "dots-skill-case-study-builder",
    "title": "Case Study Builder Skill",
    "description": "Standardized case study builder workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "case-study-builder",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/case-study-builder.md"
  },
  {
    "id": "dots-skill-press-release-drafter",
    "title": "Press Release Drafter Skill",
    "description": "Standardized press release drafter workflow configured for OpenAI Dots.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "press-release-drafter",
      "content",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/press-release-drafter.md"
  },
  {
    "id": "dots-skill-ui-copywriter",
    "title": "Ui Copywriter Skill",
    "description": "Standardized ui copywriter workflow configured for OpenAI Dots.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Productivity & Admin",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "ui-copywriter",
      "content",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/content/ui-copywriter.md"
  },
  {
    "id": "dots-skill-daily-briefing",
    "title": "Daily Briefing Skill",
    "description": "Build a morning briefing ritual with OpenAI Dot: overnight priorities, today's calendar, weather-aware planning, and top 3 focus items as a concise chat summary.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "daily-briefing",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/daily-briefing.md"
  },
  {
    "id": "dots-skill-calendar-guardian",
    "title": "Calendar Guardian Skill",
    "description": "Protect your time with OpenAI Dot as calendar guardian: time-blocking, buffer time, declining gracefully, weekly calendar audits, and defending focus and personal time.",
    "company": "Google",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "calendar-guardian",
      "productivity",
      "google-workspace"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/calendar-guardian.md"
  },
  {
    "id": "dots-skill-calendar-pro",
    "title": "Calendar Pro Skill",
    "description": "Run your calendar like a pro: timeboxing, calendar layering, meeting hygiene, buffer design, and weekly planning rituals. Use when your schedule feels chaotic or your calendar controls you instead of the reverse.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "calendar-pro",
      "productivity",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/calendar-pro.md"
  },
  {
    "id": "dots-skill-inbox-zero-coach",
    "title": "Inbox Zero Coach Skill",
    "description": "Tame email overload with OpenAI Dot as your coach: the 4D triage method (delete/delegate/respond/defer/file), batching, reply templates, unsubscribing, and a daily 15-minute routine.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "inbox-zero-coach",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/inbox-zero-coach.md"
  },
  {
    "id": "dots-skill-email-triage",
    "title": "Email Triage Skill",
    "description": "Reach and sustain inbox zero: triage workflows, filters, templates, batching, and unsubscribing systems. Use when email eats your day or your inbox has become an anxiety source.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "email-triage",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/email-triage.md"
  },
  {
    "id": "dots-skill-meeting-prep-brief",
    "title": "Meeting Prep Brief Skill",
    "description": "Prepare for any meeting in minutes: build a 5-minute brief (purpose, people, your goal, questions, materials), research attendees, and capture decisions and action items afterward. Use when someone asks to prep for a meeting, has a big call coming up, or wants a debrief after one.",
    "company": "GitHub",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "meeting-prep-brief",
      "productivity",
      "github"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/meeting-prep-brief.md"
  },
  {
    "id": "dots-skill-meeting-notes-ai",
    "title": "Meeting Notes Ai Skill",
    "description": "Use AI for meeting notes - automated summaries, action item extraction, and turning meetings into searchable knowledge.",
    "company": "Google",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "meeting-notes-ai",
      "productivity",
      "google-workspace"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/meeting-notes-ai.md"
  },
  {
    "id": "dots-skill-meeting-optimizer",
    "title": "Meeting Optimizer Skill",
    "description": "Make meetings fewer, shorter, and better: agenda design, facilitation, async alternatives, and meeting audits. Use when calendars are full of low-value meetings or you're redesigning team collaboration norms.",
    "company": "Google",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "meeting-optimizer",
      "productivity",
      "google-workspace"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/meeting-optimizer.md"
  },
  {
    "id": "dots-skill-weekly-review",
    "title": "Weekly Review Skill",
    "description": "Run a weekly review that keeps your whole system trusted: capture, clarify, calendar, and project check-ins. Use when tasks slip, the system goes stale, or weeks feel reactive.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "weekly-review",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/weekly-review.md"
  },
  {
    "id": "dots-skill-weekly-review-ritual",
    "title": "Weekly Review Ritual Skill",
    "description": "Run a GTD-style weekly review with the assistant: clear your inboxes, review last week and next week's calendar, check goals and project status, choose next week's priorities, and celebrate wins. Use when someone wants a weekly planning session, feels scattered, or says \"help me review my week.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "weekly-review-ritual",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/weekly-review-ritual.md"
  },
  {
    "id": "dots-skill-habit-tracker",
    "title": "Habit Tracker Skill",
    "description": "Design habit systems that stick: habit selection, tracking methods, streaks, environment design, and recovery from slips. Use when building new routines or fixing ones that keep failing.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "habit-tracker",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/habit-tracker.md"
  },
  {
    "id": "dots-skill-habit-tracker-coach",
    "title": "Habit Tracker Coach Skill",
    "description": "Build habits with your AI assistant as coach: start tiny, stack habits onto existing routines, do quick daily check-ins, repair streaks with the never-miss-twice rule, and review weekly. Use when starting exercise, reading, meditation, or any daily routine.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "habit-tracker-coach",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/habit-tracker-coach.md"
  },
  {
    "id": "dots-skill-pomodoro-coach",
    "title": "Pomodoro Coach Skill",
    "description": "Coach the Pomodoro Technique properly: interval design, task sizing, interruption handling, and adapting cycles to real work. Use when building focused work habits or fighting distraction and procrastination.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "pomodoro-coach",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/pomodoro-coach.md"
  },
  {
    "id": "dots-skill-task-manager",
    "title": "Task Manager Skill",
    "description": "Design a personal task management system that actually works: capture, clarify, organize, review, and engage across any tool. Use when choosing or fixing how you manage tasks, or evaluating task apps.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "task-manager",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/task-manager.md"
  },
  {
    "id": "dots-skill-second-brain",
    "title": "Second Brain Skill",
    "description": "Build a second brain: a trusted external system for capturing, organizing, and retrieving everything you learn and need. Use when knowledge is scattered or you want ideas to compound over time.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "second-brain",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/second-brain.md"
  },
  {
    "id": "dots-skill-zettelkasten",
    "title": "Zettelkasten Skill",
    "description": "Practice the Zettelkasten method: atomic notes, unique IDs, linking, and building a thinking partner from your notes. Use when doing research, writing, or long-term knowledge work.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "zettelkasten",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/zettelkasten.md"
  },
  {
    "id": "dots-skill-travel-day-planner",
    "title": "Travel Day Planner Skill",
    "description": "Plan day trips and travel days with an AI assistant: build itineraries around real open hours and transit, make packing checklists, set a daily budget, and prepare rain-day backup plans. Use for day trips, city days, or any single travel day.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "travel-day-planner",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/travel-day-planner.md"
  },
  {
    "id": "dots-skill-time-tracker",
    "title": "Time Tracker Skill",
    "description": "Track where your time actually goes: manual vs. automatic tracking, categorization, analysis, and turning data into better schedules. Use when diagnosing time leaks or building an honest picture of your workweek.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "time-tracker",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/time-tracker.md"
  },
  {
    "id": "dots-skill-focus-modes",
    "title": "Focus Modes Skill",
    "description": "Design focus modes that actually protect attention: Do Not Disturb schedules, app filtering, notification tiers, and context-specific setups. Use when interruptions fragment your day or 'do not disturb' never stays on.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "focus-modes",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/focus-modes.md"
  },
  {
    "id": "dots-skill-home-task-manager",
    "title": "Home Task Manager Skill",
    "description": "Run your household like a calm system: capture every home task into a master list, pick a weekly room/zone focus, track maintenance schedules (filters, servicing, seasonal jobs), and split chores fairly with family or roommates. Use when the house feels chaotic, chores are unevenly split, or maintenance keeps getting forgotten.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "home-task-manager",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/home-task-manager.md"
  },
  {
    "id": "dots-skill-note-taker",
    "title": "Note Taker Skill",
    "description": "Take notes that you'll actually use: methods for meetings, lectures, reading, and research, plus processing workflows. Use when improving how you capture and retain information from any source.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "note-taker",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/note-taker.md"
  },
  {
    "id": "dots-skill-reminder-system",
    "title": "Reminder System Skill",
    "description": "Build a reliable reminder setup with OpenAI Dot: capture-everything habit, due dates vs ticklers, recurring reminders, follow-up checks, and escalation when things slip.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "reminder-system",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/reminder-system.md"
  },
  {
    "id": "dots-skill-goal-setter",
    "title": "Goal Setter Skill",
    "description": "Set goals you'll actually pursue: SMART goals, OKRs, outcome vs. process goals, quarterly planning, and review cadences. Use when defining personal or team goals and building the system to track them.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "goal-setter",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/goal-setter.md"
  },
  {
    "id": "dots-skill-executive-coach",
    "title": "Executive Coach Skill",
    "description": "Coach senior leaders on strategic thinking, stakeholder management, presence, and organizational impact.",
    "company": "OpenAI",
    "channelId": 3,
    "topic": "Engineering & DevOps",
    "format": "Dot Skill",
    "year": 2026,
    "access": "public",
    "duration": "medium",
    "date": "2026-09-10",
    "tags": [
      "Skill",
      "executive-coach",
      "productivity",
      "custom"
    ],
    "url": "https://github.com/0x-Shashi/awesome-dots/blob/main/docs/skills/productivity/executive-coach.md"
  }
];
