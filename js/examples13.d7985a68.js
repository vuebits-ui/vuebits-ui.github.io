(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples13"],{"0e56":function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <span\n    v-for=\"size in sizes\"\n    :key=\"size\"\n  >\n    <VButton\n      :size=\"size\"\n      dark\n    >\n      I am {{ size }}\n    </VButton>\n  </span>\n</template>\n\n<script>\nimport {\n  VButton\n} from '@/components';\nimport { sizes } from '@/docs/helpers/story-params';\n\nexport default {\n  name: 'ButtonSizes',\n  components: {\n    VButton\n  },\n  data () {\n    return {\n      sizes\n    };\n  }\n};\n<\/script>\n"}}]);
//# sourceMappingURL=examples13.d7985a68.js.map