import { LatestChartWidgetSettings } from '@home/components/widget/lib/chart/latest-chart.models';
import { ChartFillSettings, ChartLabelPosition, ChartLineType, ChartShape } from '@home/components/widget/lib/chart/chart.models';
import { Font } from '@shared/models/widget-settings.models';
import { RadarChartSettings, RadarChartShape } from '@home/components/widget/lib/chart/radar-chart.models';
import { DeepPartial } from '@shared/models/common';
export interface RadarChartWidgetSettings extends LatestChartWidgetSettings {
    shape: RadarChartShape;
    color: string;
    showLine: boolean;
    lineType: ChartLineType;
    lineWidth: number;
    showPoints: boolean;
    pointShape: ChartShape;
    pointSize: number;
    showLabel: boolean;
    labelPosition: ChartLabelPosition;
    labelFont: Font;
    labelColor: string;
    fillAreaSettings: ChartFillSettings;
    axisShowLabel: boolean;
    axisLabelFont: Font;
    axisShowTickLabels: boolean;
    axisTickLabelFont: Font;
    axisTickLabelColor: string;
}
export declare const radarChartWidgetDefaultSettings: RadarChartWidgetSettings;
export declare const radarChartWidgetRadarChartSettings: (settings: RadarChartWidgetSettings) => DeepPartial<RadarChartSettings>;
