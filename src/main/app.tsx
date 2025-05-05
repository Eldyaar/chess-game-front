import { useEffect, useState, type FC } from 'react'
import { Board } from '../modules/board/board'
import { BoardComponent } from '../shared/ui/board'

export const App: FC = () => {
	const [board, setBoard] = useState(new Board())

	useEffect(() => {
		restart()
	}, [])

	function restart() {
		const newBoard = new Board()
		newBoard.initCells()
		setBoard(newBoard)
	}

	return (
		<div>
			<BoardComponent board={board} setBoard={setBoard} />
		</div>
	)
}
