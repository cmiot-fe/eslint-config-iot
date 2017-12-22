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
		"no-tabs": "off",
		"no-throw-literal": "off",
		"no-underscore-dangle": "off",
		"import/no-dynamic-require": "off",
		"import/extensions": [".js", {
			"ignorePackages": true
		}],
		"react/jsx-filename-extension": ["error", {
			"extensions": [".js", ".jsx"]
		}],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/no-multi-comp": "off",
		"react/forbid-prop-types": "off",
		"react/prop-types": "off",
		"react/no-array-index-key": "warn",
		"react/no-did-mount-set-state": "off",
		"jsx-a11y/label-has-for": "off",
		"global-require": "off",
		"class-methods-use-this": "off",
		"max-len": ["warn", 120]
	}
}
