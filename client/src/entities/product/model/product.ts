export type Product = {
	category: string;
	name: string;
	description: string;
	price: {
		old: number;
		new: number;
	};
	image: string;
};
