<template>
  <div id="sichuanmap" :style="{ width: '100%', height: '675px' }"></div>
</template>
<script>
export default {
  props: [],
  data() {
    return {};
  },
  mounted() {
    this.sichuanMap();
  },
  methods: {
    sichuanMap() {
      const sichuanmap = this.$echarts.init(
        document.getElementById("sichuanmap")
      );
      sichuanmap.showLoading();
      window.onresize = sichuanmap.resize;
      const getjson = "/mock/sichuan.json";
      this.$http.get(getjson).then(res => {
        console.log(res);

        sichuanmap.hideLoading();

        this.$echarts.registerMap("SC", res.data);

        sichuanmap.setOption({
          itemStyle: {
            shadowColor: "rgba(0,120,215,0.46)",
            shadowBlur: 5,
            shadowOffsetX: 2,
            shadowOffsetY: 10
            // opacity: 0.3
          },
          tooltip: {
            trigger: "item",
            formatter: "{b}<br/>{c} (p / km2)",
            textStyle: {
              color: "#fff"
            }
          },
          toolbox: {
            show: true,
            orient: "vertical",
            left: "right",
            top: "center",
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              zoom: 1, // 地图大小
              name: "消防地图",
              type: "map",
              mapType: "SC", // 自定义扩展图表类型
              label: {
                show: true
              },
              emphasis: {
                label: {
                  textStyle: { color: "#FFF", fontSize: 12 }
                },
                itemStyle: {
                  areaColor: "rgba(0, 143, 223,.3)"
                }
              },
              itemStyle: {
                normal: {
                  label: {
                    show: false // 默认是否显示省份名称
                  },
                  areaColor: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#0078D7" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#009BEE" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  },
                  borderWidth: 1,
                  borderColor: "#fff"
                },

                data: [
                  { name: "都江堰市", value: 20057.34 },
                  { name: "彭州市", value: 15477.48 },
                  { name: "郫都区", value: 31686.1 },
                  { name: "新都区", value: 6992.6 },
                  { name: "温江区", value: 44045.49 },
                  { name: "青白江区", value: 40689.64 },
                  { name: "温州区", value: 37659.78 },
                  { name: "金牛区", value: 45180.97 },
                  { name: "青牛区", value: 55204.26 },
                  { name: "成华区", value: 21900.9 },
                  { name: "武侯区", value: 4918.26 },
                  { name: "龙泉驿区", value: 5881.84 },
                  { name: "双流区", value: 4178.01 },
                  { name: "新津县", value: 2227.92 },
                  { name: "简阳市", value: 9172.94 },
                  { name: "浦江县", value: 3368 },
                  { name: "大巴县", value: 806.98 },
                  { name: "崇州市", value: 806.98 },
                  { name: "邛崃市", value: 807.98 }
                ],
                // 自定义名称映射
                nameMap: {
                  dujiangyan: "都江堰市",
                  penzhou: "彭州市",
                  piduqu: "郫都区",
                  xindu: "新都区",
                  wenjiang: "温江区",
                  qingbaijiang: "青白江区",
                  wenzhou: "温州区",
                  jinniu: "金牛区",
                  qingniu: "青牛区",
                  chenghua: "成华区",
                  wuhou: "武侯区",
                  longquanyi: "龙泉驿区",
                  shuangliu: "双流区",
                  xinjin: "新津县",
                  jianyang: "简阳市",
                  pujiang: "浦江县",
                  dabaxian: "大巴县",
                  chongzhou: "崇州市",
                  qionglai: "邛崃市"
                }
              }
            }
          ]
        });
      });
    }
  }
};
</script>
<style lang="less" scoped>
// scoped不加style 是全局生效  加上是当前组件生效
//只要是定义单文件组件 就应该加上scoped 阻止组件之间的样式冲突
</style>
