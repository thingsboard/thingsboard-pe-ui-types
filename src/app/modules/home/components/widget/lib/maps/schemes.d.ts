import { JsonSettingsSchema } from '@shared/models/widget.models';
export declare const googleMapSettingsSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            gmApiKey: {
                title: string;
                type: string;
                default: string;
            };
            gmDefaultMapType: {
                title: string;
                type: string;
                default: string;
            };
        };
        required: any[];
    };
    form: (string | {
        key: string;
        type: string;
        multiple: boolean;
        items: {
            value: string;
            label: string;
        }[];
    })[];
};
export declare const tencentMapSettingsSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            tmApiKey: {
                title: string;
                type: string;
                default: string;
            };
            tmDefaultMapType: {
                title: string;
                type: string;
                default: string;
            };
        };
        required: any[];
    };
    form: (string | {
        key: string;
        type: string;
        multiple: boolean;
        items: {
            value: string;
            label: string;
        }[];
    })[];
};
export declare const hereMapSettingsSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            mapProviderHere: {
                title: string;
                type: string;
                default: string;
            };
            credentials: {
                type: string;
                title: string;
                properties: {
                    app_id: {
                        title: string;
                        type: string;
                        default: string;
                    };
                    app_code: {
                        title: string;
                        type: string;
                        default: string;
                    };
                };
                required: string[];
            };
        };
        required: any[];
    };
    form: (string | {
        key: string;
        type: string;
        multiple: boolean;
        items: {
            value: string;
            label: string;
        }[];
    })[];
};
export declare const openstreetMapSettingsSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            mapProvider: {
                title: string;
                type: string;
                default: string;
            };
            useCustomProvider: {
                title: string;
                type: string;
                default: boolean;
            };
            customProviderTileUrl: {
                title: string;
                type: string;
                default: string;
            };
        };
        required: any[];
    };
    form: (string | {
        key: string;
        type: string;
        multiple: boolean;
        items: {
            value: string;
            label: string;
        }[];
        condition?: undefined;
    } | {
        key: string;
        condition: string;
        type?: undefined;
        multiple?: undefined;
        items?: undefined;
    })[];
};
export declare const commonMapSettingsSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            defaultZoomLevel: {
                title: string;
                type: string;
            };
            useDefaultCenterPosition: {
                title: string;
                type: string;
                default: boolean;
            };
            mapPageSize: {
                title: string;
                type: string;
                default: number;
            };
            defaultCenterPosition: {
                title: string;
                type: string;
                default: string;
            };
            fitMapBounds: {
                title: string;
                type: string;
                default: boolean;
            };
            draggableMarker: {
                title: string;
                type: string;
                default: boolean;
            };
            disableScrollZooming: {
                title: string;
                type: string;
                default: boolean;
            };
            disableZoomControl: {
                title: string;
                type: string;
                default: boolean;
            };
            latKeyName: {
                title: string;
                type: string;
                default: string;
            };
            lngKeyName: {
                title: string;
                type: string;
                default: string;
            };
            xPosKeyName: {
                title: string;
                type: string;
                default: string;
            };
            yPosKeyName: {
                title: string;
                type: string;
                default: string;
            };
            showLabel: {
                title: string;
                type: string;
                default: boolean;
            };
            label: {
                title: string;
                type: string;
                default: string;
            };
            useLabelFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            labelFunction: {
                title: string;
                type: string;
            };
            showTooltip: {
                title: string;
                type: string;
                default: boolean;
            };
            showTooltipAction: {
                title: string;
                type: string;
                default: string;
            };
            autocloseTooltip: {
                title: string;
                type: string;
                default: boolean;
            };
            tooltipPattern: {
                title: string;
                type: string;
                default: string;
            };
            useTooltipFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            tooltipFunction: {
                title: string;
                type: string;
            };
            posFunction: {
                title: string;
                type: string;
                default: string;
            };
            markerOffsetX: {
                title: string;
                type: string;
                default: number;
            };
            markerOffsetY: {
                title: string;
                type: string;
                default: number;
            };
            tooltipOffsetX: {
                title: string;
                type: string;
                default: number;
            };
            tooltipOffsetY: {
                title: string;
                type: string;
                default: number;
            };
            color: {
                title: string;
                type: string;
            };
            useColorFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            colorFunction: {
                title: string;
                type: string;
            };
            markerImage: {
                title: string;
                type: string;
            };
            markerImageSize: {
                title: string;
                type: string;
                default: number;
            };
            useMarkerImageFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            markerImageFunction: {
                title: string;
                type: string;
            };
            markerImages: {
                title: string;
                type: string;
                items: {
                    title: string;
                    type: string;
                };
            };
        };
        required: any[];
    };
    form: (string | {
        key: string;
        condition: string;
        type?: undefined;
        helpId?: undefined;
        multiple?: undefined;
        items?: undefined;
    } | {
        key: string;
        type: string;
        helpId: string;
        condition: string;
        multiple?: undefined;
        items?: undefined;
    } | {
        key: string;
        type: string;
        multiple: boolean;
        items: {
            value: string;
            label: string;
        }[];
        condition: string;
        helpId?: undefined;
    } | {
        key: string;
        type: string;
        condition: string;
        helpId?: undefined;
        multiple?: undefined;
        items?: undefined;
    } | {
        key: string;
        type: string;
        condition?: undefined;
        helpId?: undefined;
        multiple?: undefined;
        items?: undefined;
    } | {
        key: string;
        items: {
            key: string;
            type: string;
        }[];
        condition: string;
        type?: undefined;
        helpId?: undefined;
        multiple?: undefined;
    })[];
};
export declare const mapPolygonSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            showPolygon: {
                title: string;
                type: string;
                default: boolean;
            };
            polygonKeyName: {
                title: string;
                type: string;
                default: string;
            };
            editablePolygon: {
                title: string;
                type: string;
                default: boolean;
            };
            showPolygonLabel: {
                title: string;
                type: string;
                default: boolean;
            };
            polygonLabel: {
                title: string;
                type: string;
                default: string;
            };
            usePolygonLabelFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            polygonLabelFunction: {
                title: string;
                type: string;
            };
            polygonColor: {
                title: string;
                type: string;
            };
            polygonOpacity: {
                title: string;
                type: string;
                default: number;
            };
            polygonStrokeColor: {
                title: string;
                type: string;
            };
            polygonStrokeOpacity: {
                title: string;
                type: string;
                default: number;
            };
            polygonStrokeWeight: {
                title: string;
                type: string;
                default: number;
            };
            showPolygonTooltip: {
                title: string;
                type: string;
                default: boolean;
            };
            polygonTooltipPattern: {
                title: string;
                type: string;
                default: string;
            };
            usePolygonTooltipFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            polygonTooltipFunction: {
                title: string;
                type: string;
            };
            usePolygonColorFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            polygonColorFunction: {
                title: string;
                type: string;
            };
            usePolygonStrokeColorFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            polygonStrokeColorFunction: {
                title: string;
                type: string;
            };
        };
        required: any[];
    };
    form: (string | {
        key: string;
        condition: string;
        type?: undefined;
        helpId?: undefined;
    } | {
        key: string;
        type: string;
        helpId: string;
        condition: string;
    } | {
        key: string;
        type: string;
        condition?: undefined;
        helpId?: undefined;
    } | {
        key: string;
        type: string;
        condition: string;
        helpId?: undefined;
    })[];
};
export declare const routeMapSettingsSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            strokeWeight: {
                title: string;
                type: string;
                default: number;
            };
            strokeOpacity: {
                title: string;
                type: string;
                default: number;
            };
        };
        required: any[];
    };
    form: string[];
};
export declare const markerClusteringSettingsSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            useClusterMarkers: {
                title: string;
                type: string;
                default: boolean;
            };
        };
        required: any[];
    };
    form: {
        key: string;
        condition: string;
    }[];
};
export declare const markerClusteringSettingsSchemaLeaflet: {
    schema: {
        title: string;
        type: string;
        properties: {
            zoomOnClick: {
                title: string;
                type: string;
                default: boolean;
            };
            maxZoom: {
                title: string;
                type: string;
            };
            showCoverageOnHover: {
                title: string;
                type: string;
                default: boolean;
            };
            animate: {
                title: string;
                type: string;
                default: boolean;
            };
            maxClusterRadius: {
                title: string;
                type: string;
                default: number;
            };
            spiderfyOnMaxZoom: {
                title: string;
                type: string;
                default: boolean;
            };
            chunkedLoading: {
                title: string;
                type: string;
                default: boolean;
            };
            removeOutsideVisibleBounds: {
                title: string;
                type: string;
                default: boolean;
            };
        };
        required: any[];
    };
    form: string[];
};
export declare const imageMapSettingsSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            mapImageUrl: {
                title: string;
                type: string;
                default: string;
            };
            imageEntityAlias: {
                title: string;
                type: string;
                default: string;
            };
            imageUrlAttribute: {
                title: string;
                type: string;
                default: string;
            };
        };
        required: any[];
    };
    form: (string | {
        key: string;
        type: string;
    })[];
};
export declare const pathSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            color: {
                title: string;
                type: string;
            };
            strokeWeight: {
                title: string;
                type: string;
                default: number;
            };
            strokeOpacity: {
                title: string;
                type: string;
                default: number;
            };
            useColorFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            colorFunction: {
                title: string;
                type: string;
            };
            usePolylineDecorator: {
                title: string;
                type: string;
                default: boolean;
            };
            decoratorSymbol: {
                title: string;
                type: string;
                default: string;
            };
            decoratorSymbolSize: {
                title: string;
                type: string;
                default: number;
            };
            useDecoratorCustomColor: {
                title: string;
                type: string;
                default: boolean;
            };
            decoratorCustomColor: {
                title: string;
                type: string;
                default: string;
            };
            decoratorOffset: {
                title: string;
                type: string;
                default: string;
            };
            endDecoratorOffset: {
                title: string;
                type: string;
                default: string;
            };
            decoratorRepeat: {
                title: string;
                type: string;
                default: string;
            };
        };
        required: any[];
    };
    form: (string | {
        key: string;
        type: string;
        helpId?: undefined;
        condition?: undefined;
        multiple?: undefined;
        items?: undefined;
    } | {
        key: string;
        helpId: string;
        type: string;
        condition: string;
        multiple?: undefined;
        items?: undefined;
    } | {
        key: string;
        type: string;
        multiple: boolean;
        items: {
            value: string;
            label: string;
        }[];
        helpId?: undefined;
        condition?: undefined;
    })[];
};
export declare const pointSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            showPoints: {
                title: string;
                type: string;
                default: boolean;
            };
            pointColor: {
                title: string;
                type: string;
            };
            useColorPointFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            colorPointFunction: {
                title: string;
                type: string;
            };
            pointSize: {
                title: string;
                type: string;
                default: number;
            };
            usePointAsAnchor: {
                title: string;
                type: string;
                default: boolean;
            };
            pointAsAnchorFunction: {
                title: string;
                type: string;
            };
            pointTooltipOnRightPanel: {
                title: string;
                type: string;
                default: boolean;
            };
        };
        required: any[];
    };
    form: (string | {
        key: string;
        type: string;
        helpId?: undefined;
        condition?: undefined;
    } | {
        key: string;
        helpId: string;
        type: string;
        condition: string;
    })[];
};
export declare const mapProviderSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            provider: {
                title: string;
                type: string;
                default: string;
            };
        };
        required: any[];
    };
    form: {
        key: string;
        type: string;
        multiple: boolean;
        items: {
            value: string;
            label: string;
        }[];
    }[];
};
export declare const tripAnimationSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            normalizationStep: {
                title: string;
                type: string;
                default: number;
            };
            latKeyName: {
                title: string;
                type: string;
                default: string;
            };
            lngKeyName: {
                title: string;
                type: string;
                default: string;
            };
            showLabel: {
                title: string;
                type: string;
                default: boolean;
            };
            label: {
                title: string;
                type: string;
                default: string;
            };
            useLabelFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            labelFunction: {
                title: string;
                type: string;
            };
            showTooltip: {
                title: string;
                type: string;
                default: boolean;
            };
            tooltipColor: {
                title: string;
                type: string;
                default: string;
            };
            tooltipFontColor: {
                title: string;
                type: string;
                default: string;
            };
            tooltipOpacity: {
                title: string;
                type: string;
                default: number;
            };
            tooltipPattern: {
                title: string;
                type: string;
                default: string;
            };
            useTooltipFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            tooltipFunction: {
                title: string;
                type: string;
            };
            autocloseTooltip: {
                title: string;
                type: string;
                default: boolean;
            };
            markerImage: {
                title: string;
                type: string;
            };
            markerImageSize: {
                title: string;
                type: string;
                default: number;
            };
            rotationAngle: {
                title: string;
                type: string;
                default: number;
            };
            useMarkerImageFunction: {
                title: string;
                type: string;
                default: boolean;
            };
            markerImageFunction: {
                title: string;
                type: string;
            };
            markerImages: {
                title: string;
                type: string;
                items: {
                    title: string;
                    type: string;
                };
            };
        };
        required: any[];
    };
    form: (string | {
        key: string;
        condition: string;
        type?: undefined;
        helpId?: undefined;
        items?: undefined;
    } | {
        key: string;
        type: string;
        helpId: string;
        condition: string;
        items?: undefined;
    } | {
        key: string;
        type: string;
        condition: string;
        helpId?: undefined;
        items?: undefined;
    } | {
        key: string;
        items: {
            key: string;
            type: string;
        }[];
        condition: string;
        type?: undefined;
        helpId?: undefined;
    })[];
};
interface IProvider {
    schema: JsonSettingsSchema;
    name: string;
}
export declare const providerSets: {
    [key: string]: IProvider;
};
export declare const editorSettingSchema: {
    schema: {
        title: string;
        type: string;
        properties: {
            snappable: {
                title: string;
                type: string;
                default: boolean;
            };
            initDragMode: {
                title: string;
                type: string;
                default: boolean;
            };
            hideAllControlButton: {
                title: string;
                type: string;
                default: boolean;
            };
            hideDrawControlButton: {
                title: string;
                type: string;
                default: boolean;
            };
            hideEditControlButton: {
                title: string;
                type: string;
                default: boolean;
            };
            hideRemoveControlButton: {
                title: string;
                type: string;
                default: boolean;
            };
        };
        required: any[];
    };
    form: (string | {
        key: string;
        condition: string;
    })[];
};
export {};
