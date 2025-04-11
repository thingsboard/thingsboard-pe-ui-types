import { WidgetContext } from '@home/models/widget-component.models';
import { TimeSeriesChartSettings, TimeSeriesChartType } from '@home/components/widget/lib/chart/time-series-chart.models';
import { DataKey } from '@shared/models/widget.models';
import { Renderer2 } from '@angular/core';
import { DataKeySettingsFunction } from '@home/components/widget/lib/settings/common/key/data-keys.component.models';
import { DeepPartial } from '@shared/models/common';
export declare class TbTimeSeriesChart {
    private ctx;
    private readonly inputSettings;
    private chartElement;
    private renderer;
    private autoResize;
    static dataKeySettings(type?: TimeSeriesChartType): DataKeySettingsFunction;
    private get noAggregation();
    private get stateData();
    private readonly shapeResize$;
    private readonly settings;
    private readonly comparisonEnabled;
    private readonly stackMode;
    private xAxisList;
    private yAxisList;
    private dataItems;
    private thresholdItems;
    private hasVisualMap;
    private visualMapSelectedRanges;
    private timeSeriesChart;
    private timeSeriesChartOptions;
    private readonly tooltipDateFormat;
    private readonly timeSeriesChartTooltip;
    private readonly stateValueConverter;
    private yMinSubject;
    private yMaxSubject;
    private darkMode;
    private darkModeObserver;
    private topPointLabels;
    private componentIndexCounter;
    private highlightedDataKey;
    private barRenderSharedContext;
    private latestData;
    private onParentScroll;
    yMin$: import("rxjs").Observable<number>;
    yMax$: import("rxjs").Observable<number>;
    constructor(ctx: WidgetContext, inputSettings: DeepPartial<TimeSeriesChartSettings>, chartElement: HTMLElement, renderer: Renderer2, autoResize?: boolean);
    update(): void;
    latestUpdated(): void;
    keyEnter(dataKey: DataKey): void;
    keyLeave(dataKey: DataKey): void;
    toggleKey(dataKey: DataKey, dataIndex?: number): void;
    toggleVisualMapRange(index: number): void;
    destroy(): void;
    resize(): void;
    setDarkMode(darkMode: boolean): void;
    isDarkMode(): boolean;
    private setupData;
    private setupThresholds;
    private setupXAxes;
    private setupYAxes;
    private setupVisualMap;
    private nextComponentId;
    private getYAxisIndex;
    private subscribeForEntityThresholds;
    private drawChart;
    private updateSeriesData;
    private updateSeries;
    private updateAxes;
    private updateAxisOffset;
    private updateYAxisScale;
    private scaleYAxis;
    private minTopOffset;
    private minBottomOffset;
    private _onParentScroll;
    private onResize;
    private animationEnabled;
    private updateBarsAnimation;
}
