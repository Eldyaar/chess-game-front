import blackLogo from '../../assets/black-king.svg'
import whiteLogo from '../../assets/white-king.svg'
import { Colors, FigureNames } from '../../shared/conts/const'
import type { Cell } from '../cell/cell'
import { Figure } from './figure'

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)

		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
		this.name = FigureNames.KING
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}

		return true
	}
}
