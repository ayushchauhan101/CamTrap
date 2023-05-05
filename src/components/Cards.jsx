import images from "../assets/Images"
import { motion } from "framer-motion"

function PrintImage() {
	return images.map((image, i) => (
		<motion.div
			key={i}
			initial={{ opacity: 0,scale:0}}
			animate={{ opacity: 1,scale:1}}
			transition={{delay:0.2 + i, type:"tween", ease:"easeIn"}}
		>
			<motion.img src={image.link} alt={image.link} />
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
