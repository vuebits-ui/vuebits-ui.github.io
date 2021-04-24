import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    loading: {
        type: PropType<boolean>;
        required: true;
    };
    spinnerSize: {
        type: PropType<"lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null>;
        default: string;
    };
    loadingText: {
        type: PropType<string>;
        default: string;
    };
    error: {
        type: PropType<boolean>;
        default: boolean;
    };
    errorText: {
        type: PropType<string>;
        default: string;
    };
    reloadable: {
        type: PropType<boolean>;
        default: boolean;
    };
    reloadText: {
        type: PropType<string>;
        default: string;
    };
}, unknown, unknown, {
    computedErrorText(): string;
    computedReloadText(): string;
}, {
    reload(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "reload"[], "reload", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    error: boolean;
    loading: boolean;
    spinnerSize: "lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null;
    loadingText: string;
    errorText: string;
    reloadable: boolean;
    reloadText: string;
} & {}>, {
    error: boolean;
    spinnerSize: "lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null;
    loadingText: string;
    errorText: string;
    reloadable: boolean;
    reloadText: string;
}>;
export default _default;
