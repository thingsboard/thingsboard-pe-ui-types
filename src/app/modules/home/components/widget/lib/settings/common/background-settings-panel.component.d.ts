import { EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { BackgroundSettings, BackgroundType, ComponentStyle } from '@shared/models/widget-settings.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class BackgroundSettingsPanelComponent extends PageComponent implements OnInit {
    private fb;
    protected store: Store<AppState>;
    backgroundSettings: BackgroundSettings;
    popover: TbPopoverComponent<BackgroundSettingsPanelComponent>;
    backgroundSettingsApplied: EventEmitter<BackgroundSettings>;
    backgroundType: typeof BackgroundType;
    backgroundTypes: BackgroundType[];
    backgroundTypeTranslationsMap: Map<BackgroundType, string>;
    backgroundSettingsFormGroup: UntypedFormGroup;
    backgroundStyle: ComponentStyle;
    overlayStyle: ComponentStyle;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>);
    ngOnInit(): void;
    cancel(): void;
    applyColorSettings(): void;
    private updateValidators;
    private updateBackgroundStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackgroundSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BackgroundSettingsPanelComponent, "tb-background-settings-panel", never, { "backgroundSettings": "backgroundSettings"; "popover": "popover"; }, { "backgroundSettingsApplied": "backgroundSettingsApplied"; }, never, never, false, never>;
}
