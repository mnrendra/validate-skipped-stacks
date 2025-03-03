import type { SkippedStacks, ValidSkippedStacks } from './types'

/**
 * Validate a name or a list of names of stack traces that need to be skipped.
 *
 * @param {string} skippedStack - A name of a stack trace that need to be
 * skipped.
 * @param {SkippedStacks} [skippedStacks] - Optional a name or a list of names
 * of stack traces that need to be skipped.
 *
 * @returns {ValidSkippedStacks} A list of names of stack traces that need to be
 * skipped.
 *
 * @see https://www.npmjs.com/package/@mnrendra/validate-skipped-stacks
 */
const validateSkippedStacks = (
  skippedStack: string,
  skippedStacks: SkippedStacks = []
): ValidSkippedStacks => {
  // Validate skipped stacks.
  const validSkippedStacks = !Array.isArray(skippedStacks)
    ? [skippedStacks]
    : skippedStacks

  // Add `skippedStack` as the first element of `validSkippedStacks`.
  validSkippedStacks.unshift(skippedStack)

  // Return a valid skipped stacks.
  return validSkippedStacks
}

// Export `validateSkippedStacks` as the default value.
export default validateSkippedStacks
