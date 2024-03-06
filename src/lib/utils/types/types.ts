export const isNil = (val: unknown): val is null  => val === null

export const isUndefined = (val: unknown): val is undefined => val === undefined

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export const isNumber = (val: unknown): val is number => typeof val === 'number'
