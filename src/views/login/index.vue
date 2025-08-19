<script setup lang="ts">
import { type Reactive, reactive } from "vue";
import { useUserStoreHook } from "@/stores/admin";

const loginObj: Reactive<any> = reactive({
	phone: "18888888888",
	password: "123456",
});

// userStore
const userStore = useUserStoreHook();

const login = () => {
	userStore.loginStore(loginObj);
	// 获取到token了
	console.log(userStore.token); // Bearer tokenxxxxx
};
</script>

<template>
    <el-button type="primary" @click="login">登录</el-button>
</template>