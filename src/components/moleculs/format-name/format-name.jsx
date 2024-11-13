import React, { Fragment } from 'react'

const FormattedName = ({ name, onClick }) => {
	if (name) {
		const parts = name.split('\\n')

		return parts.map((line, index) => {
			if (index === 1) {
				return (
					<Fragment key={index}>
						<span className="email">{line}</span>
					</Fragment>
				)
			}

			return (
				<Fragment key={index}>
					<button className="name" onClick={onClick}>
						{line}
					</button>
					<br />
				</Fragment>
			)
		})
	}
	return name
}

export default FormattedName
