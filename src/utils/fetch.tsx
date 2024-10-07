import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function postOrganizationData(
	name: string,
	phone: number,
	email: string,
	description?: string
) {
	const data = { name, description, email, phone };
	const supabase = createClientComponentClient();
	const { error } = await supabase.from('organizations').insert([data]);

	if (error) {
		console.error(error);
	} else {
		console.log(data);
	}
}
