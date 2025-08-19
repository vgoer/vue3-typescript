// src/store/modules/user.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginApi } from "@/api/auth/index";
import type { LoginData } from "@/api/auth/types.ts";

export const useUserStoreHook = defineStore("userStore", () => {
	const token = ref("");

	// 登录方法
	const loginStore = (loginData: LoginData) => {
		return new Promise<void>((resolve, reject) => {
			loginApi(loginData)
				.then((response) => {
					const { tokenType, accessToken } = response.data;
					token.value = tokenType + " " + accessToken; // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
					resolve();
				})
				.catch((error) => {
					reject(error);
				});
		});
	};

	return { token, loginStore };
});
