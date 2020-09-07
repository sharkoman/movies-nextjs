export const trim_words = ({ text, charNumber = 50, showDots = false }: { text: string; charNumber?: number; showDots?: boolean; }): string => {
	return `${text.slice(0, charNumber)}${showDots ? '...' : ''}`;
}