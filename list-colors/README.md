# List Colors Power-Up (personal use)

Adds "Change color" to each list's "..." menu. Needs a Trello plan that supports list colors.

## Setup
1. Host these 4 files (index.html, client.js, color.html, config.js) at an HTTPS URL,
   e.g. a GitHub Pages repo: https://YOURNAME.github.io/list-colors/
2. Go to https://trello.com/power-ups/admin > New, fill in the form, and set
   "Iframe connector URL" to https://YOURNAME.github.io/list-colors/index.html
3. In the Power-Up's "Capabilities" tab, tick "list-actions".
4. In the "API key" tab, generate a key. Add your host origin
   (e.g. https://YOURNAME.github.io) under "Allowed origins".
5. Paste the key into config.js and re-upload it.
6. On your board: Power-Ups > Custom > add "List Colors".
7. Open any list's "..." menu > Change color. First time, click "Connect your Trello account".
