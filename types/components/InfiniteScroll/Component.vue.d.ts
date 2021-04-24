import { PropType } from 'vue';
import { InifiniteScrollState } from './models';
declare const _default: import("vue").DefineComponent<{
    identifier: {
        type: PropType<number>;
        default: number;
    };
    state: {
        type: PropType<InifiniteScrollState>;
        required: true;
    };
    loadingText: {
        type: PropType<string>;
        default: string;
    };
    errorText: {
        type: PropType<string>;
        default: string;
    };
    completeText: {
        type: PropType<string>;
        default: string;
    };
    iconsSize: {
        type: PropType<"lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null>;
        default: string;
    };
    completeIcon: {
        type: PropType<string>;
        default: string;
    };
    errorIcon: {
        type: PropType<string>;
        default: string;
    };
    tolerance: {
        type: PropType<number>;
        default: number;
    };
}, unknown, unknown, {
    isLoading(): boolean;
    isComplete(): boolean;
    isError(): boolean;
    textOnLoading(): string;
    textOnComplete(): string;
    textOnError(): string;
}, {
    handleScroll(): void;
    reset(): void;
    setIdentifierReset(): void;
    setObserver(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scroll-to-end"[], "scroll-to-end", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    loadingText: string;
    errorText: string;
    identifier: number;
    state: InifiniteScrollState;
    completeText: string;
    iconsSize: "lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null;
    completeIcon: string;
    errorIcon: string;
    tolerance: number;
} & {}>, {
    loadingText: string;
    errorText: string;
    identifier: number;
    completeText: string;
    iconsSize: "lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null;
    completeIcon: string;
    errorIcon: string;
    tolerance: number;
}>;
export default _default;
