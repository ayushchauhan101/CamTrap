export default function Top() {
	return (
		<div className="md:flex md:justify-between">
			<div className="mb-6 md:mb-0">
				<a href="" className="flex items-center">
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Finstagram
					</span>
				</a>
			</div>
			<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
				<div>
					<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						Resources
					</h2>
					<ul className="text-gray-600 dark:text-gray-400 font-medium">
						<li>
							<a href="https://tailwindcss.com/" className="hover:underline">
								Tailwind CSS
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						Follow us
					</h2>
					<ul className="text-gray-600 dark:text-gray-400 font-medium">
						<li className="mb-4">
							<a
								href=""
								className="hover:underline "
							>
								Github
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						Legal
					</h2>
					<ul className="text-gray-600 dark:text-gray-400 font-medium">
						<li className="mb-4">
							<a href="#" className="hover:underline">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Terms &amp; Conditions
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
