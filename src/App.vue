<script setup lang="ts">
import { getElementLocale } from "@/locales";

const locale = getElementLocale;

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <el-config-provider :locale="locale">
        <el-button @click='toggleDark()'>点击</el-button>
        <ThemeSwitcher />
        <RouterView></RouterView>
    </el-config-provider>
</template>

<style scoped lang="scss">

</style>
