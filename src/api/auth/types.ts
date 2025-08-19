// src/api/auth/types.ts

/**
 * 登录请求参数
 */
export interface LoginData {
	/**
	 * 用户名
	 */
	phone: string;

	/**
	 * 密码
	 */
	password: string;
}

/**
 * 响应接口
 */
export interface LoginResult {
	/**
	 * 访问token
	 */
	accessToken: string;

	/**
	 * 过期时间
	 */
	expires?: number;

	/**
	 * 刷新时间
	 */
	refreshToken?: string;

	/**
	 * token 类型
	 */
	tokenType?: string;
}
