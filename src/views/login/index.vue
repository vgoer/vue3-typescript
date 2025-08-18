<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
// 响应式
const { isAuthenticated } = storeToRefs(userStore);
const { name, email } = storeToRefs(userStore);

const handleLogin = async () => {
	await userStore.login({
		id: "123",
		name: "John Doe",
		email: "john@example.com",
		token: "abc123",
	});
};

const handleLogout = () => {
	userStore.logout();
};
</script>

<template>
    <h3>{{ name + email }}</h3>
    <div v-if="isAuthenticated">
        Welcome, {{ userStore.name }}!
        <button @click="handleLogout">Logout</button>
    </div>
    <div v-else>
        <button @click="handleLogin">Login</button>
    </div>
</template>