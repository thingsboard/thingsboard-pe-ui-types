import { LatestChartSettings } from '@home/components/widget/lib/chart/latest-chart.models';
import { ChartAnimationSettings, ChartBarSettings } from '@home/components/widget/lib/chart/chart.models';
import { Font } from '@shared/models/widget-settings.models';
export interface BarsChartSettings extends LatestChartSettings {
    polar: boolean;
    axisMin?: number | string;
    axisMax?: number | string;
    axisTickLabelFont: Font;
    axisTickLabelColor: string;
    angleAxisStartAngle?: number;
    barSettings: ChartBarSettings;
}
export declare const barsChartAnimationDefaultSettings: ChartAnimationSettings;
export declare const barsChartDefaultSettings: BarsChartSettings;
