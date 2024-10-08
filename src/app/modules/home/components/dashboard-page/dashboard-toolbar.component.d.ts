import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DashboardToolbarComponent implements OnInit {
    toolbarOpened: boolean;
    forceFullscreen: boolean;
    triggerClick: EventEmitter<void>;
    constructor();
    ngOnInit(): void;
    onTriggerClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardToolbarComponent, "tb-dashboard-toolbar", never, { "toolbarOpened": { "alias": "toolbarOpened"; "required": false; }; "forceFullscreen": { "alias": "forceFullscreen"; "required": false; }; }, { "triggerClick": "triggerClick"; }, never, ["*"], false, never>;
}
