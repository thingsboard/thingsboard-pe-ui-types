export declare const AI_SVG_EXTENSION = ".svg";
export interface AiAttachmentKind {
    icon: string;
    label: string;
}
export declare const aiAttachmentKind: (mediaType: string, name: string) => AiAttachmentKind;
export declare const formatAiFileSize: (bytes: number) => string;
export declare const aiAttachmentExtension: (name: string) => string;
export declare const isAiSvg: (file: File) => boolean;
export declare const isAiAttachmentAccepted: (file: File, extensions: string[]) => boolean;
export declare const namePastedImage: (file: File) => File;
export declare const fitAiImage: (file: File, maxSize: number) => Promise<File>;
export declare const svgToAiImage: (file: File, maxSize: number) => Promise<File>;
export declare function aiServerMessage(error: unknown): string | undefined;
