module.exports = {
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-sass-guidelines"
  ],
  "plugins": [
    "stylelint-selector-bem-pattern"
  ],
  "rules": {
    "selector-max-compound-selectors": 10,
    "scss/at-import-partial-extension-blacklist": [
      ".scss",
      ".css"
    ],
    "indentation": 4,
    "max-nesting-depth": 5,
    "string-quotes": "double",
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "extend",
          "at-root",
          "debug",
          "warn",
          "error",
          "if",
          "else",
          "for",
          "each",
          "while",
          "mixin",
          "include",
          "content",
          "return",
          "function"
        ]
      }
    ],
    "selector-no-qualifying-type": [
      true,
      {
        "ignore": [
          "attribute"
        ]
      }
    ],
    "plugin/selector-bem-pattern": {
      "componentName": "(([a-z0-9]+(?!-$)-?)+)",
      "componentSelectors": {
        "initial": "\\.{componentName}(((__|--)(([a-z0-9\\[\\]'=]+(?!-$)-?)+))+)?$"
      },
      "ignoreSelectors": [
        ".*\\.no-js.*",
        ".*\\.js-.*",
        ".*\\.lt-ie.*"
      ]
    }
  }
};
