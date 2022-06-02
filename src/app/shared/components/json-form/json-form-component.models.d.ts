import { JsonSettingsSchema } from '@shared/models/widget.models';
export interface JsonFormComponentData extends JsonSettingsSchema {
    model?: any;
    settingsDirective?: string;
}
