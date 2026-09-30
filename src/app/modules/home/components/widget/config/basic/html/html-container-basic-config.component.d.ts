import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import * as i0 from "@angular/core";
export declare class HtmlContainerBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private fb;
    height: string;
    htmlContainerWidgetConfigForm: UntypedFormGroup;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    static ɵfac: i0.ɵɵFactoryDeclaration<HtmlContainerBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HtmlContainerBasicConfigComponent, "tb-html-container-basic-config", never, {}, {}, never, never, false, never>;
}
