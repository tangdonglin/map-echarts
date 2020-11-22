<template>
  <div :style="{ width:'100%', display:'flex'}">
    <div
      id="realAlert"
      :style="{ width: '180px', height: '240px' }"
    ></div>
    <div
      id="realPie"
      :style="{ width:'230px',height: '240px' }"
    >
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  data () {
    return {

    }
  },
  mounted () {
    this.drawReal()
    this.drawPie()
  },
  methods: {
    drawReal () {
      const realAlert = this.$echarts.init(document.getElementById('realAlert'))
      const data = [
        [[156, 8, 1154605773, 'China', '反恐排爆']],
        [[34, 6.9, 1376048943, 'China', '抢险救援']],
        [[55, 8.3, 1234556784, 'China', '火灾扑救']]
      ]

      realAlert.setOption({
        // legend: {
        //   bottom: 10,
        //   textStyle: {
        //     color: '#fff'
        //   },
        //   data: ['反恐排爆', '抢险救援', '火灾扑救']
        // },
        grid: {
          bottom: 110,
          top: 40,
          x: 55,
          y2: 10,
          x2: 50
        },
        xAxis: {
          show: false,
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          show: false,
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          scale: true,
          axisLabel: {

          }
        },
        series: [{
          name: '反恐排爆',
          data: [{
            value: data[0],
            tooltip: {
              trigger: 'item',
              position: [20, 10]
            }
          }],
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2
          },
          emphasis: {
            label: {
              show: true,
              formatter: function (param) {
                return param.data[3]
              },
              position: 'top'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
              offset: 0,
              color: 'rgb(251, 118, 123)'
            }, {
              offset: 1,
              color: 'rgb(204, 46, 72)'
            }])
          }
        }, {
          name: '抢险救援',
          data: data[1],
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2
          },
          emphasis: {
            label: {
              show: true,
              formatter: function (param) {
                return param.data[3]
              },
              position: 'top'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
              offset: 0,
              color: 'rgb(129, 227, 238)'
            }, {
              offset: 1,
              color: 'rgb(25, 183, 207)'
            }])
          }
        }, {
          name: '火灾扑救',
          data: data[2],
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2
          },
          emphasis: {
            label: {
              show: true,
              formatter: function (param) {
                return param.data[3]
              },
              position: 'top'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 120, 150, 0.5)',
            shadowOffsetY: 5,
            color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
              offset: 0,
              color: 'rgb(0, 142, 223)'
            }, {
              offset: 1,
              color: 'rgb(25, 183, 207)'
            }])
          }
        }]
      })
    },
    drawPie () {
      const realPie = this.$echarts.init(document.getElementById('realPie'))
      realPie.setOption({
        // backgroundColor: '#000',
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          bottom: 5,
          icon: 'circle',
          textStyle: {
            color: '#fff'
          },
          data: ['反恐排爆', '抢险救援', '火灾扑救']
        },
        series: [
          {
            name: '各类占比:',
            center: ['50%', '30%'],
            type: 'pie',
            radius: ['40%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 12
              },
              formatter: function (arg) {
                return arg.name + '\n' + arg.percent + '%'
              }
            },
            labelLine: {
              length: 5
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '12',
                fontWeight: '400'
              }
            },
            data: [
              { value: 335, name: '反恐排爆' },
              { value: 310, name: '抢险救援' },
              { value: 234, name: '火灾扑救' }
            ]
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
