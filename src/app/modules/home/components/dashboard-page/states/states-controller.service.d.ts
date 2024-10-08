import { Type } from '@angular/core';
import { IStateControllerComponent } from '@home/components/dashboard-page/states/state-controller.models';
import * as i0 from "@angular/core";
export interface StateControllerData {
    component: Type<IStateControllerComponent>;
}
export declare class StatesControllerService {
    statesControllers: {
        [stateControllerId: string]: StateControllerData;
    };
    statesControllerStates: {
        [stateControllerInstanceId: string]: any;
    };
    constructor();
    registerStatesController(stateControllerId: string, stateControllerComponent: Type<IStateControllerComponent>): void;
    getStateControllers(): {
        [stateControllerId: string]: StateControllerData;
    };
    getStateController(stateControllerId: string): StateControllerData;
    preserveStateControllerState(stateControllerInstanceId: string, state: any): void;
    withdrawStateControllerState(stateControllerInstanceId: string): any;
    cleanupPreservedStates(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatesControllerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StatesControllerService>;
}
