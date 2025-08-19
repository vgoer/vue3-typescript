// 使用常量对象替代枚举
export const MenuTypeEnum = {
	CATALOG: 2, // 目录
	MENU: 1, // 菜单
	BUTTON: 4, // 按钮
	EXTLINK: 3, // 外链
} as const;
// 创建联合类型
export type MenuType = (typeof MenuTypeEnum)[keyof typeof MenuTypeEnum];
