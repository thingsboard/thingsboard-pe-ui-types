import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
import { WidgetButtonCustomStyles } from '@shared/components/button/widget-button.models';
import { BackgroundSettings, cssUnit, Font } from '@shared/models/widget-settings.models';
export declare enum ValueStepperType {
    simplified = "simplified",
    default = "default",
    default_volume = "default_volume"
}
export declare const valueStepperTypes: ValueStepperType[];
export declare const valueStepperTypeTranslations: Map<ValueStepperType, string>;
export declare const valueStepperTypeImages: Map<ValueStepperType, string>;
export interface ValueStepperWidgetSettings {
    initialState: GetValueSettings<number>;
    leftButtonClick: SetValueSettings;
    rightButtonClick: SetValueSettings;
    disabledState: GetValueSettings<boolean>;
    appearance: ValueStepperAppearance;
    buttonAppearance: {
        leftButton: ValueStepperButtonAppearance;
        rightButton: ValueStepperButtonAppearance;
    };
    background: BackgroundSettings;
    padding: string;
}
export interface ValueStepperAppearance {
    type: ValueStepperType;
    autoScale: boolean;
    minValueRange: number;
    maxValueRange: number;
    valueStep: number;
    showValueBox: boolean;
    valueUnits: string;
    valueDecimals: number;
    valueFont: Font;
    valueColor: string;
    valueBoxBackground: string;
    showBorder: boolean;
    borderWidth: number;
    borderColor: string;
}
export interface ValueStepperButtonAppearance {
    showButton: boolean;
    icon: string;
    iconSize: number;
    iconSizeUnit: cssUnit;
    mainColorOn: string;
    backgroundColorOn: string;
    mainColorOff: string;
    backgroundColorOff: string;
    mainColorDisabled: string;
    backgroundColorDisabled: string;
    customStyle: WidgetButtonCustomStyles;
}
export declare const valueStepperDefaultAppearance: ValueStepperAppearance;
export declare const valueStepperButtonDefaultAppearance: ValueStepperButtonAppearance;
export declare const valueStepperDefaultSettings: ValueStepperWidgetSettings;
