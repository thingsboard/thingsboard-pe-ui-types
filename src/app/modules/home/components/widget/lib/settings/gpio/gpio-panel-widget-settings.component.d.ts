import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class GpioPanelWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    gpioPanelWidgetSettingsForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected settingsForm(): FormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected doUpdateSettings(settingsForm: FormGroup, settings: WidgetSettings): void;
    private prepareGpioListFormArray;
    gpioListFormArray(): FormArray;
    trackByGpioItem(index: number, gpioItemControl: AbstractControl): any;
    removeGpioItem(index: number): void;
    addGpioItem(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GpioPanelWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GpioPanelWidgetSettingsComponent, "tb-gpio-panel-widget-settings", never, {}, {}, never, never>;
}
