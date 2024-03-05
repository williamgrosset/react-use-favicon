import ts from 'rollup-plugin-ts'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  plugins: [ts(), terser()],
  external: ['react']
}
