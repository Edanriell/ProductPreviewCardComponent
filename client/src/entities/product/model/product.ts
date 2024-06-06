export type Product = {
	image: {
		sm: string;
		md?: string;
		lg?: string;
	};
	category: string;
	name: string;
	description: string;
	price: {
		old: number;
		new: number;
	};
};
