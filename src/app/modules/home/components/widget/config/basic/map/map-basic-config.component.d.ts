import { Injector } from '@angular/core';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import * as i0 from "@angular/core";
export declare class MapBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private $injector;
    private fb;
    mapWidgetConfigForm: UntypedFormGroup;
    trip: boolean;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, $injector: Injector, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected setupConfig(widgetConfig: WidgetConfigComponentData): void;
    protected setupDefaults(configData: WidgetConfigComponentData): void;
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private getCardButtons;
    private setCardButtons;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapBasicConfigComponent, "tb-map-basic-config", never, {}, {}, never, never, false, never>;
}
