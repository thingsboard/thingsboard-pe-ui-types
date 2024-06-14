import { WidgetButtonAppearance } from '@shared/components/button/widget-button.models';
import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
import { BackgroundSettings } from '@shared/models/widget-settings.models';
export interface ToggleButtonWidgetSettings {
    initialState: GetValueSettings<boolean>;
    disabledState: GetValueSettings<boolean>;
    checkState: SetValueSettings;
    uncheckState: SetValueSettings;
    autoScale: boolean;
    horizontalFill: boolean;
    verticalFill: boolean;
    checkedAppearance: WidgetButtonAppearance;
    uncheckedAppearance: WidgetButtonAppearance;
    background: BackgroundSettings;
    padding: string;
}
export declare const toggleButtonDefaultSettings: ToggleButtonWidgetSettings;
