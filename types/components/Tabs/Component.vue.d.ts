import { PropType } from 'vue';
import { TabItem } from './models';
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
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    light: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: PropType<number>;
        default: number;
    };
    items: {
        type: PropType<TabItem[]>;
        required: true;
    };
    activeTabColor: {
        type: PropType<string>;
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
    tabClasses(i: number): CssClass[];
    selectTab(i: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    modelValue: number;
    dark: boolean;
    light: boolean;
    items: TabItem[];
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
export default _default;
