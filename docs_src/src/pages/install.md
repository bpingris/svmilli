Start by creating a new svelte project:

```bash
$ npx degit sveltejs/template svelte-project
$ cd svelte-project && npm i
```

Then add svmilli and milligram to your project:
```bash
$ npm i svmilli milligram rollup-plugin-postcss
```

Now, edit your `rollup.config.js`:
```js
// Import the rollup postcss plugin
import postcss from 'rollup-plugin-postcss';

...

plugins: [
		svelte({
      dev: !production,
      // Remove this option
      // css: css => {
			// 	css.write('public/build/bundle.css');
      // }
      // Replace it by this one
			emitCss: true
    }),
    // Add the postcss plugin
		postcss({
			extract: true,
			minimize: production,
			sourceMap: !production
		}),
```

```html
<!-- App.svelte -->
<script>
  import 'svmilli';
</script>
```

You're ready to go !