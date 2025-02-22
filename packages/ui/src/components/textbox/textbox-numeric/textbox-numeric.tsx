import { ComponentChildren, h } from 'preact'

import { createClassName } from '../../../utilities/create-class-name.js'
import { createComponent } from '../../../utilities/create-component.js'
import textboxStyles from '../textbox/textbox.module.css'
import {
  RawTextboxNumeric,
  RawTextboxNumericProps
} from './private/raw-textbox-numeric.js'
import textboxNumericStyles from './textbox-numeric.module.css'

export type TextboxNumericProps = RawTextboxNumericProps & {
  icon?: ComponentChildren
}

export const TextboxNumeric = createComponent<
  HTMLInputElement,
  TextboxNumericProps
>(function ({ icon, ...rest }, ref) {
  if (typeof icon === 'string' && icon.length !== 1) {
    throw new Error(`String \`icon\` must be a single character: ${icon}`)
  }

  return (
    <div
      class={createClassName([
        textboxStyles.textbox,
        typeof icon === 'undefined' ? null : textboxStyles.hasIcon,
        rest.disabled === true ? textboxStyles.disabled : null
      ])}
    >
      <RawTextboxNumeric
        {...rest}
        ref={ref}
        class={createClassName([
          textboxStyles.input,
          textboxNumericStyles.input
        ])}
      />
      {typeof icon === 'undefined' ? null : (
        <div class={textboxStyles.icon}>{icon}</div>
      )}
    </div>
  )
})
