import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class EntityCountBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private utils;
    private fb;
    entityCountWidgetConfigForm: UntypedFormGroup;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, utils: UtilsService, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected setupDefaults(configData: WidgetConfigComponentData): void;
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    private getCardButtons;
    private setCardButtons;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityCountBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityCountBasicConfigComponent, "tb-entity-count-basic-config", never, {}, {}, never, never, false, never>;
}
