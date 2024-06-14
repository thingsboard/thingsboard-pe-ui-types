import { LatestChartWidgetSettings } from '@home/components/widget/lib/chart/latest-chart.models';
import { Font } from '@shared/models/widget-settings.models';
import { ChartBarSettings } from '@home/components/widget/lib/chart/chart.models';
import { BarsChartSettings } from '@home/components/widget/lib/chart/bars-chart.models';
import { DeepPartial } from '@shared/models/common';
export interface PolarAreaChartWidgetSettings extends LatestChartWidgetSettings {
    axisMin?: number;
    axisMax?: number;
    axisTickLabelFont: Font;
    axisTickLabelColor: string;
    angleAxisStartAngle?: number;
    barSettings: ChartBarSettings;
}
export declare const polarAreaChartWidgetDefaultSettings: PolarAreaChartWidgetSettings;
export declare const polarAreaChartWidgetBarsChartSettings: (settings: PolarAreaChartWidgetSettings) => DeepPartial<BarsChartSettings>;
