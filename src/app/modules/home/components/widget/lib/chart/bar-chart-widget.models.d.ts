import { LatestChartWidgetSettings } from '@home/components/widget/lib/chart/latest-chart.models';
import { BarsChartSettings } from '@home/components/widget/lib/chart/bars-chart.models';
import { Font } from '@shared/models/widget-settings.models';
import { DeepPartial } from '@shared/models/common';
import { ChartBarSettings } from '@home/components/widget/lib/chart/chart.models';
export interface BarChartWidgetSettings extends LatestChartWidgetSettings {
    axisMin?: number;
    axisMax?: number;
    axisTickLabelFont: Font;
    axisTickLabelColor: string;
    barSettings: ChartBarSettings;
}
export declare const barChartWidgetDefaultSettings: BarChartWidgetSettings;
export declare const barChartWidgetBarsChartSettings: (settings: BarChartWidgetSettings) => DeepPartial<BarsChartSettings>;
