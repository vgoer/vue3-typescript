<style scoped lang='scss'>


</style>
<template>
    <h3>layout</h3>
    <h1>{{ $t('app.title') }}</h1>
    <p>{{ $t('app.welcome', { name: 'goer' }) }}</p>

    <div class="app-container">
        <!-- 语言切换器 -->
        <div class="language-switcher">
            <button @click="changeLanguage('zh-CN')">中文</button>
            <button @click="changeLanguage('en-US')">English</button>
        </div>

        <div>
            <el-table mb-1 :data="[]" />
            <el-pagination :total="100" />
        </div>
    </div>

</template>
<script setup lang='ts'>
import { setLocale } from "@/locales/index";

// 切换语言
const changeLanguage = (lang: "zh-CN" | "en-US") => {
	setLocale(lang);
};
</script>