import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class EntitiesTableKeySettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    entitiesTableKeySettingsForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected settingsForm(): FormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntitiesTableKeySettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntitiesTableKeySettingsComponent, "tb-entities-table-key-settings", never, {}, {}, never, never>;
}
