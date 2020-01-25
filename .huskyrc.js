const tasks = t => t.join(" && ");

module.exports = {
	hooks: {
		"pre-commit": tasks(["pretty-quick --staged src/**/*.ts", "eslint src/**/*.ts", "npm run test"]),
	},
};
