import { MatDialog } from '@angular/material/dialog';
import { EntityType } from '@shared/models/entity-type.models';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class HomeDialogsService {
    private dialog;
    constructor(dialog: MatDialog);
    importEntities(entityType: EntityType): Observable<boolean>;
    private openImportDialogCSV;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeDialogsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HomeDialogsService>;
}
