<template>
    <div>
        <h1>问卷调查填写</h1>
        <h3>请选择您的性别是</h3>
        <input type="radio" id="sex1"  value="男" name="1" v-model="chooseSex">
        <label for="sex1">男</label>
        <input type="radio" id="sex2"  value="女" name="1" v-model="chooseSex">
        <label for="sex2">女</label>
        <input type="radio" id="sex3"  value="匿名" name="1" v-model="chooseSex">
        <label for="sex3">保密</label>
        <p></p>
        <button @click="doNext()">下一页</button>
        <button @click="doReset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return{
                chooseSex:'',
            }
        },
        methods:{
            doNext(){
                this.$store.commit("passSex",this.chooseSex);
                this.$router.push({name:'result',params:{sex:this.chooseSex}});
                this.$router.push("/question2")
            },
            doReset(){
                this.chooseSex="匿名"
            }
        },

    }
</script>

<style scoped>

</style>