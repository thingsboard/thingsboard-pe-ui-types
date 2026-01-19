import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AuditLog } from '@shared/models/audit-log.models';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export interface AuditLogDetailsDialogData {
    auditLog: AuditLog;
}
export declare class AuditLogDetailsDialogComponent extends DialogComponent<AuditLogDetailsDialogComponent> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    data: AuditLogDetailsDialogData;
    dialogRef: MatDialogRef<AuditLogDetailsDialogComponent>;
    private renderer;
    actionDataEditorElmRef: ElementRef;
    failureDetailsEditorElmRef: ElementRef;
    displayFailureDetails: boolean;
    private auditLog;
    private aceEditors;
    constructor(store: Store<AppState>, router: Router, data: AuditLogDetailsDialogData, dialogRef: MatDialogRef<AuditLogDetailsDialogComponent>, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    createEditor(editorElementRef: ElementRef, content: string | object): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuditLogDetailsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuditLogDetailsDialogComponent, "tb-audit-log-details-dialog", never, {}, {}, never, never, false, never>;
}
