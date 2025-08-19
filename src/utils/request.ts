import axios from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

// 用户信息
import { useUserStoreHook } from "@/stores/admin";

// 创建axios实列
const service = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_API,
	timeout: 5000,
	headers: { "Content-Type": "application/json;charset=utf-8" },
});

// 请求拦截器
service.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		// 判断是否存在token
		const userStore = useUserStoreHook();
		if (userStore.token) {
			config.headers.Authorization = userStore.token;
		}
		return config;
	},
	(error: any) => {
		return Promise.reject(error);
	},
);

// 响应拦截器
service.interceptors.response.use(
	(response: AxiosResponse) => {
		const { code, msg } = response.data;
		// 登录成功
		if (code === "00000") {
			return response.data;
		}

		ElMessage.error(msg || "系统出错");
		return Promise.reject(new Error(msg || "Error"));
	},
	(error: any) => {
		if (error.response.data) {
			const { code, msg } = error.response.data;
			// token 过期，跳转登录页
			if (code === "xxxxx") {
				ElMessageBox.confirm("当前页面已失效，请重新登录", {
					confirmButtonText: "确定",
					type: "warning",
				}).then(() => {
					localStorage.clear(); // @vueuse/core 自动导入
					window.location.href = "/";
				});
			} else {
				ElMessage.error(msg || "系统错误");
			}
		}
		return Promise.reject(error.message);
	},
);

export default service;
