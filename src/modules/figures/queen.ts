import blackLogo from '../../assets/black-queen.svg'
import whiteLogo from '../../assets/white-queen.svg'
import { Colors, FigureNames } from '../../shared/consts/consts'
import type { Cell } from '../cell/cell'
import { Figure } from './figure'


export class Queen extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)

		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
		this.name = FigureNames.QUEEN
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		if (this.cell.isEmptyVertical(target)) {
			return true
		}
		if (this.cell.isEmptyHorizontal(target)) {
			return true
		}
		if (this.cell.isEmptyDiagonal(target)) {
			return true
		}

		return false
	}
}