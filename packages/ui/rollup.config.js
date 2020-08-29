import babel from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import pkg from "./package.json"

const plugins = [
  resolve(),
  peerDepsExternal(),
  babel({
    babelHelpers: "runtime",
    skipPreflightCheck: true
  }),
  postcss({
    extract: false,
    modules: true,
    use: ["sass"]
  }),
  commonjs()
]

export default [
  {
    input: "src/index.js",
    output: {
      file: pkg.main,
      format: "cjs",
      esModule: false,
      sourcemap: true
    },
    plugins
  }
]
