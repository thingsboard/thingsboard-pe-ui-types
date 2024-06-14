import { Injector } from '@angular/core';
import { TargetDevice, WidgetSettings, WidgetSettingsComponent, widgetType } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare class StatusWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private $injector;
    private fb;
    get targetDevice(): TargetDevice;
    get widgetType(): widgetType;
    statusWidgetLayouts: import("@home/components/widget/lib/indicator/status-widget.models").StatusWidgetLayout[];
    statusWidgetLayoutTranslationMap: Map<import("@home/components/widget/lib/indicator/status-widget.models").StatusWidgetLayout, string>;
    statusWidgetLayoutImageMap: Map<import("@home/components/widget/lib/indicator/status-widget.models").StatusWidgetLayout, string>;
    valueType: typeof ValueType;
    statusWidgetSettingsForm: UntypedFormGroup;
    cardStyleMode: string;
    constructor(store: Store<AppState>, $injector: Injector, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatusWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StatusWidgetSettingsComponent, "tb-status-widget-settings", never, {}, {}, never, never, false, never>;
}
