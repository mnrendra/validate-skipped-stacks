# @mnrendra/validate-skipped-stacks
Validate a name or a list of names of the stack traces to be skipped. Valid skipped stacks are used to skip a stack or a list of stacks when you call [`@mnrendra/stack-trace`](https://www.npmjs.com/package/@mnrendra/stack-trace) or [`@mnrendra/read-stacked-file`](https://www.npmjs.com/package/@mnrendra/read-stacked-file), so you can get the stack(s) of your consumer target file.

## Install
```bash
npm i @mnrendra/validate-skipped-stacks
```

## Usage

Using `CommonJS`:
```javascript
const validateSkippedStacks = require('@mnrendra/validate-skipped-stacks')

const validSkippedStacks = validateSkippedStacks('skipped-stack')
console.log(validSkippedStacks)
// Output: ['skipped-stack']

const validSkippedStacks = validateSkippedStacks('skipped-stack', 'additional-skipped-stack')
console.log(validSkippedStacks)
// Output: ['skipped-stack', 'additional-skipped-stack']

const validSkippedStacks = validateSkippedStacks('skipped-stack', ['additional-skipped-stack'])
console.log(validSkippedStacks)
// Output: ['skipped-stack', 'additional-skipped-stack']
```

Using `ES Module`:
```javascript
import validateSkippedStacks from '@mnrendra/validate-skipped-stacks'

const validSkippedStacks = validateSkippedStacks('skipped-stack')
console.log(validSkippedStacks)
// Output: ['skipped-stack']

const validSkippedStacks = validateSkippedStacks('skipped-stack', 'additional-skipped-stack')
console.log(validSkippedStacks)
// Output: ['skipped-stack', 'additional-skipped-stack']

const validSkippedStacks = validateSkippedStacks('skipped-stack', ['additional-skipped-stack'])
console.log(validSkippedStacks)
// Output: ['skipped-stack', 'additional-skipped-stack']
```

## Types
```typescript
import type {
  SkippedStacks, // Skipped stacks argument. It can be a string or a list of strings. Make sure the string(s) is/are the name(s) of the stack trace(s) to be skipped.
  ValidSkippedStacks // A list of stack names to be skipped.
} from '@mnrendra/validate-skipped-stacks'
```

## License
[MIT](https://github.com/mnrendra/validate-skipped-stacks/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
