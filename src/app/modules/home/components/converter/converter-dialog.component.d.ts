import { AfterViewInit, OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { BaseData, HasId } from '@shared/models/base-data';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Converter, ConverterType } from '@shared/models/converter.models';
import { ConverterComponent } from '@home/components/converter/converter.component';
import { ConverterService } from '@core/http/converter.service';
import { IntegrationType } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export interface ConverterDialogData {
    isEdit: boolean;
    convertor: ConverterData;
}
export interface ConverterData {
    name: string;
    edgeTemplate?: boolean;
    type: ConverterType;
    integrationType?: IntegrationType;
    disabledIntegrationType?: boolean;
}
export declare class ConverterDialogComponent extends DialogComponent<ConverterDialogComponent, BaseData<HasId>> implements OnInit, AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ConverterDialogData;
    dialogRef: MatDialogRef<ConverterDialogComponent, BaseData<HasId>>;
    private converterService;
    isEdit: boolean;
    dialogTitle: string;
    converter: Converter;
    converterComponent: ConverterComponent;
    constructor(store: Store<AppState>, router: Router, data: ConverterDialogData, dialogRef: MatDialogRef<ConverterDialogComponent, BaseData<HasId>>, converterService: ConverterService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    helpLinkId(): string;
    cancel(): void;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConverterDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConverterDialogComponent, "tb-converter-dialog", never, {}, {}, never, never, false, never>;
}
