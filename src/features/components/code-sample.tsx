/* eslint-disable @typescript-eslint/no-var-requires */

import { x } from '@xstyled/styled-components'

import { CodeBlock, atomOneDark } from 'react-code-blocks'

import type { Template, Category } from '@/models'

import { getSampleCode } from '@/utils/getSampleCode'

type CodeSampleProps = {
  template: Template
  category: Category
}

export const CodeSample = ({ template, category }: CodeSampleProps) => {
  const code = getSampleCode(category.id, template.filename)

  return (
    <x.div fontFamily="mono" fontSize="sm" position="relative">
      <CodeBlock
        text={code}
        language="tsx"
        theme={atomOneDark}
        showLineNumbers={false}
      />
    </x.div>
  )
}
