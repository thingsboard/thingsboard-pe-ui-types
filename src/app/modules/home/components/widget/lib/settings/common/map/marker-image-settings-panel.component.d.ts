import { DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetService } from '@core/http/widget.service';
import { MarkerImageSettings, MarkerImageType } from '@shared/models/widget/maps/map.models';
import * as i0 from "@angular/core";
export declare class MarkerImageSettingsPanelComponent extends PageComponent implements OnInit {
    private fb;
    private widgetService;
    protected store: Store<AppState>;
    private destroyRef;
    markerImageSettings: MarkerImageSettings;
    popover: TbPopoverComponent<MarkerImageSettingsPanelComponent>;
    markerImageSettingsApplied: EventEmitter<MarkerImageSettings>;
    MarkerImageType: typeof MarkerImageType;
    markerImageSettingsFormGroup: UntypedFormGroup;
    functionScopeVariables: string[];
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService, store: Store<AppState>, destroyRef: DestroyRef);
    ngOnInit(): void;
    cancel(): void;
    applyMarkerImageSettings(): void;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkerImageSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MarkerImageSettingsPanelComponent, "tb-marker-image-settings-panel", never, { "markerImageSettings": { "alias": "markerImageSettings"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "markerImageSettingsApplied": "markerImageSettingsApplied"; }, never, never, false, never>;
}
