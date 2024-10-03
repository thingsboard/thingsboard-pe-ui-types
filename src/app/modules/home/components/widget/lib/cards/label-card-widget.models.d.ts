import { BackgroundSettings, cssUnit, Font } from '@shared/models/widget-settings.models';
export interface LabelCardWidgetSettings {
    autoScale: boolean;
    label: string;
    labelFont: Font;
    labelColor: string;
    showIcon: boolean;
    icon: string;
    iconSize: number;
    iconSizeUnit: cssUnit;
    iconColor: string;
    background: BackgroundSettings;
    padding: string;
}
export declare const labelCardWidgetDefaultSettings: LabelCardWidgetSettings;
