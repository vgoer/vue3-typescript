import Inspect from "vite-plugin-inspect";

import type { PluginOption } from "vite";

export function configInspectPlugin(): PluginOption {
	return Inspect({
		// 配置选项（可选）
		dev: true, // 只在开发模式启用
		build: false, // 不在生产构建中启用
		outputDir: ".vite-inspect", // 输出目录
	});
}
