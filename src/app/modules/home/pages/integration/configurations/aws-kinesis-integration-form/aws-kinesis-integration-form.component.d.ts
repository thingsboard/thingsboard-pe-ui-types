import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import * as i0 from "@angular/core";
export declare class AwsKinesisIntegrationFormComponent extends IntegrationFormComponent {
    initialPositionInStreams: string[];
    constructor();
    protected onIntegrationFormSet(): void;
    onUseCredentialsFromInstanceMetadataChange(): void;
    onUseConsumersWithEnhancedFanOut(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AwsKinesisIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AwsKinesisIntegrationFormComponent, "tb-aws-kinesis-integration-form", never, {}, {}, never, never>;
}
