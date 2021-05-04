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
        dark: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        light: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<number>;
            default: number;
        };
        items: {
            type: import("vue").PropType<import("../../../../../components/Tabs/models").TabItem[]>;
            required: true;
        };
        activeTabColor: {
            type: import("vue").PropType<string>;
            default: string;
        };
    }, {
        themeClass: import("vue").ComputedRef<{
            'is-dark': any;
            'is-light': any;
        }>;
    }, unknown, {
        selectedIndex: {
            get(): number;
            set(value: number): void;
        };
    }, {
        tabClasses(i: number): import("../../../../../helpers/css-classes").CssClass[];
        selectTab(i: number): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        modelValue: number;
        dark: boolean;
        light: boolean;
        items: import("../../../../../components/Tabs/models").TabItem[];
        activeTabColor: string;
    } & {}>, {
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        modelValue: number;
        dark: boolean;
        light: boolean;
        activeTabColor: string;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
