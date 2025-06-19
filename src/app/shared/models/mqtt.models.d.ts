export declare enum MqttVersion {
    MQTT_3_1 = "MQTT_3_1",
    MQTT_3_1_1 = "MQTT_3_1_1",
    MQTT_5 = "MQTT_5"
}
export declare const DEFAULT_MQTT_VERSION = MqttVersion.MQTT_3_1_1;
export declare const MqttVersionTranslation: Map<MqttVersion, string>;
