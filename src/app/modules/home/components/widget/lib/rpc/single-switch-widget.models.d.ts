import { BackgroundSettings, cssUnit, Font } from '@shared/models/widget-settings.models';
import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
export declare enum SingleSwitchLayout {
    right = "right",
    left = "left",
    centered = "centered"
}
export declare const singleSwitchLayouts: SingleSwitchLayout[];
export declare const singleSwitchLayoutTranslations: Map<SingleSwitchLayout, string>;
export declare const singleSwitchLayoutImages: Map<SingleSwitchLayout, string>;
export interface SingleSwitchWidgetSettings {
    initialState: GetValueSettings<boolean>;
    disabledState: GetValueSettings<boolean>;
    onUpdateState: SetValueSettings;
    offUpdateState: SetValueSettings;
    layout: SingleSwitchLayout;
    autoScale: boolean;
    showLabel: boolean;
    label: string;
    labelFont: Font;
    labelColor: string;
    showIcon: boolean;
    icon: string;
    iconSize: number;
    iconSizeUnit: cssUnit;
    iconColor: string;
    switchColorOn: string;
    switchColorOff: string;
    switchColorDisabled: string;
    tumblerColorOn: string;
    tumblerColorOff: string;
    tumblerColorDisabled: string;
    showOnLabel: boolean;
    onLabel: string;
    onLabelFont: Font;
    onLabelColor: string;
    showOffLabel: boolean;
    offLabel: string;
    offLabelFont: Font;
    offLabelColor: string;
    background: BackgroundSettings;
    padding: string;
}
export declare const singleSwitchDefaultSettings: SingleSwitchWidgetSettings;
