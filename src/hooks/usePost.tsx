import axios from 'axios';

const usePost = () => {
	const url = ``;

	const postData = async () => {
		try {
			const response = await axios.post(url);
			const responseData = response.data;
		} catch (error) {
			console.error(error);
		}
	};

	postData();
};

export default usePost;
