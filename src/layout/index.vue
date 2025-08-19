<style scoped lang='scss'>


</style>
<template>
    <h3>layout</h3>
    <h1>{{ $t('app.title') }}</h1>
    <p>{{ $t('app.welcome') }}</p>
    <el-table mb-1 :data="[]" />
    <el-pagination :total="100" />
</template>
<script setup lang='ts'>


</script>