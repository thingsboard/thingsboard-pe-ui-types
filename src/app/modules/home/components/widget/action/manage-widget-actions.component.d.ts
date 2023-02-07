import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { PageLink } from '@shared/models/page/page-link';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { WidgetActionCallbacks, WidgetActionDescriptorInfo, WidgetActionsData, WidgetActionsDatasource } from '@home/components/widget/action/manage-widget-actions.component.models';
import { UtilsService } from '@core/services/utils.service';
import { WidgetActionType, widgetType } from '@shared/models/widget.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class ManageWidgetActionsComponent extends PageComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private utils;
    private dialog;
    private dialogs;
    private cd;
    private elementRef;
    disabled: boolean;
    widgetType: widgetType;
    callbacks: WidgetActionCallbacks;
    actionTypes: WidgetActionType[];
    customFunctionArgs: string[];
    innerValue: WidgetActionsData;
    displayedColumns: string[];
    pageLink: PageLink;
    textSearchMode: boolean;
    hidePageSize: boolean;
    dataSource: WidgetActionsDatasource;
    viewsInited: boolean;
    dirtyValue: boolean;
    dragDisabled: boolean;
    private widgetResize$;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, utils: UtilsService, dialog: MatDialog, dialogs: DialogService, cd: ChangeDetectorRef, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    updateData(reload?: boolean): void;
    dropAction(event: CdkDragDrop<WidgetActionsDatasource>): void;
    addAction($event: Event): void;
    editAction($event: Event, action: WidgetActionDescriptorInfo): void;
    openWidgetActionDialog($event: Event, action?: WidgetActionDescriptorInfo): void;
    private saveAction;
    private getOrCreateTargetActions;
    deleteAction($event: Event, action: WidgetActionDescriptorInfo): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    resetSortAndFilter(update?: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(obj: WidgetActionsData): void;
    private onActionsUpdated;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageWidgetActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageWidgetActionsComponent, "tb-manage-widget-actions", never, { "disabled": "disabled"; "widgetType": "widgetType"; "callbacks": "callbacks"; "actionTypes": "actionTypes"; "customFunctionArgs": "customFunctionArgs"; }, {}, never, never, false>;
}
