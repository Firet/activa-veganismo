import axios from 'axios';

const usePost = (data: any) => {
	const url = `https://jsonplaceholder.typicode.com/posts`;
	const fakeData = {
		method: 'POST',
		body: JSON.stringify({
			title: 'foo',
			body: 'bar',
			userId: 1,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	};

	const handlePost = async () => {
		try {
			const response = await axios.post(url, fakeData);
			const responseData = response.data;
		} catch (error) {
			console.error(error);
		}
	};
	handlePost();
};

export default usePost;
