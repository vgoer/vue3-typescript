import biomePlugin from "vite-plugin-biome";

import type { PluginOption } from "vite";

export function configBiomePlugin(): PluginOption {
	return biomePlugin({
		mode: "lint",
		files: ".",
		applyFixes: true,
	});
}
