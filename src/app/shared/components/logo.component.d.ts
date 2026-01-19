import { OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { AppState } from '@core/core.state';
import { Store } from '@ngrx/store';
import { UrlTree } from '@angular/router';
import { UrlHolder } from '@shared/pipe/image.pipe';
import * as i0 from "@angular/core";
export declare class LogoComponent implements OnInit {
    private authService;
    private store;
    src: string | UrlHolder;
    link: string | UrlTree;
    target: string;
    isExternal: boolean;
    constructor(authService: AuthService, store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LogoComponent, "tb-logo", never, { "src": { "alias": "src"; "required": false; }; "link": { "alias": "link"; "required": false; }; "target": { "alias": "target"; "required": false; }; }, {}, never, never, false, never>;
}
