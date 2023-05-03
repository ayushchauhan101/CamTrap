import images from "../assets/Images"

export default function Cards() {
	function PrintImage() {
		return images.map((image, i) => (
			<div key={i} className="card">
				<img src={image.link} alt={image.link} />
			</div>
		))
	}

	return (
		<div className="body">
			<div className="gallery">
				<PrintImage />
			</div>
		</div>
	)
}
