export const getData = async (id = '') => {
	const param = id ? '/' + id : '';
	const response = await fetch(`https://rickandmortyapi.com/api/episode${param}`);
	if (!response.ok) {
		throw new Error('Failed to fetch episode detail');
	}
	return response.json();
};
