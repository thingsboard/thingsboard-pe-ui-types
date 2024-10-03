import { ElementRef, InjectionToken, OnInit } from '@angular/core';
import { NotificationType } from '@shared/models/notification.models';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { OverlayRef } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare const NOTIFICATION_TYPE_FILTER_PANEL_DATA: InjectionToken<any>;
export interface NotificationTypeFilterPanelData {
    notificationTypes: Array<NotificationType>;
    notificationTypesUpdated: (notificationTypes: Array<NotificationType>) => void;
}
export declare class NotificationTypeFilterPanelComponent implements OnInit {
    data: NotificationTypeFilterPanelData;
    private overlayRef;
    searchInputField: ElementRef;
    searchText: string;
    searchControlName: FormControl<string>;
    filteredNotificationTypesList: Observable<Array<NotificationType>>;
    selectedNotificationTypes: Array<NotificationType>;
    notificationTypesTranslateMap: Map<NotificationType, import("@shared/models/notification.models").NotificationTemplateTypeTranslate>;
    separatorKeysCodes: number[];
    private notificationType;
    private notificationTypes;
    private dirty;
    notificationTypeInput: ElementRef<HTMLInputElement>;
    constructor(data: NotificationTypeFilterPanelData, overlayRef: OverlayRef);
    ngOnInit(): void;
    update(): void;
    cancel(): void;
    reset(): void;
    remove(type: NotificationType): void;
    onFocus(): void;
    private add;
    chipAdd(event: MatChipInputEvent): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    clear(value?: string): void;
    displayTypeFn(type?: string): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationTypeFilterPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationTypeFilterPanelComponent, "tb-notification-type-filter-panel", never, {}, {}, never, never, false, never>;
}
