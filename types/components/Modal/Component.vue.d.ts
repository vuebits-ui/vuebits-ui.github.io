import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
declare const _default: import("vue").DefineComponent<{
    rounded: {
        type: PropType<boolean>;
        default: boolean;
    };
    roundedLg: {
        type: PropType<boolean>;
        default: boolean;
    };
    round: {
        type: PropType<boolean>;
        default: boolean;
    };
    bordered: {
        type: PropType<boolean>;
        default: boolean;
    };
    elevated: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: PropType<boolean>;
        required: true;
    };
    persistent: {
        type: PropType<boolean>;
        default: boolean;
    };
    closeOnEsc: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<"lg" | "sm" | "md" | null>;
        default: null;
        validator: (val: string) => boolean;
    };
    position: {
        type: PropType<"middle" | "top" | "left" | "bottom" | "right" | "fullscreen">;
        default: string;
        validator: (val: string) => boolean;
    };
    width: {
        type: PropType<number | null>;
        default: null;
    };
    transition: {
        type: PropType<string | null>;
        default: null;
    };
}, {
    borderedClass: import("vue").ComputedRef<{
        'is-bordered': any;
    }>;
    roundedClass: import("vue").ComputedRef<{
        'is-rounded': any;
        'is-rounded-lg': any;
        'is-round': any;
    }>;
}, {
    scrollPosition: number;
    isContentShown: boolean;
    isBlendShown: boolean;
}, {
    classes(): CssClass[];
    middleClasses(): CssClass[];
    cardStyle(): any;
    cardClasses(): CssClass[];
}, {
    enableScrolling(): void;
    disableScrolling(): void;
    showBlend(): void;
    hideBlend(): void;
    openHandler(): void;
    closeHandler(): void;
    changeValueHandler(val: boolean): void;
    close(): void;
    onClickOutside(): void;
    onEsc(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:modelValue")[], "close" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    persistent: boolean;
    size: "lg" | "sm" | "md" | null;
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    elevated: boolean;
    modelValue: boolean;
    closeOnEsc: boolean;
    position: "middle" | "top" | "left" | "bottom" | "right" | "fullscreen";
    width: number | null;
    transition: string | null;
} & {}>, {
    persistent: boolean;
    size: "lg" | "sm" | "md" | null;
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    elevated: boolean;
    closeOnEsc: boolean;
    position: "middle" | "top" | "left" | "bottom" | "right" | "fullscreen";
    width: number | null;
    transition: string | null;
}>;
export default _default;
