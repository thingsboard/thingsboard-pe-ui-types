import { EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MarkerIconContainer } from '@shared/models/widget/maps/marker-shape.models';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import * as i0 from "@angular/core";
export interface MarkerIconInfo {
    iconContainer?: MarkerIconContainer;
    icon: string;
}
interface MarkerIconContainerInfo {
    iconContainer: MarkerIconContainer;
    html$: Observable<SafeHtml>;
}
export declare class MarkerIconShapesComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private iconRegistry;
    private domSanitizer;
    icon: string;
    iconContainer: MarkerIconContainer;
    color: string;
    trip: boolean;
    popover: TbPopoverComponent<MarkerIconShapesComponent>;
    markerIconSelected: EventEmitter<MarkerIconInfo>;
    dirty: boolean;
    iconContainers: MarkerIconContainerInfo[];
    constructor(store: Store<AppState>, iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer);
    ngOnInit(): void;
    cancel(): void;
    selectIcon(icon: string): void;
    selectIconContainer(iconContainer: MarkerIconContainer): void;
    apply(): void;
    private updateIconContainers;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkerIconShapesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MarkerIconShapesComponent, "tb-marker-icon-shapes", never, { "icon": { "alias": "icon"; "required": false; }; "iconContainer": { "alias": "iconContainer"; "required": false; }; "color": { "alias": "color"; "required": false; }; "trip": { "alias": "trip"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "markerIconSelected": "markerIconSelected"; }, never, never, false, never>;
}
export {};
