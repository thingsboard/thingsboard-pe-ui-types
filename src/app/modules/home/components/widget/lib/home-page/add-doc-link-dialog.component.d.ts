import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { DocumentationLink } from '@shared/models/user-settings.models';
import * as i0 from "@angular/core";
export declare class AddDocLinkDialogComponent extends DialogComponent<AddDocLinkDialogComponent, DocumentationLink> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AddDocLinkDialogComponent, DocumentationLink>;
    fb: UntypedFormBuilder;
    addDocLinkFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, router: Router, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AddDocLinkDialogComponent, DocumentationLink>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    add(docLink: DocumentationLink): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddDocLinkDialogComponent, [null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddDocLinkDialogComponent, "tb-add-doc-link-dialog", never, {}, {}, never, never, false, never>;
}
