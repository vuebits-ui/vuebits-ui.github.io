export declare type CssClass = string | null | {
    [key in string]: boolean;
} | (string | {
    [key in string]: boolean;
})[];
export declare const className: (name: string, value: string | null) => string | null;
export declare const colorClass: (color: string | null) => string | null;
export declare const bgColorClass: (color: string | null) => string | null;
export declare const hoverColorClass: (color: string | null) => string | null;
export declare const hoverBgColorClass: (color: string | null) => string | null;
export declare const borderColorClass: (color: string | null) => string | null;
export declare const elevationClass = "is-elevated";
export declare const hoverableClass = "is-hoverable";
