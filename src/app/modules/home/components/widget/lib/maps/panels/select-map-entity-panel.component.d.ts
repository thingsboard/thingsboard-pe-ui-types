import { EventEmitter, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UnplacedMapDataItem } from '@home/components/widget/lib/maps/data-layer/latest-map-data-layer';
import * as i0 from "@angular/core";
export declare class SelectMapEntityPanelComponent implements OnInit {
    private fb;
    private popover;
    entities: UnplacedMapDataItem[];
    entitySelected: EventEmitter<UnplacedMapDataItem>;
    selectEntityFormGroup: UntypedFormGroup;
    selectedEntity: UnplacedMapDataItem;
    constructor(fb: UntypedFormBuilder, popover: TbPopoverComponent);
    ngOnInit(): void;
    cancel(): void;
    selectEntity(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectMapEntityPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectMapEntityPanelComponent, "tb-select-map-entity-panel", never, { "entities": { "alias": "entities"; "required": false; }; }, { "entitySelected": "entitySelected"; }, never, never, false, never>;
}
