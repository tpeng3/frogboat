const path = require('path');

module.exports = {
  "stories": [
    // "../src/**/*.stories.mdx",
    '../src/**/*.stories.tsx',
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
  ],
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader")
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ]
    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve("@babel/plugin-proposal-class-properties"),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve("babel-plugin-remove-graphql-queries"),
    ]
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"]
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
        plugins: [
          require.resolve("@babel/plugin-proposal-class-properties"),
          // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
          require.resolve("babel-plugin-remove-graphql-queries"),
        ],
      },
    })
    config.resolve.extensions.push(".ts", ".tsx")

    // sass??
    config.module.rules.push({
      test: /\.(sass|scss)$/,
      loaders: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, '../')
    })

    config.module.rules.push({
      test: /\.(yaml)$/,
      loaders: ['js-yaml-loader'],
    })

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '..')
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.join(__dirname, '../src/pages'),
      '@components': path.join(__dirname, '../src/components'),
      '@util': path.join(__dirname, '../src/util'),
      '@store': path.join(__dirname, '../src/store')
    };

    return config;
  },
}