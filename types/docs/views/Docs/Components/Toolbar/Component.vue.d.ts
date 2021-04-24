declare const _default: import("vue").DefineComponent<{}, {}, {
    component: import("vue").DefineComponent<{
        dark: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        light: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        fixed: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        absolute: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
    }, {
        themeClass: import("vue").ComputedRef<{
            'is-dark': any;
            'is-light': any;
        }>;
    }, unknown, {
        classes(): import("../../../../../helpers/css-classes").CssClass[];
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        dark: boolean;
        light: boolean;
        color: string;
        fixed: boolean;
        absolute: boolean;
    } & {}>, {
        dark: boolean;
        light: boolean;
        color: string;
        fixed: boolean;
        absolute: boolean;
    }>;
    componentLogo: import("vue").DefineComponent<{
        src: {
            type: import("vue").PropType<string>;
            required: true;
        };
        alt: {
            type: import("vue").PropType<string>;
            default: null;
        };
        to: {
            type: (ObjectConstructor | StringConstructor)[];
            default: null;
        };
        href: {
            type: import("vue").PropType<string>;
            default: null;
        };
        title: {
            type: import("vue").PropType<string>;
            default: null;
        };
    }, unknown, unknown, {
        component(): string;
    }, {
        onClick(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: null;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        to: null;
        href: string;
        src: string;
        alt: string;
        title: string;
    } & {}>, {
        to: null;
        href: string;
        alt: string;
        title: string;
    }>;
    componentHamburger: import("vue").DefineComponent<{
        modelValue: {
            type: import("vue").PropType<boolean>;
            required: true;
        };
    }, unknown, unknown, {}, {
        toggleMenu(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        modelValue: boolean;
    } & {}>, {}>;
    componentMenu: import("vue").DefineComponent<{
        expandedOnMobile: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        persistent: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }, unknown, unknown, {
        listClasses(): import("../../../../../helpers/css-classes").CssClass[];
    }, {
        clickOutside(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'click-outside': null;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        expandedOnMobile: boolean;
        persistent: boolean;
    } & {}>, {
        expandedOnMobile: boolean;
        persistent: boolean;
    }>;
    componentMenuItem: import("vue").DefineComponent<{
        to: {
            type: (ObjectConstructor | StringConstructor)[];
            default: null;
        };
        href: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        newWindow: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        active: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }, {
        component: import("vue").ComputedRef<"RouterLink" | "a" | "span">;
        target: import("vue").ComputedRef<"_blank" | "_self">;
    }, unknown, {
        classes(): import("../../../../../helpers/css-classes").CssClass[];
    }, {
        onClick(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: null;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        to: null;
        href: string | null;
        newWindow: boolean;
        active: boolean;
    } & {}>, {
        to: null;
        href: string | null;
        newWindow: boolean;
        active: boolean;
    }>;
    componentMenuDropdown: import("vue").DefineComponent<{
        modelValue: {
            type: import("vue").PropType<boolean>;
            required: true;
        };
        position: {
            type: import("vue").PropType<"left" | "right" | "fullsize">;
            default: string;
            validator: (val: string) => boolean;
        };
        activeTextColor: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        activeColor: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        persistent: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }, unknown, unknown, {
        isExpanded: {
            get(): boolean;
            set(val: boolean): void;
        };
        classes(): import("../../../../../helpers/css-classes").CssClass[];
        dropdownClasses(): import("../../../../../helpers/css-classes").CssClass[];
    }, {
        toggleDropdown(): void;
        clickOutside(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:modelValue" | "open" | "outside")[], "close" | "update:modelValue" | "open" | "outside", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        persistent: boolean;
        modelValue: boolean;
        position: "left" | "right" | "fullsize";
        activeTextColor: string | null;
        activeColor: string | null;
    } & {}>, {
        persistent: boolean;
        position: "left" | "right" | "fullsize";
        activeTextColor: string | null;
        activeColor: string | null;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
