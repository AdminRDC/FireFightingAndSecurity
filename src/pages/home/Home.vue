<template>
    <div class="home">
        <!-- 轮播图 -->
         <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
            </el-carousel-item>a
         </el-carousel>
       </div>
</template>
<script>
export default {
  data(){
    return {
     
    }
  },
}



</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #a{
    position: absolute;
    background: rgb(189, 72, 159);
    height: 250px;
    width: 55%;
}
#b{
   position: absolute;
    background:pink;
    float: left;
   
    margin-left: 58%;
    width: 40%;
    height: 250px;
}
#c{
    position: absolute;
    background:beige;
    height: 200px;
    width: 100%;
    
}
#f{

 
  width: 100%;
  height: 250px;
}
.e1{
  position: absolute;
}
.e2{
    position: absolute;
    float: left;
    margin-left:30%;
     
}
.e3{
    margin-left: 60%;
    position: absolute;
    float: left;
   
}
#run{
position: absolute;
background: red;
height: 50px;
width: 100%;
margin-top: 200px;
}


</style>