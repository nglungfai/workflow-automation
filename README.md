# Workflow Automation

A live portfolio of agentic workflow engineering: a static site that is written, cross-linked, committed, and deployed by AI agents (Claude Cowork) under human review — documenting the same production workflows that maintain it.

**Live site:** https://nglungfai.github.io/workflow-automation/

## What this demonstrates

- **Agent-authored, human-gated publishing.** Every page was drafted and pushed to production by an agentic workflow; humans hold two gates — review before publish, approval before maintenance changes ship.
- **Packaged skills running against production systems.** Deep dives cover real skills: bulk audience-segment automation driving a live web app through browser automation, and a company design system packaged into an auto-triggering skill.
- **Self-maintaining content.** A scheduled agent audits the site monthly for stale entries, broken links, and drifted claims, and files a report. Corrections and failures are encoded back into the skills and memory the agents run on, so the same mistake doesn't ship twice.

## Structure

```
workflow-automation/
├── index.html                # homepage / post list
├── about.html                # how the site is made (the operating model)
├── reading-list.html         # curated AI reading list, updated monthly
├── styles.css                # shared styles (design-system tokens)
├── assets/                   # diagrams, illustrations, copy-prompt.js
└── posts/
    ├── getting-started-with-cowork.html
    ├── prompting-tips-for-cowork.html
    ├── five-workflows-for-data-and-product-teams.html
    ├── creating-your-first-skill.html
    ├── audience-platform-automation-skills.html
    ├── design-system-skill.html
    └── prompt-context-harness-loop-engineering.html
```

Plain HTML/CSS, no build step, no dependencies.

## Publishing

Deployed with GitHub Pages from the `main` branch root via the "Deploy static content to Pages" workflow. Commits land through the same agentic pipeline that writes the content; changes are live within a minute or two.

## Adding a new post

1. Copy an existing file in `posts/` as a template.
2. Write the new post using the same `<article class="post">` structure.
3. Add a `<a class="post-card">` entry to `index.html` linking to it.
4. Commit and push — GitHub Pages redeploys automatically.
