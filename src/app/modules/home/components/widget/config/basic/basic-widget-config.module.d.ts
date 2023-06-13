import { Type } from '@angular/core';
import { IBasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import * as i0 from "@angular/core";
import * as i1 from "@home/components/widget/config/basic/common/widget-actions-panel.component";
import * as i2 from "@home/components/widget/config/basic/cards/simple-card-basic-config.component";
import * as i3 from "@home/components/widget/config/basic/cards/entities-table-basic-config.component";
import * as i4 from "@home/components/widget/config/basic/common/data-key-row.component";
import * as i5 from "@home/components/widget/config/basic/common/data-keys-panel.component";
import * as i6 from "@angular/common";
import * as i7 from "@shared/shared.module";
import * as i8 from "@home/components/widget/config/widget-config-components.module";
export declare class BasicWidgetConfigModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BasicWidgetConfigModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BasicWidgetConfigModule, [typeof i1.WidgetActionsPanelComponent, typeof i2.SimpleCardBasicConfigComponent, typeof i3.EntitiesTableBasicConfigComponent, typeof i4.DataKeyRowComponent, typeof i5.DataKeysPanelComponent], [typeof i6.CommonModule, typeof i7.SharedModule, typeof i8.WidgetConfigComponentsModule], [typeof i1.WidgetActionsPanelComponent, typeof i2.SimpleCardBasicConfigComponent, typeof i3.EntitiesTableBasicConfigComponent, typeof i4.DataKeyRowComponent, typeof i5.DataKeysPanelComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BasicWidgetConfigModule>;
}
export declare const basicWidgetConfigComponentsMap: {
    [key: string]: Type<IBasicWidgetConfigComponent>;
};
