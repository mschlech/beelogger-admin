export const COSMIC_THEME = {
  name: 'cosmic',
  base: 'default',
  variables: {

    temperature: [
      '#2ec7fe',
      '#31ffad',
      '#7bff24',
      '#fff024',
      '#f7bd59',
    ],

    solar: {
      gradientLeft: '#7bff24',
      gradientRight: '#2ec7fe',
      shadowColor: '#19977E',
      radius: ['70%', '90%'],
    },
    electricity: {
      tooltipBg: 'rgba(0, 255, 170, 0.35)',
      tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
      tooltipLineWidth: '1',
      tooltipBorderColor: '#00d977',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#ffffff',
      tooltipFontWeight: 'normal',

      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      xAxisTextColor: '#a1a1e5',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: '#ffffff',
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: '#00ffaa',
      lineGradTo: '#fff835',
      lineShadow: 'rgba(14, 16, 48, 0.4)',

      areaGradFrom: 'rgba(188, 92, 255, 0.5)',
      areaGradTo: 'rgba(188, 92, 255, 0)',
      shadowLineDarkBg: '#a695ff',
    },

    bubbleMap: {
      titleColor: '#ffffff',
      areaColor: '#2c2961',
      areaHoverColor: '#a1a1e5',
      areaBorderColor: '#654ddb',
    },

    weatherBarAnimationEchart: {
      textColor: '#ffffff',

      firstAnimationBarColor: '#0088ff',
      secondAnimationBarColor: '#7659ff',

      splitLineStyleOpacity: '0.06',
      splitLineStyleWidth: '1',
      splitLineStyleColor: '#000000',

      tooltipTextColor: '#ffffff',
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: 'rgba(0, 255, 170, 0.35)',
      tooltipBorderColor: '#00d977',
      tooltipBorderWidth: '3',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
    },

    trafficBarEchart: {
      gradientFrom: '#fc0',
      gradientTo: '#ffa100',
      shadow: '#ffb600',
      shadowBlur: '5',

      axisTextColor: '#a1a1e5',
      axisFontSize: '12',

      tooltipBg: 'rgba(0, 255, 170, 0.35)',
      tooltipBorderColor: '#00d977',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#ffffff',
      tooltipFontWeight: 'normal',
    },


    echarts: {
      bg: '#3d3780',
      textColor: '#ffffff',
      axisLineColor: '#a1a1e5',
      splitLineColor: '#342e73',
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#6a7985',
      areaOpacity: '1',
    },

    chartjs: {
      axisLineColor: '#a1a1e5',
      textColor: '#ffffff',
    },

    orders: {
      tooltipBg: 'rgba(0, 255, 170, 0.35)',
      tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
      tooltipLineWidth: '1',
      tooltipBorderColor: '#00d977',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#ffffff',
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',

      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      axisFontSize: '16',
      axisTextColor: '#a1a1e5',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: '#ffffff',
      lineStyle: 'solid',
      lineWidth: '4',

      // first line
      firstAreaGradFrom: 'rgba(78, 64, 164, 1)',
      firstAreaGradTo: 'rgba(78, 64, 164, 1)',
      firstShadowLineDarkBg: '#018dff',

      // second line
      secondLineGradFrom: '#00bece',
      secondLineGradTo: '#00da78',

      secondAreaGradFrom: 'rgba(38, 139, 145, 0.8)',
      secondAreaGradTo: 'rgba(38, 139, 145, 0.5)',
      secondShadowLineDarkBg: '#2c5a85',

      // third line
      thirdLineGradFrom: '#8069ff',
      thirdLineGradTo: '#8357ff',

      thirdAreaGradFrom: 'rgba(118, 73, 208, 0.7)',
      thirdAreaGradTo: 'rgba(188, 92, 255, 0.4)',
      thirdShadowLineDarkBg: '#a695ff',
    },
  },
};
