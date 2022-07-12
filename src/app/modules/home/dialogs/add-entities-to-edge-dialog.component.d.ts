import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { RuleChainService } from '@core/http/rule-chain.service';
import { SchedulerEventService } from '@core/http/scheduler-event.service';
import { IntegrationService } from '@core/http/integration.service';
import * as i0 from "@angular/core";
export interface AddEntitiesToEdgeDialogData {
    edgeId: string;
    entityType: EntityType;
}
export declare class AddEntitiesToEdgeDialogComponent extends DialogComponent<AddEntitiesToEdgeDialogComponent, Array<string>> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddEntitiesToEdgeDialogData;
    private ruleChainService;
    private schedulerEventService;
    private integrationService;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AddEntitiesToEdgeDialogComponent, Array<string>>;
    fb: FormBuilder;
    addEntitiesToEdgeFormGroup: FormGroup;
    submitted: boolean;
    entityType: EntityType;
    subType: string;
    edgeId: string;
    assignToEdgeTitle: string;
    assignToEdgeText: string;
    constructor(store: Store<AppState>, router: Router, data: AddEntitiesToEdgeDialogData, ruleChainService: RuleChainService, schedulerEventService: SchedulerEventService, integrationService: IntegrationService, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AddEntitiesToEdgeDialogComponent, Array<string>>, fb: FormBuilder);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    assign(): void;
    private getAssignToEdgeTask;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddEntitiesToEdgeDialogComponent, [null, null, null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddEntitiesToEdgeDialogComponent, "tb-add-entities-to-edge-dialog", never, {}, {}, never, never>;
}
