import { useEffect, useState, type FC } from 'react'
import { Board } from '../modules/board/board'
import { BoardComponent } from '../shared/ui/board-component'

export const App: FC = () => {
	const [board, setBoard] = useState(new Board())

	useEffect(() => {
		restart()
	}, [])

	function restart() {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addFigures()
		setBoard(newBoard)
	}

	return (
		<div className='app'>
			<BoardComponent board={board} setBoard={setBoard} />
		</div>
	)
}
