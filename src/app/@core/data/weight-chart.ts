export interface WeightChart {
  chartLabel: string[];
  data: number[][];
}

export abstract class WeightChartData {
  abstract getWeightChartData(period: string): WeightChart;
}
