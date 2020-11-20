<template>
  <div>
    <div
      id="riskchart"
      :style="{ width: '300px', height: '425px' }"
    ></div>
    <div
      id="trendChart"
      :style="{ width: '937px', height: '313px' }"
    ></div>

    <div :style="{ display:'flex',width:'474px',height: '240px'}">
      <div
        id="realAlert"
        :style="{ width: '180px', height: '240px' }"
      ></div>
      <div
        id="realPie"
        :style="{ width: '290px', height: '240px' }"
      >
      </div>

    </div>
    <div
      id="alert24"
      :style="{ width: '474px', height: '300px' }"
    ></div>
    <div
      id="sichuanmap"
      :style="{ width: '949px', height: '675px' }"
    ></div>
  </div>
</template>
<script>
// import '../../assets/js/sichuanmap.json'
export default {
  name: 'hello',
  data () {
    return {
      riskData: [{ name: '锦江区', value: 1548 }, { name: '高新区', value: 535 }, { name: '青羊区', value: 567 }, { name: '武侯区', value: '成华区' }, { name: '其他区', value: 634 }],
      legendData: []
    }
  },
  mounted () {
    this.drawLine()
    this.drawTrend()
    this.drawReal()
    this.drawPie()
    this.alert24()
    this.sichuanMap()
  },
  methods: {
    drawLine () {
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
            radius: '65%',
            center: ['50%', '50%'],
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
    },

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
            color: '#000'
          },
          data: ['项目一', '项目二']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
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
            name: '项目一',
            type: 'line',
            smooth: 0.6,
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
            name: '项目二',
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
    },
    drawReal () {
      const realAlert = this.$echarts.init(document.getElementById('realAlert'))

      const data = [
        [[156, 8, 1154605773, 'China', '反恐排爆']],
        [[34, 6.9, 1376048943, 'China', '抢险救援']],
        [[55, 8.3, 1234556784, 'China', '火灾扑救']]
      ]

      realAlert.setOption({
        legend: {
          bottom: 10,
          data: ['反恐排爆', '抢险救援', '火灾扑救']
        },
        grid: {
          bottom: 110,
          top: 50,
          x: 45,
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
              position: [90, 80],
              textStyle: { color: '#fff' }
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
        backgroundColor: '#000',
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
          {
            name: '各类占比:',
            center: ['50%', '40%'],
            type: 'pie',
            radius: ['30%', '50%'],
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
    },
    alert24 () {
      const alertHours = this.$echarts.init(document.getElementById('alert24'))

      alertHours.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          icon: 'circle',
          bottom: '23%',
          left: '2%',
          itemWidth: 10,
          textStyle: {
            color: '#fff',
            fontSize: 12
          },
          data: ['火灾扑救', '抢险救援', '反恐排爆', '公务执勤', '社会救助', '其他出动']
        },
        grid: {
          left: '2%',
          right: '0%',
          bottom: '30%',
          containLabel: true
        },
        xAxis: [
          {
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: 12
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            type: 'category',
            data: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22']

          }
        ],
        yAxis: [
          {
            splitLine: { // 网格线
              lineStyle: {
                type: 'dashed', // 设置网格线类型 dotted：虚线   solid:实线
                color: '#fff'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: 12
              }
            },
            axisTick: { // y轴刻度线
              show: false
            },
            axisLine: {
              show: false
            },
            type: 'value'
          }
        ],
        series: [
          {
            itemStyle: {
              normal: {
                color: '#009bee'
              }
            },
            name: '火灾扑救',
            type: 'bar',
            stack: '火灾扑救',
            data: [20, 32, 10, 34, 90, 30, 40, 70, 80, 12, 34, 56]
          },
          {
            itemStyle: {
              normal: {
                color: '#98c469'
              }
            },
            name: '抢险救援',
            type: 'bar',
            stack: '火灾扑救',
            data: [20, 2, 91, 34, 90, 30, 10, 40, 70, 80, 92, 34, 56]
          },
          {
            itemStyle: {
              normal: {
                color: '#ffc470'
              }
            },
            name: '反恐排爆',
            type: 'bar',
            stack: '火灾扑救',
            data: [50, 132, 15, 54, 90, 30, 10, 60, 70, 50, 12, 34, 56]
          }, {
            itemStyle: {
              normal: {
                color: '#ff8b61'
              }
            },
            name: '公务执勤',
            type: 'bar',
            stack: '火灾扑救',
            data: [50, 32, 15, 54, 90, 30, 10, 60, 30, 50, 12, 34, 56]
          }, {
            itemStyle: {
              normal: {
                color: '#ff6b61'
              }
            },
            name: '社会救助',
            type: 'bar',
            stack: '火灾扑救',
            data: [50, 132, 15, 54, 90, 30, 10, 60, 70, 50, 12, 34, 56]
          }, {
            itemStyle: {
              normal: {
                color: '#9B7BE0'
              }
            },
            name: '其他出动',
            type: 'bar',
            stack: '火灾扑救',
            data: [50, 32, 15, 54, 90, 30, 10, 60, 70, 50, 12, 34, 56]
          }
        ]
      })
    },
    sichuanMap () {
      const sichuanmap = this.$echarts.init(document.getElementById('sichuanmap'))
      sichuanmap.showLoading()
      window.onresize = sichuanmap.resize
      const getjson = '/mock/sichuan.json'

      this.$http.get(getjson, function (geo) {
        sichuanmap.hideLoading()

        this.$echarts.registerMap('SC', geo)

        sichuanmap.setOption({

          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (p / km2)'
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              zoom: 1.2, // 地图大小
              name: '消防地图',
              type: 'map',
              mapType: 'SC', // 自定义扩展图表类型
              label: {
                show: true
              },
              emphasis: {
                itemStyle: {
                  areaColor: 'rgba(0, 143, 223,.3)'
                }
              },
              itemStyle: {
                shadowColor: '#1ba160',
                shadowOffsetX: 150,
                shadowOffsetY: 10,
                normal: {
                  label: {
                    show: true // 默认是否显示省份名称
                  },
                  areaColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#0078D7' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#009BEE' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  },
                  borderWidth: 1,
                  borderColor: '#fff'
                },

                data: [
                  { name: '都江堰市', value: 20057.34 },
                  { name: '彭州市', value: 15477.48 },
                  { name: '郫都区', value: 31686.1 },
                  { name: '新都区', value: 6992.6 },
                  { name: '温江区', value: 44045.49 },
                  { name: '青白江区', value: 40689.64 },
                  { name: '温州区', value: 37659.78 },
                  { name: '金牛区', value: 45180.97 },
                  { name: '青牛区', value: 55204.26 },
                  { name: '成华区', value: 21900.9 },
                  { name: '武侯区', value: 4918.26 },
                  { name: '龙泉驿区', value: 5881.84 },
                  { name: '双流区', value: 4178.01 },
                  { name: '新津县', value: 2227.92 },
                  { name: '简阳市', value: 9172.94 },
                  { name: '浦江县', value: 3368 },
                  { name: '大巴县', value: 806.98 },
                  { name: '崇州市', value: 806.98 },
                  { name: '邛崃市', value: 807.98 }
                ],
                // 自定义名称映射
                nameMap: {
                  dujiangyan: '都江堰市',
                  penzhou: '彭州市',
                  piduqu: '郫都区',
                  xindu: '新都区',
                  wenjiang: '温江区',
                  qingbaijiang: '青白江区',
                  wenzhou: '温州区',
                  jinniu: '金牛区',
                  qingniu: '青牛区',
                  chenghua: '成华区',
                  wuhou: '武侯区',
                  longquanyi: '龙泉驿区',
                  shuangliu: '双流区',
                  xinjin: '新津县',
                  jianyang: '简阳市',
                  pujiang: '浦江县',
                  dabaxian: '大巴县',
                  chongzhou: '崇州市',
                  qionglai: '邛崃市'
                }
              }
            }
          ]
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
// scoped不加style 是全局生效  加上是当前组件生效
//只要是定义单文件组件 就应该加上scoped 阻止组件之间的样式冲突
body {
  background-color: #000;
}
</style>
