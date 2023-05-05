import Top from "./footerComps/Top.jsx"
import Bottom from "./footerComps/Bottom.jsx"

import { motion } from "framer-motion"

export default function Footer() {
	return (
		<footer className="footer">
			<motion.div
				initial={{ scale: 0, y: 200 }}
				animate={{ scale: 1, y: 0 }}
				transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
				className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"
			>
				<Top />
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<Bottom />
			</motion.div>
		</footer>
	)
}
