import { FormattedData } from '@shared/models/widget.models';
import { DateFormatProcessor, DateFormatSettings, Font } from '@shared/models/widget-settings.models';
import { TimeSeriesChartDataItem } from '@home/components/widget/lib/chart/time-series-chart.models';
import { Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { Interval } from '@shared/models/time/time.models';
export type TimeSeriesChartTooltipValueFormatFunction = (value: any, latestData: FormattedData, units?: string, decimals?: number) => string;
export interface TimeSeriesChartTooltipWidgetSettings {
    showTooltip: boolean;
    tooltipTrigger?: TimeSeriesChartTooltipTrigger;
    tooltipShowFocusedSeries?: boolean;
    tooltipLabelFont: Font;
    tooltipLabelColor: string;
    tooltipValueFont: Font;
    tooltipValueColor: string;
    tooltipValueFormatter?: string | TimeSeriesChartTooltipValueFormatFunction;
    tooltipShowDate: boolean;
    tooltipDateInterval?: boolean;
    tooltipDateFormat: DateFormatSettings;
    tooltipDateFont: Font;
    tooltipDateColor: string;
    tooltipBackgroundColor: string;
    tooltipBackgroundBlur: number;
}
export declare enum TimeSeriesChartTooltipTrigger {
    point = "point",
    axis = "axis"
}
export declare const tooltipTriggerTranslationMap: Map<TimeSeriesChartTooltipTrigger, string>;
export declare const createTooltipValueFormatFunction: (tooltipValueFormatter: string | TimeSeriesChartTooltipValueFormatFunction) => TimeSeriesChartTooltipValueFormatFunction;
export declare class TimeSeriesChartTooltip {
    private renderer;
    private sanitizer;
    private settings;
    private tooltipDateFormat;
    private valueFormatFunction;
    constructor(renderer: Renderer2, sanitizer: DomSanitizer, settings: TimeSeriesChartTooltipWidgetSettings, tooltipDateFormat: DateFormatProcessor, valueFormatFunction: TimeSeriesChartTooltipValueFormatFunction);
    formatted(params: CallbackDataParams[] | CallbackDataParams, focusedSeriesIndex: number, series?: TimeSeriesChartDataItem[], interval?: Interval): HTMLElement;
    private buildItemsTooltip;
    private constructTooltipDateElement;
    private constructTooltipSeriesElement;
    private static mapTooltipParams;
    private static appendTooltipItem;
}
