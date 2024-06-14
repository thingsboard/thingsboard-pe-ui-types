export interface TranslationInfo {
    localeCode: string;
    language: string;
    country: string;
    progress: number;
    customized: boolean;
}
export declare enum CustomTranslationState {
    Translated = "T",
    Untranslated = "U",
    Customized = "C",
    Added = "A"
}
export interface CustomTranslationEditData {
    [s: string]: CustomTranslationData;
}
export interface CustomTranslationData {
    t?: string;
    o: string;
    p?: string;
    s: CustomTranslationState;
}
export interface CustomTranslationEditInfo extends CustomTranslationData {
    k: string;
    edit?: boolean;
    value?: string;
}
