declare const _default: import("vue").DefineComponent<{}, {}, {
    component: import("vue").DefineComponent<{
        loading: {
            type: import("vue").PropType<boolean>;
            required: true;
        };
        spinnerSize: {
            type: import("vue").PropType<"lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null>;
            default: string;
        };
        loadingText: {
            type: import("vue").PropType<string>;
            default: string;
        };
        error: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        errorText: {
            type: import("vue").PropType<string>;
            default: string;
        };
        reloadable: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        reloadText: {
            type: import("vue").PropType<string>;
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
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
