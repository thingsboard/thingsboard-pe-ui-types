import { OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class RemoveOtherEntitiesConfirmComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private translate;
    private sanitizer;
    private fb;
    onClose: (result: boolean | null) => void;
    confirmFormGroup: FormGroup;
    removeOtherEntitiesConfirmText: SafeHtml;
    removeOtherEntitiesVerificationText: string;
    constructor(store: Store<AppState>, translate: TranslateService, sanitizer: DomSanitizer, fb: FormBuilder);
    ngOnInit(): void;
    cancel(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RemoveOtherEntitiesConfirmComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RemoveOtherEntitiesConfirmComponent, "tb-remove-other-entities-confirm", never, { "onClose": "onClose"; }, {}, never, never>;
}
