import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { DeviceService } from '@core/http/device.service';
import { EdgeService } from '@core/http/edge.service';
import { EntityType } from '@shared/models/entity-type.models';
import { AssetService } from '@core/http/asset.service';
import { EntityViewService } from '@core/http/entity-view.service';
import { DashboardService } from '@core/http/dashboard.service';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { RuleChainService } from '@core/http/rule-chain.service';
import * as i0 from "@angular/core";
export interface AddEntitiesToEdgeDialogData {
    edgeId: string;
    entityType: EntityType;
}
export declare class AddEntitiesToEdgeDialogComponent extends DialogComponent<AddEntitiesToEdgeDialogComponent, boolean> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddEntitiesToEdgeDialogData;
    private deviceService;
    private edgeService;
    private assetService;
    private entityViewService;
    private dashboardService;
    private ruleChainService;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AddEntitiesToEdgeDialogComponent, boolean>;
    fb: FormBuilder;
    addEntitiesToEdgeFormGroup: FormGroup;
    submitted: boolean;
    entityType: EntityType;
    subType: string;
    assignToEdgeTitle: string;
    assignToEdgeText: string;
    constructor(store: Store<AppState>, router: Router, data: AddEntitiesToEdgeDialogData, deviceService: DeviceService, edgeService: EdgeService, assetService: AssetService, entityViewService: EntityViewService, dashboardService: DashboardService, ruleChainService: RuleChainService, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AddEntitiesToEdgeDialogComponent, boolean>, fb: FormBuilder);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    assign(): void;
    private getAssignToEdgeTask;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddEntitiesToEdgeDialogComponent, [null, null, null, null, null, null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddEntitiesToEdgeDialogComponent, "tb-add-entities-to-edge-dialog", never, {}, {}, never, never>;
}
