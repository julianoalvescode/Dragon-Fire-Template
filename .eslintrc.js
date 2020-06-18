module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'prettier',
        "react-hooks"
    ],
    "rules": {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
          'warn',
          { extensions: ['.jsx', '.js'] },
      ],
      'import/prefer-default-export': 'off',
      'no-param-reassing': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    "settings": {
      'import/resolver': {
          'babel-plugin-root-import': {
              rootPathSuffix: 'src',
          },
      },
    },
};
