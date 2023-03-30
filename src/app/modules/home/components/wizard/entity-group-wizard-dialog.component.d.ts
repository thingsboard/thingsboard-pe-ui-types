import { OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroupDirective, NgForm, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import { EntityType } from '@shared/models/entity-type.models';
import { ErrorStateMatcher } from '@angular/material/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { Operation, Resource } from '@shared/models/security.models';
import { EntityGroupService } from '@core/http/entity-group.service';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export interface EntityGroupWizardDialogData {
    ownerId?: EntityId;
    groupName?: string;
    groupType: EntityType;
}
export interface EntityGroupWizardDialogResult {
    entityGroup: EntityGroupInfo;
    shared: boolean;
}
export declare class EntityGroupWizardDialogComponent extends DialogComponent<EntityGroupWizardDialogComponent, EntityGroupWizardDialogResult> implements OnDestroy, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: EntityGroupWizardDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<EntityGroupWizardDialogComponent, EntityGroupWizardDialogResult>;
    private entityGroupService;
    private userPermissionService;
    private breakpointObserver;
    private fb;
    addEntityGroupWizardStepper: MatStepper;
    resource: typeof Resource;
    operation: typeof Operation;
    selectedIndex: number;
    showNext: boolean;
    entityType: typeof EntityType;
    entityGroupWizardFormGroup: UntypedFormGroup;
    shareEntityGroupFormGroup: UntypedFormGroup;
    labelPosition: string;
    private subscriptions;
    constructor(store: Store<AppState>, router: Router, data: EntityGroupWizardDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<EntityGroupWizardDialogComponent, EntityGroupWizardDialogResult>, entityGroupService: EntityGroupService, userPermissionService: UserPermissionsService, breakpointObserver: BreakpointObserver, fb: UntypedFormBuilder);
    ngOnDestroy(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    previousStep(): void;
    nextStep(): void;
    getFormLabel(index: number): string;
    get maxStepperIndex(): number;
    add(): void;
    private createEntityGroup;
    private shareEntityGroup;
    allValid(): boolean;
    changeStep($event: StepperSelectionEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupWizardDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupWizardDialogComponent, "tb-entity-group-wizard", never, {}, {}, never, never, false, never>;
}
