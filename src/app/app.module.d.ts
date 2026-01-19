import { UrlSerializer, UrlTree } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./app.component";
import * as i3 from "@angular/platform-browser";
import * as i4 from "@angular/platform-browser/animations";
import * as i5 from "./app-routing.module";
import * as i6 from "@core/core.module";
import * as i7 from "@modules/login/login.module";
import * as i8 from "@modules/signup/signup.module";
import * as i9 from "@home/home.module";
import * as i10 from "@modules/dashboard/dashboard-routing.module";
import * as i11 from "@modules/empty-page/empty-page.module";
import * as i12 from "@modules/action/action.module";
export default class TbUrlSerializer implements UrlSerializer {
    private _defaultUrlSerializer;
    parse(url: string): UrlTree;
    serialize(tree: UrlTree): string;
}
export declare class PageNotFoundRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PageNotFoundRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PageNotFoundRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PageNotFoundRoutingModule>;
}
export declare class AppModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AppModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AppModule, [typeof i2.AppComponent], [typeof i3.BrowserModule, typeof i4.BrowserAnimationsModule, typeof i5.AppRoutingModule, typeof i6.CoreModule, typeof i7.LoginModule, typeof i8.SignupModule, typeof i9.HomeModule, typeof i10.DashboardRoutingModule, typeof i11.EmptyPageModule, typeof i12.ActionModule, typeof PageNotFoundRoutingModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AppModule>;
}
