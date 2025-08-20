import {
	createRouter,
	createWebHashHistory,
	type RouteRecordRaw,
} from "vue-router";

import { useAdminStore } from "@/stores/admin";
import NProgress from "@/utils/nprogress";

export const Layout = () => import("@/layout/index.vue");

export const constantRoutes: RouteRecordRaw[] = [
	// 404
	{
		path: "/:pathMatch(.*)*",
		name: "NotFournd",
		component: () => import("@/views/error-page/404.vue"),
	},

	// 登录
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			title: "登录",
		},
	},

	// 首页
	{
		path: "/",
		component: Layout,
		redirect: "/dashboard",
		children: [
			{
				path: "dashboard",
				component: () => import("@/views/dashboard/index.vue"),
				name: "Dashboard",
				meta: {
					title: "首页",
				},
			},

			// 用户管理
			{
				path: "/admins",
				component: () => import("@/views/admin/indev.vue"),
				name: "Admin",
				meta: {
					title: "用户管理",
				},
			},
		],
	},
];

// 创建路由
const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes as RouteRecordRaw[],
	// 刷新时，滚动条还原
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * 重置路由
 */
export const resetRouter = () => {
	router.replace({ path: "/login" });
	location.reload();
};

// 路由守卫：无 token 强制跳转登录，有 token 放行
router.beforeEach((to, _from, next) => {
	NProgress.start();
	const adminStore = useAdminStore();
	const hasToken = Boolean(adminStore.token);

	// 白名单：登录页、404
	const whiteList = ["/login"];
	if (to.matched.some((r) => r.path.includes(":pathMatch"))) {
		return next();
	}

	if (hasToken) {
		if (to.path === "/login") {
			return next({ path: "/" });
		}
		return next();
	}

	// 无 token
	if (whiteList.includes(to.path)) {
		return next();
	}
	return next({ path: "/login", replace: true });
});

router.afterEach(() => {
	NProgress.done();
});

router.onError(() => {
	NProgress.done();
});

export default router;
