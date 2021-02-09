module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react", "react-native", "react-hooks", "prettier"],
  parser: "babel-eslint",
  env: {
    jest: true,
    "react-native/react-native": true,
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "padded-blocks": "off",
    "arrow-body-style": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "import/prefer-default-export": "off",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 100,
      },
    ],
  },
  globals: {
    fetch: false,
  },
};
