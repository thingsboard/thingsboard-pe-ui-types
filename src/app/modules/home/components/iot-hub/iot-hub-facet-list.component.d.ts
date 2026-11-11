import { EventEmitter, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * One checkbox facet of a filter panel: a title, the option keys, and the set of keys currently
 * selected. Presentational only - the host decides what a toggle means.
 */
export declare class TbIotHubFacetListComponent implements OnChanges {
    /** Translation key for the facet's heading. */
    label: string;
    options: string[];
    /** Keys the host has selected. The host hands over a new Set on every toggle. */
    selected: Set<string>;
    /** Turns an option key into what the user reads. */
    labelFor: (key: string) => string;
    expanded: boolean;
    toggled: EventEmitter<string>;
    search: string;
    searchable: boolean;
    visibleOptions: string[];
    scrollable: boolean;
    ngOnChanges(): void;
    onSearchChange(search: string): void;
    isSelected(key: string): boolean;
    onToggle(key: string): void;
    private applySearch;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubFacetListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubFacetListComponent, "tb-iot-hub-facet-list", never, { "label": { "alias": "label"; "required": false; }; "options": { "alias": "options"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "labelFor": { "alias": "labelFor"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; }, { "toggled": "toggled"; }, never, never, false, never>;
}
