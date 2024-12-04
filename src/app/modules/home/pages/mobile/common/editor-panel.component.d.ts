import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export declare class EditorPanelComponent implements OnInit {
    private fb;
    disabled: boolean;
    content: string;
    title: string;
    popover: TbPopoverComponent<EditorPanelComponent>;
    editorContentApplied: EventEmitter<string>;
    editorControl: FormControl<string>;
    tinyMceOptions: Record<string, any>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    cancel(): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditorPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditorPanelComponent, "tb-release-notes-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; "content": { "alias": "content"; "required": false; }; "title": { "alias": "title"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "editorContentApplied": "editorContentApplied"; }, never, never, false, never>;
}
