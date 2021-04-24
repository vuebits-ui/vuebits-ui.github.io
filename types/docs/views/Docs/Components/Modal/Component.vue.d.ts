declare const _default: import("vue").DefineComponent<{}, {}, {
    component: import("vue").DefineComponent<{
        rounded: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        roundedLg: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        round: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        bordered: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        elevated: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<boolean>;
            required: true;
        };
        persistent: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        closeOnEsc: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"lg" | "sm" | "md" | null>;
            default: null;
            validator: (val: string) => boolean;
        };
        position: {
            type: import("vue").PropType<"middle" | "top" | "left" | "bottom" | "right" | "fullscreen">;
            default: string;
            validator: (val: string) => boolean;
        };
        width: {
            type: import("vue").PropType<number | null>;
            default: null;
        };
        transition: {
            type: import("vue").PropType<string | null>;
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
        classes(): import("../../../../../helpers/css-classes").CssClass[];
        middleClasses(): import("../../../../../helpers/css-classes").CssClass[];
        cardStyle(): any;
        cardClasses(): import("../../../../../helpers/css-classes").CssClass[];
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
    componentHeader: import("vue").DefineComponent<{
        dark: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        light: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        hideBorder: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        elevated: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        color: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
    }, {
        themeClass: import("vue").ComputedRef<{
            'is-dark': any;
            'is-light': any;
        }>;
    }, unknown, {
        classes(): import("../../../../../helpers/css-classes").CssClass[];
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        elevated: boolean;
        hideBorder: boolean;
        dark: boolean;
        light: boolean;
        color: string | null;
    } & {}>, {
        elevated: boolean;
        hideBorder: boolean;
        dark: boolean;
        light: boolean;
        color: string | null;
    }>;
    componentBody: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
    componentFooter: import("vue").DefineComponent<{
        hideBorder: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        elevated: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        alignRight: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }, unknown, unknown, {
        classes(): import("../../../../../helpers/css-classes").CssClass[];
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        elevated: boolean;
        hideBorder: boolean;
        alignRight: boolean;
    } & {}>, {
        elevated: boolean;
        hideBorder: boolean;
        alignRight: boolean;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
