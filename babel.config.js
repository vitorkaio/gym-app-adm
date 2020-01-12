module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@': './src',
          pages: './src/pages',
          components: './src/components',
          services: './src/services',
          store: './src/store',
        },
      },
    ],
  ],
};
