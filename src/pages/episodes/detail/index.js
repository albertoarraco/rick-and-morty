import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getEpisodeById} from "../../../reducers/episodes";
import {Link} from "react-router-dom";
import Character from "../../characters/detail";

const DetailEpisode = ({episode}) => {
	const dispatch = useDispatch();
	const detail = useSelector(
		state => state.episodes.detail?.[episode],
		shallowEqual
	)

	useEffect(() => {
		if(!detail?.loading) {
			dispatch(getEpisodeById(episode));
		}
	}, [])

	const renderCharacters = characters => (
		characters.map(character => (
			<Character url={character} key={character}/>
		))
	)

	if(detail) {
		const {data, loading, refreshing, error} = detail;
		if(loading || refreshing) {
			return <h1>Loading episode...</h1>
		}

		const {air_date, episode: code, name, characters} = data;
		return (
			<div className="episode-detail">
				<div className={'episode-header'}>
					<h1>{code} - {name}</h1>
				</div>
				<div className={'episode-info'}>
					<div className={'breadcrumbs'}>
						<Link to={'/episodes'}>
							Episodes
						</Link> > <b>{code} - {name}</b>
					</div>
					<p><b>Air date: {air_date}</b></p>
				</div>
				<div className={'characters-carousel'}>
					<h3>Characters:</h3>
					<ul className={'characters-list'}>
						{renderCharacters(characters)}
					</ul>
				</div>
			</div>
		)
	}
}

export default DetailEpisode;
