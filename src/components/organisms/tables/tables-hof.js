import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDetailUser, setHeader } from '../../../store'
import { axiosInstance } from '../../../utils'

export const useHooks = () => {
	const dispatch = useDispatch()

	const [page, setPage] = useState(1)
	const [show, setShow] = useState(false)
	const [openBio, setOpenBio] = useState({})

	const { data, error, isLoading, isError, isSuccess } = useQuery({
		queryKey: ['employees'],
		queryFn: () =>
			axiosInstance
				.get('example/employee', { params: { amount: 100 } })
				.then(({ data }) => data),
	})

	const perPage = 5
	const startIndex = (page - 1) * perPage
	const endIndex = startIndex + perPage
	const currentData = data?.data?.slice(startIndex, endIndex)
	const totalPages = Math.ceil((data?.data.length || 0) / perPage)

	const paginationItem = () => {
		const items = []
		const data = 2

		items.push(1)

		if (page - data > 2) {
			items.push('...')
		}

		for (
			let i = Math.max(2, page - data);
			i <= Math.min(totalPages - 1, page + data);
			i++
		) {
			items.push(i)
		}

		if (page + data < totalPages - 1) {
			items.push('...')
		}

		if (totalPages > 1) {
			items.push(totalPages)
		}

		return items
	}

	const formatDate = (dateString) => {
		if (dateString) {
			const date = new Date(dateString)
			return format(date, 'dd MMMM yyyy', { locale: id })
		}
		return dateString
	}

	const handleShowBio = (id) => {
		setOpenBio((prevOpenBio) => ({
			...prevOpenBio,
			[id]: !prevOpenBio[id],
		}))
	}

	const substringBio = (bio, id) => {
		return openBio[id] ? bio : bio?.slice(0, 35) + '... '
	}

	const handleClose = () => {
		setShow(false)
	}

	const handleShow = (item) => {
		setShow(true)
		dispatch(setDetailUser(item))
	}

	useEffect(() => {
		if (isSuccess && data?.header) {
			dispatch(setHeader(data.header))
		}
	}, [isSuccess, data, dispatch])

	return {
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
	}
}
