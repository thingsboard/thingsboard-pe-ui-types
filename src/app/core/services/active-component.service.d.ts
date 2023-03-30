import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ActiveComponentService {
    private activeComponent;
    private activeComponentChangedSubject;
    getCurrentActiveComponent(): any;
    setCurrentActiveComponent(component: any): void;
    onActiveComponentChanged(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveComponentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActiveComponentService>;
}
