import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<boolean>;
        required: true;
    };
    position: {
        type: PropType<"left" | "right" | "fullsize">;
        default: string;
        validator: (val: string) => boolean;
    };
    activeTextColor: {
        type: PropType<string | null>;
        default: null;
    };
    activeColor: {
        type: PropType<string | null>;
        default: null;
    };
    persistent: {
        type: PropType<boolean>;
        default: boolean;
    };
}, unknown, unknown, {
    isExpanded: {
        get(): boolean;
        set(val: boolean): void;
    };
    classes(): CssClass[];
    dropdownClasses(): CssClass[];
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
export default _default;
