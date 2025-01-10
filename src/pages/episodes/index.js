import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {getEpisodeById, getEpisodes} from "../../reducers/episodes";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import ListComponent from "../../components/list";
import DetailEpisode from "./detail";
import {IMAGES_EPISODE} from "../../utils/constants";

const EpisodesPage = () => {
	const dispatch = useDispatch();
	const {id} = useParams();
	const list = useSelector(state => state.episodes.list, shallowEqual)

	useEffect(() => {
		if(!id) {
			dispatch(getEpisodes());
		}
		if(id) {
			scrollTo(0,0);
		}
	}, [id])

	const customTemplate = ({id, episode, name, air_date}) => (
		<Link to={`/episodes/${id}`} style={{'--bg-image': `url(${IMAGES_EPISODE[id - 1]})`}} key={id}>
			<span>[{episode}]</span>
			<p>{name}</p>
			<b>{air_date}</b>
		</Link>
	)

	if(id) {
		return <DetailEpisode episode={id} />
	}

	return <ListComponent type={'episodes'}
	                      classList={'episodes'}{...list}
	                      itemTemplate={customTemplate}/>
}

export default EpisodesPage;
