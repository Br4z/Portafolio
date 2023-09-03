import "../styles/Info.css"

const Info = ({ name, biography }) => {
	return (
		<div className="Info">
			<h1>{name}</h1>
			<p>{biography}</p>
		</div>
	)
}

export default Info