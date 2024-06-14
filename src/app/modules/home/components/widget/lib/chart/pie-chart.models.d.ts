import { ColorSettings, Font } from '@shared/models/widget-settings.models';
import { LatestChartSettings } from '@home/components/widget/lib/chart/latest-chart.models';
import { ChartAnimationSettings, PieChartLabelPosition } from '@home/components/widget/lib/chart/chart.models';
export interface PieChartSettings extends LatestChartSettings {
    doughnut: boolean;
    radius: string;
    clockwise: boolean;
    totalValueFont: Font;
    totalValueColor: ColorSettings;
    showLabel: boolean;
    labelPosition: PieChartLabelPosition;
    labelFont: Font;
    labelColor: string;
    borderWidth: number;
    borderColor: string;
    borderRadius: string;
    emphasisScale: boolean;
    emphasisBorderWidth: number;
    emphasisBorderColor: string;
    emphasisShadowBlur: number;
    emphasisShadowColor: string;
}
export declare const pieChartAnimationDefaultSettings: ChartAnimationSettings;
export declare const pieChartDefaultSettings: PieChartSettings;
