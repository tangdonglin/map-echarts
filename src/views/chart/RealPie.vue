<template>
  <div>

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
    this.drawPie()
  },
  methods: {
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
            center: ['50%', '50%'],
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
    }

  }
}
</script>
<style lang="less" scoped>
// scoped不加style 是全局生效  加上是当前组件生效
//只要是定义单文件组件 就应该加上scoped 阻止组件之间的样式冲突
</style>
