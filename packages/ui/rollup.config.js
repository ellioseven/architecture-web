import babel from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import pkg from "./package.json"

const plugins = [
  commonjs(),
  resolve(),
  peerDepsExternal(),
  babel({
    babelHelpers: "runtime"
  })
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
