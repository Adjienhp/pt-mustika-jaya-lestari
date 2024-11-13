import React from 'react'

const Detail = ({ desc, label }) => {
	return (
		<div className="flex flex-column align-items-start mb-2">
			<p className="label">{`${label} :`}</p>
			<p className="desc">{desc}</p>
		</div>
	)
}

export default Detail
