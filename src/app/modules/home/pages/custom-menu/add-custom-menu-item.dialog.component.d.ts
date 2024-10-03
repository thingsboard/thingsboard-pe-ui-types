import { OnDestroy, OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { CMScope, CustomMenuItem } from '@shared/models/custom-menu.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface AddCustomMenuItemDialogData {
    scope: CMScope;
    subItem: boolean;
}
export declare class AddCustomMenuItemDialogComponent extends DialogComponent<AddCustomMenuItemDialogComponent, CustomMenuItem> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddCustomMenuItemDialogData;
    dialogRef: MatDialogRef<AddCustomMenuItemDialogComponent, CustomMenuItem>;
    private translate;
    private fb;
    title: string;
    customMenuItemControl: UntypedFormControl;
    constructor(store: Store<AppState>, router: Router, data: AddCustomMenuItemDialogData, dialogRef: MatDialogRef<AddCustomMenuItemDialogComponent, CustomMenuItem>, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddCustomMenuItemDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddCustomMenuItemDialogComponent, "tb-add-custom-menu-item-dialog", never, {}, {}, never, never, false, never>;
}
