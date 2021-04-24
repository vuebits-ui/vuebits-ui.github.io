import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
declare const _default: import("vue").DefineComponent<{
    hideBorder: {
        type: PropType<boolean>;
        default: boolean;
    };
    elevated: {
        type: PropType<boolean>;
        default: boolean;
    };
    alignRight: {
        type: PropType<boolean>;
        default: boolean;
    };
}, unknown, unknown, {
    classes(): CssClass[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    elevated: boolean;
    hideBorder: boolean;
    alignRight: boolean;
} & {}>, {
    elevated: boolean;
    hideBorder: boolean;
    alignRight: boolean;
}>;
export default _default;
