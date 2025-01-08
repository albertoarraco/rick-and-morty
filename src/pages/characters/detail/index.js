import React, {useEffect, useState} from 'react';

const Character = ({url}) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true)
		fetch(url)
			.then(res => res.json())
			.then(setData)
			.finally(() => setLoading(false))
	}, [url])

	if(loading) {
		return <p>Loading...</p>
	}

	return (
		<li style={{'--bg-image': 'url(' + data.image + ')'}}>
			<span className={'tag-status'}>{data.status}</span>
			<p>{data.name}</p>
		</li>
	)
}

export default Character;
