declare const _default: import("vue").DefineComponent<{}, {}, {
    componentGrid: import("vue").DefineComponent<{
        spacingsSize: {
            type: import("vue").PropType<"lg" | "sm" | "md" | "no">;
            default: string;
            validator: (val: string) => boolean;
        };
    }, unknown, unknown, {
        classes(): import("../../../../../helpers/css-classes").CssClass[];
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        spacingsSize: "lg" | "sm" | "md" | "no";
    } & {}>, {
        spacingsSize: "lg" | "sm" | "md" | "no";
    }>;
    componentGridItem: import("vue").DefineComponent<{
        colsXs: {
            type: import("vue").PropType<number | null>;
            default: null;
        };
        colsSm: {
            type: import("vue").PropType<number | null>;
            default: null;
        };
        colsMd: {
            type: import("vue").PropType<number | null>;
            default: null;
        };
        colsLg: {
            type: import("vue").PropType<number | null>;
            default: null;
        };
        colsXl: {
            type: import("vue").PropType<number | null>;
            default: null;
        };
    }, unknown, unknown, {
        classes(): import("../../../../../helpers/css-classes").CssClass[];
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        colsXs: number | null;
        colsSm: number | null;
        colsMd: number | null;
        colsLg: number | null;
        colsXl: number | null;
    } & {}>, {
        colsXs: number | null;
        colsSm: number | null;
        colsMd: number | null;
        colsLg: number | null;
        colsXl: number | null;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
