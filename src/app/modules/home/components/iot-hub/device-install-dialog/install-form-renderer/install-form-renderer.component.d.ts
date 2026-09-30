import { OnChanges, SimpleChanges } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormFieldDefinition, FormFieldType } from '@shared/models/iot-hub/device-package.models';
import * as i0 from "@angular/core";
/**
 * Reusable form renderer for the device install dialog's SHOW_FORM step. Consumes
 * the FormFieldDefinition[] parsed from the package's form.json directly — both
 * device-side and integration-side fields are merged into a single combined form
 * by the package author at export time.
 *
 * The renderer is presentation-only. The caller owns the FormGroup and supplies
 * the FormFieldDefinition[] array. Optional resolveImagePath callback maps
 * relative help-image paths to data URIs (the dialog supplies it from the parsed
 * package ZIP).
 */
export declare class InstallFormRendererComponent implements OnChanges {
    fields: FormFieldDefinition[];
    formGroup: UntypedFormGroup;
    resolveImagePath?: (path: string) => string;
    /** When true, PASSWORD inputs render unmasked by default (used by review mode). */
    reviewMode: boolean;
    passwordVisible: Record<string, boolean>;
    ngOnChanges(changes: SimpleChanges): void;
    readonly FormFieldType: typeof FormFieldType;
    /** Render this field via the Secret picker widget (tb-secret-key-input). The picker
     *  itself accepts both plaintext and Secret references, so secretSupport=true means
     *  "this field MAY hold a Secret reference and the picker UI should be shown". */
    isSecretWidget(field: FormFieldDefinition): boolean;
    /** True when the previous field belonged to a different group (for header rendering). */
    shouldRenderGroupHeader(field: FormFieldDefinition, index: number): boolean;
    togglePasswordVisible(key: string): void;
    regenerate(field: FormFieldDefinition): void;
    getPatternErrorMessage(field: FormFieldDefinition): string;
    imagePath(path: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<InstallFormRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InstallFormRendererComponent, "tb-install-form-renderer", never, { "fields": { "alias": "fields"; "required": false; }; "formGroup": { "alias": "formGroup"; "required": false; }; "resolveImagePath": { "alias": "resolveImagePath"; "required": false; }; "reviewMode": { "alias": "reviewMode"; "required": false; }; }, {}, never, never, false, never>;
}
