import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { DeviceService } from '@core/http/device.service';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityType } from '@shared/models/entity-type.models';
import { AssetService } from '@core/http/asset.service';
import { EntityViewService } from '@core/http/entity-view.service';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { EdgeService } from '@core/http/edge.service';
import * as i0 from "@angular/core";
export interface AssignToCustomerDialogData {
    entityIds: Array<EntityId>;
    entityType: EntityType;
}
export declare class AssignToCustomerDialogComponent extends DialogComponent<AssignToCustomerDialogComponent, boolean> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AssignToCustomerDialogData;
    private deviceService;
    private assetService;
    private edgeService;
    private entityViewService;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AssignToCustomerDialogComponent, boolean>;
    fb: FormBuilder;
    assignToCustomerFormGroup: FormGroup;
    submitted: boolean;
    entityType: typeof EntityType;
    assignToCustomerTitle: string;
    assignToCustomerText: string;
    constructor(store: Store<AppState>, router: Router, data: AssignToCustomerDialogData, deviceService: DeviceService, assetService: AssetService, edgeService: EdgeService, entityViewService: EntityViewService, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AssignToCustomerDialogComponent, boolean>, fb: FormBuilder);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    assign(): void;
    private getAssignToCustomerTask;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssignToCustomerDialogComponent, [null, null, null, null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssignToCustomerDialogComponent, "tb-assign-to-customer-dialog", never, {}, {}, never, never>;
}
