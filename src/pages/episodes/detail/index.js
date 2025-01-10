import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getEpisodeById} from "../../../reducers/episodes";
import {Link} from "react-router-dom";
import Character from "../../../components/characters/detail";
import {IMAGES_EPISODE} from "../../../utils/constants";
import PlaceholderItemList from "../../../components/placeholder";
import InputText from "../../../components/form/input";
import Form from "./form";

const DetailEpisode = ({episode}) => {
	const dispatch = useDispatch();
	const detail = useSelector(
		state => state.episodes.detail?.[episode],
		shallowEqual
	)

	useEffect(() => {
		dispatch(getEpisodeById(episode));
	}, [])

	const renderCharacters = characters => (
		characters.map(character => (
			<Character url={character} key={character}/>
		))
	)

	if(detail) {
		const {data, loading, refreshing, error} = detail;
		if(loading || refreshing) {
			return <PlaceholderItemList />
		}
		if(error) {
			return <p style={{color: '#f00'}}>{error}</p>;
		}

		const {id, air_date, episode: code, name, characters} = data;
		return (
			<>
				<div className="episode-detail appear">
					<div className={'episode-header appear'}
					     style={{'--bg-image': `url(${IMAGES_EPISODE[id - 1]})`}}>
						<h1>{code} - {name}</h1>
					</div>
					<div className={'episode-info'}>
						<div className={'breadcrumbs'}>
							<Link to={'/episodes'}>
								Episodes
							</Link> | <b>{code} - {name}</b>
						</div>
						<p><b>Air date: {air_date}</b></p>
					</div>
				</div>
				<div className={'characters-carousel'}>
					<h3>Characters</h3>
					<ul className={'characters-list'}>
						{renderCharacters(characters)}
					</ul>
				</div>
				<Form />
			</>
		)
	}
}

export default DetailEpisode;
