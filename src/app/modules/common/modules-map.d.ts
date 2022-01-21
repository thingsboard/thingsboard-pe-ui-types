import { IModulesMap } from '@modules/common/modules-map.models';
declare class ModulesMap implements IModulesMap {
    private initialized;
    private modulesMap;
    init(): void;
}
export declare const modulesMap: ModulesMap;
export {};
