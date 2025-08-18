import type { PluginOption } from "vite";
import { configBiomePlugin } from "./biome";
import { configVuePlugin } from "./vue";
import { configInspectPlugin } from "./inspect";
import { configAutoImportPlugin } from "./autoImport";
import { configComponentsPlugin } from "./components";
import { configIconsPlugin } from "./icons";

export function configPlugins(): PluginOption[] {
	return [
		// biome插件
		configBiomePlugin(),
		// vue
		configVuePlugin(),
		// auto import
		configAutoImportPlugin(),
		// components auto register
		configComponentsPlugin(),
		// inspect
		configInspectPlugin(),
		// icons
		configIconsPlugin(),
	];
}
