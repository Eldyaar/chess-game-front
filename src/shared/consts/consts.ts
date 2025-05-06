export const Colors = {
	WHITE: 'white',
	BLACK: 'black',
} as const

export type Colors = (typeof Colors)[keyof typeof Colors]

export const FigureNames = {
	FIGURE: 'Фигура',
	KING: 'Король',
	QUEEN: 'Ферзь',
	KNIGHT: 'Конь',
	PAWN: 'Пешка',
	ROOK: 'Ладья',
	BISHOP: 'Слон',
} as const

export type FigureNames = (typeof FigureNames)[keyof typeof FigureNames]
