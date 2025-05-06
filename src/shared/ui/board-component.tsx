import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import { Board } from '../../modules/board/board'
import type { Cell } from '../../modules/cell/cell'
import type { Player } from '../../modules/player/player'
import { CellComponent } from './cell-component'
import { CurrentPlayer } from './current-player'

export const BoardComponent: FC<{
	board: Board
	setBoard: (board: Board) => void
	currentPlayer: Player | null
	swapPlayer: () => void
}> = ({ board, setBoard, swapPlayer, currentPlayer }) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

	function onClick(cell: Cell) {
		if (
			selectedCell &&
			selectedCell !== cell &&
			selectedCell.figure?.canMove(cell)
		) {
			selectedCell.moveFigure(cell)
			swapPlayer()
			setSelectedCell(null)
			updateBoard()
		} else {
			if (cell.figure?.color === currentPlayer?.color) {
				setSelectedCell(cell)
			}
		}
	}

	useEffect(() => {
		highlightCells()
	}, [selectedCell])

	function highlightCells() {
		board.highlightCells(selectedCell)
		updateBoard()
	}

	function updateBoard() {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}

	return (
		<div>
			<CurrentPlayer currentPlayer={currentPlayer} />
			<div className='board'>
				{board.cells.map((row, idx) => (
					<React.Fragment key={idx}>
						{row.map(cell => (
							<CellComponent
								key={cell.id}
								cell={cell}
								onClick={onClick}
								selected={
									cell.x === selectedCell?.x && cell.y === selectedCell.y
								}
							/>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	)
}
