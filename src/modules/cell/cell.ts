import { nanoid } from 'nanoid'
import type { Colors } from '../../shared/conts/const'
import type { Board } from '../board/board'
import type { Figure } from '../figure/figure'

export class Cell {
	readonly x: number
	readonly y: number
	readonly color: Colors
	figure: Figure | null
	board: Board
	id: string // for react keys
	available: boolean // can you move

	constructor(
		board: Board,
		x: number,
		y: number,
		color: Colors,
		figure: Figure | null
	) {
		this.x = x
		this.y = y
		this.color = color
		this.figure = figure
		this.board = board
		this.available = false
		this.id = nanoid()
	}
}
