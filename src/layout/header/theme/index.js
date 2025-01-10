import React from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {switchTheme} from "../../../reducers/config";

const Search = () => {
	const dispatch = useDispatch();
	const theme = useSelector(state => state.config.theme, shallowEqual);

	const switchImg = {
		dark: 'https://cdn1.iconfinder.com/data/icons/interface-flat-6/4000/22-06-28-Ui-icons-Interface-flat-color-59-512.png',
		light: 'https://static.thenounproject.com/png/1664849-200.png',
	}

	return (
		<button className={'image-theme'} onClick={() => dispatch(switchTheme())}>
			<img alt={'Theme switcher'} src={switchImg[theme]} width={30} height={30}/>
		</button>
	)
}

export default Search;
