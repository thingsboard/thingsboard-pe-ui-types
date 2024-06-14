import { LinearGradientObject } from 'zrender/lib/graphic/LinearGradient';
import { Interval } from '@shared/models/time/time.models';
import { TimeSeriesChartDataItem, TimeSeriesChartNoAggregationBarWidthStrategy } from '@home/components/widget/lib/chart/time-series-chart.models';
import { CustomSeriesRenderItemParams } from 'echarts';
import { CustomSeriesRenderItemAPI, CustomSeriesRenderItemReturn } from 'echarts/types/dist/shared';
import { BarSeriesLabelOption } from 'echarts/types/src/chart/bar/BarSeries';
export interface BarVisualSettings {
    color: string | LinearGradientObject;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
}
export interface BarRenderSharedContext {
    barGap: number;
    intervalGap: number;
    timeInterval: Interval;
    noAggregationBarWidthStrategy: TimeSeriesChartNoAggregationBarWidthStrategy;
    noAggregationWidthRelative: boolean;
    noAggregationWidth: number;
}
export interface BarRenderContext {
    shared: BarRenderSharedContext;
    barsCount?: number;
    barIndex?: number;
    noAggregation?: boolean;
    visualSettings?: BarVisualSettings;
    labelOption?: BarSeriesLabelOption;
    additionalLabelOption?: {
        [key: string]: any;
    };
    barStackIndex?: number;
    currentStackItems?: TimeSeriesChartDataItem[];
}
export declare const renderTimeSeriesBar: (params: CustomSeriesRenderItemParams, api: CustomSeriesRenderItemAPI, renderCtx: BarRenderContext) => CustomSeriesRenderItemReturn;
