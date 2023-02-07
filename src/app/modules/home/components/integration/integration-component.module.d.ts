import * as i0 from "@angular/core";
import * as i1 from "@home/components/integration/integration-type-select.component";
import * as i2 from "@home/components/integration/configuration/integration-configuration.component";
import * as i3 from "@home/components/integration/integration-credentials/integration-credentials.component";
import * as i4 from "@home/components/integration/mqtt-topic-filters/mqtt-topic-filters.component";
import * as i5 from "@home/components/integration/cert-upload/cert-upload.component";
import * as i6 from "@home/components/integration/configuration/mqtt-integration-form/mqtt-integration-form.component";
import * as i7 from "@home/components/integration/configuration/http-integration-form/http-integration-form.component";
import * as i8 from "@home/components/integration/configuration/http-integration-form/sigfox-integration-form.component";
import * as i9 from "@home/components/integration/configuration/ttn-tti-integration-form/ttn-integration-form.component";
import * as i10 from "@home/components/integration/configuration/ttn-tti-integration-form/tti-integration-form.component";
import * as i11 from "@home/components/integration/configuration/aws-iot-integration-form/aws-iot-integration-form.component";
import * as i12 from "@home/components/integration/configuration/http-integration-form/ocean-connect-integration-form.component";
import * as i13 from "@home/components/integration/configuration/http-integration-form/t-mobile-iot-integration-form.component";
import * as i14 from "@home/components/integration/configuration/opc-ua-integration-form/opc-ua-integration-form.component";
import * as i15 from "@home/components/integration/configuration/opc-ua-integration-form/opc-ua-mapping.component";
import * as i16 from "@home/components/integration/configuration/opc-ua-integration-form/opc-ua-subscription.component";
import * as i17 from "@home/components/integration/configuration/loriot-integration-form/loriot-integration-form.component";
import * as i18 from "@home/components/integration/configuration/chirp-stack-integration-form/chirp-stack-integration-form.component";
import * as i19 from "@home/components/integration/configuration/pubsub-integration-form/pubsub-integration-form.component";
import * as i20 from "@home/components/integration/configuration/apache-pulsar-integration-form/apache-pulsar-integration-form.component";
import * as i21 from "@home/components/integration/configuration/custom-integration-form/custom-integration-form.component";
import * as i22 from "@home/components/integration/configuration/aws-kinesis-integration-form/aws-kinesis-integration-form.component";
import * as i23 from "@home/components/integration/configuration/ibm-watson-iot-integration-form/ibm-watson-iot-integration-form.component";
import * as i24 from "@home/components/integration/configuration/aws-sqs-integration-form/aws-sqs-integration-form.component";
import * as i25 from "@home/components/integration/configuration/udp-integration-form/udp-integration-form.component";
import * as i26 from "@home/components/integration/configuration/azure-event-hub-integration-form/azure-event-hub-integration-form.component";
import * as i27 from "@home/components/integration/configuration/tcp-integration-form/tcp-integration-form.component";
import * as i28 from "@home/components/integration/configuration/coap-integration-form/coap-integration-form.component";
import * as i29 from "@home/components/integration/configuration/thing-park-integration-form/thing-park-integration-form.component";
import * as i30 from "@home/components/integration/configuration/thing-park-integration-form/thing-park-enterprise-integration-form.component";
import * as i31 from "@home/components/integration/configuration/kafka-integration-form/kafka-integration-form.component";
import * as i32 from "@home/components/integration/configuration/rabbit-mq-integration-form/rabbit-mq-integration-form.component";
import * as i33 from "@home/components/integration/configuration/azure-iot-hub-integration-form/azure-iot-hub-integration-form.component";
import * as i34 from "@home/components/integration/configuration/tuya-integration-form/tuya-integration-form.component";
import * as i35 from "@angular/common";
import * as i36 from "@shared/shared.module";
export declare class IntegrationComponentModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationComponentModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IntegrationComponentModule, [typeof i1.IntegrationTypeSelectComponent, typeof i2.IntegrationConfigurationComponent, typeof i3.IntegrationCredentialsComponent, typeof i4.MqttTopicFiltersComponent, typeof i5.CertUploadComponent, typeof i6.MqttIntegrationFormComponent, typeof i7.HttpIntegrationFormComponent, typeof i8.SigfoxIntegrationFormComponent, typeof i9.TtnIntegrationFormComponent, typeof i10.TtiIntegrationFormComponent, typeof i11.AwsIotIntegrationFormComponent, typeof i12.OceanConnectIntegrationFormComponent, typeof i13.TMobileIotIntegrationFormComponent, typeof i14.OpcUaIntegrationFormComponent, typeof i15.OpcUaMappingComponent, typeof i16.OpcUaSubscriptionComponent, typeof i17.LoriotIntegrationFormComponent, typeof i18.ChirpStackIntegrationFormComponent, typeof i19.PubSubIntegrationFormComponent, typeof i20.ApachePulsarIntegrationFormComponent, typeof i21.CustomIntegrationFormComponent, typeof i22.AwsKinesisIntegrationFormComponent, typeof i23.IbmWatsonIotIntegrationFormComponent, typeof i24.AwsSqsIntegrationFormComponent, typeof i25.UdpIntegrationFormComponent, typeof i26.AzureEventHubIntegrationFormComponent, typeof i27.TcpIntegrationFormComponent, typeof i28.CoapIntegrationFormComponent, typeof i29.ThingParkIntegrationFormComponent, typeof i30.ThingParkEnterpriseIntegrationFormComponent, typeof i31.KafkaIntegrationFormComponent, typeof i32.RabbitMqIntegrationFormComponent, typeof i33.AzureIotHubIntegrationFormComponent, typeof i34.TuyaIntegrationFormComponent], [typeof i35.CommonModule, typeof i36.SharedModule], [typeof i1.IntegrationTypeSelectComponent, typeof i2.IntegrationConfigurationComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IntegrationComponentModule>;
}
