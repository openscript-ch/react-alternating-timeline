export declare type StyleConfig = {
    line?: {
        width?: string;
        color?: string;
    };
    marker?: {
        size?: string;
        color?: string;
        radius?: string;
    };
    pointer?: {
        height?: string;
        width?: string;
    };
    card?: {
        background?: string;
        radius?: string;
        offset?: string;
        shadow?: string;
        padding?: string;
    };
};
export declare const convertToCssVariable: (styleConfig: StyleConfig) => {
    [x: string]: string;
};
