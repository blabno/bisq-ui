module.exports = {
  copyAssets: {
    src: ['{{SRC}}/assets/**/*'],
    dest: '{{WWW}}/assets'
  },
  copyIndexContent: {
    src: [
      '{{SRC}}/index.html',
      '{{SRC}}/manifest.json',
      '{{SRC}}/service-worker.js'
    ],
    dest: '{{WWW}}'
  },
  copyFonts: {
    src: [
      '{{ROOT}}/node_modules/ionicons/dist/fonts/**/*',
      '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'
    ],
    dest: '{{WWW}}/assets/fonts'
  },
  copyPolyfills: {
    src: ['{{ROOT}}/node_modules/ionic-angular/polyfills/polyfills.js'],
    dest: '{{BUILD}}'
  },
  copySwToolbox: {
    src: ['{{ROOT}}/node_modules/sw-toolbox/sw-toolbox.js'],
    dest: '{{BUILD}}'
  },
  /* Copy custom assets from node module */
  copyPopperJs: {
    src: ['{{ROOT}}/node_modules/popper.js/dist/umd/popper.js'],
    dest: '{{BUILD}}/js'
  },
  copyJQueryJs: {
    src: ['{{ROOT}}/node_modules/jquery/dist/jquery.js'],
    dest: '{{BUILD}}/js'
  },
  copyBootstrapJs: {
    src: ['{{ROOT}}/node_modules/bootstrap/dist/js/bootstrap.js'],
    dest: '{{BUILD}}/js'
  },
  copyBootstrapCss: {
    src: ['{{ROOT}}/node_modules/bootstrap/dist/css/bootstrap.css'],
    dest: '{{BUILD}}/css'
  },
  copyFontawesomeCss: {
    src: ['{{ROOT}}/node_modules/@fortawesome/fontawesome-free-webfonts/css/*'],
    dest: '{{BUILD}}/css'
  },
  copyFontawesomeFonts: {
    src: ['{{ROOT}}/node_modules/@fortawesome/fontawesome-free-webfonts/webfonts/*'],
    dest: '{{BUILD}}/webfonts'
  }
};
