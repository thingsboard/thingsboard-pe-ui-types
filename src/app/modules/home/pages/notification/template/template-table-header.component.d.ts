import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { NotificationTemplate } from '@shared/models/notification.models';
import * as i0 from "@angular/core";
export declare class TemplateTableHeaderComponent extends EntityTableHeaderComponent<NotificationTemplate> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    createTemplate($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TemplateTableHeaderComponent, "tb-template-table-header", never, {}, {}, never, never, false, never>;
}
