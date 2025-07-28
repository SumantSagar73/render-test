import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import stylisticJs from "@stylistic/eslint-plugin";

export default [
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },

    plugins: {
      "@stylistic/js": stylisticJs,
    },
    rules: {
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-console": "off",
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/linebreak-style": ["error", "windows"],
      "@stylistic/js/quotes": ["error",  "double"],
      "@stylistic/js/semi": ["error", "always"],
    },
  },
  {
    ignores: ["dist/**"],
  },
];
