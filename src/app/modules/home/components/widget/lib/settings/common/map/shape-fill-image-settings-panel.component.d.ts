import { DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { WidgetService } from '@core/http/widget.service';
import { ShapeFillImageSettings, ShapeFillImageType } from '@shared/models/widget/maps/map.models';
import * as i0 from "@angular/core";
export declare class ShapeFillImageSettingsPanelComponent implements OnInit {
    private fb;
    private popover;
    private widgetService;
    private destroyRef;
    shapeFillImageSettings: ShapeFillImageSettings;
    shapeFillImageSettingsApplied: EventEmitter<ShapeFillImageSettings>;
    ShapeFillImageType: typeof ShapeFillImageType;
    shapeFillImageSettingsFormGroup: UntypedFormGroup;
    functionScopeVariables: string[];
    constructor(fb: UntypedFormBuilder, popover: TbPopoverComponent, widgetService: WidgetService, destroyRef: DestroyRef);
    ngOnInit(): void;
    cancel(): void;
    applyShapeFillImageSettings(): void;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShapeFillImageSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShapeFillImageSettingsPanelComponent, "tb-shape-fill-image-settings-panel", never, { "shapeFillImageSettings": { "alias": "shapeFillImageSettings"; "required": false; }; }, { "shapeFillImageSettingsApplied": "shapeFillImageSettingsApplied"; }, never, never, false, never>;
}
