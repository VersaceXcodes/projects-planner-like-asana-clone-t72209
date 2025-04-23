import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
 

import tseslint from "@typescript-eslint/eslint-plugin";
 
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";

export default tseslint.config({
        settings: {
            react: {
                version: "detect"
            },        settings: {
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json'
                }
            }
        },	extends: [js.configs.recommended, ...tseslint.configs.recommended],
	files: ["**/*.{ts,tsx}"],
	ignores: ["dist"],
	languageOptions: {
		ecmaVersion: 2020,
		globals: globals.browser,
	},
	plugins: {
		"react-hooks": reactHooks,
		"react-refresh": reactRefresh,
	},
	rules: {
		...reactHooks.configs.recommended.rules,
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
});
