export const setDeclination = (count: number, words: string[]) => {
    const CASES = [2, 0, 1, 1, 1, 2]
  
    return words[count % 1 !== 0 ? 1 : count % 100 > 4 && count % 100 < 20 ? 2 : CASES[count % 10 < 5 ? count % 10 : 5]]
}
  
export const replaceString = (repString: string, fullString: string): string => {
    const regex = new RegExp(repString, 'gi')

    return fullString.replace(regex, (match) => `<strong>${match}</strong>`)
}
