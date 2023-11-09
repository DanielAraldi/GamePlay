module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          allowlist: ['REDIRECT_URI', 'SCOPE', 'CLIENT_ID'],
          safe: true,
          allowUndefined: false,
          verbose: false,
        },
      ],
    ],
  };
};
