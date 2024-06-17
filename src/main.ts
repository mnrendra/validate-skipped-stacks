import type { SkippedStacks, ValidSkippedStacks } from './types'

/**
 * Validate skipped stacks.
 *
 * @param {string} skippedStack - A skipped stack.
 * @param {string|string[]} [skippedStacks] - Skipped stacks (optional).
 *
 * @returns {string[]} Valid skipped stacks.
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

  // Return valid skipped stacks.
  return validSkippedStacks
}

// Export the `validateSkippedStacks` as the default value.
export default validateSkippedStacks
