'use client'

import { saveAs } from 'file-saver'

const LinkDownload = ({ path, title }) => {
	const handleDownloadRar = () => {
		saveAs(`${path}.rar`, `${title}.rar`)
	}
	const handleDownloadZip = () => {
		saveAs(`${path}.zip`, `${title}.zip`)
	}

	return (
		<>
			<button className='' onClick={handleDownloadRar}>
				Скачать учебные материалы (формат rar)
			</button>
			<button className='' onClick={handleDownloadZip}>
				Скачать учебные материалы (формат zip)
			</button>
		</>
	)
}

export default LinkDownload
