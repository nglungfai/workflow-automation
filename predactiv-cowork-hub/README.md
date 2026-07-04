# Workflow Automation

Static site with tips and tutorials on using Claude Cowork, built for Predactiv employees navigating our AI transformation.

## Structure

```
workflow-automation/
├── index.html              # homepage / post list
├── about.html               # about + contribution guide
├── styles.css                # shared styles
└── posts/
    ├── getting-started-with-cowork.html
    ├── five-workflows-for-data-and-product-teams.html
    ├── prompting-tips-for-cowork.html
    ├── datasphere-segment-automation-skills.html
    └── install-the-predactiv-design-skill.html
```

Plain HTML/CSS, no build step, no dependencies.

## Publish with GitHub Pages

Repo: **https://github.com/nglungfai/workflow-automation**

1. Push this folder's contents to the repo root (see commands below).
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**. Branch: `main`, folder: `/ (root)`. Save.
3. GitHub Pages will serve it at `https://nglungfai.github.io/workflow-automation/` — live in about a minute.

```bash
cd workflow-automation
git init
git add .
git commit -m "Initial site: getting started, workflows, prompting tips, skill deep dives"
git branch -M main
git remote add origin https://github.com/nglungfai/workflow-automation.git
git push -u origin main
```

## Adding a new post

1. Copy an existing file in `posts/` as a template.
2. Write the new post using the same `<article class="post">` structure.
3. Add a `<a class="post-card">` entry to `index.html` linking to it.
4. Commit and push — GitHub Pages redeploys automatically within a minute or two.

## Ideas for future posts

- Cowork + Predactiv MCP: building a live audience dashboard artifact
- Writing effective PRDs with the write-spec skill
- Cowork for incident postmortems and runbooks
- Scheduling recurring Cowork reports (daily briefings, weekly digests)
