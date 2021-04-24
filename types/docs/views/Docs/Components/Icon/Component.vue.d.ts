declare const _default: import("vue").DefineComponent<{}, {}, {
    component: import("vue").DefineComponent<{
        name: {
            type: import("vue").PropType<string>;
            default: string;
        };
        prefix: {
            type: import("vue").PropType<string>;
            default: string;
        };
        type: {
            type: import("vue").PropType<string>;
            default: string;
        };
        size: {
            type: import("vue").PropType<"lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null>;
            default: null;
        };
        rotate: {
            type: import("vue").PropType<"90" | "180" | "270" | null>;
            default: null;
        };
        flip: {
            type: import("vue").PropType<"horizontal" | "vertical" | "both" | null>;
            default: null;
        };
        pulse: {
            type: BooleanConstructor;
            default: boolean;
        };
        spin: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, unknown, unknown, {
        classes(): import("../../../../../helpers/css-classes").CssClass[];
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        name: string;
        prefix: string;
        type: string;
        size: "lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null;
        rotate: "90" | "180" | "270" | null;
        flip: "horizontal" | "vertical" | "both" | null;
        pulse: boolean;
        spin: boolean;
    } & {}>, {
        name: string;
        prefix: string;
        type: string;
        size: "lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null;
        rotate: "90" | "180" | "270" | null;
        flip: "horizontal" | "vertical" | "both" | null;
        pulse: boolean;
        spin: boolean;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
