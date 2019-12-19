
Use /* eslint-disable */ to ignore all warnings in a file.
<template>
  <div class='hello'>
    <div id='chart1' :style="{width:'500px',height:'300px'}"></div>
  </div>
</template>
<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  data() {
    return {}
  },
  mounted() {
    let that = this
    this.drawLine()
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById('chart1'))
      myChart.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            itemStyle: {
              normal: {
                // 阴影的大小
                shadowBlur: 200,
                // 阴影水平方向上的偏移
                shadowOffsetX: 0,
                // 阴影垂直方向上的偏移
                shadowOffsetY: 0,
                // 阴影颜色
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: [
              { value: 400, name: '搜索引擎' },
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 274, name: '联盟广告' },
              { value: 235, name: '视频广告' }
            ]
          }
        ]
      })
    }
  }
}
</script>
<style scoped>

</style>

