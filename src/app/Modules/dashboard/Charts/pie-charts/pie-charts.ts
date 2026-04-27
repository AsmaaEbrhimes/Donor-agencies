
import { Component, OnInit } from '@angular/core';
// 1. استيراد المحرك الأساسي فقط
import * as echarts from 'echarts/core';
// 2. استيراد النوع اللي محتاجينه (Pie)
import { PieChart } from 'echarts/charts';
// 3. استيراد المكونات الإضافية (Tooltip, Title, etc.)
import { TooltipComponent, LegendComponent } from 'echarts/components';
// 4. استيراد الـ Canvas للرسم
import { CanvasRenderer } from 'echarts/renderers';

// تسجيل المكونات اللي اخترناها فقط
echarts.use([PieChart, TooltipComponent, LegendComponent, CanvasRenderer]);

@Component({
  selector: 'app-pie-charts',
  standalone: false,
  templateUrl: './pie-charts.html',
  styleUrl: './pie-charts.scss',
})
export class PieCharts implements OnInit {
  option: any = {};

  ngOnInit() {
    this.option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
      },
      legend: { show: false },
      color: ['#E1F0FF', '#D4FBE5', '#FFF2DF'],
      series: [
        {
          name: 'إحصائيات المبادرات',
          type: 'pie',
          radius: '90%',
          center: ['50%', '50%'],
          labelLine: { show: false },
          label: {
            show: true,
            position: 'inside',
            formatter: '{d}%',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#1a4b5a'
          },
          data: [
            { value: 65, name: 'مجتمع' },
            { value: 25, name: 'ورش' },
            { value: 10, name: 'نشاط تدريبي' }
          ],
          itemStyle: {
            borderRadius: 0,
            borderColor: '#fff',
            borderWidth: 1
          }
        }
      ]
    };
  }
}
