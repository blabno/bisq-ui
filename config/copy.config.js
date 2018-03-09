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
  copyBootstrap: {
    src: [
      '{{ROOT}}/node_modules/bootstrap/dist/css/bootstrap.css',
      '{{ROOT}}/node_modules/bootstrap/dist/js/bootstrap.js',
      '{{ROOT}}/node_modules/jquery/dist/jquery.js'
    ],
    dest: '{{BUILD}}'
  },
  copyFontawesomeCss: {
    src: [
      '{{ROOT}}/node_modules/@fortawesome/fontawesome-free-webfonts/css/**/*'
    ],
    dest: '{{BUILD}}/css'
  },
  copyFontawesomeFonts: {
    src: [
      '{{ROOT}}/node_modules/@fortawesome/fontawesome-free-webfonts/webfonts/**/*'
    ],
    dest: '{{BUILD}}/webfonts'
  }
};
