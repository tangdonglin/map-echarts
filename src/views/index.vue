<template>
  <div id="viewBox">
    <div class="viewport">
      <div class="header-left">
        <img src="../assets/image/nowtime.png" alt="" />
        <span>{{ nowtime }}</span>
      </div>
      <div class="header-title">智慧消防大数据平台</div>
      <div class="header-right">
        <div>
          <img src="../assets/image/local.png" alt="" />
          <span>{{ intradayData.local }}</span>
        </div>
        <div>
          <img src="../assets/image/wind.png" alt="" />
          <span>{{ intradayData.wind }}</span>
        </div>
        <div>
          <img src="../assets/image/temp.png" alt="" />
          <span>{{ intradayData.temp }}</span>
        </div>
        <div>
          <img src="../assets/image/leaf.png" alt="" />
          <span>{{ intradayData.leaf }}</span>
        </div>
      </div>
      <div class="colum">
        <!-- 物联网检测出报警区域 -->
        <div class="panel view-alarm">
          <h3 class="alarm-h3">物联网监测报警</h3>
          <div class="num">
            <span v-for="(item, index) in numArr" :key="index">{{ item }}</span>
          </div>
          <div class="ban">
            <div
              class="ban-item"
              v-for="(item, index) in warndata"
              :key="index"
            >
              <span class="ban-item-span">{{ item.name }}</span>
              <h4 class="ban-item-h4">{{ item.value }}</h4>
            </div>
          </div>
          <div>
            <Eharts></Eharts>
          </div>

          <div></div>
          <div></div>
        </div>
        <!-- 风险对象区域 -->
        <div class="panel risk">
          <div class="risk-list">
            <div class="warn-title">
              <img class="warn-img" src="../assets/image/warn.png" />
              <h3 class="risk-h3">风险对象统计</h3>
            </div>

            <table class="risk-table" width="100%" height="100%">
              <th>地区</th>
              <th>控制能力</th>
              <tr v-for="(item, index) in riskData" :key="index">
                <td>{{ item.area }}</td>
                <td>{{ item.value }}</td>
              </tr>
            </table>
          </div>
          <div class="risk-chart">
            <RiskChart></RiskChart>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="colum-center">
        <!-- 地图区域 -->
        <div class="map">
          <MapChart></MapChart>
        </div>
        <!-- 设备在线趋势区域 -->
        <div class="panel equipment">
          <div class="equipment-title">
            <img class="warn-img" src="../assets/image/equipment.png" alt="" />
            <h3 class="risk-h3">设备在线趋势</h3>
          </div>
          <div class="trend-box">
            <div class="trend-item clearfix">
              <h3 class="trend-item-h3">Max</h3>
              <span class=" trend-item-h3 left">{{ trendvalue.max }}</span>
              <span class="right"
                >{{ trendvalue.maxpercent }} <i class="trend-item-up"></i
              ></span>
            </div>
            <div class="trend-item clearfix">
              <h3 class="trend-item-h3">Min</h3>
              <span class=" trend-item-h3left">{{ trendvalue.min }}</span>
              <span class="right"
                >{{ trendvalue.minpercent }} <i class="trend-item-down"></i
              ></span>
            </div>
            <div class="trend-item clearfix">
              <h3 class="trend-item-h3">Ave</h3>
              <span class="trend-item-h3 left">{{ trendvalue.ave }}</span>
              <span class="right">{{ trendvalue.avepercent }}</span>
            </div>
          </div>
          <div class="equipment-chart">
            <Equipment></Equipment>
          </div>
        </div>
      </div>
      <div class="colum">
        <!-- 实时警情统计区域 -->
        <div class="panel warn-statistics">
          <div class="equipment-title">
            <img class="warn-img" src="../assets/image/statistics.png" alt="" />
            <h3 class="risk-h3 time-box">实时警情统计</h3>
            <div class="time-select ">
              <img src="../assets/image/time.png" alt="" />
              <span class="select-icon">今日</span>
            </div>
          </div>
          <RealAlert></RealAlert>
        </div>
        <!-- 实时警情区域 -->
        <div class="panel realwarm-list">
          <div class="equipment-title realwarm-titlebox">
            <div class="flex">
              <img class="warn-img" src="../assets/image/alarm.png" alt="" />
              <h3 class="risk-h3 time-box">实时警情</h3>
            </div>
            <div class="warn-title-rank">
              <ul clearfix>
                <li class="alarm-rank-font" v-for="(item, i) in rank" :key="i">
                  <span>{{ item.rank }}</span
                  ><span class="rank-value">{{ item.value }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="realwarm-list-table">
            <table rules="none">
              <thead>
                <th>预警时间</th>
                <th>详细地址</th>
                <th>地区</th>
                <th>灾害类型</th>
                <th>级别</th>
                <th>出动力量</th>
              </thead>
              <tbody>
                <tr v-for="(item, i) in rankData" :key="i">
                  <td>
                    <div class="real-table-time">{{ item.time }}</div>
                  </td>
                  <td>{{ item.address }}</td>
                  <td>{{ item.area }}</td>
                  <td>{{ item.type }}</td>
                  <td class="real-table-rank">{{ item.rank }}</td>
                  <td>{{ item.dispatch }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 24小时警情走势 -->
        <div class="panel warn-trend">
          <div class="warn-trend-title">
            <div class="flex">
              <img class="warn-img" src="../assets/image/trend.png" alt="" />
              <h3 class="risk-h3 time-box">24小时警情走势</h3>
            </div>
          </div>
          <div class="statistics-chart">
            <Alert24></Alert24>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Eharts from "./chart/Echarts.vue";
import RiskChart from "./chart/RiskChart.vue";
import Equipment from "./chart/Equipment.vue";
import RealAlert from "./chart/RealAlert.vue";
import Alert24 from "./chart/Alert24.vue";
import MapChart from "./chart/MapChart.vue";
export default {
  components: {
    Eharts,
    RiskChart,
    Equipment,
    RealAlert,
    Alert24,
    MapChart
  },
  props: [],
  data() {
    return {
      chart: null,
      numArr: [1, 5, 6, 7, 8],
      warndata: [
        { name: "火灾报警设备", value: "6583" },
        { name: "水系统监测", value: "2016" },
        { name: "电器火灾监测", value: "1064" }
      ],
      riskData: [
        { area: "锦江区", value: "11.7" },
        { area: "锦江区", value: "11.7" },
        { area: "锦江区", value: "11.7" },
        { area: "锦江区", value: "11.7" },
        { area: "锦江区", value: "11.7" },
        { area: "锦江区", value: "11.7" },
        { area: "锦江区", value: "11.7" },
        { area: "锦江区", value: "11.7" },
        { area: "锦江区", value: "11.7" },
        { area: "锦江区", value: "11.7" },
        { area: "锦江区", value: "11.7" },
        { area: "锦江区", value: "11.7" },
        { area: "锦江区", value: "11.7" }
      ],
      trendvalue: {
        max: 17,
        maxpercent: "24%",
        min: 3,
        minpercent: "24%",
        ave: 5,
        avepercent: "15%"
      },
      // 实时警情级别数据
      rank: [
        { rank: "一级", value: 79 },
        { rank: "二级", value: 55 },
        { rank: "三级", value: 8 },
        { rank: "四级", value: 7 },
        { rank: "五级", value: 2 }
      ],

      // 实时警情列表数据
      rankData: [
        {
          time: "20201104 16:00",
          address: "成都高新区",
          area: "高新区",
          type: "社会救助",
          rank: "5",
          dispatch: "1（队）"
        },
        {
          time: "20201104 16:00",
          address: "成都高新区",
          area: "高新区",
          type: "社会救助",
          rank: "4",
          dispatch: "1（队）"
        },
        {
          time: "20201104 16:00",
          address: "成都高新区",
          area: "高新区",
          type: "社会救助",
          rank: "3",
          dispatch: "1（队）"
        },
        {
          time: "20201104 16:00",
          address: "成都高新区",
          area: "高新区",
          type: "社会救助",
          rank: "2",
          dispatch: "1（队）"
        },
        {
          time: "20201104 16:00",
          address: "成都高新区",
          area: "高新区",
          type: "社会救助",
          rank: "1",
          dispatch: "1（队）"
        }
      ],
      nowtime: "",
      intradayData: { local: "成都", temp: "25°", wind: "6", leaf: "5" }
    };
  },
  mounted() {
    this.getnowtime();
  },
  methods: {
    changenumArr() {
      this.numArr = this.numArr.join(",");
    },
    getnowtime() {
      this.nowtime = new Date(+new Date() + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    }
  }
};
</script>
<style lang="less" scoped>
// scoped不加style 是全局生效  加上是当前组件生效
//只要是定义单文件组件 就应该加上scoped 阻止组件之间的样式冲突
#viewBox {
  background: url("../assets/image/bg.jpg") no-repeat;
}
.ban {
  width: 100%;
  display: flex;
  margin: 0.9375rem 0;
  color: #fff;
}
.ban-item {
  height: 71px;
  width: 131px;
  padding: 10px;

  box-sizing: border-box;
  text-align: center;
  background-color: #214c85;
  border: 1px solid #6480e9;
}
.ban-item:nth-child(2) {
  margin: 0 22px;
}
.ban-item h4 {
  margin-top: 5px;
}
.ban-item-span {
  font-size: 12px;
}
.viewport {
  position: relative;
  min-width: 1024px;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 5.375rem;
  background: url("../assets/image/logo.png") no-repeat 0 0 / contain;
  min-height: 780px;
  .colum {
    display: inline-block;
    width: 474px;
    color: #fff;
  }
  .colum-center {
    display: inline-block;
    width: 949px;
    // margin: 0 0.8125rem;
    margin-left: 0.8125rem;
  }
}
.header-left {
  position: absolute;
  display: flex;
  top: 32px;
  left: 92px;
  width: 245px;
  color: #fff;
}
.header-left span {
  font-size: 14px;
  text-align: left;
}
.header-left img {
  margin-right: 5px;
}

.header-right {
  position: absolute;
  width: 355px;
  display: flex;
  justify-content: space-between;
  top: 32px;
  right: 154px;
  width: 245px;
  color: #fff;
}
.header-right img {
  margin-right: 5px;
}
.header-title {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -217px;
  width: 434px;
  height: 51px;
  font-size: 48px;
  font-family: PangMenZhengDao, PangMenZhengDao-Regular;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 0px 12px 0px #0078d7;
}
.panel {
  padding: 0 20px 10px 20px;
}
.view-alarm {
  // height: 560px;
  height: 41.125rem;
  box-sizing: border-box;
  padding-bottom: 10px;
  width: 474px;
  background: url("../assets/image/lefttopborder.png");
}

.map {
  width: 59.3125rem;
  height: 41.5625rem;
}
.equipment {
  position: relative;
  width: 937px;
  height: 325px;
  // margin-top: 0.8125rem;
  color: #fff;
  background: url("../assets/image/bottom.png");
}
.equipment-chart {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.equipment-chart canvas {
  width: 683px !important;
  height: 325px !important;
}
.warn-statistics {
  position: relative;
  width: 29.625rem;
  height: 20.3125rem;
  background: url("../assets/image/righttop.png");
}
.warn-statistics-chart {
  height: 291px;
}
// .statistics-chart {
//   height: 281px;
// }
.realwarm-list {
  box-sizing: border-box;
  height: 325px;
  margin: 10px 0;
  // margin: 0.8125rem 0;
  overflow: hidden;
  background: url("../assets/image/rightcenter.png");
}
.warn-trend {
  width: 474px;
  height: 325px;
  background: url("../assets/image/rightbottom.png");
}
.warn-trend-title {
  display: flex;
  padding-top: 11px;
  margin-bottom: 30px;
}
.equipment-title {
  display: flex;
  padding-top: 11px;
}
.warn-title {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  margin-top: 11px;
}
.alarm-h3 {
  padding-top: 28px;
  text-align: center;
  font-size: 24px;
  color: #fff;
  font-weight: 400;
}
.num {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  margin: 0.9375rem 0;
}
.num span {
  width: 24px;
  height: 50px;
  background-color: #0d98ee;
  display: inline-block;
  margin-left: 10px;
}
.risk {
  box-sizing: border-box;
  display: flex;
  width: 29.625rem;
  height: 20.3125rem;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 14px;
  background: url("../assets/image/leftbuttom.png");
}
.risk-chart {
  width: 250px;
  height: 260px;
}
.warn-img {
  width: 20px;
}
.risk-h3 {
  margin-left: 5px;
  font-size: 17px;
  font-weight: 400;
  font-family: "Microsoft YaHei";
}
.risk-list {
  height: 308px;
  width: 175px;
  margin-bottom: 5px;
  overflow: hidden;
}
.risk-table {
  text-align: left;
  font-size: 12px;
  margin-bottom: 5px;
}
.risk-table th {
  padding: 5px 0;
  background-color: #22355b;
}
.risk-table td {
  width: 92;
  height: 24px;
  background-color: rgba(104, 133, 242, 0.2);
}
.trend-box {
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 156px;
  height: 50px;
  color: #fff;
}
.trend-item {
  width: 115px;
  height: 50px;
  padding: 6px 11px;
  // background-color: #1165c7;
  background: linear-gradient(#009bee, #1165c7);
}
.trend-item-h3 {
  font-weight: 700;
  font-size: 15px;
}
.trend-item span {
  font-size: 12px;
}
.trend-item-up,
.trend-item-down {
  display: inline-block;
  width: 8px;
  height: 15px;
  background: url("../assets/image/up.png");
}
.trend-item-down {
  background: url("../assets/image/down.png");
}
.time-box {
  position: relative;
}
.time-select {
  position: absolute;
  top: 20px;
  right: 8px;
  width: 80px;
  height: 26px;
  font-size: 14px;
  line-height: 26px;
  background: linear-gradient(
    180deg,
    rgba(0, 155, 238, 0.25),
    rgba(104, 133, 242, 0.15)
  );
  border: 1px solid rgba(0, 155, 238, 0.6);
  border-radius: 4px;
}
.time-select img {
  margin-right: 5px;
}
.select-icon:after {
  content: "";
  width: 0;
  height: 0x;
  border: 8px solid transparent;
  border-top: 8px solid #a9d4eb;
  border-bottom: 0;
  position: absolute;
  top: 10px;
  right: 2px;
}
.realwarm-titlebox {
  margin-bottom: 22px;
  margin-top: 3px;
  display: flex;
  justify-content: space-between;
}
.warn-title-rank {
  //   width: 308px;
  //   height: 16px;
  line-height: 16px;
  color: #fff;
}
.warn-title-rank ul {
  width: 100%;
}
.alarm-rank-font {
  float: left;
  margin-left: 5px;
}
.rank-value {
  text-align: center;
  font-weight: 700;
  display: inline-block;
  width: 24px;
  height: 16px;
  opacity: 0.9;
}
.warn-title-rank ul li:nth-child(1) {
  .rank-value {
    background: #009bee;
  }
}
.warn-title-rank ul li:nth-child(2) {
  .rank-value {
    background: #89b367;
  }
}
.warn-title-rank ul li:nth-child(3) {
  .rank-value {
    background: #e6b36d;
  }
}
.warn-title-rank ul li:nth-child(4) {
  .rank-value {
    background: #e67f60;
  }
}
.warn-title-rank ul li:nth-child(5) {
  .rank-value {
    background: #e6635f;
  }
}

.realwarm-list-table {
  width: 100%;
  height: 100%;
  font-size: 12px;
  color: #fff;
  border-collapse: collapse;
  overflow: hidden;
  border: 0;
}
.realwarm-list-table table thead {
  border-bottom: 1px solid #009bee;
}
.realwarm-list-table table th {
  width: 4.9375rem;
  text-align: left;
  border-bottom: 1px solid #009bee;
}
.realwarm-list-table table tr:nth-child(1) {
  .real-table-rank {
    color: #ff5040;
  }
}
.realwarm-list-table table tr:nth-child(2) {
  .real-table-rank {
    color: #e67f5f;
  }
}
.realwarm-list-table table tr:nth-child(3) {
  .real-table-rank {
    color: #e6b26d;
  }
}
.realwarm-list-table table tr:nth-child(4) {
  .real-table-rank {
    color: #88b266;
  }
}
.realwarm-list-table table tr:nth-child(5) {
  .real-table-rank {
    color: #008edf;
  }
}

.realwarm-list-table table td {
  text-align: left;
  height: 41px;
  line-height: 41px;
  white-space: nowrap;
}
.real-table-time {
  margin-right: 10px;
}
</style>
