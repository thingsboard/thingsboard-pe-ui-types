import { Injector } from '@angular/core';
import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class SignalStrengthWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private $injector;
    private fb;
    signalStrengthLayouts: import("@home/components/widget/lib/indicator/signal-strength-widget.models").SignalStrengthLayout[];
    signalStrengthLayoutTranslationMap: Map<import("@home/components/widget/lib/indicator/signal-strength-widget.models").SignalStrengthLayout, string>;
    signalStrengthLayoutImageMap: Map<import("@home/components/widget/lib/indicator/signal-strength-widget.models").SignalStrengthLayout, string>;
    signalStrengthWidgetSettingsForm: UntypedFormGroup;
    datePreviewFn: any;
    tooltipValuePreviewFn: any;
    tooltipDatePreviewFn: any;
    constructor(store: Store<AppState>, $injector: Injector, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    private _datePreviewFn;
    private _tooltipValuePreviewFn;
    private _tooltipDatePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<SignalStrengthWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SignalStrengthWidgetSettingsComponent, "tb-signal-strength-widget-settings", never, {}, {}, never, never, false, never>;
}
