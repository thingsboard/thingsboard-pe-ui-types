import { ChangeDetectorRef } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { EntityDebugSettings } from '@shared/models/entity.models';
import { AppState } from '@core/core.state';
import { Store } from '@ngrx/store';
import { ControlValueAccessor, FormBuilder } from '@angular/forms';
import { EntityDebugSettingsService } from '@home/components/entity/debug/entity-debug-settings.service';
import { AdditionalDebugActionConfig } from '@home/components/entity/debug/entity-debug-settings.model';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class EntityDebugSettingsButtonComponent implements ControlValueAccessor {
    private store;
    private fb;
    private entityDebugSettingsService;
    private cd;
    additionalActionConfig: AdditionalDebugActionConfig;
    entityType: EntityType;
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
    constructor(store: Store<AppState>, fb: FormBuilder, entityDebugSettingsService: EntityDebugSettingsService, cd: ChangeDetectorRef);
    get failuresEnabled(): boolean;
    get allEnabledUntil(): number;
    onOpenDebugStrategyPanel($event: Event, matButton: MatButton): void;
    registerOnChange(fn: (settings: EntityDebugSettings) => void): void;
    registerOnTouched(_: () => void): void;
    writeValue(settings: EntityDebugSettings): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityDebugSettingsButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityDebugSettingsButtonComponent, "tb-entity-debug-settings-button", never, { "additionalActionConfig": { "alias": "additionalActionConfig"; "required": false; }; "entityType": { "alias": "entityType"; "required": true; }; }, {}, never, never, true, never>;
}
