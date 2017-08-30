module.exports = {
	"extends": "airbnb",
	"parser": "babel-eslint",
	"rules": {
		"linebreak-style": ["error", "windows"],
		"indent": ["error", "tab"],
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "never"
		}],
		"no-unused-expressions": ["error", {
			"allowShortCircuit": true
		}],
		"class-methods-use-this": "off",
		"no-tabs": "off",
		"no-throw-literal": "off",
		"no-underscore-dangle": "off",
		"import/no-dynamic-require": "off",
		"max-len": ["warn", 120]
	}
}
