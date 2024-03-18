import { BackgroundSettings, Font } from '@shared/models/widget-settings.models';
import { LegendPosition } from '@shared/models/widget.models';
import { EChartsTooltipWidgetSettings } from '@home/components/widget/lib/chart/echarts-widget.models';
export interface BarChartWithLabelsWidgetSettings extends EChartsTooltipWidgetSettings {
    showBarLabel: boolean;
    barLabelFont: Font;
    barLabelColor: string;
    showBarValue: boolean;
    barValueFont: Font;
    barValueColor: string;
    showLegend: boolean;
    legendPosition: LegendPosition;
    legendLabelFont: Font;
    legendLabelColor: string;
    background: BackgroundSettings;
}
export declare const barChartWithLabelsDefaultSettings: BarChartWithLabelsWidgetSettings;
