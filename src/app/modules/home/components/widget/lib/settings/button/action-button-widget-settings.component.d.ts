import { TargetDevice, WidgetSettings, WidgetSettingsComponent, widgetType } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare class ActionButtonWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    get targetDevice(): TargetDevice;
    get widgetType(): widgetType;
    get borderRadius(): string;
    valueType: typeof ValueType;
    actionButtonWidgetSettingsForm: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionButtonWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionButtonWidgetSettingsComponent, "tb-action-button-widget-settings", never, {}, {}, never, never, false, never>;
}
