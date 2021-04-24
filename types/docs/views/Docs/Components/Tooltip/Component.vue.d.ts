declare const _default: import("vue").DefineComponent<{}, {}, {
    component: import("vue").DefineComponent<{
        elevated: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        rounded: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        roundedLg: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        round: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        bordered: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        dark: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        light: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        color: {
            type: import("vue").PropType<string>;
            default: string;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        outlined: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        clickable: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        manual: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        top: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        right: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        left: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        bottom: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        mouseenterDelay: {
            type: import("vue").PropType<number>;
            default: number;
        };
        mouseleaveDelay: {
            type: import("vue").PropType<number>;
            default: number;
        };
        noWrap: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }, {
        themeClass: import("vue").ComputedRef<{
            'is-dark': any;
            'is-light': any;
        }>;
        borderedClass: import("vue").ComputedRef<{
            'is-bordered': any;
        }>;
        roundedClass: import("vue").ComputedRef<{
            'is-rounded': any;
            'is-rounded-lg': any;
            'is-round': any;
        }>;
        elevatedClass: import("vue").ComputedRef<{
            'is-elevated': any;
        }>;
    }, {
        isActive: boolean;
        isHovered: boolean;
        isHidden: boolean;
    }, {
        isClickable(): boolean;
        isHoverable(): boolean;
        tooltipClasses(): import("../../../../../helpers/css-classes").CssClass[];
    }, {
        centerTooltip(tooltip: HTMLElement, activatorRect: DOMRect): void;
        stickTooltipToActivator(tooltip: HTMLElement, activatorRect: DOMRect): void;
        slideTooltipFromWindowEdge(tooltip: HTMLElement): void;
        calculatePosition(): void;
        handleScroll(): void;
        open(): void;
        close(): void;
        onMouseenter(): void;
        onMouseleave(): void;
        onClick(): void;
        onOutsideClick(): void;
        toggle(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "open")[], "close" | "open", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        top: boolean;
        left: boolean;
        bottom: boolean;
        right: boolean;
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        bordered: boolean;
        elevated: boolean;
        dark: boolean;
        light: boolean;
        color: string;
        disabled: boolean;
        outlined: boolean;
        clickable: boolean;
        manual: boolean;
        mouseenterDelay: number;
        mouseleaveDelay: number;
        noWrap: boolean;
    } & {}>, {
        top: boolean;
        left: boolean;
        bottom: boolean;
        right: boolean;
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        bordered: boolean;
        elevated: boolean;
        dark: boolean;
        light: boolean;
        color: string;
        disabled: boolean;
        outlined: boolean;
        clickable: boolean;
        manual: boolean;
        mouseenterDelay: number;
        mouseleaveDelay: number;
        noWrap: boolean;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
