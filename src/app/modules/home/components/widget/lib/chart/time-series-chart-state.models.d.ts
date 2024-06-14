import { TimeSeriesChartStateSettings, TimeSeriesChartTicksFormatter, TimeSeriesChartTicksGenerator, TimeSeriesChartTooltipValueFormatFunction } from '@home/components/widget/lib/chart/time-series-chart.models';
import { UtilsService } from '@core/services/utils.service';
import { LabelFormatterCallback } from 'echarts';
export declare class TimeSeriesChartStateValueConverter {
    private readonly constantsMap;
    private readonly rangeStates;
    private readonly ticks;
    private readonly labelsMap;
    readonly ticksGenerator: TimeSeriesChartTicksGenerator;
    readonly ticksFormatter: TimeSeriesChartTicksFormatter;
    readonly tooltipFormatter: TimeSeriesChartTooltipValueFormatFunction;
    readonly labelFormatter: LabelFormatterCallback;
    readonly valueConverter: (value: any) => any;
    constructor(utils: UtilsService, states: TimeSeriesChartStateSettings[]);
    static constantRange(state: TimeSeriesChartStateSettings): boolean;
}
