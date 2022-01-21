import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { EntityId } from '@shared/models/id/entity-id';
import { Observable } from 'rxjs';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export interface SelectOwnerDialogData {
    selectOwnerTitle: string;
    confirmSelectTitle: string;
    placeholderText: string;
    notFoundText: string;
    requiredText: string;
    excludeOwnerIds: Array<string>;
    onOwnerSelected: (targetOwnerId: EntityId) => Observable<boolean>;
}
export declare class SelectOwnerDialogComponent extends DialogComponent<SelectOwnerDialogComponent, EntityId> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: SelectOwnerDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<SelectOwnerDialogComponent, EntityId>;
    fb: FormBuilder;
    selectOwnerFormGroup: FormGroup;
    submitted: boolean;
    selectOwnerTitle: string;
    confirmSelectTitle: string;
    placeholderText: string;
    notFoundText: string;
    requiredText: string;
    excludeOwnerIds: Array<string>;
    onOwnerSelected: (targetOwnerId: EntityId) => Observable<boolean>;
    constructor(store: Store<AppState>, router: Router, data: SelectOwnerDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<SelectOwnerDialogComponent, EntityId>, fb: FormBuilder);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    selectOwner(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectOwnerDialogComponent, [null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectOwnerDialogComponent, "tb-select-owner-dialog", never, {}, {}, never, never>;
}
