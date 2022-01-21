import { ComponentFactory, ComponentFactoryResolver, Type } from '@angular/core';
import { IStateControllerComponent } from '@home/components/dashboard-page/states/state-controller.models';
import * as i0 from "@angular/core";
export interface StateControllerData {
    factory: ComponentFactory<IStateControllerComponent>;
}
export declare class StatesControllerService {
    private componentFactoryResolver;
    statesControllers: {
        [stateControllerId: string]: StateControllerData;
    };
    statesControllerStates: {
        [stateControllerInstanceId: string]: any;
    };
    constructor(componentFactoryResolver: ComponentFactoryResolver);
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
