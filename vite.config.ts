import vue from "@vitejs/plugin-vue";
import path from "path";
import { type ConfigEnv, defineConfig, loadEnv, type UserConfig } from "vite";

const pathSrc = path.resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	// 加载环境
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [vue()],

		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/assets/css/globalVar.scss" as *;`,
				},
			},
		},

		resolve: {
			alias: {
				"@": pathSrc,
			},
		},

		// 配置
		server: {
			host: true,
			cors: true,
			open: true,
			// open: true,
			port: Number(env.VITE_APP_PORT),
			// 代理
			proxy: {
				[env.VITE_APP_BASE_API]: {
					target: env.VITE_APP_TARGET,
					changeOrigin: true,
					// eg: localhost:3000/dev-api/api/v1/users/me  => https://xxx.com/api/v1/users/me
					// 或者
					rewrite: (path) =>
						path.replace(new RegExp(`^${env.VITE_API_BASE_URL}`), ""),
				},
			},
		},
	};
});
