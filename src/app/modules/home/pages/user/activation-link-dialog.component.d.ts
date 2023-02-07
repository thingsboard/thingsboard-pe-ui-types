import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export interface ActivationLinkDialogData {
    activationLink: string;
}
export declare class ActivationLinkDialogComponent extends DialogComponent<ActivationLinkDialogComponent, void> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ActivationLinkDialogData;
    dialogRef: MatDialogRef<ActivationLinkDialogComponent, void>;
    private translate;
    activationLink: string;
    constructor(store: Store<AppState>, router: Router, data: ActivationLinkDialogData, dialogRef: MatDialogRef<ActivationLinkDialogComponent, void>, translate: TranslateService);
    ngOnInit(): void;
    close(): void;
    onActivationLinkCopied(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActivationLinkDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActivationLinkDialogComponent, "tb-activation-link-dialog", never, {}, {}, never, never, false>;
}
