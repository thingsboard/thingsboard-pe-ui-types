import { LatestChartSettings } from '@home/components/widget/lib/chart/latest-chart.models';
import { ChartAnimationSettings, ChartFillSettings, ChartLabelPosition, ChartLineType, ChartShape } from '@home/components/widget/lib/chart/chart.models';
import { Font } from '@shared/models/widget-settings.models';
export declare enum RadarChartShape {
    polygon = "polygon",
    circle = "circle"
}
export declare const radarChartShapes: RadarChartShape[];
export declare const radarChartShapeTranslations: Map<RadarChartShape, string>;
export interface RadarChartSettings extends LatestChartSettings {
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
export declare const radarChartAnimationDefaultSettings: ChartAnimationSettings;
export declare const radarChartDefaultSettings: RadarChartSettings;
