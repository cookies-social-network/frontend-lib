import { markText, setDeclination } from '../text'

import { describe, it, expect } from 'vitest'

describe('Testing text', () => { 
	describe('Testing setDeclination', () => { 
		it ('should be right the declination', () => { 
			expect(setDeclination(1, ['яблоко', 'яблока', 'яблок'])).toBe('яблоко')

			expect(setDeclination(3, ['яблоко', 'яблока', 'яблок'])).toBe('яблока')

			expect(setDeclination(5, ['яблоко', 'яблока', 'яблок'])).toBe('яблок')
		})
	})

	describe('Testing markText', () => { 
		it ('should be have strong tag', () => { 
			expect(markText({ repString: 'цил', fullString: 'Цилиндры' })).toBe('<strong>Цил</strong>индры')
		})

		it ('should be have span tag', () => {
			expect(markText({ repString: 'цил', fullString: 'Цилиндры', tag: 'span' })).toBe('<span>Цил</span>индры')
		})

		it ('should have class and style', () => {
			const markTextFn = markText({
				 repString: 'цил',
				  fullString: 'Цилиндры',
					 tag:'span',
					  options:{
							class: 'test',
						  style: 'color: green'
						} 
				})

			expect(markTextFn).toBe('<span class="test" style="color: green">Цил</span>индры')
		})

		it ('should be have empty full string', () => { 
			expect(markText({ repString: 'цил', fullString: '' })).toBe('')
		})

		it ('should be have empty rep string', () => { 
			expect(markText({ repString: '', fullString: 'Цилиндры' })).toBe('Цилиндры')
		})
	})
})
