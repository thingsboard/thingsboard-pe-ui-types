import { Injector } from '@angular/core';
import { Datasource, WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BatteryLevelLayout } from '@home/components/widget/lib/indicator/battery-level-widget.models';
import * as i0 from "@angular/core";
export declare class BatteryLevelWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private $injector;
    private fb;
    batteryLevelLayouts: BatteryLevelLayout[];
    batteryLevelLayoutTranslationMap: Map<BatteryLevelLayout, string>;
    batteryLevelLayoutImageMap: Map<BatteryLevelLayout, string>;
    batteryLevelWidgetSettingsForm: UntypedFormGroup;
    valuePreviewFn: any;
    get sectionsCountEnabled(): boolean;
    get datasource(): Datasource;
    constructor(store: Store<AppState>, $injector: Injector, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    private _valuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<BatteryLevelWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BatteryLevelWidgetSettingsComponent, "tb-battery-level-widget-settings", never, {}, {}, never, never, false, never>;
}
