# Workflow Automation

A live portfolio of agentic workflow engineering: a static site that is written, cross-linked, committed, and deployed by AI agents (Claude Cowork) under human review — documenting the same production workflows that maintain it.

**Live site:** https://nglungfai.github.io/workflow-automation/

## What this demonstrates

- **Agent-authored, human-gated publishing.** Every page was drafted and pushed to production by an agentic workflow; humans hold two gates — review before publish, approval before maintenance changes ship.
- **Packaged skills running against production systems.** Deep dives cover real skills: bulk audience-segment automation driving a live web app through browser automation, and a design system packaged into an auto-triggering skill.
- **Scored, reviewable curation.** The reading list is rated against a published six-criterion rubric: an AI draft, an independent second review, automated validation, and an author gate. The method and its first pilot month are documented on the site.
- **Self-maintaining content.** Pages are checked against deterministic output contracts (links, share tags, nav and footer, read-time honesty, homepage-card sync) before they ship. Corrections and failures are encoded back into the skills and memory the agents run on, so the same mistake doesn't ship twice.

## Structure

```
workflow-automation/
├── index.html                # homepage / post list
├── about.html                # about the author and the operating model
├── reading-list.html         # curated AI reading list with rubric score chips, updated monthly
├── selection/                # reading-list selection method and monthly scorecards
├── styles.css                # shared styles (design-system tokens)
├── scorecards.css            # styles for rubric chips and scorecards
├── assets/                   # diagrams, illustrations, copy-prompt.js, og/ share cards
└── posts/
    ├── how-this-site-ships-itself.html                    # case study
    ├── scoring-the-reading-list.html                      # case study
    ├── prompt-context-harness-loop-engineering.html       # concepts
    ├── audience-platform-automation-skills.html           # skill deep dive
    ├── design-system-skill.html                           # skill deep dive
    ├── getting-started-with-cowork.html                   # beginner path, step 1
    ├── prompting-tips-for-cowork.html                     # beginner path, step 2
    ├── five-workflows-for-data-and-product-teams.html     # beginner path, step 3
    └── creating-your-first-skill.html                     # beginner path, step 4
```

Plain HTML/CSS, no build step, no dependencies. Read times are computed at 250 words per minute and must match the homepage card.

## Publishing

Deployed with GitHub Pages from the `main` branch root via the "Deploy static content to Pages" workflow. Changes are live within a minute or two.

The working copy (the source of truth) is a Google Drive folder; the agentic pipeline mirrors every change into this repo. If the two ever disagree, reconcile the Drive copy against the live repo first, then continue from Drive.

## Adding a new post

1. Copy an existing file in `posts/` as a template.
2. Write the new post using the same `<article class="post">` structure; set the read time from the word count.
3. Add a `<a class="post-card">` entry to `index.html` linking to it, with the same title and read time.
4. Add share tags (description, `og:*`, `twitter:card`) and an OG card in `assets/og/`.
5. Commit and push — GitHub Pages redeploys automatically.
