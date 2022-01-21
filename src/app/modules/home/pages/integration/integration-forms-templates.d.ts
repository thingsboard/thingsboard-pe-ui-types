import { CoapSecurityMode, IntegrationType, IntegrationTypeInfo } from '@shared/models/integration.models';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
export declare const handlerConfigurationTypes: {
    text: {
        value: string;
        name: string;
    };
    binary: {
        value: string;
        name: string;
    };
    json: {
        value: string;
        name: string;
    };
    hex: {
        value: string;
        name: string;
    };
};
export declare const tcpBinaryByteOrder: {
    littleEndian: {
        value: string;
    };
    bigEndian: {
        value: string;
    };
};
export declare const tcpTextMessageSeparator: {
    systemLineSeparator: {
        value: string;
    };
    nulDelimiter: {
        value: string;
    };
};
export declare const opcSecurityTypes: {
    Basic128Rsa15: string;
    Basic256: string;
    Basic256Sha256: string;
    None: string;
};
export declare type loriotCredentialType = 'basic' | 'token';
export declare const loriotCredentialTypes: {
    basic: {
        value: string;
        name: string;
    };
    token: {
        value: string;
        name: string;
    };
};
export declare type mqttCredentialType = 'anonymous' | 'basic' | 'cert.PEM';
export declare const mqttCredentialTypes: {
    anonymous: {
        value: string;
        name: string;
    };
    basic: {
        value: string;
        name: string;
    };
    'cert.PEM': {
        value: string;
        name: string;
    };
};
export declare type azureIotHubCredentialsType = 'sas' | 'cert.PEM';
export declare const azureIotHubCredentialsTypes: {
    sas: {
        value: string;
        name: string;
    };
    'cert.PEM': {
        value: string;
        name: string;
    };
};
export declare type apachePulsarCredentialsType = 'anonymous' | 'token';
export declare const apachePulsarCredentialsTypes: {
    anonymous: {
        value: string;
        name: string;
    };
    token: {
        value: string;
        name: string;
    };
};
export declare function updateIntegrationFormState(type: IntegrationType, info: IntegrationTypeInfo, integrationForm: FormGroup, disabled: boolean): void;
export declare function updateIntegrationFormDefaultFields(type: IntegrationType, integrationForm: FormGroup): void;
export declare function updateIntegrationFormValidators(integrationForm: FormGroup, fieldValidators?: {
    [key: string]: ValidatorFn | ValidatorFn[];
}): void;
export declare const templates: {
    http: {
        baseUrl: string;
        replaceNoContentToOk: string;
        enableSecurity: boolean;
        downlinkUrl: string;
        loriotDownlinkUrl: string;
        createLoriotOutput: boolean;
        sendDownlink: boolean;
        server: string;
        domain: string;
        appId: string;
        enableSecurityNew: boolean;
        asId: string;
        asIdNew: string;
        asKey: string;
        clientIdNew: string;
        clientSecret: string;
        maxTimeDiffInSeconds: number;
        httpEndpoint: string;
        headersFilter: {};
        ignoreNonPrimitiveFields: string[];
        token: string;
        credentials: {
            type: string;
            email: string;
            password: string;
            token: string;
        };
        fieldValidators: {
            baseUrl: (typeof Validators.required)[];
            asId: (typeof Validators.required)[];
            asIdNew: (typeof Validators.required)[];
            asKey: (typeof Validators.required)[];
            clientIdNew: (typeof Validators.required)[];
            clientSecret: (typeof Validators.required)[];
            maxTimeDiffInSeconds: ValidatorFn[];
            loriotDownlinkUrl: (typeof Validators.required)[];
            server: (typeof Validators.required)[];
            appId: (typeof Validators.required)[];
            token: (typeof Validators.required)[];
            'credentials.email': any[];
            'credentials.password': any[];
            'credentials.token': any[];
        };
    };
    COAP: {
        clientConfiguration: {
            baseUrl: string;
            dtlsBaseUrl: string;
            securityMode: CoapSecurityMode;
            coapEndpoint: string;
            dtlsCoapEndpoint: string;
        };
        ignoreNonPrimitiveFields: any[];
        fieldValidators: {
            'clientConfiguration.baseUrl': (typeof Validators.required)[];
            'clientConfiguration.dtlsBaseUrl': (typeof Validators.required)[];
            'clientConfiguration.securityMode': (typeof Validators.required)[];
        };
    };
    MQTT: {
        clientConfiguration: {
            host: string;
            port: number;
            cleanSession: boolean;
            ssl: boolean;
            connectTimeoutSec: number;
            clientId: string;
            maxBytesInMessage: number;
            credentials: {
                type: string;
                username: string;
                password: string;
                caCertFileName: string;
                caCert: string;
                certFileName: string;
                cert: string;
                privateKeyFileName: string;
                privateKey: string;
                privateKeyPassword: string;
            };
        };
        downlinkTopicPattern: string;
        topicFilters: any[];
        fieldValidators: {
            'clientConfiguration.host': (typeof Validators.required)[];
            'clientConfiguration.port': ValidatorFn[];
            'clientConfiguration.maxBytesInMessage': ValidatorFn[];
            'clientConfiguration.connectTimeoutSec': ValidatorFn[];
            'clientConfiguration.credentials.username': (typeof Validators.required)[];
            'clientConfiguration.credentials.password': (typeof Validators.required)[];
            'clientConfiguration.credentials.caCertFileName': (typeof Validators.required)[];
            'clientConfiguration.credentials.caCert': (typeof Validators.required)[];
            'clientConfiguration.credentials.certFileName': (typeof Validators.required)[];
            'clientConfiguration.credentials.cert': (typeof Validators.required)[];
            'clientConfiguration.credentials.privateKeyFileName': (typeof Validators.required)[];
            'clientConfiguration.credentials.privateKey': (typeof Validators.required)[];
            downlinkTopicPattern: (typeof Validators.required)[];
            topicFilters: (typeof Validators.required)[];
        };
    };
    AZURE_IOT_HUB: {
        clientConfiguration: {
            host: string;
            port: number;
            cleanSession: boolean;
            ssl: boolean;
            maxBytesInMessage: number;
            connectTimeoutSec: number;
            clientId: string;
            credentials: {
                type: string;
                sasKey: string;
                caCertFileName: string;
                caCert: string;
                certFileName: string;
                cert: string;
                privateKeyFileName: string;
                privateKey: string;
                privateKeyPassword: string;
            };
        };
        topicFilters: {
            filter: string;
            qos: number;
        }[];
        fieldValidators: {
            'clientConfiguration.host': (typeof Validators.required)[];
            'clientConfiguration.clientId': (typeof Validators.required)[];
            'clientConfiguration.maxBytesInMessage': ValidatorFn[];
            'clientConfiguration.credentials.sasKey': (typeof Validators.required)[];
            'clientConfiguration.credentials.certFileName': (typeof Validators.required)[];
            'clientConfiguration.credentials.cert': (typeof Validators.required)[];
            'clientConfiguration.credentials.privateKeyFileName': (typeof Validators.required)[];
            'clientConfiguration.credentials.privateKey': (typeof Validators.required)[];
            topicFilters: (typeof Validators.required)[];
        };
    };
    AWS_IOT: {
        clientConfiguration: {
            host: string;
            port: number;
            clientId: string;
            connectTimeoutSec: number;
            ssl: boolean;
            maxBytesInMessage: number;
            credentials: {
                type: string;
                caCertFileName: string;
                caCert: string;
                certFileName: string;
                cert: string;
                privateKeyFileName: string;
                privateKey: string;
                password: string;
            };
        };
        downlinkTopicPattern: string;
        topicFilters: any[];
        fieldValidators: {
            'clientConfiguration.host': (typeof Validators.required)[];
            'clientConfiguration.port': ValidatorFn[];
            'clientConfiguration.maxBytesInMessage': ValidatorFn[];
            'clientConfiguration.connectTimeoutSec': ValidatorFn[];
            'clientConfiguration.credentials.caCertFileName': (typeof Validators.required)[];
            'clientConfiguration.credentials.caCert': (typeof Validators.required)[];
            'clientConfiguration.credentials.certFileName': (typeof Validators.required)[];
            'clientConfiguration.credentials.cert': (typeof Validators.required)[];
            'clientConfiguration.credentials.privateKeyFileName': (typeof Validators.required)[];
            'clientConfiguration.credentials.privateKey': (typeof Validators.required)[];
            downlinkTopicPattern: (typeof Validators.required)[];
            topicFilters: (typeof Validators.required)[];
        };
    };
    AWS_SQS: {
        sqsConfiguration: {
            queueUrl: string;
            pollingPeriodSeconds: number;
            region: string;
            accessKeyId: string;
            secretAccessKey: string;
        };
        fieldValidators: {
            'sqsConfiguration.queueUrl': (typeof Validators.required)[];
            'sqsConfiguration.pollingPeriodSeconds': ValidatorFn[];
            'sqsConfiguration.region': (typeof Validators.required)[];
            'sqsConfiguration.accessKeyId': (typeof Validators.required)[];
            'sqsConfiguration.secretAccessKey': (typeof Validators.required)[];
        };
    };
    AWS_KINESIS: {
        clientConfiguration: {
            streamName: string;
            region: string;
            accessKeyId: string;
            secretAccessKey: string;
            useCredentialsFromInstanceMetadata: boolean;
            applicationName: string;
            initialPositionInStream: string;
            useConsumersWithEnhancedFanOut: boolean;
            maxRecords: number;
            requestTimeout: number;
        };
        fieldValidators: {
            'clientConfiguration.streamName': (typeof Validators.required)[];
            'clientConfiguration.region': (typeof Validators.required)[];
            'clientConfiguration.accessKeyId': (typeof Validators.required)[];
            'clientConfiguration.secretAccessKey': (typeof Validators.required)[];
            'clientConfiguration.initialPositionInStream': (typeof Validators.required)[];
            'clientConfiguration.maxRecords': ValidatorFn[];
            'clientConfiguration.requestTimeout': (typeof Validators.required)[];
        };
    };
    IBM_WATSON_IOT: {
        clientConfiguration: {
            connectTimeoutSec: number;
            host: string;
            port: number;
            ssl: boolean;
            maxBytesInMessage: number;
            cleanSession: boolean;
            credentials: {
                type: string;
                username: string;
                password: string;
            };
        };
        topicFilters: {
            filter: string;
            qos: number;
        }[];
        downlinkTopicPattern: string;
        fieldValidators: {
            'clientConfiguration.connectTimeoutSec': ValidatorFn[];
            'clientConfiguration.credentials.username': ValidatorFn[];
            'clientConfiguration.credentials.password': (typeof Validators.required)[];
            'clientConfiguration.maxBytesInMessage': ValidatorFn[];
            downlinkTopicPattern: (typeof Validators.required)[];
            topicFilters: (typeof Validators.required)[];
        };
    };
    CHIRPSTACK: {
        clientConfiguration: {
            baseUrl: string;
            applicationServerUrl: string;
            replaceNoContentToOk: boolean;
            applicationServerAPIToken: string;
            httpEndpoint: string;
        };
        fieldValidators: {
            'clientConfiguration.baseUrl': (typeof Validators.required)[];
            'clientConfiguration.applicationServerAPIToken': (typeof Validators.required)[];
        };
    };
    TTN: {
        clientConfiguration: {
            host: string;
            customHost: boolean;
            port: number;
            ssl: boolean;
            maxBytesInMessage: number;
            connectTimeoutSec: number;
            credentials: {
                type: string;
                username: string;
                password: string;
            };
            apiVersion: boolean;
        };
        topicFilters: {
            filter: string;
            qos: number;
        }[];
        downlinkTopicPattern: string;
        fieldValidators: {
            'clientConfiguration.host': (typeof Validators.required)[];
            'clientConfiguration.connectTimeoutSec': ValidatorFn[];
            'clientConfiguration.credentials.username': (typeof Validators.required)[];
            'clientConfiguration.credentials.password': (typeof Validators.required)[];
            'clientConfiguration.maxBytesInMessage': ValidatorFn[];
            downlinkTopicPattern: (typeof Validators.required)[];
            topicFilters: (typeof Validators.required)[];
        };
    };
    TTI: {
        clientConfiguration: {
            host: string;
            customHost: boolean;
            port: number;
            ssl: boolean;
            connectTimeoutSec: number;
            maxBytesInMessage: number;
            credentials: {
                type: string;
                username: string;
                password: string;
            };
        };
        topicFilters: {
            filter: string;
            qos: number;
        }[];
        downlinkTopicPattern: string;
        fieldValidators: {
            'clientConfiguration.host': (typeof Validators.required)[];
            'clientConfiguration.connectTimeoutSec': ValidatorFn[];
            'clientConfiguration.maxBytesInMessage': ValidatorFn[];
            'clientConfiguration.credentials.username': (typeof Validators.required)[];
            'clientConfiguration.credentials.password': (typeof Validators.required)[];
            downlinkTopicPattern: (typeof Validators.required)[];
            topicFilters: (typeof Validators.required)[];
        };
    };
    AZURE_EVENT_HUB: {
        clientConfiguration: {
            connectTimeoutSec: number;
            connectionString: string;
            consumerGroup: string;
            iotHubName: string;
        };
        fieldValidators: {
            'clientConfiguration.connectTimeoutSec': ValidatorFn[];
            'clientConfiguration.connectionString': (typeof Validators.required)[];
        };
    };
    OPC_UA: {
        clientConfiguration: {
            applicationName: string;
            applicationUri: string;
            host: string;
            port: number;
            scanPeriodInSeconds: number;
            timeoutInMillis: number;
            security: string;
            identity: {
                password: string;
                username: string;
                type: string;
            };
            mapping: any[];
            keystore: {
                location: string;
                type: string;
                fileContent: string;
                password: string;
                alias: string;
                keyPassword: string;
            };
        };
        fieldValidators: {
            'clientConfiguration.host': (typeof Validators.required)[];
            'clientConfiguration.port': ValidatorFn[];
            'clientConfiguration.scanPeriodInSeconds': (typeof Validators.required)[];
            'clientConfiguration.timeoutInMillis': (typeof Validators.required)[];
            'clientConfiguration.security': (typeof Validators.required)[];
            'clientConfiguration.identity.type': (typeof Validators.required)[];
            'clientConfiguration.identity.username': (typeof Validators.required)[];
            'clientConfiguration.identity.password': (typeof Validators.required)[];
            'clientConfiguration.mapping': (typeof Validators.required)[];
            'clientConfiguration.keystore.type': (typeof Validators.required)[];
            'clientConfiguration.keystore.location': (typeof Validators.required)[];
            'clientConfiguration.keystore.fileContent': (typeof Validators.required)[];
            'clientConfiguration.keystore.password': (typeof Validators.required)[];
            'clientConfiguration.keystore.alias': (typeof Validators.required)[];
            'clientConfiguration.keystore.keyPassword': (typeof Validators.required)[];
        };
    };
    UDP: {
        clientConfiguration: {
            port: number;
            soBroadcast: boolean;
            soRcvBuf: number;
            cacheSize: number;
            timeToLiveInMinutes: number;
            handlerConfiguration: {
                handlerType: string;
                charsetName: string;
                maxFrameLength: number;
            };
        };
        fieldValidators: {
            'clientConfiguration.port': ValidatorFn[];
            'clientConfiguration.soRcvBuf': ValidatorFn[];
            'clientConfiguration.handlerConfiguration.handlerType': (typeof Validators.required)[];
            'clientConfiguration.handlerConfiguration.charsetName': (typeof Validators.required)[];
            'clientConfiguration.handlerConfiguration.maxFrameLength': ValidatorFn[];
            'clientConfiguration.cacheSize': ValidatorFn[];
            'clientConfiguration.timeToLiveInMinutes': ValidatorFn[];
        };
    };
    TCP: {
        clientConfiguration: {
            port: number;
            soBacklogOption: number;
            soRcvBuf: number;
            soSndBuf: number;
            soKeepaliveOption: boolean;
            tcpNoDelay: boolean;
            cacheSize: number;
            timeToLiveInMinutes: number;
            handlerConfiguration: {
                handlerType: string;
                byteOrder: string;
                maxFrameLength: number;
                lengthFieldOffset: number;
                lengthFieldLength: number;
                lengthAdjustment: number;
                initialBytesToStrip: number;
                failFast: boolean;
                stripDelimiter: boolean;
                messageSeparator: string;
            };
        };
        fieldValidators: {
            'clientConfiguration.port': ValidatorFn[];
            'clientConfiguration.soBacklogOption': ValidatorFn[];
            'clientConfiguration.soRcvBuf': ValidatorFn[];
            'clientConfiguration.soSndBuf': ValidatorFn[];
            'clientConfiguration.handlerConfiguration.handlerType': (typeof Validators.required)[];
            'clientConfiguration.handlerConfiguration.maxFrameLength': ValidatorFn[];
            'clientConfiguration.handlerConfiguration.lengthFieldOffset': ValidatorFn[];
            'clientConfiguration.handlerConfiguration.lengthFieldLength': ValidatorFn[];
            'clientConfiguration.handlerConfiguration.lengthAdjustment': ValidatorFn[];
            'clientConfiguration.handlerConfiguration.initialBytesToStrip': ValidatorFn[];
            'clientConfiguration.cacheSize': ValidatorFn[];
            'clientConfiguration.timeToLiveInMinutes': ValidatorFn[];
        };
    };
    KAFKA: {
        clientConfiguration: {
            groupId: string;
            clientId: string;
            topics: string;
            bootstrapServers: string;
            pollInterval: number;
            autoCreateTopics: boolean;
            otherProperties: any;
        };
        ignoreNonPrimitiveFields: string[];
        fieldValidators: {
            'clientConfiguration.groupId': (typeof Validators.required)[];
            'clientConfiguration.clientId': (typeof Validators.required)[];
            'clientConfiguration.topics': (typeof Validators.required)[];
            'clientConfiguration.bootstrapServers': (typeof Validators.required)[];
            'clientConfiguration.pollInterval': (typeof Validators.required)[];
        };
    };
    RABBITMQ: {
        clientConfiguration: {
            exchangeName: string;
            host: string;
            port: number;
            virtualHost: string;
            username: string;
            password: string;
            downlinkTopic: string;
            queues: string;
            routingKeys: string;
            connectionTimeout: number;
            handshakeTimeout: number;
            pollPeriod: number;
            durable: boolean;
            exclusive: boolean;
            autoDelete: boolean;
        };
        fieldValidators: {
            'clientConfiguration.host': (typeof Validators.required)[];
            'clientConfiguration.port': ValidatorFn[];
            'clientConfiguration.queues': (typeof Validators.required)[];
            'clientConfiguration.connectionTimeout': ValidatorFn[];
            'clientConfiguration.handshakeTimeout': ValidatorFn[];
            'clientConfiguration.pollPeriod': ValidatorFn[];
        };
    };
    APACHE_PULSAR: {
        clientConfiguration: {
            serviceUrl: string;
            topics: string;
            subscriptionName: string;
            maxNumMessages: number;
            maxNumBytes: number;
            timeoutInMs: number;
            credentials: {
                type: string;
                token: string;
            };
        };
        fieldValidators: {
            'clientConfiguration.serviceUrl': (typeof Validators.required)[];
            'clientConfiguration.topics': (typeof Validators.required)[];
            'clientConfiguration.subscriptionName': (typeof Validators.required)[];
            'clientConfiguration.maxNumMessages': (typeof Validators.required)[];
            'clientConfiguration.maxNumBytes': (typeof Validators.required)[];
            'clientConfiguration.timeoutInMs': (typeof Validators.required)[];
        };
    };
    PUB_SUB: {
        clientConfiguration: {
            projectId: string;
            subscriptionId: string;
            serviceAccountKey: string;
            serviceAccountKeyFileName: string;
        };
        fieldValidators: {
            'clientConfiguration.projectId': (typeof Validators.required)[];
            'clientConfiguration.subscriptionId': (typeof Validators.required)[];
            'clientConfiguration.serviceAccountKey': (typeof Validators.required)[];
            'clientConfiguration.serviceAccountKeyFileName': (typeof Validators.required)[];
        };
    };
    CUSTOM: {
        clazz: string;
        configuration: string;
        fieldValidators: {
            clazz: (typeof Validators.required)[];
        };
    };
};
export declare const opcUaMappingType: {
    ID: string;
    FQN: string;
};
export declare const extensionKeystoreType: {
    PKCS12: string;
    JKS: string;
};
export declare enum InitialPositionInStream {
    LATEST = "LATEST",
    TRIM_HORIZON = "TRIM_HORIZON",
    AT_TIMESTAMP = "AT_TIMESTAMP"
}
export declare const identityType: {
    anonymous: string;
    username: string;
};
export declare const mqttQoSTypes: {
    value: number;
    name: string;
}[];
