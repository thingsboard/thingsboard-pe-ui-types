import { CmdUpdate, CmdUpdateMsg, CmdUpdateType, WebsocketCmd } from '@shared/models/telemetry/telemetry.models';
import { NgZone } from '@angular/core';
import { Notification } from '@shared/models/notification.models';
import { CmdWrapper, WsSubscriber } from '@shared/models/websocket/websocket.models';
import { NotificationWebsocketService } from '@core/ws/notification-websocket.service';
export declare class NotificationCountUpdate extends CmdUpdate {
    totalUnreadCount: number;
    constructor(msg: NotificationCountUpdateMsg);
}
export declare class NotificationsUpdate extends CmdUpdate {
    totalUnreadCount: number;
    update?: Notification;
    notifications?: Notification[];
    constructor(msg: NotificationsUpdateMsg);
}
export declare class NotificationSubscriber extends WsSubscriber {
    private notificationWsService;
    protected zone?: NgZone;
    private notificationCountSubject;
    private notificationsSubject;
    messageLimit: number;
    notificationCount$: import("rxjs").Observable<number>;
    notifications$: import("rxjs").Observable<Notification[]>;
    static createNotificationCountSubscription(notificationWsService: NotificationWebsocketService, zone: NgZone): NotificationSubscriber;
    static createNotificationsSubscription(notificationWsService: NotificationWebsocketService, zone: NgZone, limit?: number): NotificationSubscriber;
    static createMarkAsReadCommand(notificationWsService: NotificationWebsocketService, ids: string[]): NotificationSubscriber;
    static createMarkAllAsReadCommand(notificationWsService: NotificationWebsocketService): NotificationSubscriber;
    constructor(notificationWsService: NotificationWebsocketService, zone?: NgZone);
    onNotificationCountUpdate(message: NotificationCountUpdate): void;
    complete(): void;
    onNotificationsUpdate(message: NotificationsUpdate): void;
}
export declare class UnreadCountSubCmd implements WebsocketCmd {
    cmdId: number;
}
export declare class UnreadSubCmd implements WebsocketCmd {
    limit: number;
    cmdId: number;
    constructor(limit?: number);
}
export declare class UnsubscribeCmd implements WebsocketCmd {
    cmdId: number;
}
export declare class MarkAsReadCmd implements WebsocketCmd {
    cmdId: number;
    notifications: string[];
    constructor(ids: string[]);
}
export declare class MarkAllAsReadCmd implements WebsocketCmd {
    cmdId: number;
}
export interface NotificationCountUpdateMsg extends CmdUpdateMsg {
    cmdUpdateType: CmdUpdateType.NOTIFICATIONS_COUNT;
    totalUnreadCount: number;
}
export interface NotificationsUpdateMsg extends CmdUpdateMsg {
    cmdUpdateType: CmdUpdateType.NOTIFICATIONS;
    totalUnreadCount: number;
    update?: Notification;
    notifications?: Notification[];
}
export type WebsocketNotificationMsg = NotificationCountUpdateMsg | NotificationsUpdateMsg;
export declare const isNotificationCountUpdateMsg: (message: WebsocketNotificationMsg) => message is NotificationCountUpdateMsg;
export declare const isNotificationsUpdateMsg: (message: WebsocketNotificationMsg) => message is NotificationsUpdateMsg;
export declare class NotificationPluginCmdWrapper implements CmdWrapper {
    constructor();
    unreadCountSubCmd: UnreadCountSubCmd;
    unreadSubCmd: UnreadSubCmd;
    unsubCmd: UnsubscribeCmd;
    markAsReadCmd: MarkAsReadCmd;
    markAllAsReadCmd: MarkAllAsReadCmd;
    hasCommands(): boolean;
    clear(): void;
    preparePublishCommands(): NotificationPluginCmdWrapper;
}
