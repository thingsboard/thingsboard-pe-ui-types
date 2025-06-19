import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { SecretStorageService } from '@core/http/secret-storage.service';
import * as i0 from "@angular/core";
export declare class EditSecretDescriptionPanelComponent implements OnInit {
    private fb;
    private popover;
    private secretStorageService;
    secretId: string;
    description: string;
    descriptionApplied: EventEmitter<string>;
    descriptionFormControl: import("@angular/forms").FormControl<string>;
    constructor(fb: FormBuilder, popover: TbPopoverComponent<EditSecretDescriptionPanelComponent>, secretStorageService: SecretStorageService);
    ngOnInit(): void;
    cancel(): void;
    applyDescription(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditSecretDescriptionPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditSecretDescriptionPanelComponent, "tb-edit-secret-description-panel", never, { "secretId": { "alias": "secretId"; "required": false; }; "description": { "alias": "description"; "required": false; }; }, { "descriptionApplied": "descriptionApplied"; }, never, never, false, never>;
}
