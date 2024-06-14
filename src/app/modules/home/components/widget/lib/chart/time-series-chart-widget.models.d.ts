import { TimeSeriesChartSettings } from '@home/components/widget/lib/chart/time-series-chart.models';
import { BackgroundSettings, Font } from '@shared/models/widget-settings.models';
import { LegendConfig } from '@shared/models/widget.models';
export interface TimeSeriesChartWidgetSettings extends TimeSeriesChartSettings {
    showLegend: boolean;
    legendColumnTitleFont: Font;
    legendColumnTitleColor: string;
    legendLabelFont: Font;
    legendLabelColor: string;
    legendValueFont: Font;
    legendValueColor: string;
    legendConfig: LegendConfig;
    background: BackgroundSettings;
    padding: string;
}
export declare const timeSeriesChartWidgetDefaultSettings: TimeSeriesChartWidgetSettings;
