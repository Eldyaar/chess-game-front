import blackLogo from '../../assets/black-pawn.svg'
import whiteLogo from '../../assets/white-pawn.svg'
import { Colors, FigureNames } from '../../shared/conts/const'
import type { Cell } from '../cell/cell'
import { Figure } from './figure'

export class Pawn extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)

		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
		this.name = FigureNames.PAWN
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}

		return true
	}
}
