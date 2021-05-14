(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples55"],{"72a5":function(n,t,e){"use strict";e.r(t),t["default"]='<template>\n  <Sandbox\n    id="example"\n    title="Example"\n  >\n    <Preview>\n      <VTabs\n        v-model="tab"\n        :items="tabs"\n      >\n        <template #1>\n          Tab 1 content\n        </template>\n        <template #2>\n          Tab 2 content\n        </template>\n        <template #3>\n          Tab 3 content\n        </template>\n      </VTabs>\n    </Preview>\n    <template #controls>\n      <Knobs>\n        <KnobListItem\n          v-model="tab"\n          :items="tabs"\n          label="Tab"\n        />\n      </Knobs>\n    </template>\n  </Sandbox>\n</template>\n\n<script>\nimport {\n  Preview,\n  Sandbox,\n  Knobs,\n  KnobListItem\n} from \'@/docs/components\';\nimport {\n  VTabs\n} from \'@/components\';\n\nexport default {\n  name: \'TabsExample\',\n  components: {\n    Preview,\n    Sandbox,\n    Knobs,\n    KnobListItem,\n    VTabs\n  },\n  data () {\n    return {\n      tabs: [\n        {\n          key: 1,\n          text: \'Tab 1\'\n        },\n        {\n          key: 2,\n          text: \'Tab 2\'\n        },\n        {\n          key: 3,\n          text: \'Tab 3\'\n        }\n      ],\n      tab: 2\n    };\n  }\n};\n<\/script>\n'}}]);
//# sourceMappingURL=examples55.67351433.js.map