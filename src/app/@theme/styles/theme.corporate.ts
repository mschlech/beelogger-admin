export const CORPORATE_THEME = {
  name: 'corporate',
  base: 'default',
  variables: {
    temperature: [
      '#ffa36b',
      '#ffa36b',
      '#ff9e7a',
      '#ff9888',
      '#ff8ea0',
    ],

    solar: {
      gradientLeft: '#ff8ea0',
      gradientRight: '#ffa36b',
      shadowColor: 'rgba(0, 0, 0, 0)',
      radius: ['80%', '90%'],
    },
    temperatureChart: {
      colorBlack: '#ffffff',
      tooltipBg: '#eef2f5',
      tooltipBorderColor: '#eef2f5',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: '400',

      lineBg: '#cae6f3',
      lineShadowBlur: '0',
      itemColor: '#bcc3cc',
      itemBorderColor: '#bcc3cc',
      itemEmphasisBorderColor: '#74a2ff',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: '#ffffff',
      gradTo: '#ffffff',
    },

    electricity: {
      tooltipBg: '#edf0f4',
      tooltipLineColor: '#bdc4cd',
      tooltipLineWidth: '0',
      tooltipBorderColor: '#ebeef2',
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',

      axisLineColor: 'rgba(0, 0, 0, 0)',
      xAxisTextColor: '#2a2a2a',
      yAxisSplitLine: '#ebeef2',

      itemBorderColor: '#73a1ff',
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: '#bdc4cd',
      lineGradTo: '#c0c8d1',
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: 'rgba(255, 255, 255, 0)',
      areaGradTo: 'rgba(255, 255, 255, 0)',
      shadowLineDarkBg: 'rgba(255, 255, 255, 0)',
    },

    bubbleMap: {
      titleColor: '#484848',
      areaColor: '#ff9313',
      areaHoverColor: '#cccccc',
      areaBorderColor: '#ebeef2',
    },

    weatherBarAnimationEchart: {
      textColor: '#b2bac2',

      firstAnimationBarColor: '#719efc',
      secondAnimationBarColor: '#5dcfe3',

      splitLineStyleOpacity: '0.06',
      splitLineStyleWidth: '1',
      splitLineStyleColor: '#000000',

      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: '400',
      tooltipFontSize: '16',
      tooltipBg: '#eef2f5',
      tooltipBorderColor: '#eef2f5',
      tooltipBorderWidth: '3',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },

    echarts: {
      bg: '#ffffff',
      textColor: '#484848',
      axisLineColor: '#bbbbbb',
      splitLineColor: '#ebeef2',
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#6a7985',
      areaOpacity: '0.7',
    },

    chartjs: {
      axisLineColor: '#cccccc',
      textColor: '#484848',
    },
    temperatureCompensationLegend: {
      firstItem: '#719efc',
      secondItem: '#5dcfe3',
      thirdItem: '#e3ecfe',
    },
  },
};
