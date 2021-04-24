import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
declare const _default: import("vue").DefineComponent<{
    elevated: {
        type: PropType<boolean>;
        default: boolean;
    };
    to: {
        type: (ObjectConstructor | StringConstructor)[];
        default: null;
    };
    href: {
        type: PropType<string | null>;
        default: null;
    };
    newWindow: {
        type: PropType<boolean>;
        default: boolean;
    };
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
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    light: {
        type: PropType<boolean>;
        default: boolean;
    };
    color: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<string>;
        default: string;
    };
    loading: {
        type: PropType<boolean>;
        default: boolean;
    };
    leftIcon: {
        type: PropType<string | null>;
        default: null;
    };
    rightIcon: {
        type: PropType<string | null>;
        default: null;
    };
    title: {
        type: PropType<string | null>;
        default: null;
    };
    block: {
        type: PropType<boolean>;
        default: boolean;
    };
    plain: {
        type: PropType<boolean>;
        default: boolean;
    };
    hoverable: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    themeClass: import("vue").ComputedRef<{
        'is-dark': any;
        'is-light': any;
    }>;
    borderedClass: import("vue").ComputedRef<{
        'is-bordered': any;
    }>;
    roundedClass: import("vue").ComputedRef<{
        'is-rounded': any;
        'is-rounded-lg': any;
        'is-round': any;
    }>;
    elevatedClass: import("vue").ComputedRef<{
        'is-elevated': any;
    }>;
    component: import("vue").ComputedRef<"RouterLink" | "a" | "span">;
    target: import("vue").ComputedRef<"_blank" | "_self">;
}, {
    isFocused: boolean;
}, {
    classes(): CssClass[];
}, {
    onClick(): void;
    setFocusStatus(isFocused: boolean): void;
    onFocus(): void;
    onBlur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "blur" | "focus")[], "click" | "blur" | "focus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    to: null;
    href: string | null;
    newWindow: boolean;
    size: string;
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    elevated: boolean;
    dark: boolean;
    light: boolean;
    color: string;
    title: string | null;
    disabled: boolean;
    loading: boolean;
    leftIcon: string | null;
    rightIcon: string | null;
    block: boolean;
    plain: boolean;
    hoverable: boolean;
} & {}>, {
    to: null;
    href: string | null;
    newWindow: boolean;
    size: string;
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    elevated: boolean;
    dark: boolean;
    light: boolean;
    color: string;
    title: string | null;
    disabled: boolean;
    loading: boolean;
    leftIcon: string | null;
    rightIcon: string | null;
    block: boolean;
    plain: boolean;
    hoverable: boolean;
}>;
export default _default;
