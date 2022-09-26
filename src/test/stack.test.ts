import { dogstack } from "../util/stackClass";
import { describe, expect, test, beforeAll } from '@jest/globals'




beforeAll(() => {
    dogstack.push('collie')
    dogstack.push('pug')
    dogstack.push('chihuahua')
})

describe('stack module, test pop()', () => {
    test('added strings to stack and remove via LIFO', () => {
        expect(dogstack.pop()).toBe('chihuahua')
    })
})

describe('test list()', () => {
    test('should list collie and pug', () => {
        expect(dogstack.list()).toStrictEqual(['collie','pug'])
    })
})


