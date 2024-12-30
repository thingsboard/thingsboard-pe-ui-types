import { ChangeDetectorRef, Renderer2, ViewContainerRef } from '@angular/core';
import { TbPopoverService } from '@shared/components/popover.service';
import { MatButton } from '@angular/material/button';
import { EntityDebugSettings } from '@shared/models/entity.models';
import { AppState } from '@core/core.state';
import { Store } from '@ngrx/store';
import { ControlValueAccessor, FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class EntityDebugSettingsButtonComponent implements ControlValueAccessor {
    private popoverService;
    private renderer;
    private store;
    private viewContainerRef;
    private fb;
    private cd;
    debugLimitsConfiguration: string;
    entityLabel: string;
    debugSettingsFormGroup: import("@angular/forms").FormGroup<{
        failuresEnabled: import("@angular/forms").FormControl<boolean>;
        allEnabled: import("@angular/forms").FormControl<boolean>;
        allEnabledUntil: import("@angular/forms").FormControl<any>;
    }>;
    disabled: boolean;
    private allEnabledSubject;
    allEnabled$: import("rxjs").Observable<boolean>;
    isDebugAllActive$: import("rxjs").Observable<boolean>;
    readonly maxDebugModeDuration: number;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, store: Store<AppState>, viewContainerRef: ViewContainerRef, fb: FormBuilder, cd: ChangeDetectorRef);
    get failuresEnabled(): boolean;
    get allEnabledUntil(): number;
    openDebugStrategyPanel($event: Event, matButton: MatButton): void;
    registerOnChange(fn: (settings: EntityDebugSettings) => void): void;
    registerOnTouched(_: () => void): void;
    writeValue(settings: EntityDebugSettings): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityDebugSettingsButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityDebugSettingsButtonComponent, "tb-entity-debug-settings-button", never, { "debugLimitsConfiguration": { "alias": "debugLimitsConfiguration"; "required": false; }; "entityLabel": { "alias": "entityLabel"; "required": false; }; }, {}, never, never, true, never>;
}
