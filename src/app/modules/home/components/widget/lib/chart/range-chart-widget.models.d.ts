import { BackgroundSettings, ColorRange, Font } from '@shared/models/widget-settings.models';
import { LegendPosition } from '@shared/models/widget.models';
import { EChartsTooltipWidgetSettings } from '@home/components/widget/lib/chart/echarts-widget.models';
export interface RangeChartWidgetSettings extends EChartsTooltipWidgetSettings {
    dataZoom: boolean;
    rangeColors: Array<ColorRange>;
    outOfRangeColor: string;
    fillArea: boolean;
    showLegend: boolean;
    legendPosition: LegendPosition;
    legendLabelFont: Font;
    legendLabelColor: string;
    background: BackgroundSettings;
}
export declare const rangeChartDefaultSettings: RangeChartWidgetSettings;
