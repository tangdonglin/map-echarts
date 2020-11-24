<template>
  <div>
    <div class="alercount">
      <div id="realAlert" :style="{ width: '180px', height: '220px' }"></div>
      <div id="realPie" :style="{ width: '290px', height: '220px' }"></div>
    </div>
    <div id="lengend" class="lengend">
      <ul class="clearfix ul">
        <li class="li" @click="getlegend($event)">
          <i></i> <span>火灾扑救</span>
        </li>
        <li class="li" @click="getlegend($event)">
          <i></i> <span>抢险救援</span>
        </li>
        <li class="li" @click="getlegend($event)">
          <i></i> <span>反恐排爆</span>
        </li>
        <li class="li" @click="getlegend($event)">
          <i></i> <span>公务执勤</span>
        </li>
        <li class="li" @click="getlegend($event)">
          <i></i> <span>社会救助</span>
        </li>
        <li class="li" @click="getlegend($event)">
          <i></i> <span>其他出动</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      realAlert: {},
      realPie: {},
      drawPieData: [
        { value: 234, name: "火灾扑救" },
        { value: 335, name: "反恐排爆" },
        { value: 310, name: "抢险救援" },
        { value: 300, name: "公务执勤" },
        { value: 210, name: "社会救助" },
        { value: 230, name: "其他出动" }
      ]
    };
  },
  mounted() {
    this.drawReal();
    this.drawPie();
  },
  methods: {
    drawReal() {
      this.realAlert = this.$echarts.init(document.getElementById("realAlert"));
      const data = [
        [[55, 8.3, 1234556784, "China", "火灾扑救"]],
        [[34, 6.9, 1376048943, "China", "抢险救援"]],
        [[156, 8, 1154605773, "China", "反恐排爆"]],
        [[58, 8.3, 1234516784, "China", "公务执行"]],
        [[48, 8.3, 1234526784, "China", "社会救助"]],
        [[90, 8.3, 1234506784, "China", "其他出动"]]
      ];

      this.realAlert.setOption({
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
              type: "dashed"
            }
          }
        },
        yAxis: {
          show: false,
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          },
          scale: true,
          axisLabel: {}
        },
        series: [
          {
            name: "火灾扑救",
            data: [
              {
                value: data[0],
                tooltip: {
                  trigger: "item",
                  position: [20, 10]
                }
              }
            ],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top"
              }
            },
            itemStyle: {
              color: "#009BEE"
            }
          },
          {
            name: "抢险救援",
            data: data[1],

            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top"
              }
            },
            itemStyle: {
              color: "#98C469"
            }
          },
          {
            name: "反恐排爆",
            data: data[2],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top"
              }
            },
            itemStyle: {
              color: "#FFC470"
            }
          },
          {
            name: "公务执勤",
            data: data[3],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top"
              }
            },
            itemStyle: {
              color: "#FF8B61"
            }
          },
          {
            name: "社会救助",
            data: data[4],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top"
              }
            },
            itemStyle: {
              color: "#FF6B61"
            }
          },
          {
            name: "其他出动",
            data: data[5],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top"
              }
            },
            itemStyle: {
              color: "#9B7BE0"
            }
          }
        ]
      });
    },
    drawPie() {
      this.realPie = this.$echarts.init(document.getElementById("realPie"));
      this.realPie.setOption({
        // backgroundColor: '#000',
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: [
          "#009BEE",
          "#98C469",
          "#FFC470",
          "#FF8B61",
          "#FF6B61",
          "#9B7BE0"
        ],
        series: [
          {
            name: "各类占比:",
            center: ["44%", "44%"],
            type: "pie",
            radius: ["40%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: 12
              },
              formatter: function(arg) {
                return arg.name + "\n" + arg.percent + "%";
              }
            },
            labelLine: {
              length: 5
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "12",
                fontWeight: "400"
              }
            },
            data: this.drawPieData
          }
        ]
      });
    },
    getlegend(e) {
      var flag = true;

      var targetContent =
        e.currentTarget.firstElementChild.nextElementSibling.innerHTML;

      switch (targetContent) {
        case "火灾扑救":
          this.realPie.setOption({
            legend: {
              show: false,
              selected: {
                火灾扑救: !flag,
                反恐排爆: flag,
                抢险救援: flag,
                火灾扑救: flag,
                公务执勤: flag,
                社会救助: flag,
                其他出动: flag
              }
            }
          });
          this.realAlert.setOption({
            legend: {
              show: false,
              selected: {
                火灾扑救: !flag,
                反恐排爆: flag,
                抢险救援: flag,
                火灾扑救: flag,
                公务执勤: flag,
                社会救助: flag,
                其他出动: flag
              }
            }
          });
          break;
        case "抢险救援":
          this.realPie.setOption({
            legend: {
              show: false,
              selected: {
                火灾扑救: flag,
                反恐排爆: flag,
                抢险救援: !flag,
                火灾扑救: flag,
                公务执勤: flag,
                社会救助: flag,
                其他出动: flag
              }
            }
          });
          this.realAlert.setOption({
            legend: {
              selected: {
                火灾扑救: flag,
                反恐排爆: flag,
                抢险救援: !flag,
                火灾扑救: flag,
                公务执勤: flag,
                社会救助: flag,
                其他出动: flag
              }
            }
          });
          break;
        case "反恐排爆":
          this.realPie.setOption({
            legend: {
              show: false,
              selected: {
                火灾扑救: flag,
                反恐排爆: !flag,
                抢险救援: flag,
                火灾扑救: flag,
                公务执勤: flag,
                社会救助: flag,
                其他出动: flag
              }
            }
          });
          this.realAlert.setOption({
            legend: {
              show: false,
              selected: {
                火灾扑救: flag,
                反恐排爆: !flag,
                抢险救援: flag,
                火灾扑救: flag,
                公务执勤: flag,
                社会救助: flag,
                其他出动: flag
              }
            }
          });
          break;
        case "公务执勤":
          this.realPie.setOption({
            legend: {
              show: false,
              selected: {
                火灾扑救: flag,
                反恐排爆: flag,
                抢险救援: flag,
                火灾扑救: flag,
                公务执勤: !flag,
                社会救助: flag,
                其他出动: flag
              }
            }
          });
          this.realAlert.setOption({
            legend: {
              show: false,
              selected: {
                火灾扑救: flag,
                反恐排爆: flag,
                抢险救援: flag,
                火灾扑救: flag,
                公务执勤: !flag,
                社会救助: flag,
                其他出动: flag
              }
            }
          });
          break;
        case "社会救助":
          this.realPie.setOption({
            legend: {
              show: false,
              selected: {
                火灾扑救: flag,
                反恐排爆: flag,
                抢险救援: flag,
                火灾扑救: flag,
                公务执勤: flag,
                社会救助: !flag,
                其他出动: flag
              }
            }
          });
          this.realAlert.setOption({
            legend: {
              show: false,
              selected: {
                火灾扑救: flag,
                反恐排爆: flag,
                抢险救援: flag,
                火灾扑救: flag,
                公务执勤: flag,
                社会救助: !flag,
                其他出动: flag
              }
            }
          });
          break;
        case "其他出动":
          this.realPie.setOption({
            legend: {
              show: false,
              selected: {
                火灾扑救: flag,
                反恐排爆: flag,
                抢险救援: flag,
                火灾扑救: flag,
                公务执勤: flag,
                社会救助: flag,
                其他出动: !flag
              }
            }
          });
          this.realAlert.setOption({
            legend: {
              show: false,
              selected: {
                火灾扑救: flag,
                反恐排爆: flag,
                抢险救援: flag,
                火灾扑救: flag,
                公务执勤: flag,
                社会救助: flag,
                其他出动: !flag
              }
            }
          });
      }

      // if(targetContent="火灾扑救"){
      //  this.realPie.setOption({
      //         legend: {
      //           selected: {
      //             反恐排爆: true,
      //             抢险救援: !flag,
      //             火灾扑救: !flag
      //           }
      //         }
      //       });
      // }

      //   this.realAlert.setOption({
      //     legend: {
      //       selected: {
      //         反恐排爆: flag,
      //         抢险救援: !flag,
      //         火灾扑救: !flag
      //       }
      //     }
      //   });
    }
  }
};
</script>
<style lang="less" scoped>
// scoped不加style 是全局生效  加上是当前组件生效
//只要是定义单文件组件 就应该加上scoped 阻止组件之间的样式冲突
.alercount {
  display: flex;
  margin-top: 30px;
  width: 474px;
  height: 220px;
}
.lengend {
  height: 20px;
  padding-left: 20px;
}
.lengend > ul li {
  float: left;
  font-size: 12px;
  margin-right: 5px;
}
.lengend > ul li > i {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  // background-color: #0d98ee;
}
.lengend > ul li:nth-child(1) {
  i {
    background-color: #009bee;
  }
}
.lengend > ul li:nth-child(2) {
  i {
    background-color: #98c469;
  }
}
.lengend > ul li:nth-child(3) {
  i {
    background-color: #ffc470;
  }
}
.lengend > ul li:nth-child(4) {
  i {
    background-color: #ff8b61;
  }
}
.lengend > ul li:nth-child(5) {
  i {
    background-color: #ff6b61;
  }
}
.lengend > ul li:nth-child(6) {
  i {
    background-color: #9b7be0;
  }
}
</style>
