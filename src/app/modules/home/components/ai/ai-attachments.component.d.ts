import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AiResourceInfo } from '@shared/models/ai-chat.models';
import { AiResourceService } from '@core/http/ai-resource.service';
import * as i0 from "@angular/core";
interface AiAttachmentItem {
    resource: AiResourceInfo;
    image: boolean;
    icon: string;
    extension: string;
    url$?: Observable<string | null>;
}
export declare class AiAttachmentsComponent implements OnChanges {
    private aiResourceService;
    private dialog;
    resources: AiResourceInfo[];
    resourceError: EventEmitter<any>;
    shown: AiAttachmentItem[];
    constructor(aiResourceService: AiResourceService, dialog: MatDialog);
    ngOnChanges(changes: SimpleChanges): void;
    open(item: AiAttachmentItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiAttachmentsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiAttachmentsComponent, "tb-ai-attachments", never, { "resources": { "alias": "resources"; "required": false; }; }, { "resourceError": "resourceError"; }, never, never, false, never>;
}
export {};
