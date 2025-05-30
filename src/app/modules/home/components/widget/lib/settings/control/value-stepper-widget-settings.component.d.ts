import { TargetDevice, WidgetSettings, WidgetSettingsComponent, widgetType } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
type ButtonAppearanceType = 'left' | 'right';
export declare class ValueStepperWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    get targetDevice(): TargetDevice;
    get widgetType(): widgetType;
    get borderRadius(): string;
    valueType: typeof ValueType;
    valueStepperWidgetSettingsForm: UntypedFormGroup;
    valueStepperTypeTranslationMap: Map<import("@home/components/widget/lib/rpc/value-stepper-widget.models").ValueStepperType, string>;
    valueStepperTypes: import("@home/components/widget/lib/rpc/value-stepper-widget.models").ValueStepperType[];
    valueStepperTypeImageMap: Map<import("@home/components/widget/lib/rpc/value-stepper-widget.models").ValueStepperType, string>;
    buttonAppearanceType: ButtonAppearanceType;
    valuePreviewFn: any;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(_emitEvent: boolean): void;
    private buttonValidators;
    private _valuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueStepperWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValueStepperWidgetSettingsComponent, "tb-value-stepper-widget-settings", never, {}, {}, never, never, false, never>;
}
export {};
