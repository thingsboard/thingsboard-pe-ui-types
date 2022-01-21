import { FormGroup } from '@angular/forms';
import { apachePulsarCredentialsType, azureIotHubCredentialsType, mqttCredentialType } from '@home/pages/integration/integration-forms-templates';
export declare function changeRequiredCredentialsFields(form: FormGroup, credentialType: mqttCredentialType): void;
export declare function changeRequiredAzureCredentialsFields(form: FormGroup, credentialType: azureIotHubCredentialsType): void;
export declare function changeRequiredApachePulsarCredentialsFields(form: FormGroup, credentialType: apachePulsarCredentialsType): void;
export declare function disableFields(form: FormGroup, fields: string[], clear?: boolean): void;
export declare function enableFields(form: FormGroup, fields: string[]): void;
