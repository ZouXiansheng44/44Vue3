<template>
    <div>
        <h1>问卷调查填写</h1>
        <p>您的性别是:{{this.$store.state.sex}}</p>
        <p>您的兴趣爱好是:{{this.$store.state.hobby}}</p>
        <p>个人简介：{{this.$store.state.interest}}</p>
    </div>
</template>

<script>
    export default {
        name: "Result"

    }
</script>

<style scoped>

</style>Y