import { OnDestroy } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class DialogComponent<T, R = any> extends PageComponent implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<T, R>;
    routerSubscription: Subscription;
    protected constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<T, R>);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogComponent<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DialogComponent<any, any>, never, never, {}, {}, never, never, false, never>;
}
