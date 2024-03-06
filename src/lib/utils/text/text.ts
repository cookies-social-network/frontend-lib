type MarkTextOptionsType = {
	repString: string
	fullString: string
	tag?: 'strong' | 'span'
	options?: {
		class?: HTMLElement['className']
		style?: Partial<CSSStyleDeclaration>
	}
}
  
export const markText = (params: MarkTextOptionsType) => {
	const {
			repString,
			fullString,
			tag = 'strong',
			options,
	} = params

	if (!repString) {
		return fullString
	}

	const regex = new RegExp(repString, 'gi')

	return fullString.replace(regex, (match) => {
		const classAttribute = options?.class ? ` class="${options.class}"` : ''
		const styleAttribute = options?.style ? ` style="${options.style}"` : ''

		return `<${tag}${classAttribute}${styleAttribute}>${match}</${tag}>`
	})
}

export const setDeclination = (count: number, words: string[]) => {
	const CASES = [2, 0, 1, 1, 1, 2]

	return words[count % 1 !== 0 ? 1 : count % 100 > 4 && count % 100 < 20 ? 2 : CASES[count % 10 < 5 ? count % 10 : 5]]
}
