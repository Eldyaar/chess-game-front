import clsx from 'clsx'
import type { FC } from 'react'
import type { Cell } from '../../modules/cell/cell'

export const CellComponent: FC<{
	cell: Cell
	selected: boolean
	onClick: (cell: Cell) => void
}> = ({ cell, selected, onClick }) => {
	return (
		<div
			className={clsx(
				cell.color,
				'cell',
				selected && 'selected',
				cell.available && cell.figure && 'take-figure'
			)}
			onClick={() => onClick(cell)}
		>
			{!cell.figure && cell.available && <div className='available' />}
			{cell.figure?.logo && (
				<img
					src={cell.figure.logo}
					alt={`${cell.figure.color}-${cell.figure.name}`}
				/>
			)}
		</div>
	)
}
