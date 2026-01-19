import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs/internal/Observable';
import * as i0 from "@angular/core";
export interface SignupDialogData {
    title: string;
    content$: Observable<string>;
}
export declare class SignupDialogComponent extends DialogComponent<SignupDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: SignupDialogData;
    private domSanitizer;
    dialogRef: MatDialogRef<SignupDialogComponent, boolean>;
    class: string;
    title: string;
    dialogText: SafeHtml;
    constructor(store: Store<AppState>, router: Router, data: SignupDialogData, domSanitizer: DomSanitizer, dialogRef: MatDialogRef<SignupDialogComponent, boolean>);
    ngOnInit(): void;
    cancel(): void;
    accept(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SignupDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SignupDialogComponent, "tb-signup-dialog", never, {}, {}, never, never, false, never>;
}
