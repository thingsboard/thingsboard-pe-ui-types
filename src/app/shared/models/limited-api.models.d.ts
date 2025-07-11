export declare enum LimitedApi {
    ENTITY_EXPORT = "ENTITY_EXPORT",
    ENTITY_IMPORT = "ENTITY_IMPORT",
    NOTIFICATION_REQUESTS = "NOTIFICATION_REQUESTS",
    NOTIFICATION_REQUESTS_PER_RULE = "NOTIFICATION_REQUESTS_PER_RULE",
    REST_REQUESTS_PER_TENANT = "REST_REQUESTS_PER_TENANT",
    REST_REQUESTS_PER_CUSTOMER = "REST_REQUESTS_PER_CUSTOMER",
    WS_UPDATES_PER_SESSION = "WS_UPDATES_PER_SESSION",
    CASSANDRA_WRITE_QUERIES_CORE = "CASSANDRA_WRITE_QUERIES_CORE",
    CASSANDRA_READ_QUERIES_CORE = "CASSANDRA_READ_QUERIES_CORE",
    CASSANDRA_WRITE_QUERIES_RULE_ENGINE = "CASSANDRA_WRITE_QUERIES_RULE_ENGINE",
    CASSANDRA_READ_QUERIES_RULE_ENGINE = "CASSANDRA_READ_QUERIES_RULE_ENGINE",
    CASSANDRA_WRITE_QUERIES_MONOLITH = "CASSANDRA_WRITE_QUERIES_MONOLITH",
    CASSANDRA_READ_QUERIES_MONOLITH = "CASSANDRA_READ_QUERIES_MONOLITH",
    INTEGRATION_MSGS_PER_TENANT = "INTEGRATION_MSGS_PER_TENANT",
    INTEGRATION_MSGS_PER_DEVICE = "INTEGRATION_MSGS_PER_DEVICE",
    REPORTS = "REPORTS",
    TRANSPORT_MESSAGES_PER_TENANT = "TRANSPORT_MESSAGES_PER_TENANT",
    TRANSPORT_MESSAGES_PER_DEVICE = "TRANSPORT_MESSAGES_PER_DEVICE",
    TRANSPORT_MESSAGES_PER_GATEWAY = "TRANSPORT_MESSAGES_PER_GATEWAY",
    TRANSPORT_MESSAGES_PER_GATEWAY_DEVICE = "TRANSPORT_MESSAGES_PER_GATEWAY_DEVICE",
    EDGE_EVENTS = "EDGE_EVENTS",
    EDGE_EVENTS_PER_EDGE = "EDGE_EVENTS_PER_EDGE",
    EDGE_UPLINK_MESSAGES = "EDGE_UPLINK_MESSAGES",
    EDGE_UPLINK_MESSAGES_PER_EDGE = "EDGE_UPLINK_MESSAGES_PER_EDGE"
}
export declare const LimitedApiTranslationMap: Map<LimitedApi, string>;
