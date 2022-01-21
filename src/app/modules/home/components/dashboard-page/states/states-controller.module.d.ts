import { StatesControllerService } from '@home/components/dashboard-page/states/states-controller.service';
import * as i0 from "@angular/core";
import * as i1 from "@home/components/dashboard-page/states/states-component.directive";
import * as i2 from "@home/components/dashboard-page/states/default-state-controller.component";
import * as i3 from "@home/components/dashboard-page/states/entity-state-controller.component";
import * as i4 from "@angular/common";
import * as i5 from "@shared/shared.module";
import * as i6 from "@app/modules/home/dialogs/home-dialogs.module";
export declare class StatesControllerModule {
    private statesControllerService;
    constructor(statesControllerService: StatesControllerService);
    static ɵfac: i0.ɵɵFactoryDeclaration<StatesControllerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<StatesControllerModule, [typeof i1.StatesComponentDirective, typeof i2.DefaultStateControllerComponent, typeof i3.EntityStateControllerComponent], [typeof i4.CommonModule, typeof i5.SharedModule, typeof i6.HomeDialogsModule], [typeof i1.StatesComponentDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<StatesControllerModule>;
}
