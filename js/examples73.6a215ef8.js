(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples73"],{"3dbb":function(n,e,o){"use strict";o.r(e),e["default"]='<template>\n  <div :class="$bem({})">\n    <PageHeader>\n      Quick start\n    </PageHeader>\n    <p class="docs--p">\n      Add library to your Vue 3 app in entry file (eg. main.js):\n    </p>\n    <CodeBlock\n      language="js"\n      code="\nimport { createApp } from \'vue\';\nimport App from \'./App.vue\';\nimport { createUI } from \'@vuebits/ui\';\n\n(async () => {\n  const app = createApp(App);\n  app\n    .use(createUI({}))\n    .mount(\'#app\');\n})();\n      "\n    />\n    <p class="docs--p">\n      Import stylesheet file:\n    </p>\n    <CodeBlock\n      language="scss"\n      code="@import \'~@vuebits/ui/dist/vuebits-ui;"\n    />\n    <p class="docs--p">\n      Install fontawesome icons in your project:\n    </p>\n    <CodeBlock\n      language="bash"\n      code="npm i @fortawesome/fontawesome-free"\n    />\n    <p class="docs--p">\n      and import icons in your styles:\n    </p>\n    <CodeBlock\n      language="scss"\n      code="@import \'~@fortawesome/fontawesome-free/css/all.css\';"\n    />\n    <p class="docs--p">\n      Now you can use components from library in your .vue files:\n    </p>\n    <CodeBlock\n      language="html"\n      code="\n<template>\n  <VButton\n    bordered\n    rounded\n    elevated\n    @click=\'alert\'\n  >\n    Click me!\n  </VButton>\n</template>\n\n<script>\nimport {\n  VButton\n} from \'@vuebits/ui\';\n\nexport default {\n  name: \'ExampleComponent\',\n  components: {\n    VButton\n  },\n  methods: {\n    alert () {\n      alert(\'Hello world!\');\n    }\n  }\n};\n<\/script>\n      "\n    />\n  </div>\n</template>\n\n<script lang="ts">\nimport { defineComponent } from \'vue\';\nimport {\n  PageHeader,\n  CodeBlock\n} from \'@/docs/components\';\n\nexport default defineComponent({\n  name: \'DocsGettingStartedQuickStart\',\n  components: {\n    PageHeader,\n    CodeBlock\n  }\n});\n<\/script>\n\n<style lang="scss">\n</style>\n'}}]);
//# sourceMappingURL=examples73.6a215ef8.js.map