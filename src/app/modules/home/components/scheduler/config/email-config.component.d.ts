import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { PageComponent } from '@shared/components/page.component';
import * as i0 from "@angular/core";
interface EmailConfig {
    from: string;
    to: string;
    cc?: string;
    bcc?: string;
    subject: string;
    body: string;
}
export declare class EmailConfigComponent extends PageComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    private fb;
    modelValue: EmailConfig | null;
    emailConfigFormGroup: UntypedFormGroup;
    disabled: boolean;
    authUser: import("../../../../../shared/public-api").AuthUser;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    private checkModel;
    writeValue(value: EmailConfig | null): void;
    private createDefaultEmailConfig;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailConfigComponent, "tb-email-config", never, { "disabled": "disabled"; }, {}, never, never, false, never>;
}
export {};
