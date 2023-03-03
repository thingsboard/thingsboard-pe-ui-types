import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ContentType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare class SendRpcWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    sendRpcWidgetSettingsForm: UntypedFormGroup;
    contentTypes: typeof ContentType;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SendRpcWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SendRpcWidgetSettingsComponent, "tb-send-rpc-widget-settings", never, {}, {}, never, never, false, never>;
}
