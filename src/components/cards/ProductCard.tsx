import React from "react";
import BookCard from "./BookCard";
import CardFour from "./CardFour";
import CardOne from "./CardOne";
import CardThree from "./CardThree";
import CardTwo from "./CardTwo";

export type ProductCardVariants =
	| "default"
	| "style-1"
	| "style-2"
	| "style-3"
	| "book-card";

type ProductCardProps = {
	variants?: ProductCardVariants;
	product: AllProduct | SingleProductType;
};

const ProductCard = ({ variants = "default", product }: ProductCardProps) => {
	switch (variants) {
		case "style-1":
			return <CardOne {...(product as AllProduct)} />;

		case "style-2":
			return <CardTwo {...(product as AllProduct)} />;

		case "style-3":
			return <CardThree {...(product as AllProduct)} />;

		case "book-card":
			return <BookCard {...(product as SingleProductType)} />;

		default:
			return <CardFour {...(product as AllProduct)} />;
	}
};

export default ProductCard;
