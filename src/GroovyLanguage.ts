import { registerRulesForLanguage } from "monaco-ace-tokenizer"
import GroovyHighlightRules from "monaco-ace-tokenizer/lib/ace/definitions/groovy"
import * as monaco from "monaco-editor"
monaco.languages.register({
  id: "groovy",
})
registerRulesForLanguage("groovy", new GroovyHighlightRules())
