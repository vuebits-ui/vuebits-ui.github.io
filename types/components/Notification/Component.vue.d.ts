import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
import { NotificationTypeName, NotificationType } from './models';
declare const _default: import("vue").DefineComponent<{
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
    rounded: {
        type: PropType<boolean>;
        default: boolean;
    };
}, unknown, unknown, {
    style(): any;
    classes(): CssClass[];
}, {
    remove(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove"[], "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: NotificationTypeName;
    size: "lg" | "sm" | "md";
    rounded: boolean;
    width: number | null;
    message: string;
} & {}>, {
    type: NotificationTypeName;
    size: "lg" | "sm" | "md";
    rounded: boolean;
    width: number | null;
}>;
export default _default;
