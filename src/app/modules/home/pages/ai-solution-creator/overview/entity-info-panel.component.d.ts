import { OnInit } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { SolutionDescriptorEntityBaseRelation, SolutionDescriptorEntityBaseTelemetry, SolutionEntity } from '@shared/models/solution-creator.models';
import * as i0 from "@angular/core";
export declare class EntityInfoPanelComponent implements OnInit {
    private popover;
    entity: SolutionEntity;
    relations: SolutionDescriptorEntityBaseRelation[];
    entityInfoType: 'ATTRIBUTE' | 'TIMESERIES' | 'RELATION';
    attributes: SolutionDescriptorEntityBaseTelemetry[];
    timeseries: SolutionDescriptorEntityBaseTelemetry[];
    constructor(popover: TbPopoverComponent<EntityInfoPanelComponent>);
    ngOnInit(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityInfoPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityInfoPanelComponent, "tb-entity-info-panel", never, { "entity": { "alias": "entity"; "required": false; }; "relations": { "alias": "relations"; "required": false; }; }, {}, never, never, false, never>;
}
