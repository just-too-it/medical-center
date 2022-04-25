export const changingWords = (count: number, words: string[]) => {
    if (count > 100) count = count % 100;
    if (count <= 20 && count >= 10) return words[2];
    if (count > 20) count = count % 10;
    return count === 1 ? words[0] : count > 1 && count < 5 ? words[1] : words[2];
}