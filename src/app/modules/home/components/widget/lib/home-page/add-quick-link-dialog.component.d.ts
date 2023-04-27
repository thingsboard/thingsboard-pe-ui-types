import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class AddQuickLinkDialogComponent extends DialogComponent<AddQuickLinkDialogComponent, string> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AddQuickLinkDialogComponent, string>;
    fb: UntypedFormBuilder;
    addQuickLinkFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, router: Router, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AddQuickLinkDialogComponent, string>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    add(link: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddQuickLinkDialogComponent, [null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddQuickLinkDialogComponent, "tb-add-quick-link-dialog", never, {}, {}, never, never, false, never>;
}
