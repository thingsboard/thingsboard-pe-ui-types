import { IModulesMap } from '@modules/common/modules-map.models';
import { Observable } from 'rxjs';
declare class ModulesMap implements IModulesMap {
    private initialized;
    private modulesMap;
    init(): Observable<any>;
}
export declare const modulesMap: ModulesMap;
export {};
