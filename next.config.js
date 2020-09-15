const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
const withTM = require("next-transpile-modules")(["react-rainbow-components"]);

module.exports = withTM(
  withFonts(
    withCSS(
      withSass({
        enableSvg: true,
        webpack: (config, options) => {
          return config;
        },
      })
    )
  )
);
