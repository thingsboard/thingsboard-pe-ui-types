import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { ActivationLinkInfo } from '@shared/models/user.model';
import { MillisecondsToTimeStringPipe } from '@shared/pipe/milliseconds-to-time-string.pipe';
import * as i0 from "@angular/core";
export interface ActivationLinkDialogData {
    activationLinkInfo: ActivationLinkInfo;
}
export declare class ActivationLinkDialogComponent extends DialogComponent<ActivationLinkDialogComponent, void> {
    protected store: Store<AppState>;
    protected router: Router;
    data: ActivationLinkDialogData;
    dialogRef: MatDialogRef<ActivationLinkDialogComponent, void>;
    private translate;
    private millisecondsToTimeStringPipe;
    activationLink: string;
    activationLinkTtl: string;
    constructor(store: Store<AppState>, router: Router, data: ActivationLinkDialogData, dialogRef: MatDialogRef<ActivationLinkDialogComponent, void>, translate: TranslateService, millisecondsToTimeStringPipe: MillisecondsToTimeStringPipe);
    close(): void;
    onActivationLinkCopied(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActivationLinkDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActivationLinkDialogComponent, "tb-activation-link-dialog", never, {}, {}, never, never, false, never>;
}
