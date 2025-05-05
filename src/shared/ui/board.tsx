import type { FC } from 'react'
import React from 'react'
import type { Board } from '../../modules/board/board'
import { CellComponent } from './cell'

export const BoardComponent: FC<{
	board: Board
	setBoard: (board: Board) => void
}> = ({ board, setBoard }) => {
	return (
		<div className='board'>
			{board.cells.map((row, idx) => (
				<React.Fragment key={idx}>
					{row.map(cell => (
						<CellComponent key={cell.id} cell={cell} />
					))}
				</React.Fragment>
			))}
		</div>
	)
}
