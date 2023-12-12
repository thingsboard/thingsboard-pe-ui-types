import { BackgroundSettings, ColorRange, DateFormatSettings, Font } from '@shared/models/widget-settings.models';
import { LegendPosition } from '@shared/models/widget.models';
export interface RangeChartWidgetSettings {
    dataZoom: boolean;
    rangeColors: Array<ColorRange>;
    outOfRangeColor: string;
    fillArea: boolean;
    showLegend: boolean;
    legendPosition: LegendPosition;
    legendLabelFont: Font;
    legendLabelColor: string;
    showTooltip: boolean;
    tooltipValueFont: Font;
    tooltipValueColor: string;
    tooltipShowDate: boolean;
    tooltipDateFormat: DateFormatSettings;
    tooltipDateFont: Font;
    tooltipDateColor: string;
    tooltipBackgroundColor: string;
    tooltipBackgroundBlur: number;
    background: BackgroundSettings;
}
export declare const rangeChartDefaultSettings: RangeChartWidgetSettings;
