import pluginGoogleAppsScript from "eslint-plugin-googleappsscript";

export default [
  {
    files: ["**/*.js", "**/*.gs"],
    languageOptions: {
      ecmaVersion: 2020
    },
    plugins: {
      googleappsscript: pluginGoogleAppsScript
    },
    rules: {
      ...pluginGoogleAppsScript.configs.recommended.rules,
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
];
