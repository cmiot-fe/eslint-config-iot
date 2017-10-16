module.exports = {
	"extends": "airbnb",
	"parser": "babel-eslint",
	"settings": {
		"import/resolver": "webpack"
	},
	"rules": {
		"linebreak-style": ["error", "windows"],
		"indent": ["error", "tab"],
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
		"no-unused-expressions": ["error", {
			"allowShortCircuit": true
		}],
		"no-unused-vars": ["error", {
			"vars": "local",
			"args": "none",
			"ignoreRestSiblings": true
		}],
		"no-bitwise": ["error", {
			"int32Hint": true
		}],
		"class-methods-use-this": "off",
		"no-tabs": "off",
		"no-throw-literal": "off",
		"no-underscore-dangle": "off",
		"import/no-dynamic-require": "off",
		"react/jsx-filename-extension": ["error", {
			"extensions": [".js", ".jsx"]
		}],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/no-multi-comp": "off",
		"react/forbid-prop-types": "off",
		"max-len": ["warn", 120]
	}
}
