import { PropType } from 'vue';
import { TableHeader } from './models';
declare const _default: import("vue").DefineComponent<{
    headers: {
        type: PropType<TableHeader[]>;
        required: true;
    };
    items: {
        type: PropType<{
            [x: string]: any;
        }[]>;
        required: true;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    headers: TableHeader[];
    items: {
        [x: string]: any;
    }[];
} & {}>, {}>;
export default _default;
