import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@core/auth/auth.service';
import * as i0 from "@angular/core";
export declare class DialogService {
    private translate;
    private authService;
    dialog: MatDialog;
    constructor(translate: TranslateService, authService: AuthService, dialog: MatDialog);
    confirm(title: string, message: string, cancel?: string, ok?: string, fullscreen?: boolean): Observable<boolean>;
    alert(title: string, message: string, ok?: string, fullscreen?: boolean): Observable<boolean>;
    colorPicker(color: string, useThemePalette?: boolean): Observable<string>;
    materialIconPicker(icon: string): Observable<string>;
    permissionDenied(): void;
    forbidden(): Observable<boolean>;
    progress<T>(progressObservable: Observable<T>, progressText: string): Observable<T>;
    todo(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DialogService>;
}
