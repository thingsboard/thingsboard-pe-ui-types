import { HideNotification, NotificationMessage } from '@app/core/notification/notification.models';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NotificationService {
    private notificationSubject;
    private hideNotificationSubject;
    constructor();
    dispatchNotification(notification: NotificationMessage): void;
    hideNotification(hideNotification: HideNotification): void;
    getNotification(): Observable<NotificationMessage>;
    getHideNotification(): Observable<HideNotification>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationService>;
}
