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
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    light: {
        type: PropType<boolean>;
        default: boolean;
    };
    bordered: {
        type: PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: PropType<string>;
        default: string;
    };
    iconType: {
        type: PropType<string | undefined>;
        default: undefined;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<string>;
        default: string;
    };
    color: {
        type: PropType<string>;
        default: string;
    };
    title: {
        type: PropType<string | null>;
        default: null;
    };
    loading: {
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
}, unknown, unknown, {
    classes(): CssClass[];
}, {
    click(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size: string;
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    dark: boolean;
    light: boolean;
    color: string;
    title: string | null;
    disabled: boolean;
    loading: boolean;
    plain: boolean;
    hoverable: boolean;
    icon: string;
    iconType: string | undefined;
} & {}>, {
    size: string;
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    bordered: boolean;
    dark: boolean;
    light: boolean;
    color: string;
    title: string | null;
    disabled: boolean;
    loading: boolean;
    plain: boolean;
    hoverable: boolean;
    icon: string;
    iconType: string | undefined;
}>;
export default _default;
