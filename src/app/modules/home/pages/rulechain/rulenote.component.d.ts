import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FcNoteComponent } from 'ngx-flowchart';
import { FcRuleNote } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class RuleNoteComponent extends FcNoteComponent implements OnInit, OnChanges {
    readonly defaultBackgroundColor = "#FFF9C4";
    private static readonly HEADING_STYLE_OVERRIDE;
    private static readonly PADDING_STYLE_OVERRIDE;
    applyDefault: boolean;
    additionalStyles: string[];
    noteClass: string;
    note: FcRuleNote;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private processCss;
    noteEdit(event: MouseEvent): void;
    noteDelete(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNoteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleNoteComponent, "tb-rule-note", never, {}, {}, never, never, false, never>;
}
