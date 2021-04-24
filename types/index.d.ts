import { App } from 'vue';
import { Options, CustomOptions, BemItem } from './models';
export * from './components';
export declare function createUI(options: CustomOptions): {
    install: (T: App) => void;
};
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $bem: (T: BemItem) => string[];
        $ui: Options;
    }
}
