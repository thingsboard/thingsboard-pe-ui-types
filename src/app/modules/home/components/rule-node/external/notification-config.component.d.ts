import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import { NotificationType } from '@shared/models/notification.models';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class NotificationConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    notificationConfigForm: FormGroup;
    notificationType: typeof NotificationType;
    entityType: typeof EntityType;
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationConfigComponent, "tb-external-node-notification-config", never, {}, {}, never, never, false, never>;
}
