import 'hammerjs';
import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { LocalStorageService } from '@core/local-storage/local-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { AuthService } from '@core/auth/auth.service';
import * as i0 from "@angular/core";
export declare class AppComponent implements OnInit {
    private store;
    private storageService;
    private translate;
    private matIconRegistry;
    private domSanitizer;
    private authService;
    constructor(store: Store<AppState>, storageService: LocalStorageService, translate: TranslateService, matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, authService: AuthService);
    setupTranslate(): void;
    setupAuth(): void;
    ngOnInit(): void;
    onActivateComponent($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppComponent, "tb-root", never, {}, {}, never, never>;
}
