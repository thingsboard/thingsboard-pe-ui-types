import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EdgeService } from '@core/http/edge.service';
import { Edge } from '@shared/models/edge.models';
import * as i0 from "@angular/core";
export declare class EdgeCreateDialogService {
    private dialog;
    private edgeService;
    constructor(dialog: MatDialog, edgeService: EdgeService);
    create(): Observable<Edge>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeCreateDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EdgeCreateDialogService>;
}
