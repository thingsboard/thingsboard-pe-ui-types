import { LatestChartWidgetSettings } from '@home/components/widget/lib/chart/latest-chart.models';
import { Font } from '@shared/models/widget-settings.models';
import { DeepPartial } from '@shared/models/common';
import { PieChartSettings } from '@home/components/widget/lib/chart/pie-chart.models';
import { PieChartLabelPosition } from '@home/components/widget/lib/chart/chart.models';
export interface PieChartWidgetSettings extends LatestChartWidgetSettings {
    showLabel: boolean;
    labelPosition: PieChartLabelPosition;
    labelFont: Font;
    labelColor: string;
    borderWidth: number;
    borderColor: string;
    radius: number;
    clockwise: boolean;
}
export declare const pieChartWidgetDefaultSettings: PieChartWidgetSettings;
export declare const pieChartWidgetPieChartSettings: (settings: PieChartWidgetSettings) => DeepPartial<PieChartSettings>;
