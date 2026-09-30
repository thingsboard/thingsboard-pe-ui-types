import { EventEmitter } from '@angular/core';
import { ActiveComponentService } from '@core/services/active-component.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class HomeService {
    private activeComponentService;
    private hideMainToolbarSubject;
    private hideLoadingBarSubject;
    get hideMainToolbar$(): Observable<boolean>;
    get hideLoadingBar$(): Observable<boolean>;
    toggleSideBar: EventEmitter<void>;
    constructor(activeComponentService: ActiveComponentService);
    setHideMainToolbar(hide: boolean): void;
    private activeComponentChanged;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HomeService>;
}
