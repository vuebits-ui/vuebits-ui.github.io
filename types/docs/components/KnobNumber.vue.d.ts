import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<number>;
        required: true;
    };
    label: {
        type: PropType<string>;
        required: true;
    };
    min: {
        type: PropType<number>;
        default: number;
    };
}, unknown, unknown, {}, {
    updateModelValue(value: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: number;
    min: number;
    label: string;
} & {}>, {
    min: number;
}>;
export default _default;
