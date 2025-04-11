import { CustomMapLayerSettings, GoogleMapLayerSettings, HereMapLayerSettings, MapLayerSettings, OpenStreetMapLayerSettings, TencentMapLayerSettings } from '@shared/models/widget/maps/map.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { DeepPartial } from '@shared/models/common';
import { Observable } from 'rxjs';
import L from 'leaflet';
export declare abstract class TbMapLayer<S extends MapLayerSettings> {
    protected ctx: WidgetContext;
    protected inputSettings: DeepPartial<MapLayerSettings>;
    static fromSettings(ctx: WidgetContext, inputSettings: DeepPartial<MapLayerSettings>): TbOpenStreetMapLayer | TbGoogleMapLayer | TbTencentMapLayer | TbHereMapLayer | TbCustomMapLayer;
    protected settings: S;
    protected constructor(ctx: WidgetContext, inputSettings: DeepPartial<MapLayerSettings>);
    loadLayer(theMap: L.Map): Observable<L.TB.LayerData>;
    private generateLayer;
    private loadReferenceLayer;
    private title;
    private generateTitle;
    protected abstract defaultSettings(): S;
    protected abstract createLayer(): Observable<L.Layer>;
}
declare class TbOpenStreetMapLayer extends TbMapLayer<OpenStreetMapLayerSettings> {
    protected ctx: WidgetContext;
    protected inputSettings: DeepPartial<MapLayerSettings>;
    constructor(ctx: WidgetContext, inputSettings: DeepPartial<MapLayerSettings>);
    protected defaultSettings(): OpenStreetMapLayerSettings;
    protected createLayer(): Observable<L.Layer>;
}
declare class TbGoogleMapLayer extends TbMapLayer<GoogleMapLayerSettings> {
    protected ctx: WidgetContext;
    protected inputSettings: DeepPartial<MapLayerSettings>;
    static loadedApiKeysGlobal: {
        [key: string]: boolean;
    };
    constructor(ctx: WidgetContext, inputSettings: DeepPartial<MapLayerSettings>);
    protected defaultSettings(): GoogleMapLayerSettings;
    protected createLayer(): Observable<L.Layer>;
    private loadGoogle;
}
declare class TbTencentMapLayer extends TbMapLayer<TencentMapLayerSettings> {
    protected ctx: WidgetContext;
    protected inputSettings: DeepPartial<MapLayerSettings>;
    constructor(ctx: WidgetContext, inputSettings: DeepPartial<MapLayerSettings>);
    protected defaultSettings(): TencentMapLayerSettings;
    protected createLayer(): Observable<L.Layer>;
}
declare class TbHereMapLayer extends TbMapLayer<HereMapLayerSettings> {
    protected ctx: WidgetContext;
    protected inputSettings: DeepPartial<MapLayerSettings>;
    constructor(ctx: WidgetContext, inputSettings: DeepPartial<MapLayerSettings>);
    protected defaultSettings(): HereMapLayerSettings;
    protected createLayer(): Observable<L.Layer>;
}
declare class TbCustomMapLayer extends TbMapLayer<CustomMapLayerSettings> {
    protected ctx: WidgetContext;
    protected inputSettings: DeepPartial<MapLayerSettings>;
    constructor(ctx: WidgetContext, inputSettings: DeepPartial<MapLayerSettings>);
    protected defaultSettings(): CustomMapLayerSettings;
    protected createLayer(): Observable<L.Layer>;
}
export {};
