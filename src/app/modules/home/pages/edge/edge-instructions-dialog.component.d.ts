import { OnDestroy, OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { EdgeInfo, EdgeInstructionsMethod } from '@shared/models/edge.models';
import { EdgeService } from '@core/http/edge.service';
import { AttributeService } from '@core/http/attribute.service';
import * as i0 from "@angular/core";
export interface EdgeInstructionsDialogData {
    edge: EdgeInfo;
    afterAdd: boolean;
    upgradeAvailable: boolean;
}
export declare class EdgeInstructionsDialogComponent extends DialogComponent<EdgeInstructionsDialogComponent> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    private data;
    dialogRef: MatDialogRef<EdgeInstructionsDialogComponent>;
    private attributeService;
    private edgeService;
    dialogTitle: string;
    showDontShowAgain: boolean;
    loadedInstructions: boolean;
    notShowAgain: boolean;
    tabIndex: number;
    instructionsMethod: typeof EdgeInstructionsMethod;
    contentData: any;
    constructor(store: Store<AppState>, router: Router, data: EdgeInstructionsDialogData, dialogRef: MatDialogRef<EdgeInstructionsDialogComponent>, attributeService: AttributeService, edgeService: EdgeService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    close(): void;
    selectedTabChange(index: number): void;
    getInstructions(method: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeInstructionsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeInstructionsDialogComponent, "tb-edge-installation-dialog", never, {}, {}, never, never, false, never>;
}
