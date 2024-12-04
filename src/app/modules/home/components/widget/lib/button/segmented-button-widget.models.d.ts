import { GetValueSettings } from '@shared/models/action-widget-settings.models';
import { cssUnit, Font } from '@shared/models/widget-settings.models';
import { WidgetAction } from '@shared/models/widget.models';
export declare const defaultMainColorDisabled = "rgba(0, 0, 0, 0.38)";
export declare const defaultBackgroundColorDisabled = "rgba(0, 0, 0, 0.03)";
export declare const defaultBorderColorDisabled = "rgba(0, 0, 0, 0.03)";
export declare enum SegmentedButtonLayout {
    squared = "squared",
    rounded = "rounded"
}
export type SegmentedButtonAppearanceType = 'first' | 'second';
export type SegmentedButtonColorStylesType = 'selected' | 'unselected';
export declare const segmentedButtonLayouts: SegmentedButtonLayout[];
export declare const segmentedButtonLayoutTranslations: Map<SegmentedButtonLayout, string>;
export declare const segmentedButtonLayoutImages: Map<SegmentedButtonLayout, string>;
export declare const segmentedButtonLayoutBorder: Map<SegmentedButtonLayout, string>;
export interface SegmentedButtonAppearance {
    showLabel: boolean;
    label: string;
    labelFont: Font;
    showIcon: boolean;
    icon: string;
    iconSize: number;
    iconSizeUnit: cssUnit;
}
export interface SegmentedButtonStyles {
    mainColor: string;
    backgroundColor: string;
    customStyle: WidgetButtonToggleCustomStyles;
}
export interface ButtonToggleAppearance {
    layout: SegmentedButtonLayout;
    autoScale: boolean;
    cardBorder: number;
    cardBorderColor: string;
    leftAppearance: SegmentedButtonAppearance;
    rightAppearance: SegmentedButtonAppearance;
    selectedStyle: SegmentedButtonStyles;
    unselectedStyle: SegmentedButtonStyles;
}
export interface SegmentedButtonWidgetSettings {
    initialState: GetValueSettings<boolean>;
    disabledState: GetValueSettings<boolean>;
    leftButtonClick: WidgetAction;
    rightButtonClick: WidgetAction;
    appearance: ButtonToggleAppearance;
}
export declare const segmentedButtonDefaultAppearance: ButtonToggleAppearance;
export declare const segmentedButtonDefaultSettings: SegmentedButtonWidgetSettings;
export declare enum WidgetButtonToggleState {
    enabled = "enabled",
    hovered = "hovered",
    disabled = "disabled"
}
export declare const widgetButtonToggleStates: WidgetButtonToggleState[];
export declare const widgetButtonToggleStatesTranslations: Map<WidgetButtonToggleState, string>;
export interface WidgetButtonToggleCustomStyle {
    overrideMainColor?: boolean;
    mainColor?: string;
    overrideBackgroundColor?: boolean;
    backgroundColor?: string;
    overrideBorderColor?: boolean;
    borderColor?: string;
}
export type WidgetButtonToggleCustomStyles = Record<WidgetButtonToggleState, WidgetButtonToggleCustomStyle>;
export declare abstract class ButtonToggleStateCssGenerator {
    constructor();
    generateStateCss(selectedAppearance: SegmentedButtonStyles, unselectedAppearance: SegmentedButtonStyles): string;
    private getColors;
    protected abstract get state(): WidgetButtonToggleState;
    protected getMainColor(appearance: SegmentedButtonStyles): string;
    protected getBackgroundColor(appearance: SegmentedButtonStyles): string;
    protected getBorderColor(): string;
}
export declare const generateWidgetButtonToggleAppearanceCss: (selectedAppearance: SegmentedButtonStyles, unselectedAppearance: SegmentedButtonStyles) => string;
export declare const generateWidgetButtonToggleBorderLayout: (layout: SegmentedButtonLayout) => string;
