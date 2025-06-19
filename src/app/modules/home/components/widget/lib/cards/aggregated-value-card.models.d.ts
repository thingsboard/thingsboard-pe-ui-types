import { BackgroundSettings, ColorProcessor, ColorSettings, ComponentStyle, DateFormatSettings, Font, ValueFormatProcessor } from '@shared/models/widget-settings.models';
import { DataEntry, DataKey, DatasourceData } from '@shared/models/widget.models';
import { Injector } from '@angular/core';
export interface AggregatedValueCardWidgetSettings {
    autoScale: boolean;
    showSubtitle: boolean;
    subtitle: string;
    subtitleFont: Font;
    subtitleColor: string;
    showDate: boolean;
    dateFormat: DateFormatSettings;
    dateFont: Font;
    dateColor: string;
    showChart: boolean;
    background: BackgroundSettings;
    padding: string;
}
export declare enum AggregatedValueCardKeyPosition {
    center = "center",
    rightTop = "rightTop",
    rightBottom = "rightBottom",
    leftTop = "leftTop",
    leftBottom = "leftBottom"
}
export declare const aggregatedValueCardKeyPositionTranslations: Map<AggregatedValueCardKeyPosition, string>;
export interface AggregatedValueCardKeySettings {
    position: AggregatedValueCardKeyPosition;
    font: Font;
    color: ColorSettings;
    showArrow: boolean;
}
export interface AggregatedValueCardValue {
    key: DataKey;
    value: string;
    units: string;
    style: ComponentStyle;
    color: ColorProcessor;
    center: boolean;
    showArrow: boolean;
    upArrow: boolean;
    downArrow: boolean;
    valueFormat: ValueFormatProcessor;
}
export declare const computeAggregatedCardValue: (dataKeys: DataKey[], keyName: string, position: AggregatedValueCardKeyPosition, $injector: Injector, widgetDecimal: number) => AggregatedValueCardValue;
export declare const getTsValueByLatestDataKey: (latestData: Array<DatasourceData>, dataKey: DataKey) => DataEntry;
export declare const aggregatedValueCardDefaultSettings: AggregatedValueCardWidgetSettings;
export declare const aggregatedValueCardDefaultKeySettings: AggregatedValueCardKeySettings;
