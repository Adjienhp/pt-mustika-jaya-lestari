import React from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import FormattedName from '../format-name'
import { Detail } from './component'
import './style.scss'

const ModalUser = ({ show, handleClose }) => {
	const isHeader = useSelector((state) => state.header.header)
	const isDetailUser = useSelector((state) => state.detailUser.detailUser)

	return (
		<Modal
			centered
			show={show}
			backdrop="static"
			onHide={handleClose}
			className="modal-user"
		>
			<Modal.Header closeButton />
			<Modal.Body>
				<div className="flex d-flex align-items-center gap-3 mb-3">
					<img src="" alt="" className="image-user" />
					<div className="detail-user">
						<FormattedName name={isDetailUser.name} />
					</div>
				</div>
				{isHeader
					.filter((item) => item.id !== 'name')
					.map((item) => (
						<Detail
							key={item.id}
							label={item.name}
							desc={isDetailUser[item.id] || ''}
						/>
					))}
			</Modal.Body>
		</Modal>
	)
}

export default ModalUser
