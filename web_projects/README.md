# Web Projects (Portfolio, Landing Page, Calculator)

This archive contains three small beginner-friendly web projects:
- `portfolio/` — Personal portfolio site
- `landing-page/` — Product landing page
- `calculator/` — JavaScript calculator with keyboard support

## Instructions to create separate GitHub repositories (one repo per project)

1. Create a repository on GitHub for each project (for example `portfolio`, `landing-page`, `calculator`).
2. On your local machine, run the following for each project (replace <repo-url> with the GitHub repo HTTPS/SSH URL):

   ```bash
   # from the project folder, e.g. portfolio
   git init
   git add .
   git commit -m "Initial commit - project skeleton"
   git branch -M main
   git remote add origin <repo-url>
   git push -u origin main
   ```

3. (Optional) Enable GitHub Pages to host the static site:
   - Go to repository Settings → Pages.
   - Choose branch `main` and folder `/ (root)` or `gh-pages` if you prefer.
   - Save and visit the provided URL.

## Local preview
Just open `index.html` in a browser for each project.

## Notes
- Replace placeholder text, images, and contact info with your real content.
- Each project includes a `README.md` explaining structure and running steps.
