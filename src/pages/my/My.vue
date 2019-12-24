<template>
    <div class="showdata">
       个人中心<br/>
       <br/><br/><br/><br/><br/>
        <el-button type="primary" round style="height:100px;width:150px" @click='testAll'>测试按钮</el-button>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'

 export default {
    data() {
      return {
      };
    }, 
    created(){
    },
    computed:{
    },
    methods:{
      ...mapActions('my',['test',]),
      testAll(){
        console.log("test")
        this.test();
      },
  }
}
</script>
<style scoped>
</style>