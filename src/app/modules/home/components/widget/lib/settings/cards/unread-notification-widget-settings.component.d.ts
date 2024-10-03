import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class UnreadNotificationWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    unreadNotificationWidgetSettingsForm: UntypedFormGroup;
    countPreviewFn: any;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    private _countPreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnreadNotificationWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UnreadNotificationWidgetSettingsComponent, "tb-unread-notification-widget-settings", never, {}, {}, never, never, false, never>;
}
