<template>
  <div class="my-app">
    
    <!-- chart -->
    <D3BarChart
      :config="chart_config"
      :datum="chart_data"
      :title="chart_title"
      :source="chart_source"
    ></D3BarChart>

    <!-- value control -->
    <select v-model="config.values">
      <option :value="[d]" v-for="d in ['hours', 'production']"  :key="d.year">{{d}}</option>
    </select>

    <!-- current control -->
    <select v-model="config.currentKey">
      <option :value="d.year" v-for="d in data"  :key="d.year">{{d.year}}</option>
    </select>

    <!-- title control -->
    <input type="text" v-model="chart_title">

    <!-- source control -->
    <input type="text" v-model="chart_source">

  </div>
</template>

<script>
import { D3BarChart } from 'vue-d3-charts';

export default {
  components: {
    D3BarChart,
  },
  data() {
    return {
      config:"",
      data:"",
      source:"",
      chart_title: 'Your title goes here',
      chart_source: 'Your source goes here',
      chart_data: [
        {hours: 1648, production: 9613, year: '2007'},
        {hours: 2479, production: 6315, year: '2008'},
        {hours: 3200, production: 2541, year: '2009'}
      ],
      chart_config: {
        key: 'year',
        currentKey: '2004',
        values: ['hours'],
        axis: {
          yTicks: 3
        },
        color: {
          default: '#222f3e',
          current: '#41B882'
        }
      }
    }
  }
}
</script>
