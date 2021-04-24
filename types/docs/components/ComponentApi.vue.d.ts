import { PropType, DefineComponent } from 'vue';
declare const _default: DefineComponent<{
    component: {
        type: PropType<DefineComponent<{}, {}, {}, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>>;
        required: true;
    };
}, unknown, {
    propsHeaders: {
        text: string;
        name: string;
    }[];
    emitsHeaders: {
        text: string;
        name: string;
    }[];
}, {
    propsItems(): {
        name: string;
        default: any;
    }[];
    emitsItems(): {
        event: string;
        validation: any;
    }[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    component: DefineComponent<{}, {}, {}, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
} & {}>, {}>;
export default _default;
