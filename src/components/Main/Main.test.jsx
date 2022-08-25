import React from 'react'
import { removePunctuation } from './utility'

describe('Punctuation removal test', () => {
    const testcases = [
        { text: 'hello world', expected: 'hello world' },
        { text: 'hello%world', expected: 'hello world' },
        { text: '!hello world', expected: ' hello world' },
        { text: ';hello?world!', expected: ' hello world ' },
        { text: 'hello;world', expected: 'hello world' }, 
        { text: 'hello world?', expected: 'hello world ' }
    ]

    testcases.map(tc => {
        it(`when ${tc.text} returns ${tc.expected}`, () => {
            const actual = removePunctuation(tc.text)

            expect(actual).toBe(tc.expected)
        })
    })
})