import babel from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import watch from "rollup-plugin-watch-transform"
import pkg from "./package.json"

const extensions = [
  ".js", ".jsx", ".ts", ".tsx"
]

const plugins = [
  resolve({ extensions }),
  peerDepsExternal(),
  watch({
    files: ["src/scss"]
  }),
  babel({
    extensions,
    skipPreflightCheck: true,
    babelHelpers: "runtime"
  }),
  commonjs()
]

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        esModule: false,
        sourcemap: true
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true
      }
    ],
    plugins
  }
]
