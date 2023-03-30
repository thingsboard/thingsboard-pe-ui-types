import { Action } from '@ngrx/store';
import { HideNotification, NotificationMessage } from '@app/core/notification/notification.models';
export declare enum NotificationActionTypes {
    SHOW_NOTIFICATION = "[Notification] Show",
    HIDE_NOTIFICATION = "[Notification] Hide"
}
export declare class ActionNotificationShow implements Action {
    readonly notification: NotificationMessage;
    readonly type = NotificationActionTypes.SHOW_NOTIFICATION;
    constructor(notification: NotificationMessage);
}
export declare class ActionNotificationHide implements Action {
    readonly hideNotification: HideNotification;
    readonly type = NotificationActionTypes.HIDE_NOTIFICATION;
    constructor(hideNotification: HideNotification);
}
export type NotificationActions = ActionNotificationShow | ActionNotificationHide;
