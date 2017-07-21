module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: '"Source Code Pro Semibold", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color (hex)
    cursorColor: '#c7c7c7',

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    // backgroundColor: '#282c34',
    backgroundColor: 'rgba(40, 44, 52, 0.9)',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',
    // termCSS: 'span { background-color: transparent !important; }',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',
    // padding: '0px',

    // some color overrides. see http://bit.ly/29k1iU2 for
    // the full list
    colors: [
      '#000000',
      '#e88388',
      '#a7cc8c',
      '#dbaa79',
      '#72bef2',
      '#d291e4',
      '#65c2cd',
      '#b9c0cb',
      '#6f7783',
      '#e88388',
      '#a7cc8c',
      '#dbaa79',
      '#72bef2',
      '#d291e4',
      '#65c2cd',
      '#ffffff'
    ]
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
      'hyper-material-vibrancy',
      // 'hyperterm-subpixel-antialiased',
      'hyperterm-close-on-left',
      // 'hyperterm-atom-dark',
      // 'hyperlinks',
      'hyper-alt-click',
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};

