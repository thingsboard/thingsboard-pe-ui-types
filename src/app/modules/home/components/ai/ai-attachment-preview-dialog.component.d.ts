import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { AiResourceService } from '@core/http/ai-resource.service';
import { AiResourceInfo } from '@shared/models/ai-chat.models';
import * as i0 from "@angular/core";
export interface AiAttachmentPreviewDialogData {
    resource: AiResourceInfo;
}
interface AiAttachmentPreview {
    url?: string;
    error?: string;
}
export declare class AiAttachmentPreviewDialogComponent extends DialogComponent<AiAttachmentPreviewDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<AiAttachmentPreviewDialogComponent>;
    data: AiAttachmentPreviewDialogData;
    private aiResourceService;
    private translate;
    private sanitizer;
    readonly preview$: Observable<AiAttachmentPreview>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<AiAttachmentPreviewDialogComponent>, data: AiAttachmentPreviewDialogData, aiResourceService: AiResourceService, translate: TranslateService, sanitizer: DomSanitizer);
    download(): void;
    close(): void;
    private errorMessage;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiAttachmentPreviewDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiAttachmentPreviewDialogComponent, "tb-ai-attachment-preview-dialog", never, {}, {}, never, never, false, never>;
}
export {};
