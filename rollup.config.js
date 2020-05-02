import typescript from "@rollup/plugin-typescript";
import tslint from "rollup-plugin-tslint";

export default {
	input: "src/index.ts",
	plugins: [
		tslint(),
		typescript({
			declaration: true,
			declarationDir: "lib",
			rootDir: "src",
		}),
	],
	output: [
		{
			format: "cjs",
			dir: "lib",
		},
	],
};
