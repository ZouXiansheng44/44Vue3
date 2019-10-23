<template>
    <div>
        <h1>问卷调查填写</h1>
        <h3>请选择您的兴趣爱好</h3>
        <input type="checkbox" id="hobby1" value="看书" v-model="chooseHobby">
        <label for="hobby1">看书</label>
        <input type="checkbox" id="hobby2" value="游泳" v-model="chooseHobby">
        <label for="hobby2">游泳</label>
        <input type="checkbox" id="hobby3" value="跑步" v-model="chooseHobby">
        <label for="hobby3">跑步</label>
        <input type="checkbox" id="hobby4" value="看电影" v-model="chooseHobby">
        <label for="hobby4">看电影</label>
        <input type="checkbox" id="hobby5" value="听音乐" v-model="chooseHobby">
        <label for="hobby5">听音乐</label>
        <input type="checkbox" id="hobby6" value="动漫" v-model="chooseHobby">
        <label for="hobby6">动漫</label>
        <p></p>
        <button @click="doPrevious()">上一页</button>
        <button @click="doNext()">下一页</button>
        <button @click="doReset()">重置</button>
    </div>
</template>

<script>

    export default {
        name: "Question2",
        data(){
            return{
                chooseHobby:[]
            }
        },
        methods:{
            doPrevious(){
                this.$router.push('/');
            },
            doNext(){
                this.$store.commit("passHobby",this.chooseHobby.join(','));
                this.$router.push({name:'result',params:{hobby:this.chooseHobby}});
                this.$router.push('/question3');
            },
            doReset(){
                 this.chooseHobby.length=0;//使数组长度为0
                 this.chooseHobby=[];//使多选框页面为空
            },
        },
    }
</script>

<style scoped>

</style>