(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples68"],{"711a":function(n,o,e){"use strict";e.r(o),o["default"]='<template>\n  <div :class="$bem({})">\n    <PageHeader>\n      Variables\n    </PageHeader>\n    <p class="docs--p">\n      If you use sass styles in your app you can overwrite default variables with your own variables.\n      For this you have to define your own variable values before importing the library configuration. For example:\n    </p>\n    <CodeBlock\n      language="js"\n      code="\n// vue.config.js\n\nmodule.exports = {\n  css: {\n    loaderOptions: {\n      sass: {\n        prependData: `\n          @import \'~@/assets/styles/config.scss\';\n        `\n      }\n    }\n  }\n};\n      "\n    />\n    <CodeBlock\n      language="scss"\n      code="\n// ~@/assets/styles/config.scss\n\n// margins, paddings ect.\n$sp: 7px;\n\n// borders\n$border-radius-main: $sp;\n$border-radius-large: 3 * $sp;\n$border-width: 1px;\n\n// z-index\n$layer-modal: 100000;\n$layer-dropdown: 7;\n$layer-toolbar: 15;\n$layer-notifications: 10000000;\n\n@import \'~@vuebits/ui/styles/config\';\n      "\n    />\n    <p class="docs--p">\n      Full list of default colors:\n    </p>\n    <CodeBlock\n      language="scss"\n      code="\n$color-white: #FFF !default;\n$color-black: #000 !default;\n$color-grey-light: #F0F2F5 !default;\n$color-grey-athens:#E5E8EC !default;\n$color-grey-bright: #3F4254 !default;\n$color-grey-trout:#4A4E5A !default;\n$color-grey-pale-sky: #6B707D !default;\n$color-red-lipstick: #B00044 !default;\n$color-yellow-tree-poppy: #FEA321 !default;\n$color-yellow-sea: #FFAC01 !default;\n$color-yellow-sazerac: #FFF6E5 !default;\n$color-blue-denim-darken: #0D57C3 !default;\n$color-blue-torea-bay: #172897 !default;\n$color-blue-dodger: #3287FE !default;\n$color-blue-solitude: #EAF3FE !default;\n$color-green-apple: #64BA3D !default;\n$color-green-peppermint: #EFF8EB !default;\n\n/* aliases */\n\n// theme\n$color-primary: $color-blue-torea-bay !default;\n$color-secondary: $color-yellow-tree-poppy !default;\n\n// elements\n$color-border: $color-grey-athens !default;\n$color-text: $color-black !default;\n$color-text-2: $color-grey-trout !default;\n$color-link: $color-blue-denim-darken !default;\n$color-bg: $color-grey-light !default;\n\n// statuses\n$color-info: $color-blue-dodger !default;\n$color-success: $color-green-apple !default;\n$color-warning: $color-yellow-sea !default;\n$color-error: $color-red-lipstick !default;\n$color-closed: $color-grey-bright !default;\n$color-disabled: $color-grey-pale-sky !default;\n\n// event statuses\n$color-status-1: $color-warning !default;\n$color-status-2: $color-info !default;\n$color-status-3: $color-success !default;\n$color-status-4: $color-closed !default;\n\n// pale colors\n$color-info-pale: $color-blue-solitude !default;\n$color-success-pale: $color-green-peppermint !default;\n$color-warning-pale: $color-yellow-sazerac !default;\n$color-error-pale: lighten($color-error, 63%) !default;\n$color-closed-pale: lighten($color-status-4, 64%) !default;\n\n$color-status-1-pale: $color-warning-pale !default;\n$color-status-2-pale: $color-info-pale !default;\n$color-status-3-pale: $color-success-pale !default;\n$color-status-4-pale: $color-closed-pale !default;\n\n//themes\n$color-theme-dark: $color-grey-bright !default;\n$color-theme-dark-font: $color-white !default;\n$color-theme-dark-hover: lighten($color-theme-dark, 10%) !default;\n\n$color-theme-light: $color-bg !default;\n$color-theme-light-font: $color-black !default;\n$color-theme-light-hover: $color-grey-light !default;\n      "\n    />\n    <p class="docs--p">\n      Breakpoints:\n    </p>\n    <CodeBlock\n      language="scss"\n      code="\n$xs: 360px !default;\n$sm: 576px !default;\n$md: 768px !default;\n$lg: 1060px !default;\n$xl: 1300px !default;\n\n$min-content-width: 320px !default;\n$max-content-width: 1920px !default;\n\n$breakpoints: (\n  xs: $xs,\n  sm: $sm,\n  md: $md,\n  lg: $lg,\n  xl: $xl\n) !default;\n\n      "\n    />\n    <p class="docs--p">\n      Typography:\n    </p>\n    <CodeBlock\n      language="scss"\n      code="\n$font-main: \'Rubik\', sans-serif !default;\n      "\n    />\n    <p class="docs--p">\n      Other variables:\n    </p>\n    <CodeBlock\n      language="scss"\n      code="\n// margins, paddings ect.\n$sp: 5px !default;\n$sp-xs: $sp !default;\n$sp-sm: 2 * $sp !default;\n$sp-md: 3 * $sp !default;\n$sp-lg: 4 * $sp !default;\n$sp-xl: 6 * $sp !default;\n\n$spacings: (\n  xs: $sp-xs,\n  sm: $sp-sm,\n  md: $sp-md,\n  lg: $sp-lg,\n  xl: $sp-xl\n) !default;\n\n// borders\n$border-radius-main: $sp !default;\n$border-radius-large: 2 * $sp !default;\n$border-radius-round: 10000px !default;\n$border-width: 2px !default;\n\n// z-index\n$layer-modal: 100 !default;\n$layer-dropdown: 5 !default;\n$layer-toolbar: 10 !default;\n$layer-notifications: 1000 !default;\n\n// button sizes\n$button-size-sm: 30px !default;\n$button-size-md: 40px !default;\n$button-size-lg: 55px !default;\n\n//Shadows\n$shadow-deep: 0 3px 6px 2px rgba($color-black, .3) !default;\n$shadow-main: 0 2px 4px 0 rgba($color-black, .17) !default;\n$shadow-tiny: 0 1px 2px 0 rgba($color-black, .1) !default;\n$shadow-bottom: 0 0 5px 2px rgba($color-black, .17) !default;\n$shadow-bottom-tiny: 0 1px 2px 1px rgba($color-black, .1) !default;\n\n$colors: (\n  white: $color-white,\n  black: $color-black,\n  dark: $color-theme-dark,\n  primary: $color-primary,\n  secondary: $color-secondary,\n  text: $color-text,\n  text-2: $color-text-2,\n  success: $color-success,\n  info: $color-info,\n  error: $color-error,\n  warning: $color-warning,\n  disabled: $color-disabled\n) !default;\n\n//animation times\n$animation-time-short: 100ms !default;\n$animation-time: 150ms !default;\n$animation-time-long: 300ms !default;\n\n//transitions\n$transition-fast-ease: all $animation-time-short ease !default;\n$hover-transition: all $animation-time-long ease-in-out !default;\n      "\n    />\n  </div>\n</template>\n\n<script lang="ts">\nimport { defineComponent } from \'vue\';\nimport {\n  PageHeader,\n  CodeBlock\n} from \'@/docs/components\';\n\nexport default defineComponent({\n  name: \'DocsStylesVariables\',\n  components: {\n    PageHeader,\n    CodeBlock\n  }\n});\n<\/script>\n\n<style lang="scss">\n</style>\n'}}]);
//# sourceMappingURL=examples68.9032d3f9.js.map