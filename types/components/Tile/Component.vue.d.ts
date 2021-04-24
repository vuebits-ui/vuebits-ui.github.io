import { PropType } from 'vue';
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
    elevated: {
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
    height: {
        type: PropType<string>;
        default: string;
        validator: (val: string) => boolean;
    };
    width: {
        type: PropType<string>;
        default: string;
        validator: (val: string) => boolean;
    };
    image: {
        type: PropType<string | null>;
        default: null;
    };
    color: {
        type: PropType<string | null>;
        default: null;
    };
    underlineColor: {
        type: PropType<string | null>;
        default: null;
    };
    hoverBgColor: {
        type: PropType<string | null>;
        default: null;
    };
    centerContent: {
        type: PropType<boolean>;
        default: boolean;
    };
    listItem: {
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
    elevatedClass: import("vue").ComputedRef<{
        'is-elevated': any;
    }>;
    roundedClass: import("vue").ComputedRef<{
        'is-rounded': any;
        'is-rounded-lg': any;
        'is-round': any;
    }>;
}, unknown, {
    component(): string;
    classes(): any;
    styles(): any;
}, {
    click(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: null;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    elevated: boolean;
    width: string;
    dark: boolean;
    light: boolean;
    color: string | null;
    listItem: boolean;
    height: string;
    image: string | null;
    underlineColor: string | null;
    hoverBgColor: string | null;
    centerContent: boolean;
} & {}>, {
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    elevated: boolean;
    width: string;
    dark: boolean;
    light: boolean;
    color: string | null;
    listItem: boolean;
    height: string;
    image: string | null;
    underlineColor: string | null;
    hoverBgColor: string | null;
    centerContent: boolean;
}>;
export default _default;
