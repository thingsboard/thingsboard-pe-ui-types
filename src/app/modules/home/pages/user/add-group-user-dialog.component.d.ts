import { OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormGroup } from '@angular/forms';
import { ActivationMethod, User } from '@shared/models/user.model';
import { UserService } from '@core/http/user.service';
import { Observable } from 'rxjs';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { GroupUserComponent } from '@home/pages/user/group-user.component';
import * as i0 from "@angular/core";
export interface AddGroupUserDialogData {
    entitiesTableConfig: GroupEntityTableConfig<User>;
}
export declare class AddGroupUserDialogComponent extends DialogComponent<AddGroupUserDialogComponent, User> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddGroupUserDialogData;
    dialogRef: MatDialogRef<AddGroupUserDialogComponent, User>;
    private userService;
    private dialog;
    detailsForm: UntypedFormGroup;
    user: User;
    activationMethods: string[];
    activationMethodEnum: typeof ActivationMethod;
    activationMethodTranslations: Map<ActivationMethod, string>;
    activationMethod: ActivationMethod;
    entitiesTableConfig: GroupEntityTableConfig<User>;
    userComponent: GroupUserComponent;
    constructor(store: Store<AppState>, router: Router, data: AddGroupUserDialogData, dialogRef: MatDialogRef<AddGroupUserDialogComponent, User>, userService: UserService, dialog: MatDialog);
    ngOnInit(): void;
    cancel(): void;
    add(): void;
    displayActivationLink(activationLink: string): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddGroupUserDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddGroupUserDialogComponent, "tb-add-group-user-dialog", never, {}, {}, never, never, false, never>;
}
