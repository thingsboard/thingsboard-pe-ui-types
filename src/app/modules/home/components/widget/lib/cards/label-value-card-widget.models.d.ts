import { BackgroundSettings, ColorSettings, cssUnit, Font } from '@shared/models/widget-settings.models';
export interface LabelValueCardWidgetSettings {
    autoScale: boolean;
    showLabel: boolean;
    label: string;
    labelFont: Font;
    labelColor: ColorSettings;
    showIcon: boolean;
    icon: string;
    iconSize: number;
    iconSizeUnit: cssUnit;
    iconColor: ColorSettings;
    valueFont: Font;
    valueColor: ColorSettings;
    background: BackgroundSettings;
    padding: string;
}
export declare const labelValueCardWidgetDefaultSettings: LabelValueCardWidgetSettings;
