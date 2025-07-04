export default {
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: ["./scripts/setupTests.ts"],
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/emptyMock.js",
		"\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/emptySvg.js",
	},
	transform: {
		"^.+\\.(ts|tsx)$": "babel-jest",
	},
	extensionsToTreatAsEsm: [".ts", ".tsx"],
	globals: {
		"ts-jest": {
			useESM: true,
		},
	},
};
