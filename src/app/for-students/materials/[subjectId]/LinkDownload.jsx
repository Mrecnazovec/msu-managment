'use client'

import { saveAs } from 'file-saver'

const LinkDownload = ({ path, title }) => {
	console.log(path)

	const handleDownload = (path, fileName, format) => {
		saveAs(`${path}`, `${fileName}.${format}`)
	}

	return (
		<>
			{path.map((item, index) => (
				<div key={index}>
					{console.log(item.folder)}
					{item.folder.length === 1 && item.folder[0].path === '' && item.folder[0].fileName === '' ? (
						''
					) : (
						<>
							{' '}
							<p>Скачать файлы {item.format}</p>
							<div className='downloadButton-box'>
								{item.folder.map((file, index) => (
									<button key={index} onClick={() => handleDownload(file.path, file.fileName, item.format)}>
										{file.fileName}
									</button>
								))}
							</div>
						</>
					)}
				</div>
			))}
		</>
	)
}

export default LinkDownload
