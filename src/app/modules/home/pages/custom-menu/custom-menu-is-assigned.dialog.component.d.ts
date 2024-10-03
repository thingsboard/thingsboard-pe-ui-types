import { OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { CMAssigneeType } from '@shared/models/custom-menu.models';
import { EntityInfoData } from '@shared/models/entity.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface CustomMenuIsAssignedDialogData {
    assigneeType: CMAssigneeType;
    assigneeList: EntityInfoData[];
}
export declare class CustomMenuIsAssignedDialogComponent extends DialogComponent<CustomMenuIsAssignedDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: CustomMenuIsAssignedDialogData;
    dialogRef: MatDialogRef<CustomMenuIsAssignedDialogComponent, boolean>;
    translate: TranslateService;
    message: string;
    constructor(store: Store<AppState>, router: Router, data: CustomMenuIsAssignedDialogData, dialogRef: MatDialogRef<CustomMenuIsAssignedDialogComponent, boolean>, translate: TranslateService);
    ngOnInit(): void;
    cancel(): void;
    delete(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMenuIsAssignedDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMenuIsAssignedDialogComponent, "tb-custom-menu-is-assigned-dialog", never, {}, {}, never, never, false, never>;
}
