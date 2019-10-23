<template>
    <div>
        <h1>问卷调查填写</h1>
        <h3>请介绍一下你自己</h3>
        <textarea v-model="multiText" class="content_input"></textarea>
        <p></p>
        <button @click="doPrevious()">上一页</button>
        <button @click="doSubmit()">提交</button>
        <button @click="doReset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "Question3.vue",
        data(){
            return{
                multiText:'',
            }
        },
        methods:{
            doSubmit(){
                this.$store.commit("passInterest",this.multiText);
                this.$router.push({name:'result',params:{interest:this.multiText}});
                this.$router.push('/result');
            },
            doPrevious(){
                this.$router.push('/question2');
            },
            doReset(){
                this.multiText='';
            },
        }

    }
</script>

<style scoped>

</style>