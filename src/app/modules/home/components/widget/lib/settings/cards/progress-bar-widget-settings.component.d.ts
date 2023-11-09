import { Injector } from '@angular/core';
import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ProgressBarLayout } from '@home/components/widget/lib/cards/progress-bar-widget.models';
import * as i0 from "@angular/core";
export declare class ProgressBarWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private $injector;
    private fb;
    progressBarLayout: typeof ProgressBarLayout;
    progressBarLayouts: ProgressBarLayout[];
    progressBarLayoutTranslationMap: Map<ProgressBarLayout, string>;
    progressBarLayoutImageMap: Map<ProgressBarLayout, string>;
    progressBarWidgetSettingsForm: UntypedFormGroup;
    valuePreviewFn: any;
    constructor(store: Store<AppState>, $injector: Injector, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    private _valuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarWidgetSettingsComponent, "tb-progress-bar-widget-settings", never, {}, {}, never, never, false, never>;
}
