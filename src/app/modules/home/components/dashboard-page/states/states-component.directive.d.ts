import { ComponentRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { DashboardState } from '@shared/models/dashboard.models';
import { IDashboardController } from '@home/components/dashboard-page/dashboard-page.models';
import { StatesControllerService } from '@home/components/dashboard-page/states/states-controller.service';
import { IStateControllerComponent } from '@home/components/dashboard-page/states/state-controller.models';
import * as i0 from "@angular/core";
export declare class StatesComponentDirective implements OnInit, OnDestroy, OnChanges {
    private viewContainerRef;
    private statesControllerService;
    statesControllerId: string;
    dashboardCtrl: IDashboardController;
    dashboardId: string;
    states: {
        [id: string]: DashboardState;
    };
    state: string;
    currentState: string;
    syncStateWithQueryParam: boolean;
    isMobile: boolean;
    stateControllerComponentRef: ComponentRef<IStateControllerComponent>;
    stateControllerComponent: IStateControllerComponent;
    private stateChangedSubject;
    private stateIdSubject;
    constructor(viewContainerRef: ViewContainerRef, statesControllerService: StatesControllerService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private reInit;
    private init;
    private destroy;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatesComponentDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StatesComponentDirective, "tb-states-component", never, { "statesControllerId": { "alias": "statesControllerId"; "required": false; }; "dashboardCtrl": { "alias": "dashboardCtrl"; "required": false; }; "dashboardId": { "alias": "dashboardId"; "required": false; }; "states": { "alias": "states"; "required": false; }; "state": { "alias": "state"; "required": false; }; "currentState": { "alias": "currentState"; "required": false; }; "syncStateWithQueryParam": { "alias": "syncStateWithQueryParam"; "required": false; }; "isMobile": { "alias": "isMobile"; "required": false; }; }, {}, never, never, false, never>;
}
