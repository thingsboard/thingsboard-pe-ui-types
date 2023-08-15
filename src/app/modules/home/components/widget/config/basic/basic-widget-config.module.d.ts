import { Type } from '@angular/core';
import { IBasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import * as i0 from "@angular/core";
import * as i1 from "@home/components/widget/config/basic/common/widget-actions-panel.component";
import * as i2 from "@home/components/widget/config/basic/cards/simple-card-basic-config.component";
import * as i3 from "@home/components/widget/config/basic/cards/entities-table-basic-config.component";
import * as i4 from "@home/components/widget/config/basic/cards/timeseries-table-basic-config.component";
import * as i5 from "@home/components/widget/config/basic/chart/flot-basic-config.component";
import * as i6 from "@home/components/widget/config/basic/alarm/alarms-table-basic-config.component";
import * as i7 from "@home/components/widget/config/basic/cards/value-card-basic-config.component";
import * as i8 from "@home/components/widget/config/basic/common/data-key-row.component";
import * as i9 from "@home/components/widget/config/basic/common/data-keys-panel.component";
import * as i10 from "@angular/common";
import * as i11 from "@shared/shared.module";
import * as i12 from "@home/components/widget/config/widget-config-components.module";
export declare class BasicWidgetConfigModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BasicWidgetConfigModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BasicWidgetConfigModule, [typeof i1.WidgetActionsPanelComponent, typeof i2.SimpleCardBasicConfigComponent, typeof i3.EntitiesTableBasicConfigComponent, typeof i4.TimeseriesTableBasicConfigComponent, typeof i5.FlotBasicConfigComponent, typeof i6.AlarmsTableBasicConfigComponent, typeof i7.ValueCardBasicConfigComponent, typeof i8.DataKeyRowComponent, typeof i9.DataKeysPanelComponent], [typeof i10.CommonModule, typeof i11.SharedModule, typeof i12.WidgetConfigComponentsModule], [typeof i1.WidgetActionsPanelComponent, typeof i2.SimpleCardBasicConfigComponent, typeof i3.EntitiesTableBasicConfigComponent, typeof i4.TimeseriesTableBasicConfigComponent, typeof i5.FlotBasicConfigComponent, typeof i6.AlarmsTableBasicConfigComponent, typeof i7.ValueCardBasicConfigComponent, typeof i8.DataKeyRowComponent, typeof i9.DataKeysPanelComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BasicWidgetConfigModule>;
}
export declare const basicWidgetConfigComponentsMap: {
    [key: string]: Type<IBasicWidgetConfigComponent>;
};
