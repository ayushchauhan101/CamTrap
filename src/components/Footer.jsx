import Top from "./footerComps/Top.jsx"
import Bottom from "./footerComps/Bottom.jsx"

import { motion } from "framer-motion"

export default function Footer() {
	return (
		<footer className="footer">
			<motion.div
				initial={{ opacity: 0, x: -200 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					type: "spring",
					ease: "easeInOut",
					damping: 10,
					stiffness: 100,
					duration: 0.2,
				}}
				className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"
			>
				<Top />
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<Bottom />
			</motion.div>
		</footer>
	)
}
