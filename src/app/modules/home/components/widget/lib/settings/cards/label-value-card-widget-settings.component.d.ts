import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class LabelValueCardWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    labelValueCardWidgetSettingsForm: UntypedFormGroup;
    valuePreviewFn: any;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    private _valuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelValueCardWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelValueCardWidgetSettingsComponent, "tb-label-value-card-widget-settings", never, {}, {}, never, never, false, never>;
}
