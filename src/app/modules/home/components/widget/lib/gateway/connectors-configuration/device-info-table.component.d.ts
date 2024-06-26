import { ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { Overlay } from '@angular/cdk/overlay';
import { UtilsService } from '@core/services/utils.service';
import { EntityService } from '@core/http/entity.service';
import { ControlValueAccessor, FormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { DeviceInfoType, SourceTypes } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class DeviceInfoTableComponent extends PageComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
    protected store: Store<AppState>;
    translate: TranslateService;
    dialog: MatDialog;
    private overlay;
    private viewContainerRef;
    private dialogService;
    private entityService;
    private utils;
    private zone;
    private cd;
    private elementRef;
    private fb;
    SourceTypeTranslationsMap: Map<SourceTypes, string>;
    DeviceInfoType: typeof DeviceInfoType;
    useSource: boolean;
    required: boolean;
    sourceTypes: Array<SourceTypes>;
    deviceInfoTypeValue: any;
    get deviceInfoType(): any;
    set deviceInfoType(value: any);
    mappingFormGroup: UntypedFormGroup;
    private destroy$;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, dialog: MatDialog, overlay: Overlay, viewContainerRef: ViewContainerRef, dialogService: DialogService, entityService: EntityService, utils: UtilsService, zone: NgZone, cd: ChangeDetectorRef, elementRef: ElementRef, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(deviceInfo: any): void;
    validate(): ValidationErrors | null;
    updateView(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceInfoTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceInfoTableComponent, "tb-device-info-table", never, { "useSource": "useSource"; "required": "required"; "sourceTypes": "sourceTypes"; "deviceInfoType": "deviceInfoType"; }, {}, never, never, false, never>;
}
