import React, {useEffect, Suspense, memo, lazy} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/not-found";
import Wrapper from "./hoc/wrapper";
import PlaceholderItemList from "./components/placeholder";
const EpisodesPage = lazy(() => import('./pages/episodes'));

const Router = () => {
	return (
		<>
			<HashRouter basename={'/'}>
				<Routes>
					<Route path={'/'} element={
						<Wrapper>
							<HomePage/>
						</Wrapper>
					}/>
					<Route path={'/episodes/:id?'} element={
						<Wrapper>
							<Suspense fallback={<PlaceholderItemList />}>
									<EpisodesPage />
							</Suspense>
						</Wrapper>
					} />
					<Route path={"*"} element={
						<Wrapper>
							<NotFoundPage />
						</Wrapper>
					} />
				</Routes>
			</HashRouter>
		</>
	);
}

export default memo(Router);
