<template>
  <D3Sunburst :config="chart_config" :datum="chart_data"></D3Sunburst>
</template>

<style lang="scss" scoped>
*{
margin {
    top: 20;
    right: 20;
    bottom: 20;
    left: 20;
  }
transition {
    duration: 350;
    ease: "easeLinear";
  }
}
  </style>

<script>
import { D3Sunburst } from 'vue-d3-charts';
export default ({
  components: {
    D3Sunburst,
  },
  data(){
      return{
          chart_data :[{
  "name": "one",
  "children": [{
    "name": "two",
    "children": [{
      "name": "three",
      "value": 2354
    },{
      "name": "four",
      "value": 1384
    }]
  }]
}],

chart_config :{
  key: false,
  value: false,
  color: {
    key: false,
    keys: false,
    scheme: false,
    current: "#1f77b4",
    default: "#AAA",
    axis: "#000",
  },

      }
  }
  }
})
</script>
