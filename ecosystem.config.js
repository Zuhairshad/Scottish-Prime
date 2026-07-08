// PM2 process definition for Scottish Prime Energy.
// Start:  pm2 start ecosystem.config.js
// Reload: pm2 reload scottish-energy
//
// `node_modules` is NOT committed — it is rebuilt on the server by `npm ci`
// (see deploy.sh). `node_modules/.bin/next` is npm's stable bin symlink and
// resolves relative to `cwd` at runtime.
module.exports = {
  apps: [
    {
      name: "scottish-energy",
      cwd: __dirname,
      script: "node_modules/.bin/next",
      args: "start",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
