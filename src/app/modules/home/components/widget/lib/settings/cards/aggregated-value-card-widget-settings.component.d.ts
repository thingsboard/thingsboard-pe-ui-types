import { Injector } from '@angular/core';
import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class AggregatedValueCardWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private $injector;
    private fb;
    aggregatedValueCardWidgetSettingsForm: UntypedFormGroup;
    datePreviewFn: any;
    constructor(store: Store<AppState>, $injector: Injector, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    private _datePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregatedValueCardWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregatedValueCardWidgetSettingsComponent, "tb-aggregated-value-card-widget-settings", never, {}, {}, never, never, false, never>;
}
