import { nanoid } from 'nanoid'
import logo from '../../assets/white-queen.svg'
import { FigureNames, type Colors } from '../../shared/conts/const'
import type { Cell } from '../cell/cell'

export class Figure {
	id: string
	color: Colors
	logo: typeof logo | null
	cell: Cell
	name: FigureNames

	constructor(color: Colors, cell: Cell) {
		this.color = color
		this.cell = cell
		this.cell.figure = this
		this.logo = null
		this.name = FigureNames.QUEEN
		this.id = nanoid()
	}

	canMove(target: Cell): boolean {
		if (target.figure?.color === this.color) {
			return false
		}
		if (target.figure?.name === FigureNames.KING) {
			return false
		}

		return true
	}

	moveFigure(target: Cell) {
		this.cell = target
	}
}
