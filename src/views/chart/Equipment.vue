<template>
  <div
    id="trendChart"
    :style="{ width: '908px', height: '208px' }"
  ></div>

</template>
<script>
export default {
  props: [],
  data () {
    return {

    }
  },
  mounted () {
    this.drawTrend()
  },
  methods: {

    drawTrend () {
      const trendChart = this.$echarts.init(document.getElementById('trendChart'))

      const onLineData = [
        ['06:00', 20],
        ['07:00', 40],
        ['08:00', 60],
        ['09:00', 50],
        ['10:00', 25],
        ['12:00', 30],
        ['14:00', 20],
        ['15:00', 10]

      ]

      trendChart.setOption({
        legend: {
          icon: 'circle',
          textStyle: {
            color: '#fff'
          },
          bottom: 5,
          left: 'center',
          data: ['字段一', '字段二']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: '#fff' // 坐标值得具体的颜色
            }
          }
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#303d58'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#fff' // 坐标值得具体的颜色
            }
          },
          axisLine: {
            lineStyle: {
              color: '#0f1f40',
              type: 'solid'
            }
          },
          type: 'value',
          boundaryGap: [0, '30%']

        },
        visualMap: {
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0
        },
        series: [
          {
            name: '字段一',
            type: 'line',
            smooth: 'false',
            symbol: 'none',
            lineStyle: {
              color: '#1d77c2',
              width: 0
            },
            areaStyle: {
              type: 'default',
              // 渐变色实现
              color: '#1d77c2'
            },
            data: onLineData
          }, {
            name: '字段二',
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#1d77c2',
              width: 0
            },
            areaStyle: {
              type: 'default',
              color: '#1d77c2'
            },
            data: onLineData
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
