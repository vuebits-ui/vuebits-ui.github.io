(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples69"],{"433f":function(n,o,e){"use strict";e.r(o),o["default"]='<template>\n  <Sandbox\n    id="example"\n    title="Example"\n  >\n    <Preview>\n      <div\n        v-for="i in 5"\n        :key="i"\n      >\n        <VTooltip\n          v-for="j in 5"\n          :key="j"\n          style="width: 20%"\n          :bordered="bordered"\n          :elevated="elevated"\n          :round="round"\n          :rounded="rounded"\n          :rounded-lg="roundedLg"\n          :dark="dark"\n          :light="light"\n          :color="color"\n          :disabled="disabled"\n          :clickable="clickable"\n          :top="top"\n          :right="right"\n          :bottom="bottom"\n          :left="left"\n          :no-wrap="noWrap"\n        >\n          <template #activator>\n            <VButton\n              block\n              hoverable\n              bordered\n            >\n              {{ clickable ? \'Click\' : \'Hover\' }} me to show tooltip\n            </VButton>\n          </template>\n          <div style="width: 200px;">\n            <h1>Hello!</h1>\n            Tooltip: row {{ i }}, column {{ j }}\n          </div>\n        </VTooltip>\n      </div>\n    </Preview>\n    <Knobs>\n      <KnobBoolean\n        v-model="bordered"\n        label="Bordered"\n      />\n      <KnobBoolean\n        v-model="elevated"\n        label="Elevated"\n      />\n      <KnobBoolean\n        v-model="rounded"\n        label="Rounded"\n      />\n      <KnobBoolean\n        v-model="roundedLg"\n        label="Rounded lg"\n      />\n      <KnobBoolean\n        v-model="round"\n        label="Round"\n      />\n      <KnobBoolean\n        v-model="dark"\n        label="Dark"\n      />\n      <KnobBoolean\n        v-model="light"\n        label="Light"\n      />\n      <KnobListItem\n        v-model="color"\n        :items="colors"\n        label="Color"\n      />\n      <KnobBoolean\n        v-model="disabled"\n        label="Disabled"\n      />\n      <KnobBoolean\n        v-model="clickable"\n        label="Clickable"\n      />\n      <KnobBoolean\n        v-model="top"\n        label="top"\n      />\n      <KnobBoolean\n        v-model="right"\n        label="right"\n      />\n      <KnobBoolean\n        v-model="bottom"\n        label="bottom"\n      />\n      <KnobBoolean\n        v-model="left"\n        label="left"\n      />\n      <KnobBoolean\n        v-model="noWrap"\n        label="no wrap"\n      />\n    </Knobs>\n  </Sandbox>\n</template>\n\n<script>\nimport {\n  Preview,\n  Sandbox,\n  Knobs,\n  KnobListItem,\n  KnobBoolean\n} from \'@/docs/components\';\nimport {\n  VTooltip,\n  VButton\n} from \'@/components\';\nimport { colors } from \'@/docs/helpers/story-params\';\n\nexport default {\n  name: \'TooltipExample\',\n  components: {\n    Preview,\n    Sandbox,\n    Knobs,\n    KnobListItem,\n    KnobBoolean,\n    VTooltip,\n    VButton\n  },\n  data () {\n    return {\n      bordered: false,\n      elevated: false,\n      round: false,\n      rounded: false,\n      roundedLg: false,\n      dark: true,\n      light: false,\n      color: \'\',\n      colors,\n      disabled: false,\n      clickable: false,\n      top: false,\n      right: false,\n      bottom: false,\n      left: false,\n      noWrap: false\n    };\n  }\n};\n<\/script>\n'}}]);
//# sourceMappingURL=examples69.6e8b750c.js.map