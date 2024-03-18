import { cssUnit } from '@shared/models/widget-settings.models';
export declare const defaultMainColorDisabled = "rgba(0, 0, 0, 0.38)";
export declare const defaultBackgroundColorDisabled = "rgba(0, 0, 0, 0.03)";
export declare enum WidgetButtonType {
    outlined = "outlined",
    filled = "filled",
    underlined = "underlined",
    basic = "basic"
}
export declare const widgetButtonTypes: WidgetButtonType[];
export declare const widgetButtonTypeTranslations: Map<WidgetButtonType, string>;
export declare const widgetButtonTypeImages: Map<WidgetButtonType, string>;
export declare enum WidgetButtonState {
    enabled = "enabled",
    hovered = "hovered",
    pressed = "pressed",
    activated = "activated",
    disabled = "disabled"
}
export declare const widgetButtonStates: WidgetButtonState[];
export declare const widgetButtonStatesTranslations: Map<WidgetButtonState, string>;
export interface WidgetButtonCustomStyle {
    overrideMainColor?: boolean;
    mainColor?: string;
    overrideBackgroundColor?: boolean;
    backgroundColor?: string;
    overrideDropShadow?: boolean;
    dropShadow?: boolean;
}
export type WidgetButtonCustomStyles = Record<WidgetButtonState, WidgetButtonCustomStyle>;
export interface WidgetButtonAppearance {
    type: WidgetButtonType;
    autoScale: boolean;
    showLabel: boolean;
    label: string;
    showIcon: boolean;
    icon: string;
    iconSize: number;
    iconSizeUnit: cssUnit;
    borderRadius?: string;
    mainColor: string;
    backgroundColor: string;
    customStyle: WidgetButtonCustomStyles;
}
export declare const widgetButtonDefaultAppearance: WidgetButtonAppearance;
export declare const generateWidgetButtonAppearanceCss: (appearance: WidgetButtonAppearance) => string;
