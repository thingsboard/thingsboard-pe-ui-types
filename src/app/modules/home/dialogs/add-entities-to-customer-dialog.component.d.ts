import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { DeviceService } from '@core/http/device.service';
import { EntityType } from '@shared/models/entity-type.models';
import { AssetService } from '@core/http/asset.service';
import { EntityViewService } from '@core/http/entity-view.service';
import { DashboardService } from '@core/http/dashboard.service';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { EdgeService } from '@core/http/edge.service';
import * as i0 from "@angular/core";
export interface AddEntitiesToCustomerDialogData {
    customerId: string;
    entityType: EntityType;
}
export declare class AddEntitiesToCustomerDialogComponent extends DialogComponent<AddEntitiesToCustomerDialogComponent, boolean> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddEntitiesToCustomerDialogData;
    private deviceService;
    private assetService;
    private edgeService;
    private entityViewService;
    private dashboardService;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AddEntitiesToCustomerDialogComponent, boolean>;
    fb: FormBuilder;
    addEntitiesToCustomerFormGroup: FormGroup;
    submitted: boolean;
    entityType: EntityType;
    assignToCustomerTitle: string;
    assignToCustomerText: string;
    constructor(store: Store<AppState>, router: Router, data: AddEntitiesToCustomerDialogData, deviceService: DeviceService, assetService: AssetService, edgeService: EdgeService, entityViewService: EntityViewService, dashboardService: DashboardService, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AddEntitiesToCustomerDialogComponent, boolean>, fb: FormBuilder);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    assign(): void;
    private getAssignToCustomerTask;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddEntitiesToCustomerDialogComponent, [null, null, null, null, null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddEntitiesToCustomerDialogComponent, "tb-add-entities-to-customer-dialog", never, {}, {}, never, never>;
}
