// PM2 process definition for Scottish Prime Energy.
// Start:  pm2 start ecosystem.config.js
// Reload: pm2 reload ecosystem.config.js --update-env
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
        PORT: 3000, // change here if you need a different port
      },
    },
  ],
};
