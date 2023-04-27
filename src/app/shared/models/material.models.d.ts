export interface MaterialColorItem {
    value: string;
    group: string;
    label: string;
    isDark: boolean;
}
export type ColorPalette = {
    [spectrum: string]: string;
};
export interface PaletteContrastInfo {
    contrastDefaultColor: 'light' | 'dark';
    contrastDarkColors: string[];
    contrastLightColors: string[];
    contrastStrongLightColors: string[];
}
export declare const materialColorPaletteContrastInfo: {
    [palette: string]: PaletteContrastInfo;
};
export declare const materialColorPalette: {
    [palette: string]: ColorPalette;
};
export declare const primaryPalette: ColorPalette;
export declare const accentPalette: ColorPalette;
export declare function extendDefaultPalette(existingPaletteName: string, palette: ColorPalette): ColorPalette;
export declare function extendPalette(paletteMap: {
    [palette: string]: ColorPalette;
}, paletteName: string, palette: ColorPalette): ColorPalette;
export declare function getContrastColor(palette: string, hueName: string): string;
export declare const materialColors: MaterialColorItem[];
