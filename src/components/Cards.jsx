import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const url = import.meta.env.VITE_URL

function PrintImage() {
	const [allImages, setAllImages] = useState([])

	useEffect(() => {
		// api fetching function
		async function fetchUsers() {
			const response = await fetch(url)
			if (response.status === 200) {
				const data = await response.json()
				setAllImages(data)
			} else {
				throw new Error(`Request failed with status code ${response.status}`)
			}
		}
		fetchUsers()
	}, [])

	return allImages.map((image, i) => (
		<motion.div
			key={i}
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				delay: i * 0.5,
				type: "spring",
				ease: "easeInOut",
				stiffness: 40,
			}}
		>
			<motion.img src={image.link} />
		</motion.div>
	))
}

export default function Cards() {
	return (
		<div className="body">
			<div className="gallery">
				<PrintImage />
			</div>
		</div>
	)
}
