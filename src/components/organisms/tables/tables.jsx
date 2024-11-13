import React, { Fragment } from 'react'
import { Container, Table, Pagination } from 'react-bootstrap'
import { FormattedName, ModalUser } from '../../moleculs'
import { useHooks } from './tables-hof'
import './style.scss'

const Tables = () => {
	const {
		datas: {
			data,
			page,
			show,
			error,
			isError,
			openBio,
			isLoading,
			totalPages,
			currentData,
		},
		methods: {
			setPage,
			formatDate,
			handleShow,
			handleClose,
			substringBio,
			handleShowBio,
			paginationItem,
		},
	} = useHooks()

	return (
		<div id="table">
			<Container>
				<div className="table-wrapper">
					<h1 className="title">Daftar Karyawan</h1>
					<Table>
						<thead>
							<tr>
								{data?.header?.map((item) => (
									<Fragment key={item.id}>
										<th className="text-center">
											{item.name}
										</th>
									</Fragment>
								))}
							</tr>
						</thead>
						<tbody>
							{currentData?.map((item) => (
								<tr key={item.id}>
									<td className="text-center">
										<div className="flex">
											<img src="" alt="" />
											<div>
												<FormattedName
													name={item.name}
													onClick={() =>
														handleShow(item)
													}
												/>
											</div>
										</div>
									</td>
									<td className="text-center">
										{item.number}
									</td>
									<td className="text-center">
										{formatDate(item.dateStart)}
									</td>
									<td className="text-center">
										{item.identityNumber}
									</td>
									<td className="text-center">
										{item.birth}
									</td>
									<td className="text-center">
										{substringBio(item.bio, item.id)}
										<button
											className="btn-show"
											onClick={() =>
												handleShowBio(item.id)
											}
										>
											{openBio[item.id]
												? 'Tutup'
												: 'Lihat Selengkapnya'}
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<Pagination>
						<Pagination.Prev
							onClick={() =>
								setPage((prev) => Math.max(prev - 1, 1))
							}
							disabled={page === 1}
						/>
						{paginationItem().map((item, idx) => (
							<Pagination.Item
								key={idx}
								active={item === page}
								onClick={() => {
									if (item !== '...') {
										setPage(item)
									}
								}}
							>
								{item}
							</Pagination.Item>
						))}
						<Pagination.Next
							onClick={() =>
								setPage((prev) =>
									Math.min(prev + 1, totalPages)
								)
							}
							disabled={page === totalPages}
						/>
					</Pagination>
				</div>
			</Container>
			{show && <ModalUser show={show} handleClose={handleClose} />}
		</div>
	)
}

export default Tables
