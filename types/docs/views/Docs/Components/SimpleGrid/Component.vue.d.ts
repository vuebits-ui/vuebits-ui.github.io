declare const _default: import("vue").DefineComponent<{}, {}, {
    componentSimpleGrid: import("vue").DefineComponent<{
        elementsXs: {
            type: import("vue").PropType<string | number | null>;
            default: null;
        };
        elementsSm: {
            type: import("vue").PropType<string | number | null>;
            default: null;
        };
        elementsMd: {
            type: import("vue").PropType<string | number | null>;
            default: null;
        };
        elementsLg: {
            type: import("vue").PropType<string | number | null>;
            default: null;
        };
        elementsXl: {
            type: import("vue").PropType<string | number | null>;
            default: null;
        };
        list: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        spacingsSize: {
            type: import("vue").PropType<"lg" | "sm" | "md" | "no">;
            default: string;
            validator: (val: string) => boolean;
        };
    }, unknown, unknown, {
        classes(): import("../../../../../helpers/css-classes").CssClass[];
        rootTag(): string;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        elementsXs: string | number | null;
        elementsSm: string | number | null;
        elementsMd: string | number | null;
        elementsLg: string | number | null;
        elementsXl: string | number | null;
        list: boolean;
        spacingsSize: "lg" | "sm" | "md" | "no";
    } & {}>, {
        elementsXs: string | number | null;
        elementsSm: string | number | null;
        elementsMd: string | number | null;
        elementsLg: string | number | null;
        elementsXl: string | number | null;
        list: boolean;
        spacingsSize: "lg" | "sm" | "md" | "no";
    }>;
    componentSimpleGridItem: import("vue").DefineComponent<{
        listItem: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }, unknown, unknown, {
        itemTag(): string;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        listItem: boolean;
    } & {}>, {
        listItem: boolean;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
