import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiKey } from '@shared/models/api-key.models';
import * as i0 from "@angular/core";
export interface ApiKeyGeneratedDialogData {
    apiKey: ApiKey;
}
export declare class ApiKeyGeneratedDialogComponent extends DialogComponent<ApiKeyGeneratedDialogComponent, void> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<ApiKeyGeneratedDialogComponent, void>;
    data: ApiKeyGeneratedDialogData;
    private baseUrl;
    apiKeyCommand: string;
    secureUrl: boolean;
    selectedTab: number;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<ApiKeyGeneratedDialogComponent, void>, data: ApiKeyGeneratedDialogData);
    close(): void;
    createMarkDownCommand(command: string): string;
    private selectTabIndexForUserOS;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiKeyGeneratedDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApiKeyGeneratedDialogComponent, "tb-api-key-generated-dialog", never, {}, {}, never, never, false, never>;
}
