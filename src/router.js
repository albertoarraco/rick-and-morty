import React, {useEffect, Suspense, memo, lazy} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/not-found";
import Wrapper from "./hoc/wrapper";
const EpisodesPage = lazy(() => import('./pages/episodes'));
const CharactersPage = lazy(() => import('./pages/characters'));
const LocationsPage = lazy(() => import('./pages/locations'));

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
							<Suspense fallback={<h1>Loading...</h1>}>
									<EpisodesPage />
							</Suspense>
						</Wrapper>
					} />
					<Route path={'/characters/:id?'} element={
						<Wrapper>
							<Suspense fallback={<h1>Loading...</h1>}>
								<CharactersPage />
							</Suspense>
						</Wrapper>
					} />
					<Route path={'/locations/:id?'} element={
						<Wrapper>
							<Suspense fallback={<h1>Loading...</h1>}>
								<LocationsPage />
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
