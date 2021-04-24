import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
declare const _default: import("vue").DefineComponent<{
    expandedOnMobile: {
        type: PropType<boolean>;
        default: boolean;
    };
    persistent: {
        type: PropType<boolean>;
        default: boolean;
    };
}, unknown, unknown, {
    listClasses(): CssClass[];
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
export default _default;
