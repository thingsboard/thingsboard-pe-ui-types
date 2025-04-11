import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PageComponent } from '@shared/components/page.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { PageLink } from '@shared/models/page/page-link';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { WidgetActionCallbacks, WidgetActionDescriptorInfo, WidgetActionsDatasource } from '@home/components/widget/action/manage-widget-actions.component.models';
import { UtilsService } from '@core/services/utils.service';
import { WidgetActionDescriptor, WidgetActionSource, WidgetActionType, widgetType } from '@shared/models/widget.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class ManageWidgetActionsComponent extends PageComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
    private translate;
    private utils;
    private dialog;
    private dialogs;
    private cd;
    private elementRef;
    private zone;
    disabled: boolean;
    widgetType: widgetType;
    defaultIconColor: string;
    callbacks: WidgetActionCallbacks;
    actionSources: {
        [actionSourceId: string]: WidgetActionSource;
    };
    actionTypes: WidgetActionType[];
    customFunctionArgs: string[];
    isEntityGroup: boolean;
    outlinedBorder: boolean;
    additionalWidgetActionTypes: WidgetActionType[];
    displayedColumns: string[];
    pageLink: PageLink;
    textSearchMode: boolean;
    hidePageSize: boolean;
    dataSource: WidgetActionsDatasource;
    dragDisabled: boolean;
    private actionsMap;
    private viewsInited;
    private dirtyValue;
    private widgetResize$;
    private destroyed;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    private propagateChange;
    constructor(translate: TranslateService, utils: UtilsService, dialog: MatDialog, dialogs: DialogService, cd: ChangeDetectorRef, elementRef: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private updateData;
    dropAction(event: CdkDragDrop<WidgetActionsDatasource>): void;
    addAction($event: Event): void;
    editAction($event: Event, action: WidgetActionDescriptorInfo): void;
    private openWidgetActionDialog;
    private saveAction;
    private getOrCreateTargetActions;
    deleteAction($event: Event, action: WidgetActionDescriptorInfo): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    private resetSortAndFilter;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(actions?: {
        [actionSourceId: string]: Array<WidgetActionDescriptor>;
    }): void;
    private onActionsUpdated;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageWidgetActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageWidgetActionsComponent, "tb-manage-widget-actions", never, { "disabled": { "alias": "disabled"; "required": false; }; "widgetType": { "alias": "widgetType"; "required": false; }; "defaultIconColor": { "alias": "defaultIconColor"; "required": false; }; "callbacks": { "alias": "callbacks"; "required": false; }; "actionSources": { "alias": "actionSources"; "required": false; }; "actionTypes": { "alias": "actionTypes"; "required": false; }; "customFunctionArgs": { "alias": "customFunctionArgs"; "required": false; }; "isEntityGroup": { "alias": "isEntityGroup"; "required": false; }; "outlinedBorder": { "alias": "outlinedBorder"; "required": false; }; "additionalWidgetActionTypes": { "alias": "additionalWidgetActionTypes"; "required": false; }; }, {}, never, never, false, never>;
}
