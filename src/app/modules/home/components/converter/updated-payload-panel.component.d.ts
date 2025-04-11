import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConverterMsg } from '@shared/models/converter.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export declare class UpdatedPayloadPanelComponent implements OnInit {
    private fb;
    private popover;
    originalMsg: ConverterMsg;
    changesMsgApplied: EventEmitter<ConverterMsg>;
    payloadForm: import("@angular/forms").FormGroup<{
        payload: import("@angular/forms").FormControl<any>;
        metadata: import("@angular/forms").FormControl<any>;
    }>;
    constructor(fb: FormBuilder, popover: TbPopoverComponent<UpdatedPayloadPanelComponent>);
    ngOnInit(): void;
    cancel(): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdatedPayloadPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpdatedPayloadPanelComponent, "tb-update-payload-panel", never, { "originalMsg": { "alias": "originalMsg"; "required": false; }; }, { "changesMsgApplied": "changesMsgApplied"; }, never, never, false, never>;
}
