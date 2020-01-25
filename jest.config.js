module.exports = {
	transform: { "^.+\\.ts?$": "ts-jest" },
	testEnvironment: "node",
	testRegex: "/unittest/.*\\.(test|spec)?\\.(ts|tsx)$",
	moduleFileExtensions: ["ts"],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	collectCoverageFrom: ["src/**/*.ts"],
};
