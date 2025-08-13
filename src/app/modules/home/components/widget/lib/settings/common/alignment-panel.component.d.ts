import { EventEmitter, OnInit } from '@angular/core';
import { alignment } from '@shared/models/widget-settings.models';
import * as i0 from "@angular/core";
export declare class AlignmentPanelComponent implements OnInit {
    alignments: alignment[];
    alignmentTranslations: Map<string, string>;
    alignmentIcons: Map<string, string>;
    alignment: alignment;
    horizontal: boolean;
    alignmentSelected: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    selectAlignment(alignment: alignment): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlignmentPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlignmentPanelComponent, "tb-alignment-panel", never, { "alignment": { "alias": "alignment"; "required": false; }; "horizontal": { "alias": "horizontal"; "required": false; }; }, { "alignmentSelected": "alignmentSelected"; }, never, never, false, never>;
}
