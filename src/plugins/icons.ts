import Icons from "unplugin-icons/vite";

import type { PluginOption } from "vite";

export function configIconsPlugin(): PluginOption {
	return Icons({
		autoInstall: true,
	});
}
