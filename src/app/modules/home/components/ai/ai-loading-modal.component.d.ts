import { DestroyRef, OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export interface AiLoadingModalData {
    messages: Array<{
        text: string;
        delay: number;
    }>;
    estimateWaitTime: number;
    image?: string;
}
export declare class AiLoadingModalComponent extends DialogComponent<AiLoadingModalComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: AiLoadingModalData;
    dialogRef: MatDialogRef<AiLoadingModalComponent>;
    private destroyRef;
    generateImage: string;
    statusMessage: string;
    statusMessageChanged: boolean;
    constructor(store: Store<AppState>, router: Router, data: AiLoadingModalData, dialogRef: MatDialogRef<AiLoadingModalComponent>, destroyRef: DestroyRef);
    ngOnInit(): void;
    private initGenerateState;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiLoadingModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiLoadingModalComponent, "tb-ai-loading-modal", never, {}, {}, never, never, false, never>;
}
