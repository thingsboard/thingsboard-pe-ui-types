import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { AwsKinesisIntegration, InitialPositionInStream } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class AwsKinesisIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    awsKinesisConfigForm: UntypedFormGroup;
    initialPositionInStreams: string[];
    InitialPositionInStreamTranslation: Map<InitialPositionInStream, string>;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(value: AwsKinesisIntegration): void;
    private updateUsedMetadata;
    private updateEnhancedFanOut;
    private updateModels;
    static ɵfac: i0.ɵɵFactoryDeclaration<AwsKinesisIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AwsKinesisIntegrationFormComponent, "tb-aws-kinesis-integration-form", never, {}, {}, never, never, false, never>;
}
