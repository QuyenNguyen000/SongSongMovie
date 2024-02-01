/** @type {import('@remix-run/dev').AppConfig} */
const { createRoutesFromFolders } = require("@remix-run/v1-route-convention");

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  routes: (defineRoutes) => {
    // `createRoutesFromFolders` will create routes for all files in the
    // routes directory using the same default conventions as Remix v1.
    return createRoutesFromFolders(defineRoutes, {
      // If you're already using `ignoredRouteFiles` in your Remix config,
      // you can move them to `ignoredFilePatterns` in the plugin's options.
      ignoredFilePatterns: ["**/.*", "**/*.css"],
    });
  },
};
