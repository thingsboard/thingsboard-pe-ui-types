import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
export interface KnobSettings {
    initialState: GetValueSettings<number>;
    valueChange: SetValueSettings;
    minValue: number;
    maxValue: number;
    initialValue: number;
    title: string;
    getValueMethod?: string;
    setValueMethod?: string;
    requestTimeout?: number;
    requestPersistent?: boolean;
    persistentPollingInterval?: number;
}
export declare const knobWidgetDefaultSettings: KnobSettings;
export declare const prepareKnobSettings: (settings: KnobSettings) => KnobSettings;
