<template>
  <div id="alert24" :style="{ width: '100%', height: '250px' }"></div>
</template>
<script>
export default {
  props: [],
  data() {
    return {};
  },
  mounted() {
    this.alert24();
  },
  methods: {
    alert24() {
      const alertHours = this.$echarts.init(document.getElementById("alert24"));

      alertHours.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          icon: "circle",
          bottom: "20%",
          left: 0,
          itemWidth: 10,
          textStyle: {
            color: "#fff",
            fontSize: 11
          },
          data: [
            "火灾扑救",
            "抢险救援",
            "反恐排爆",
            "公务执勤",
            "社会救助",
            "其他出动"
          ]
        },
        grid: {
          left: 0,
          right: "0%",
          bottom: "30%",
          top: 10,
          containLabel: true
        },
        xAxis: [
          {
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            type: "category",
            data: [
              "0",
              "2",
              "4",
              "6",
              "8",
              "10",
              "12",
              "14",
              "16",
              "18",
              "20",
              "22"
            ]
          }
        ],
        yAxis: [
          {
            splitLine: {
              // 网格线
              lineStyle: {
                type: "dashed", // 设置网格线类型 dotted：虚线   solid:实线
                color: "#303d58"
              }
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12
              }
            },
            axisTick: {
              // y轴刻度线
              show: false
            },
            axisLine: {
              show: false
            },
            type: "value"
          }
        ],
        series: [
          {
            itemStyle: {
              normal: {
                color: "#009bee"
              }
            },
            name: "火灾扑救",
            type: "bar",
            stack: "火灾扑救",
            data: [20, 32, 10, 34, 90, 30, 40, 70, 80, 12, 34, 56]
          },
          {
            itemStyle: {
              normal: {
                color: "#98c469"
              }
            },
            name: "抢险救援",
            type: "bar",
            stack: "火灾扑救",
            data: [20, 2, 91, 34, 90, 30, 10, 40, 70, 80, 92, 34, 56]
          },
          {
            itemStyle: {
              normal: {
                color: "#ffc470"
              }
            },
            name: "反恐排爆",
            type: "bar",
            stack: "火灾扑救",
            data: [50, 132, 15, 54, 90, 30, 10, 60, 70, 50, 12, 34, 56]
          },
          {
            itemStyle: {
              normal: {
                color: "#ff8b61"
              }
            },
            name: "公务执勤",
            type: "bar",
            stack: "火灾扑救",
            data: [50, 32, 15, 54, 90, 30, 10, 60, 30, 50, 12, 34, 56]
          },
          {
            itemStyle: {
              normal: {
                color: "#ff6b61"
              }
            },
            name: "社会救助",
            type: "bar",
            stack: "火灾扑救",
            data: [50, 132, 15, 54, 90, 30, 10, 60, 70, 50, 12, 34, 56]
          },
          {
            itemStyle: {
              normal: {
                color: "#9B7BE0"
              }
            },
            name: "其他出动",
            type: "bar",
            stack: "火灾扑救",
            data: [50, 32, 15, 54, 90, 30, 10, 60, 70, 50, 12, 34, 56]
          }
        ]
      });
    }
  }
};
</script>
<style lang="less" scoped>
// scoped不加style 是全局生效  加上是当前组件生效
//只要是定义单文件组件 就应该加上scoped 阻止组件之间的样式冲突
</style>
