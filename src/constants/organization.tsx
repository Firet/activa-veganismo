import Organization from '@/interfaces/organization';

const organizations: Organization[] = [
	{
		id: 1,
		name: 'Voicot',
		description: 'Organización artística.',
		logo: '/voicot.JPG',
		website: 'https://www.voicot.com/',
		donationUrl: 'https://www.voicot.com/donaciones',
	},
	{
		id: 2,
		name: 'Difusión V',
		description: 'Difunde Veganismo.',
		logo: '/difu-v.JPG',
		website: 'https://www.difusionv.com',
		donationUrl: 'https://www.unicef.org/argentina/donar',
	},
	{
		id: 3,
		name: 'Amigues por las calles',
		description:
			'Organización de voluntaries que proveen comida vegana a la gente en situación de calle.',
		logo: '/amigues-sin-fondo.png',
		website: 'https://www.instagram.com/amiguesporlascalles/',
		donationUrl: 'https://www.instagram.com/amiguesporlascalles/',
	},
];
