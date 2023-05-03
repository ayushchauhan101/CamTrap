import Top from './footerComps/Top.jsx'
import Bottom from './footerComps/Bottom.jsx'

export default function Footer() {
	return (
		<footer className="bg-white dark:bg-gray-900">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<Top />
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<Bottom />
			</div>
		</footer>
	)
}
