import {
	createRouter,
	createWebHashHistory,
	type RouteRecordRaw,
} from "vue-router";

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

export default router;
