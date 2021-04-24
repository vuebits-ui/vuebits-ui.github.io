import { CssClass } from '@/helpers/css-classes';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: PropType<string>;
        default: string;
    };
    prefix: {
        type: PropType<string>;
        default: string;
    };
    type: {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: PropType<"lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null>;
        default: null;
    };
    rotate: {
        type: PropType<"90" | "180" | "270" | null>;
        default: null;
    };
    flip: {
        type: PropType<"horizontal" | "vertical" | "both" | null>;
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
    classes(): CssClass[];
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
export default _default;