import { build } from "velite";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};

// Runs velite once per webpack compilation. In dev it watches the content tree.
class VeliteWebpackPlugin {
  static started = false;
  apply(compiler) {
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      await build({ watch: dev, clean: !dev });
    });
  }
}

export default nextConfig;
