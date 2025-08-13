import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { AiModel } from '@shared/models/ai-model.models';
import { AiModelService } from '@core/http/ai-model.service';
import * as i0 from "@angular/core";
export interface AIModelDialogData {
    AIModel?: AiModel;
}
export declare class CheckConnectivityDialogComponent extends DialogComponent<CheckConnectivityDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<CheckConnectivityDialogComponent>;
    data: AIModelDialogData;
    private aiModelService;
    showCheckSuccess: boolean;
    checkErrMsg: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<CheckConnectivityDialogComponent>, data: AIModelDialogData, aiModelService: AiModelService);
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckConnectivityDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckConnectivityDialogComponent, "tb-check-connectivity-dialog", never, {}, {}, never, never, false, never>;
}
