module.exports = function (api) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // For an example, this plugin will remove "id" attribute from "svg" tag
      [
        '@svgr/babel-plugin-remove-jsx-attribute',
        {
          elements: ['svg'],
          attributes: ['id'],
        },
      ],
      '@svgr/babel-plugin-transform-react-native-svg',
    ],
  };
};
