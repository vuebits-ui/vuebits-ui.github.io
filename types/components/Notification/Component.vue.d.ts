import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
import { NotificationTypeName, NotificationType } from './models';
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
    type: {
        type: PropType<NotificationTypeName>;
        default: NotificationType;
    };
    message: {
        type: PropType<string>;
        required: true;
    };
    size: {
        type: PropType<"lg" | "sm" | "md">;
        default: string;
        validator: (val: string) => boolean;
    };
    width: {
        type: PropType<number | null>;
        default: null;
    };
}, {
    roundedClass: import("vue").ComputedRef<{
        'is-rounded': any;
        'is-rounded-lg': any;
        'is-round': any;
    }>;
}, unknown, {
    style(): any;
    classes(): CssClass[];
}, {
    remove(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove"[], "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: NotificationTypeName;
    size: "lg" | "sm" | "md";
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    width: number | null;
    message: string;
} & {}>, {
    type: NotificationTypeName;
    size: "lg" | "sm" | "md";
    rounded: boolean;
    roundedLg: boolean;
    round: boolean;
    width: number | null;
}>;
export default _default;
