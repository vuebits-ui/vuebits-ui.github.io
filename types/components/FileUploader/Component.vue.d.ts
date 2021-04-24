import { PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';
declare const _default: import("vue").DefineComponent<{
    elevated: {
        type: PropType<boolean>;
        default: boolean;
    };
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
    width: {
        type: PropType<number>;
        default: number;
    };
    buttonText: {
        type: PropType<string>;
        default: null;
    };
    buttonColor: {
        type: PropType<string>;
        default: string;
    };
    dropAreaText: {
        type: PropType<string>;
        default: string;
    };
    errorText: {
        type: PropType<string>;
        default: string;
    };
    dropAreaTextWhenDragging: {
        type: PropType<string>;
        default: string;
    };
    dropAreaTextWhenDisabled: {
        type: PropType<string>;
        default: string;
    };
    isButtonHidden: {
        type: PropType<boolean>;
        default: boolean;
    };
    isDropAreaHidden: {
        type: PropType<boolean>;
        default: boolean;
    };
    multipleFiles: {
        type: PropType<boolean>;
        default: boolean;
    };
    color: {
        type: PropType<string>;
        default: string;
    };
    acceptedTypes: {
        type: PropType<string[]>;
        default: () => never[];
    };
    acceptedExtensions: {
        type: PropType<string[]>;
        default: () => never[];
    };
}, unknown, {
    isDraggedInDropArea: boolean;
    isDropAreaDisabled: boolean;
}, {
    dropAreaClasses(): CssClass[];
    buttonClasses(): CssClass[];
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
export default _default;
