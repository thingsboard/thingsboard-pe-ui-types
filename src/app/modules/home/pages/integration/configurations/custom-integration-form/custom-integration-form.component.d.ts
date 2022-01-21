import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import { ContentType } from '@shared/models/constants';
import { JsonContentComponent } from '@shared/components/json-content.component';
import * as i0 from "@angular/core";
export declare class CustomIntegrationFormComponent extends IntegrationFormComponent {
    jsonContentComponent: JsonContentComponent;
    contentType: typeof ContentType;
    constructor();
    protected onIntegrationFormSet(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomIntegrationFormComponent, "tb-custom-integration-form", never, {}, {}, never, never>;
}
