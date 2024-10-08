import { OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class RemoveOtherEntitiesConfirmComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private translate;
    private sanitizer;
    private fb;
    onClose: (result: boolean | null) => void;
    confirmFormGroup: UntypedFormGroup;
    removeOtherEntitiesConfirmText: SafeHtml;
    removeOtherEntitiesVerificationText: string;
    constructor(store: Store<AppState>, translate: TranslateService, sanitizer: DomSanitizer, fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RemoveOtherEntitiesConfirmComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RemoveOtherEntitiesConfirmComponent, "tb-remove-other-entities-confirm", never, { "onClose": { "alias": "onClose"; "required": false; }; }, {}, never, never, false, never>;
}
