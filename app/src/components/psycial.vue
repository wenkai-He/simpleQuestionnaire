<template>
  <div id="psycial" style="width:350px;height:350px"></div>
</template>

<script>
export default {
   watch:{
      psycial(newValue,oldValue){
        this.myEcharts()
      }
    },
  props:['psycial'],
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("psycial"));
      var option = {
        tooltip: {
          formatter: "{b} : {c}",
        },
        series: [
          {
            name: "",
            type: "gauge",
            progress: {
              show: true,
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}",
              fontSize:15
            },
            data: [
              {
                value: this.psycial,
                name: "生理评分",
              },
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.onresize = myChart.resize;
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style scoped>
#main {
  width: 100%;
  height: 683px;
  background-color: rgba(18, 37, 18, 0);
}

#main > canvas {
  width: 100%;
}
</style>