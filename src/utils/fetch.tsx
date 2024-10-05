// import axios from 'axios';

// export default function fetch(data: any) {
// 	const url = `https://jsonplaceholder.typicode.com/posts`;
// 	const fakeData = {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			title: 'foo',
// 			body: 'bar',
// 			userId: 1,
// 		}),
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 		},
// 	};
// 	return axios.post(url, fakeData)
// 		.then(() => console.info("Hook sent correctly"))
// 		.catch(() => console.warn("Hook failed"))
// }

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function PostNotes() {
	console.log('PostNotes');

	const fakeData =
		{ title: 'I bought Dune Messiah book' };
	const supabase = createClientComponentClient();
	const { error } = await supabase
		.from("notes")
		.insert(fakeData);

	if (error) {
		console.error(error);
	} else {
		console.log(fakeData);
		// Limpiar el formulario o mostrar un mensaje de éxito
	}
}


