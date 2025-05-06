import { useEffect, useRef, useState, type FC } from 'react'
import '../../main/styles/timer.css'
import type { Player } from '../../modules/player/player'
import { Colors } from '../consts/consts'

export const Timer: FC<{
	currentPlayer: Player | null
	restart: () => void
}> = ({ currentPlayer, restart }) => {
	const [blackTime, setBlackTime] = useState(200)
	const [whiteTime, setWhiteTime] = useState(200)
	const timer = useRef<null | ReturnType<typeof setInterval>>(null)

	useEffect(() => {
		startTimer()
	}, [currentPlayer])

	function startTimer() {
		if (timer.current) {
			clearInterval(timer.current)
		}

		const callback =
			currentPlayer?.color === Colors.WHITE
				? decrementWhiteTimer
				: decrementBlackTimer
		timer.current = setInterval(callback, 1000)
	}

	function decrementBlackTimer() {
		setBlackTime(t => t - 1)
	}

	function decrementWhiteTimer() {
		setWhiteTime(t => t - 1)
	}

	function handleRestart() {
		setWhiteTime(200)
		setBlackTime(200)
		restart()
	}

	function getZero(value: number): string {
		return value < 10 ? `0${value} сек` : `${value} сек`
	}

	return (
		<div className='timer'>
			<button onClick={handleRestart}>Restart game</button>
			<p>Черные - {getZero(blackTime)}</p>
			<p>Белые - {getZero(whiteTime)}</p>
		</div>
	)
}
