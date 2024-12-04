import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import { MobileAppService } from '@core/http/mobile-app.service';
import * as i0 from "@angular/core";
export interface MobileAppDeleteDialogData {
    id: string;
}
export declare class RemoveAppDialogComponent extends DialogComponent<RemoveAppDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<RemoveAppDialogComponent, boolean>;
    private data;
    private translate;
    private sanitizer;
    private fb;
    private mobileAppService;
    readonly deleteApplicationText: SafeHtml;
    readonly deleteVerificationText: string;
    deleteVerification: import("@angular/forms").FormControl<string>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<RemoveAppDialogComponent, boolean>, data: MobileAppDeleteDialogData, translate: TranslateService, sanitizer: DomSanitizer, fb: FormBuilder, mobileAppService: MobileAppService);
    cancel(): void;
    suspend(): void;
    delete(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RemoveAppDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RemoveAppDialogComponent, "tb-remove-app-dialog", never, {}, {}, never, never, false, never>;
}
