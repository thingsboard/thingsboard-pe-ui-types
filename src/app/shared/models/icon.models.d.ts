import { ResourcesService } from '@core/services/resources.service';
import { Observable } from 'rxjs';
export interface MaterialIcon {
    name: string;
    displayName?: string;
    tags: string[];
}
export declare const iconByName: (icons: Array<MaterialIcon>, name: string) => MaterialIcon;
export declare const getMaterialIcons: (resourcesService: ResourcesService, chunkSize: number, all: boolean, searchText: string) => Observable<MaterialIcon[][]>;
