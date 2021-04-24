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
        dark: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        light: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        width: {
            type: import("vue").PropType<number>;
            default: number;
        };
        buttonText: {
            type: import("vue").PropType<string>;
            default: null;
        };
        buttonColor: {
            type: import("vue").PropType<string>;
            default: string;
        };
        dropAreaText: {
            type: import("vue").PropType<string>;
            default: string;
        };
        errorText: {
            type: import("vue").PropType<string>;
            default: string;
        };
        dropAreaTextWhenDragging: {
            type: import("vue").PropType<string>;
            default: string;
        };
        dropAreaTextWhenDisabled: {
            type: import("vue").PropType<string>;
            default: string;
        };
        isButtonHidden: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        isDropAreaHidden: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        multipleFiles: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        color: {
            type: import("vue").PropType<string>;
            default: string;
        };
        acceptedTypes: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        acceptedExtensions: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
    }, unknown, {
        isDraggedInDropArea: boolean;
        isDropAreaDisabled: boolean;
    }, {
        dropAreaClasses(): import("../../../../../helpers/css-classes").CssClass[];
        buttonClasses(): import("../../../../../helpers/css-classes").CssClass[];
        styleVariables(): any;
        btnText(): string | null;
        computedDropAreaText(): string | null;
        uploadErrorText(): string | null;
        acceptString(): string;
    }, {
        onDrop(ev: DragEvent): void;
        toggleDrag(): void;
        validateFiles(files: FileList): boolean;
        emitFileUpload(files: FileList | null): void;
        addFileFromDisc(): void;
        fileAddedFromDisc(event: Event): void;
        handleDropAreaState(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "upload"[], "upload", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        elevated: boolean;
        width: number;
        dark: boolean;
        light: boolean;
        color: string;
        errorText: string;
        buttonText: string;
        buttonColor: string;
        dropAreaText: string;
        dropAreaTextWhenDragging: string;
        dropAreaTextWhenDisabled: string;
        isButtonHidden: boolean;
        isDropAreaHidden: boolean;
        multipleFiles: boolean;
        acceptedTypes: string[];
        acceptedExtensions: string[];
    } & {}>, {
        rounded: boolean;
        roundedLg: boolean;
        round: boolean;
        elevated: boolean;
        width: number;
        dark: boolean;
        light: boolean;
        color: string;
        errorText: string;
        buttonText: string;
        buttonColor: string;
        dropAreaText: string;
        dropAreaTextWhenDragging: string;
        dropAreaTextWhenDisabled: string;
        isButtonHidden: boolean;
        isDropAreaHidden: boolean;
        multipleFiles: boolean;
        acceptedTypes: string[];
        acceptedExtensions: string[];
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
