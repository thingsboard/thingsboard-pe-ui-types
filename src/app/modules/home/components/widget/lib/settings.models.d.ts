export type FontStyle = 'normal' | 'italic' | 'oblique';
export type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export interface FontSettings {
    family?: string;
    size?: number;
    style?: FontStyle;
    weight?: FontWeight;
    color?: string;
    shadowColor?: string;
}
export declare function getFontFamily(fontSettings: FontSettings): string;
export declare function prepareFontSettings(fontSettings: FontSettings, defaultFontSettings: FontSettings): FontSettings;
