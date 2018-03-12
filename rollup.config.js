import babel form 'rollup-plugin-babel';

export default{
	input: 'src/index.js',
	output: {
		file: 'out/ulog.js',		//打包完的輸出位置.
		format: 'iife',				//打包的檔案類型.
		sourcemap: 'true',		//打包的來源位置.
	},
	plugins: [
		babel({
			eclude: 'node_modules/**',
		})
	],
};