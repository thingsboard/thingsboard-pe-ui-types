import { WidgetButtonAppearance } from '@shared/components/button/widget-button.models';
import { GetValueSettings } from '@shared/models/action-widget-settings.models';
export interface ActionButtonWidgetSettings {
    appearance: WidgetButtonAppearance;
    activatedState: GetValueSettings<boolean>;
    disabledState: GetValueSettings<boolean>;
}
export declare const actionButtonDefaultSettings: ActionButtonWidgetSettings;
