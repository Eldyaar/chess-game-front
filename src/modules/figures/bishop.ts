import blackLogo from '../../assets/black-bishop.svg'
import whiteLogo from '../../assets/white-bishop.svg'
import { Colors, FigureNames } from '../../shared/consts/consts'
import type { Cell } from '../cell/cell'
import { Figure } from './figure'

export class Bishop extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)

		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
		this.name = FigureNames.BISHOP
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		if (this.cell.isEmptyDiagonal(target)) {
			return true
		}
		
		return false
	}
}
