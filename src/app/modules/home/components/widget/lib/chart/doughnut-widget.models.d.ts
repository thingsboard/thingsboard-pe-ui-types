import { ColorSettings, Font } from '@shared/models/widget-settings.models';
import { PieChartSettings } from '@home/components/widget/lib/chart/pie-chart.models';
import { DeepPartial } from '@shared/models/common';
import { LatestChartWidgetSettings } from '@home/components/widget/lib/chart/latest-chart.models';
export declare enum DoughnutLayout {
    default = "default",
    with_total = "with_total"
}
export declare const doughnutLayouts: DoughnutLayout[];
export declare const doughnutLayoutTranslations: Map<DoughnutLayout, string>;
export declare const doughnutLayoutImages: Map<DoughnutLayout, string>;
export declare const horizontalDoughnutLayoutImages: Map<DoughnutLayout, string>;
export interface DoughnutWidgetSettings extends LatestChartWidgetSettings {
    layout: DoughnutLayout;
    clockwise: boolean;
    totalValueFont: Font;
    totalValueColor: ColorSettings;
}
export declare const doughnutDefaultSettings: (horizontal: boolean) => DoughnutWidgetSettings;
export declare const doughnutPieChartSettings: (settings: DoughnutWidgetSettings) => DeepPartial<PieChartSettings>;
