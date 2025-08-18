import Vue from "@vitejs/plugin-vue";

import type { PluginOption } from "vite";

export function configVuePlugin(): PluginOption {
	return Vue();
}
