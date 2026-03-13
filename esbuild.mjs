import esbuild from 'esbuild';

const isWatch = process.argv.includes('--watch');

const context = await esbuild.context({
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'main.js',
  format: 'cjs',
  platform: 'browser',
  target: 'es2020',
  sourcemap: true,
  external: ['obsidian']
});

if (isWatch) {
  await context.watch();
  console.log('Watching...');
} else {
  await context.rebuild();
  await context.dispose();
  console.log('Build complete');
}
