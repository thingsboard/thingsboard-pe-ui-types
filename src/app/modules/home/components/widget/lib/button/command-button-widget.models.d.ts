import { WidgetButtonAppearance } from '@shared/components/button/widget-button.models';
import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
export interface CommandButtonWidgetSettings {
    appearance: WidgetButtonAppearance;
    onClickState: SetValueSettings;
    disabledState: GetValueSettings<boolean>;
}
export declare const commandButtonDefaultSettings: CommandButtonWidgetSettings;
