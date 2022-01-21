import { Observable } from 'rxjs';
import { EntityType } from '@shared/models/entity-type.models';
import { HasUUID } from '@shared/models/id/has-uuid';
export declare type MenuSectionType = 'link' | 'toggle';
export interface MenuSection extends HasUUID {
    name: string;
    type: MenuSectionType;
    path: string;
    queryParams?: {
        [k: string]: any;
    };
    icon: string;
    iconUrl?: string;
    isMdiIcon?: boolean;
    asyncPages?: Observable<Array<MenuSection>>;
    pages?: Array<MenuSection>;
    disabled?: boolean;
    ignoreTranslate?: boolean;
    groupType?: EntityType;
    isCustom?: boolean;
    isNew?: boolean;
    stateId?: string;
    childStateIds?: {
        [stateId: string]: boolean;
    };
}
export interface HomeSection {
    name: string;
    places: Array<HomeSectionPlace>;
}
export interface HomeSectionPlace {
    name: string;
    icon: string;
    isMdiIcon?: boolean;
    path: string;
    disabled?: boolean;
}
