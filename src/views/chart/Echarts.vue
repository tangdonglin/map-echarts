<template>
  <div>
    <div
      id="myChart"
      :style="{ width: '100%', height: '425px' }"
    ></div>
  </div>
</template>
<script>

export default {
  // name: "hello",
  data () {
    return {
      data: [220, 182, 191, 234, 290, 330, 310, 123, 442],
      ydata: [
        '高层建筑',
        '石油化工企业',
        '学校',
        '医院',
        '地下工程',
        '低端消费市场',
        '文物古建筑',
        '劳动密集型企业',
        '大型城市'
      ]
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      this.data = this.data.sort((a, b) => {
        return a - b
      })

      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      var y = this.ydata
      var yMax = 500
      var dataShadow = []
      for (var i = 0; i < this.data.length; i++) {
        dataShadow.push(yMax)
      }
      // 绘制图表
      myChart.setOption({
        title: {
          text: '单位类型统计',
          left: 'center',
          textStyle: {
            fontSize: 24,
            color: '#fff',
            fontWeight: 400
          }
        },
        grid: {
          top: '10%',
          left: '0%',
          right: 0,
          bottom: 0
          // containLabel: true // 距离时包含坐标轴上的文字
        },
        tooltip: {},
        xAxis: {
          data: this.data,
          type: 'value',
          show: false,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          data: y,
          // show: false,
          type: 'category',

          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            align: 'left',
            verticalAlign: 'bottom',
            lineHeight: 20,
            margin: -5,
            textStyle: {
              color: '#fff',
              fontSize: 12
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            // For shadow
            type: 'bar',
            itemStyle: {
              color: 'rgba(33, 54, 98,0.5)'
            },
            barGap: '-100%',
            barCategoryGap: '80%',
            data: dataShadow,
            animation: false

          },
          {
            type: 'bar',
            itemStyle: {
              barBorderRadius: [5, 5, 5, 5],
              color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: '#e46361' },
                { offset: 1, color: '#188df0' }
              ])
            },
            label: {
              show: true,
              position: 'right',

              offset: [0, -8],
              textStyle: { color: '#fff', align: 'right' }
            },
            data: this.data
          }
        ]
      })
    }
  }
}

</script>
<style lang='less' scoped>
// scoped不加style 是全局生效  加上是当前组件生效
//只要是定义单文件组件 就应该加上scoped 阻止组件之间的样式冲突
</style>
