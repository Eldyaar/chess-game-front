import type { FC } from 'react'
import type { Cell } from '../../modules/cell/cell'
import clsx from 'clsx'

export const CellComponent: FC<{cell: Cell}> = ({cell }) => {
	return <div className={clsx(cell.color, 'cell')}></div>
}
