import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../../@core/utils';

@Component({
  selector: 'ngx-stats-temperature-ball-ares-chart',
  styleUrls: ['stats-card-temperature-ball-back.component.scss'],
  template: `
    <div echarts [options]="option"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
})
export class StatsAreaTemperatureBallChartComponent implements AfterViewInit, OnDestroy {

  private alive = true;

  @Input() points: number[];

  echartsIntance: any;
  option: any = {};

  constructor(private theme: NbThemeService,
              private layoutService: LayoutService) {
    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());
  }

  ngAfterViewInit() {
    this.theme.getJsTheme()
      .pipe(
        delay(1),
        takeWhile(() => this.alive),
      )
      .subscribe(config => {
        const temperatureTheme: any = config.variables.temperatureChart;

        this.option = Object.assign({}, {
          grid: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.points,
          },
          yAxis: {
            boundaryGap: [0, '5%'],
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: temperatureTheme.colorBlack,
                opacity: 0.06,
                width: '1',
              },
            },
          },
          tooltip: {
            axisPointer: {
              type: 'shadow',
            },
            textStyle: {
              color: temperatureTheme.tooltipTextColor,
              fontWeight: temperatureTheme.tooltipFontWeight,
              fontSize: 16,
            },
            position: 'top',
            backgroundColor: temperatureTheme.tooltipBg,
            borderColor: temperatureTheme.tooltipBorderColor,
            borderWidth: 3,
            formatter: '$ {c0}',
            extraCssText: temperatureTheme.tooltipExtraCss,
          },
          series: [
            {
              type: 'line',
              symbol: 'circle',
              symbolSize: 8,
              sampling: 'average',
              silent: true,
              itemStyle: {
                normal: {
                  color: temperatureTheme.shadowLineDarkBg,
                },
                emphasis: {
                  color: 'rgba(0,0,0,0)',
                  borderColor: 'rgba(0,0,0,0)',
                  borderWidth: 0,
                },
              },
              lineStyle: {
                normal: {
                  width: 2,
                  color: temperatureTheme.shadowLineDarkBg,
                },
              },
              data: this.points.map(p => p - 15),
            },
            {
              type: 'line',
              symbol: 'circle',
              symbolSize: 6,
              sampling: 'average',
              itemStyle: {
                normal: {
                  color: temperatureTheme.itemColor,
                  borderColor: temperatureTheme.itemBorderColor,
                  borderWidth: 2,
                },
                emphasis: {
                  color: 'white',
                  borderColor: temperatureTheme.itemEmphasisBorderColor,
                  borderWidth: 2,
                },
              },
              lineStyle: {
                normal: {
                  width: 2,
                  color: temperatureTheme.lineBg,
                  shadowColor: temperatureTheme.lineBg,
                  shadowBlur: temperatureTheme.lineShadowBlur,
                },
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: temperatureTheme.gradFrom,
                  }, {
                    offset: 1,
                    color: temperatureTheme.gradTo,
                  }]),
                  opacity: 1,
                },
              },
              data: this.points,
            },
          ],
        });
    });
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
