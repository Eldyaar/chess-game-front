import type { FC } from 'react'
import type { Player } from '../../modules/player/player'

export const CurrentPlayer: FC<{ currentPlayer: Player | null }> = ({
	currentPlayer,
}) => {
	return <h3>Текущий игрок: {currentPlayer?.color}</h3>
}
