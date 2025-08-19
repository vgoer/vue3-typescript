//  src/api/auth/index.ts
import service from "@/utils/request.ts";
import type { LoginData, LoginResult } from "./types";
import type { AxiosPromise } from "axios";

/**
 * 登录api
 * @param data
 */
export const loginApi = (data: LoginData): AxiosPromise<LoginResult> => {
	return service({
		url: "/login/loginPassword",
		method: "post",
		params: data,
	});
};
