---
name: git-auto-push
trigger: always_on
---

# Git Automatic Commit & Push Rule

Whenever any code, content, styling, or configuration changes are made and verified (`npm run build` succeeds):
1. Always automatically commit and push the changes to GitHub (`git push origin main`) without waiting for explicit user prompt.
2. Write concise, meaningful, descriptive commit messages outlining what was added or updated.
3. Inform the user in the final summary that the changes have been committed and pushed to the repository.
