import { dogqueue } from '../util/queueClass'
import { describe, expect, test, beforeAll } from '@jest/globals'


beforeAll(() => {
    dogqueue.enqueue('pug')
    dogqueue.enqueue('dalmation')
    dogqueue.enqueue('bluetic hound')
})

describe('queue module, test dequeue', () => {
    test(('dequeue should return FIFO'), () => {
        expect(dogqueue.dequeue()).toBe('pug')
    })
})

describe('test list()', () => {
    test(('should list dalmation and blutic'), () => {
        expect(dogqueue.list()).toStrictEqual(['dalmation', 'bluetic hound'])
    })
})

describe('test size()', () => {
    test(('should return 2'), () => {
        expect(dogqueue.size()).toBe(2)
    })
})
