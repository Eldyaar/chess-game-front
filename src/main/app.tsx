import { useEffect, useState, type FC } from 'react'
import { Board } from '../modules/board/board'
import { Player } from '../modules/player/player'
import { Colors } from '../shared/consts/consts'
import { BoardComponent } from '../shared/ui/board-component'
import { LostFigures } from '../shared/ui/lost-figures'
import { Timer } from '../shared/ui/timer'

export const App: FC = () => {
	const [board, setBoard] = useState(new Board())
	const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

	useEffect(() => {
		restart()
		setCurrentPlayer(whitePlayer)
	}, [])

	function restart() {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addFigures()
		setBoard(newBoard)
	}

	function swapPlayer() {
		setCurrentPlayer(
			currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
		)
	}

	return (
		<div className='app'>
			<Timer restart={restart} currentPlayer={currentPlayer} />
			<BoardComponent
				board={board}
				setBoard={setBoard}
				currentPlayer={currentPlayer}
				swapPlayer={swapPlayer}
			/>
			<LostFigures title={'Черные фигуры'} figures={board.lostBlackFigures} />
			<LostFigures title={'Белы фигуры'} figures={board.lostWhiteFigures} />
		</div>
	)
}
