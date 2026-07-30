# GitHub Actions and lint fix

This patch fixes the CI errors reported by GitHub Actions:

- Removes synchronous `setState` from a route effect in `CollectionNav`.
- Keeps the pathname normalization that restores previous/next navigation.
- Converts the JSX comment-looking text into an explicit string expression.
- Removes one unused callback parameter.
- Disables `react/no-unescaped-entities` for educational code snippets that intentionally display literal quotes.
- Uses `npm ci` and `actions/setup-node@v6` in CI and deployment workflows.
- Moves `pages: write` and `id-token: write` to the deployment job.
- Removes `actions/configure-pages`, which was trying to create a Pages site from the workflow.

GitHub Pages must still be enabled once in repository settings:

Settings → Pages → Build and deployment → Source → GitHub Actions
