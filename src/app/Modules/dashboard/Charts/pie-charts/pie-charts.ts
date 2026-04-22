import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
@Component({
  selector: 'app-pie-charts',
  standalone: false,
  templateUrl: './pie-charts.html',
  styleUrl: './pie-charts.scss',
})
export class PieCharts {
  weatherIcons = {
    Sunny: 'https://echarts.apache.org/examples/data/asset/img/weather/sunny_128.png',
    Cloudy: 'https://echarts.apache.org/examples/data/asset/img/weather/cloudy_128.png',
    Showers: 'https://echarts.apache.org/examples/data/asset/img/weather/showers_128.png',
  };
option: EChartsOption = {
  title: {
    left: 'center',
    top: '20'
  },
  legend: {
    show: false
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)'
  },
  color: ['#D1F2EB', '#A3E4D7', '#FAD7A0', '#AED6F1', '#D2B4DE'],
  series: [
    {
      type: 'pie',
      radius: '70%',
      center: ['50%', '50%'],
      label: {
        show: true,
        position: 'inside',
        formatter: '{d}%',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1548, name: 'CityE' },
        { value: 735, name: 'CityC' },
        { value: 510, name: 'CityD' },
        { value: 434, name: 'CityB' },
        { value: 335, name: 'CityA' }
      ]
    }
  ]
};
}
