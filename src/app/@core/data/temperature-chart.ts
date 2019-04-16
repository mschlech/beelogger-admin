export interface TemperatureChart {
  chartLabel: string[];
  linesData: number[][];
}

export abstract class TemperatureChartData {
  abstract getTemperatureChartData(period: string): TemperatureChart;
}
