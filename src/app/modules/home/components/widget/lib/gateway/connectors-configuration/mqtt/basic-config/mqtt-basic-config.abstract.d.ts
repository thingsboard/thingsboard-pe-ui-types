import { FormGroup } from '@angular/forms';
import { BrokerConfig, MappingType, MQTTBasicConfig, MQTTBasicConfig_v3_5_2, RequestMappingData, RequestMappingValue, RequestType, WorkersConfig } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { GatewayConnectorBasicConfigDirective } from '@home/components/widget/lib/gateway/abstract/gateway-connector-basic-config.abstract';
import * as i0 from "@angular/core";
export declare abstract class MqttBasicConfigDirective<BasicConfig> extends GatewayConnectorBasicConfigDirective<MQTTBasicConfig_v3_5_2, BasicConfig> {
    MappingType: typeof MappingType;
    protected initBasicFormGroup(): FormGroup;
    protected getRequestDataArray(value: Record<RequestType, RequestMappingData[]>): RequestMappingData[];
    protected getRequestDataObject(array: RequestMappingValue[]): Record<RequestType, RequestMappingValue[]>;
    protected getBrokerMappedValue(broker: BrokerConfig, workers: WorkersConfig): BrokerConfig;
    writeValue(basicConfig: BasicConfig): void;
    protected abstract mapConfigToFormValue(config: BasicConfig): MQTTBasicConfig_v3_5_2;
    protected abstract getMappedValue(config: MQTTBasicConfig): BasicConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttBasicConfigDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MqttBasicConfigDirective<any>, never, never, {}, {}, never, never, false, never>;
}
