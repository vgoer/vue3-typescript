<!-- src/components/ThemeSwitcher.vue -->
<template>
<div class="theme-switcher">
    <el-dropdown @command="handleThemeChange">
    <el-button type="primary">
        主题切换
        <i-ep-Sunny />
    </el-button>
    <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item command="light">
                <i-ep-Sunny />
                浅色主题
            </el-dropdown-item>
            <el-dropdown-item command="dark">
                <i-ep-Moon />
                深色主题
            </el-dropdown-item>
            <el-dropdown-item command="custom">
                <i-ep-Brush />
                自定义主题
            </el-dropdown-item>
        </el-dropdown-menu>
    </template>
    </el-dropdown>
</div>
</template>
<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

const handleThemeChange = (theme: string) => {
	themeStore.setTheme(theme as any);
};
</script>

<style scoped lang="scss">
.theme-switcher {
    .el-dropdown-menu__item {
        display: flex;
        align-items: center;
        gap: 8px;
    }
}
</style>