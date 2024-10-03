import { BackgroundSettings, Font } from '@shared/models/widget-settings.models';
export interface UnreadNotificationWidgetSettings {
    maxNotificationDisplay: number;
    showCounter: boolean;
    counterValueFont: Font;
    counterValueColor: string;
    counterColor: string;
    enableViewAll: boolean;
    enableFilter: boolean;
    enableMarkAsRead: boolean;
    background: BackgroundSettings;
    padding: string;
}
export declare const unreadNotificationDefaultSettings: UnreadNotificationWidgetSettings;
