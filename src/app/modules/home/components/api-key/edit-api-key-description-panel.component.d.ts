import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { ApiKeyService } from '@core/http/api-key.service';
import * as i0 from "@angular/core";
export declare class EditApiKeyDescriptionPanelComponent implements OnInit {
    private fb;
    private popover;
    private apiKeyService;
    apiKeyId: string;
    description: string;
    descriptionApplied: EventEmitter<string>;
    descriptionFormControl: import("@angular/forms").FormControl<string>;
    constructor(fb: FormBuilder, popover: TbPopoverComponent<EditApiKeyDescriptionPanelComponent>, apiKeyService: ApiKeyService);
    ngOnInit(): void;
    cancel(): void;
    applyDescription(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditApiKeyDescriptionPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditApiKeyDescriptionPanelComponent, "tb-edit-api-key-description-panel", never, { "apiKeyId": { "alias": "apiKeyId"; "required": false; }; "description": { "alias": "description"; "required": false; }; }, { "descriptionApplied": "descriptionApplied"; }, never, never, false, never>;
}
