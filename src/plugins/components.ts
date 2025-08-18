import path from "node:path";
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import type { PluginOption } from "vite";

export function configComponentsPlugin(): PluginOption {
	const pathSrc = path.resolve(process.cwd(), "src");
	return Components({
		// 自动导入elementui 和 图标
		resolvers: [
			IconsResolver({ enabledCollections: ["ep"] }),
			ElementPlusResolver(),
		],
		dts: path.resolve(pathSrc, "types", "components.d.ts"),
	});
}
