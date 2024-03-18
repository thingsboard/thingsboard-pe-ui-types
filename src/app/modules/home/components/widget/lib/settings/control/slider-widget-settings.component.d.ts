import { TargetDevice, WidgetSettings, WidgetSettingsComponent, widgetType } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ValueType } from '@shared/models/constants';
import { SliderLayout } from '@home/components/widget/lib/rpc/slider-widget.models';
import * as i0 from "@angular/core";
export declare class SliderWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    get targetDevice(): TargetDevice;
    get widgetType(): widgetType;
    sliderLayout: typeof SliderLayout;
    sliderLayouts: SliderLayout[];
    sliderLayoutTranslationMap: Map<SliderLayout, string>;
    sliderLayoutImageMap: Map<SliderLayout, string>;
    valueType: typeof ValueType;
    sliderWidgetSettingsForm: UntypedFormGroup;
    valuePreviewFn: any;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(_emitEvent: boolean): void;
    private _valuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderWidgetSettingsComponent, "tb-slider-widget-settings", never, {}, {}, never, never, false, never>;
}
