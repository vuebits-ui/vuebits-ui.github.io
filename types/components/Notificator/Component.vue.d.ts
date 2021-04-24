import { PropType } from 'vue';
import { NotificationTypeName } from '@/components/Notification/models';
export interface Notification {
    id: number;
    message: string;
    type?: NotificationTypeName;
}
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<Notification[]>;
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
}, unknown, unknown, {}, {
    removeNotification(item: Notification): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove-notification"[], "remove-notification", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size: "lg" | "sm" | "md";
    rounded: boolean;
    width: number | null;
    items: Notification[];
} & {}>, {
    size: "lg" | "sm" | "md";
    rounded: boolean;
    width: number | null;
}>;
export default _default;
