# @mnrendra/validate-skipped-stacks
Validate skipped stacks.

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

## License
[MIT](https://github.com/mnrendra/validate-skipped-stacks/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
