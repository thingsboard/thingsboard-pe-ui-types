import * as i0 from "@angular/core";
import * as i1 from "./security.component";
import * as i2 from "./authentication-dialog/totp-auth-dialog.component";
import * as i3 from "@home/pages/security/authentication-dialog/sms-auth-dialog.component";
import * as i4 from "@home/pages/security/authentication-dialog/email-auth-dialog.component";
import * as i5 from "@home/pages/security/authentication-dialog/backup-code-auth-dialog.component";
import * as i6 from "@angular/common";
import * as i7 from "@shared/shared.module";
import * as i8 from "./security-routing.module";
export declare class SecurityModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SecurityModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SecurityModule, [typeof i1.SecurityComponent, typeof i2.TotpAuthDialogComponent, typeof i3.SMSAuthDialogComponent, typeof i4.EmailAuthDialogComponent, typeof i5.BackupCodeAuthDialogComponent], [typeof i6.CommonModule, typeof i7.SharedModule, typeof i8.SecurityRoutingModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SecurityModule>;
}
