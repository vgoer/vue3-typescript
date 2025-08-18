import path from "node:path";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import type { PluginOption } from "vite";

export function configAutoImportPlugin(): PluginOption {
	const pathSrc = path.resolve(process.cwd(), "src");
	return AutoImport({
		// Auto import functions from Vue, e.g. ref, reactive, toRef...
		// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
		imports: ["vue"],

		// Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
		// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
		resolvers: [
			ElementPlusResolver(),

			// Auto import icon components
			// 自动导入图标组件
			IconsResolver({
				prefix: "Icon",
			}),
		],

		dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"),
	});
}
