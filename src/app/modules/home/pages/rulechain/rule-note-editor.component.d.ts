import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { FcRuleNote } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class RuleNoteEditorComponent implements OnChanges, OnInit {
    note: FcRuleNote;
    advancedPanel: MatExpansionPanel;
    private fb;
    private destroyRef;
    noteForm: import("@angular/forms").FormGroup<{
        content: import("@angular/forms").FormControl<string>;
        backgroundColor: import("@angular/forms").FormControl<string>;
        borderColor: import("@angular/forms").FormControl<string>;
        borderWidth: import("@angular/forms").FormControl<number>;
        applyDefaultMarkdownStyle: import("@angular/forms").FormControl<boolean>;
        markdownCss: import("@angular/forms").FormControl<string>;
    }>;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private borderColorFrom;
    private updatedForm;
    private hasNonDefaultAdvancedSettings;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNoteEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleNoteEditorComponent, "tb-rule-note-editor", never, { "note": { "alias": "note"; "required": false; }; }, {}, never, never, false, never>;
}
