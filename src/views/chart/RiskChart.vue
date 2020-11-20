<template>
  <div>
    <div
      id="riskchart"
      :style="{ width: '250px', height: '260px' }"
    ></div>

    <div></div>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      riskData: [{ name: '锦江区', value: 1548 }, { name: '高新区', value: 535 }, { name: '青羊区', value: 567 }, { name: '武侯区', value: '成华区' }, { name: '其他区', value: 634 }],
      legendData: []
    }
  },
  mounted () {
    this.drawPie()
    // window.onresize = () => {
    //   const riskchart = this.$echarts.init(document.getElementById('riskchart'))
    //   riskchart.resize()
    // }
  },
  methods: {
    drawPie () {
      // 基于准备好的dom，初始化echarts实例
      const riskchart = this.$echarts.init(document.getElementById('riskchart'))
      this.legendData = ['锦江区', '高新区', '青羊区', '武侯区', '成华区', '其他区']
      // 绘制图表
      riskchart.setOption({
        legend: {
          icon: 'circle',
          textStyle: {
            color: '#fff'
          },
          // orient: 'vertical',
          // top: 'middle',
          bottom: 20,
          left: 'center',
          data: this.legendData
        },
        series: [
          {
            type: 'pie',
            radius: '45%',
            center: ['50%', '40%'],
            selectedMode: 'single',
            data: this.riskData,
            label: {
              show: true,
              textStyle: {
                color: '#fff'
              },
              formatter: function (arg) {
                return arg.name + '\n' + arg.percent + '%'
              }
            },
            labelLine: {
              length: 10
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]

      })
    }
  }
}
</script>
<style lang="less" scoped>
// scoped不加style 是全局生效  加上是当前组件生效
//只要是定义单文件组件 就应该加上scoped 阻止组件之间的样式冲突
</style>
