import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-bar-charts',
  standalone: false,
  templateUrl: './bar-charts.html',
  styleUrl: './bar-charts.scss',
})
export class BarCharts implements OnInit {
  chartOptions: EChartsOption = {};

  ngOnInit(): void {
    this.chartOptions = {
      color: ['#1a4b5a'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['نشاط 1', 'نشاط 2', 'نشاط 3', 'نشاط 4', 'نشاط 5'],
        axisLine: { show: true, lineStyle: { color: '#dbe2e8' } },
        axisTick: { show: false },
        inverse: true // ليدعم الـ RTL
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: { type: 'solid', color: '#dbe2e8' }
        }
      },
      series: [
        {
          name: 'التقدم',
          type: 'bar',
          barWidth: '12px',
          itemStyle: {
            borderRadius: [10, 10, 10, 10]
          },
          data: [80, 130, 280, 190, 240]
        }
      ]
    };
  }
}
