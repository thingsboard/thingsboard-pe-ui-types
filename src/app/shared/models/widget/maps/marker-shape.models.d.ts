import tinycolor from 'tinycolor2';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
export declare enum MarkerShape {
    markerShape1 = "markerShape1",
    markerShape2 = "markerShape2",
    markerShape3 = "markerShape3",
    markerShape4 = "markerShape4",
    markerShape5 = "markerShape5",
    markerShape6 = "markerShape6",
    markerShape7 = "markerShape7",
    markerShape8 = "markerShape8",
    markerShape9 = "markerShape9",
    markerShape10 = "markerShape10",
    tripMarkerShape1 = "tripMarkerShape1",
    tripMarkerShape2 = "tripMarkerShape2",
    tripMarkerShape3 = "tripMarkerShape3",
    tripMarkerShape4 = "tripMarkerShape4",
    tripMarkerShape5 = "tripMarkerShape5",
    tripMarkerShape6 = "tripMarkerShape6",
    tripMarkerShape7 = "tripMarkerShape7",
    tripMarkerShape8 = "tripMarkerShape8",
    tripMarkerShape9 = "tripMarkerShape9",
    tripMarkerShape10 = "tripMarkerShape10"
}
export declare enum MarkerIconContainer {
    iconContainer1 = "iconContainer1",
    iconContainer2 = "iconContainer2",
    iconContainer3 = "iconContainer3",
    iconContainer4 = "iconContainer4",
    iconContainer5 = "iconContainer5",
    iconContainer6 = "iconContainer6",
    iconContainer7 = "iconContainer7",
    tripIconContainer1 = "tripIconContainer1",
    tripIconContainer2 = "tripIconContainer2",
    tripIconContainer3 = "tripIconContainer3"
}
export declare const markerShapes: MarkerShape[];
export declare const tripMarkerShapes: MarkerShape[];
export declare const markerIconContainers: MarkerIconContainer[];
export declare const tripMarkerIconContainers: MarkerIconContainer[];
export declare const createColorMarkerShapeURI: (iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, shape: MarkerShape, color: tinycolor.Instance) => Observable<string>;
export declare const createColorMarkerIconElement: (iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, iconContainer: MarkerIconContainer, icon: string, color: tinycolor.Instance) => Observable<SVGElement>;
export declare const createPlaceItemIcon: (iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) => Observable<string>;
