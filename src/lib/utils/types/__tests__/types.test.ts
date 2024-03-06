import { isBoolean, isNil, isNumber, isUndefined } from '../types'

import { describe, expect, it } from 'vitest'

describe('Testing types utils', () => { 
    it('should be null', () => {
        expect(isNil(null)).toBeTruthy()

        expect(isNil(undefined)).not.toBeTruthy()
    })

    it('should be undefined', () => { 
        expect(isUndefined(undefined)).toBeTruthy()

        expect(isUndefined(0)).not.toBeTruthy()

        expect(isUndefined(null)).not.toBeTruthy()
    })

    it('should be boolean', () => { 
        expect(isBoolean(true)).toBeTruthy()

        expect(isBoolean(false)).toBeTruthy()

        expect(isBoolean(0)).not.toBeTruthy()

        expect(isBoolean([])).not.toBeTruthy()

        expect(isBoolean('')).not.toBeTruthy()
    })

    it ('should be number', () => { 
        expect(isNumber(1)).toBeTruthy()

        expect(isNumber(0)).toBeTruthy()

        expect(isNumber('1')).not.toBeTruthy()

        expect(isNumber('')).not.toBeTruthy()
    })
})