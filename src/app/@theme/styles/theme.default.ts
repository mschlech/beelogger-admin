export const DEFAULT_THEME = {
  name: 'default',
  base: null,
  variables: {

    // Safari fix
    temperature: [
      '#42db7d',
      '#42db7d',
      '#42db7d',
      '#42db7d',
      '#42db7d',
    ],

    solar: {
      gradientLeft: '#42db7d',
      gradientRight: '#42db7d',
      shadowColor: 'rgba(0, 0, 0, 0)',
      radius: ['80%', '90%'],
    },
    humidity: {
      colorBlack: '#000000',
      tooltipBg: '#ffffff',
      tooltipBorderColor: '#c0c8d1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',

      lineBg: '#c0c8d1',
      lineShadowBlur: '1',
      itemColor: '#bcc3cc',
      itemBorderColor: '#bcc3cc',
      itemEmphasisBorderColor: '#42db7d',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: '#ebeef2',
      gradTo: '#ebeef2',
    },
    luxmeter: {
      tooltipBg: '#ffffff',
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: '#ebeef2',
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',

      axisLineColor: 'rgba(0, 0, 0, 0)',
      xAxisTextColor: '#2a2a2a',
      yAxisSplitLine: '#ebeef2',

      itemBorderColor: '#42db7d',
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: '#42db7d',
      lineGradTo: '#42db7d',
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: 'rgba(235, 238, 242, 0.5)',
      areaGradTo: 'rgba(235, 238, 242, 0.5)',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },

    bubbleMap: {
      titleColor: '#484848',
      areaColor: '#dddddd',
      areaHoverColor: '#cccccc',
      areaBorderColor: '#000000',
    },

    weatherBarAnimationEchart: {
      textColor: '#484848',

      firstAnimationBarColor: '#3edd81',
      secondAnimationBarColor: '#8d7fff',

      splitLineStyleOpacity: '0.06',
      splitLineStyleWidth: '1',
      splitLineStyleColor: '#000000',

      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
      tooltipFontSize: '16',
      tooltipBg: '#ffffff',
      tooltipBorderColor: '#c0c8d1',
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
  },
};
