import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Observable, Subscription } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { Operation, Resource } from '@shared/models/security.models';
import * as i0 from "@angular/core";
export declare abstract class PageComponent implements OnDestroy {
    protected store: Store<AppState>;
    isLoading$: Observable<boolean>;
    loadingSubscription: Subscription;
    disabledOnLoadFormControls: Array<AbstractControl>;
    resource: typeof Resource;
    operation: typeof Operation;
    protected constructor(store: Store<AppState>);
    protected registerDisableOnLoadFormControl(control: AbstractControl): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PageComponent, never, never, {}, {}, never, never, false, never>;
}
