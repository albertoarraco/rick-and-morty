import React, {useEffect, useState} from 'react';

const placeholderImage = 'https://elcomercio.pe/resizer/v2/KRKOINCP7JGR7KWT4HNBDSJPDA.jpg?auth=8a023522ad969a505c109d936b7e56d4948d7b7e88b9df5ec736e46b8db0d567&width=300&height=300&quality=90&smart=true';
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

	return (
		<li className={'appear'}
		    style={{'--bg-image': `url(${loading ? placeholderImage : data.image})`}}>
			<span className={'tag-status'}>{data?.status}</span>
			<p>{data?.name}</p>
		</li>
	)
}

export default Character;
