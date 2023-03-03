import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class EdgeQuickOverviewWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    edgeQuickOverviewWidgetSettingsForm: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeQuickOverviewWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeQuickOverviewWidgetSettingsComponent, "tb-edge-quick-overview-widget-settings", never, {}, {}, never, never, false, never>;
}
