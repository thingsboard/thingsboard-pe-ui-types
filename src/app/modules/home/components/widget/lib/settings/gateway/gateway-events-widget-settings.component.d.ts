import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MatChipInputEvent } from '@angular/material/chips';
import * as i0 from "@angular/core";
export declare class GatewayEventsWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    separatorKeysCodes: number[];
    gatewayEventsWidgetSettingsForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected settingsForm(): FormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    removeEventFilter(eventFilter: string): void;
    addEventFilterFromInput(event: MatChipInputEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayEventsWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayEventsWidgetSettingsComponent, "tb-gateway-events-widget-settings", never, {}, {}, never, never>;
}
