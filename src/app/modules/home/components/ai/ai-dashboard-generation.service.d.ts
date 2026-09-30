import { DestroyRef } from '@angular/core';
import { AiNoTelemetryModalData } from '@home/components/ai/ai-no-telemetry-modal.component';
import { EntityService } from '@core/http/entity.service';
import { MatDialog } from '@angular/material/dialog';
import { AiChatService } from '@core/http/ai-chat.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import * as i0 from "@angular/core";
interface GenerateDashboardOptions {
    deviceId: string;
    destroyRef?: DestroyRef;
    noTelemetry: AiNoTelemetryModalData;
    beforeOpen?: () => void;
}
interface AllowDashboardGenerateOptions {
    entityGroup?: EntityGroupInfo;
    requireTelemetry?: boolean;
}
export declare class AiDashboardGenerationService {
    private entityService;
    private dialog;
    private aiChatService;
    private router;
    private translate;
    private sanitizer;
    private store;
    private userPermissionsService;
    constructor(entityService: EntityService, dialog: MatDialog, aiChatService: AiChatService, router: Router, translate: TranslateService, sanitizer: DomSanitizer, store: Store<AppState>, userPermissionsService: UserPermissionsService);
    generateWithTelemetryCheck(opts: GenerateDashboardOptions): void;
    generate(deviceId: string, destroyRef?: DestroyRef, timeseriesKeys?: string[]): void;
    openNoTelemetryModal(data: AiNoTelemetryModalData): void;
    isAllowedDashboardGenerate(opts?: AllowDashboardGenerateOptions): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiDashboardGenerationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiDashboardGenerationService>;
}
export {};
