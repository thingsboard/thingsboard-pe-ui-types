import { HasUUID } from '@shared/models/id/has-uuid';
export declare type MenuSectionType = 'link' | 'toggle';
export interface MenuSection extends HasUUID {
    name: string;
    type: MenuSectionType;
    path: string;
    icon: string;
    isMdiIcon?: boolean;
    height?: string;
    pages?: Array<MenuSection>;
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
}
