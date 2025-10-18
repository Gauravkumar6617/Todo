const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Map your TS aliases to Metro
config.resolver.extraNodeModules = {
  "@components": path.resolve(__dirname, "src/components"),
  "@screens": path.resolve(__dirname, "src/screens"),
  "@assets": path.resolve(__dirname, "assets"),
  "@utils": path.resolve(__dirname, "src/utils"),
};

// Optional: if you want to import like "src/Navigation/RootNavigation"
config.resolver.extraNodeModules["src"] = path.resolve(__dirname, "src");

module.exports = config;
