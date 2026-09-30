import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export interface AiNoTelemetryModalData {
    checkConnectivity?: () => void;
    hideSendTelemetry?: boolean;
}
export declare class AiNoTelemetryModalComponent extends DialogComponent<AiNoTelemetryModalComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    data: AiNoTelemetryModalData;
    dialogRef: MatDialogRef<AiNoTelemetryModalComponent>;
    constructor(store: Store<AppState>, router: Router, data: AiNoTelemetryModalData, dialogRef: MatDialogRef<AiNoTelemetryModalComponent>);
    cancel(): void;
    moveToCheckConnectivityModal(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiNoTelemetryModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiNoTelemetryModalComponent, "tb-ai-no-telemetry-modal", never, {}, {}, never, never, false, never>;
}
