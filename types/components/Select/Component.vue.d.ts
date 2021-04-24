import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
import { SelectItem } from './models';
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
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    light: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: PropType<string | number | null>;
        default: null;
    };
    items: {
        type: PropType<SelectItem[]>;
        required: true;
    };
    hideArrow: {
        type: PropType<boolean>;
        default: boolean;
    };
    label: {
        type: PropType<string | null>;
        default: null;
    };
    placeholder: {
        type: PropType<string | null>;
        default: null;
    };
    maxHeight: {
        type: PropType<number>;
        default: number;
    };
    persistent: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    labelColor: {
        type: PropType<string>;
        default: string;
    };
    search: {
        type: PropType<boolean>;
        default: boolean;
    };
    searchPlaceholder: {
        type: PropType<string | null>;
        default: null;
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
}, {
    isExpanded: boolean;
    searchQuery: string;
}, {
    computedSearchPlaceholder(): string;
    classes(): CssClass[];
    labelClasses(): CssClass[];
    arrowClasses(): CssClass[];
    dropdownClasses(): CssClass[];
    selectedItem(): SelectItem | null;
    computedPlaceholder(): string | null;
    selectedItemText(): string | null;
    filteredItems(): SelectItem[];
}, {
    select(item: SelectItem): void;
    toggle(): void;
    itemClasses(item: SelectItem): CssClass[];
    onClickOutside(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "select")[], "update:modelValue" | "change" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    persistent: boolean;
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    modelValue: string | number | null;
    dark: boolean;
    light: boolean;
    disabled: boolean;
    items: SelectItem[];
    placeholder: string | null;
    label: string | null;
    maxHeight: number;
    hideArrow: boolean;
    labelColor: string;
    search: boolean;
    searchPlaceholder: string | null;
} & {}>, {
    persistent: boolean;
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    modelValue: string | number | null;
    dark: boolean;
    light: boolean;
    disabled: boolean;
    placeholder: string | null;
    label: string | null;
    maxHeight: number;
    hideArrow: boolean;
    labelColor: string;
    search: boolean;
    searchPlaceholder: string | null;
}>;
export default _default;
