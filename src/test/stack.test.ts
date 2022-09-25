import { dogstack } from "../util/stackClass";
import { describe, expect, test, beforeAll } from '@jest/globals'




beforeAll(() => {
    dogstack.push('collie')
})

describe('stack module', () => {
    test('adds string to stack and removes via LIFO', () => {
        expect(dogstack.pop()).toBe('collie')
    })
})
