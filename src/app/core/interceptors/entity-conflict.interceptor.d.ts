import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { HasId } from '@shared/models/base-data';
import { HasVersion } from '@shared/models/entity.models';
import * as i0 from "@angular/core";
export declare class EntityConflictInterceptor implements HttpInterceptor {
    private dialog;
    constructor(dialog: MatDialog);
    intercept(request: HttpRequest<unknown & HasId & HasVersion>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    private handleConflictError;
    private updateRequestVersion;
    private openConflictDialog;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityConflictInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityConflictInterceptor>;
}
