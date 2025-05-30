import { ChangeDetectorRef, DestroyRef, EventEmitter, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { TranslateService } from '@ngx-translate/core';
import { MapLayerSettings, MapProvider } from '@shared/models/widget/maps/map.models';
import * as i0 from "@angular/core";
export declare class MapLayerRowComponent implements ControlValueAccessor, OnInit {
    private fb;
    private translate;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private cd;
    private destroyRef;
    MapProvider: typeof MapProvider;
    mapProviders: MapProvider[];
    mapProviderTranslationMap: Map<MapProvider, string>;
    openStreetLayerTypes: import("@shared/models/widget/maps/map.models").OpenStreetLayerType[];
    openStreetMapLayerTranslationMap: Map<import("@shared/models/widget/maps/map.models").OpenStreetLayerType, string>;
    googleMapLayerTypes: import("@shared/models/widget/maps/map.models").GoogleLayerType[];
    googleMapLayerTranslationMap: Map<import("@shared/models/widget/maps/map.models").GoogleLayerType, string>;
    hereLayerTypes: import("@shared/models/widget/maps/map.models").HereLayerType[];
    hereLayerTranslationMap: Map<import("@shared/models/widget/maps/map.models").HereLayerType, string>;
    tencentLayerTypes: import("@shared/models/widget/maps/map.models").TencentLayerType[];
    tencentLayerTranslationMap: Map<import("@shared/models/widget/maps/map.models").TencentLayerType, string>;
    disabled: boolean;
    layerRemoved: EventEmitter<any>;
    layerFormGroup: UntypedFormGroup;
    modelValue: MapLayerSettings;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, translate: TranslateService, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: MapLayerSettings): void;
    labelPlaceholder(): string;
    editLayer($event: Event, matButton: MatButton): void;
    private onProviderChanged;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapLayerRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapLayerRowComponent, "tb-map-layer-row", never, { "disabled": { "alias": "disabled"; "required": false; }; }, { "layerRemoved": "layerRemoved"; }, never, never, false, never>;
}
