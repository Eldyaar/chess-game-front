import type { FC } from 'react'
import { Figure } from '../../modules/figures/figure'

export const LostFigures: FC<{ title: string; figures: Figure[] }> = ({
	title,
	figures,
}) => {
	return (
		<div className='lost'>
			<h3 style={{ marginBottom: 10 }}>{title}</h3>
			<ul className='lost-list'>
				{figures.map(figure => (
					<li key={figure.id}>
						- {figure.name}
						{figure.logo && (
							<div>
								<img
									width={20}
									height={20}
									src={figure.logo}
									alt={`${figure.color}-${figure.name}`}
								/>
							</div>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}
