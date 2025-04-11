import { EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MarkerShape } from '@shared/models/widget/maps/marker-shape.models';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import * as i0 from "@angular/core";
interface MarkerShapeInfo {
    shape: MarkerShape;
    url$: Observable<SafeUrl>;
}
export declare class MarkerShapesComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private iconRegistry;
    private domSanitizer;
    shape: MarkerShape;
    color: string;
    trip: boolean;
    popover: TbPopoverComponent<MarkerShapesComponent>;
    markerShapeSelected: EventEmitter<MarkerShape>;
    shapes: MarkerShapeInfo[];
    constructor(store: Store<AppState>, iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer);
    ngOnInit(): void;
    cancel(): void;
    selectShape(shape: MarkerShape): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkerShapesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MarkerShapesComponent, "tb-marker-shapes", never, { "shape": { "alias": "shape"; "required": false; }; "color": { "alias": "color"; "required": false; }; "trip": { "alias": "trip"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "markerShapeSelected": "markerShapeSelected"; }, never, never, false, never>;
}
export {};
