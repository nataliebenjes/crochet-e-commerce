module.exports = {
  apps: [
    {
      name: 'you-app-name',
      script: 'npm',
      args: 'develop',
      env: {
        NODE_ENV: 'development',
      },
      exp_backoff_restart_delay: 100,
    },
  ],
};