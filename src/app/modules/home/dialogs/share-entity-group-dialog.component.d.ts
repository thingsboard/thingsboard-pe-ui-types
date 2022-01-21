import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { EntityGroupId } from '@shared/models/id/entity-group-id';
import { EntityGroupService } from '@core/http/entity-group.service';
import * as i0 from "@angular/core";
export interface ShareEntityGroupDialogData {
    entityGroupId: EntityGroupId;
}
export declare class ShareEntityGroupDialogComponent extends DialogComponent<ShareEntityGroupDialogComponent, boolean> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: ShareEntityGroupDialogData;
    dialogRef: MatDialogRef<ShareEntityGroupDialogComponent, boolean>;
    private errorStateMatcher;
    private entityGroupService;
    private fb;
    shareEntityGroupFormGroup: FormGroup;
    entityGroupId: EntityGroupId;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: ShareEntityGroupDialogData, dialogRef: MatDialogRef<ShareEntityGroupDialogComponent, boolean>, errorStateMatcher: ErrorStateMatcher, entityGroupService: EntityGroupService, fb: FormBuilder);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    share(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShareEntityGroupDialogComponent, [null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShareEntityGroupDialogComponent, "tb-share-entity-group-dialog", never, {}, {}, never, never>;
}
