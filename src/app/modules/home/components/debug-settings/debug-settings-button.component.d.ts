import { Renderer2, ViewContainerRef } from '@angular/core';
import { TbPopoverService } from '@shared/components/popover.service';
import { MatButton } from '@angular/material/button';
import { DebugSettings } from '@shared/models/entity.models';
import { AppState } from '@core/core.state';
import { Store } from '@ngrx/store';
import { ControlValueAccessor, FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DebugSettingsButtonComponent implements ControlValueAccessor {
    private popoverService;
    private renderer;
    private store;
    private viewContainerRef;
    private fb;
    debugLimitsConfiguration: string;
    debugSettingsFormGroup: import("@angular/forms").FormGroup<{
        failuresEnabled: import("@angular/forms").FormControl<boolean>;
        allEnabled: import("@angular/forms").FormControl<boolean>;
        allEnabledUntil: import("@angular/forms").FormControl<any>;
    }>;
    disabled: boolean;
    isDebugAllActive$: import("rxjs").Observable<boolean>;
    readonly maxDebugModeDurationMinutes: number;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, store: Store<AppState>, viewContainerRef: ViewContainerRef, fb: FormBuilder);
    get failuresEnabled(): boolean;
    get allEnabled(): boolean;
    get allEnabledUntil(): number;
    openDebugStrategyPanel($event: Event, matButton: MatButton): void;
    registerOnChange(fn: (settings: DebugSettings) => void): void;
    registerOnTouched(_: () => void): void;
    writeValue(settings: DebugSettings): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DebugSettingsButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DebugSettingsButtonComponent, "tb-debug-settings-button", never, { "debugLimitsConfiguration": { "alias": "debugLimitsConfiguration"; "required": false; }; }, {}, never, never, true, never>;
}
