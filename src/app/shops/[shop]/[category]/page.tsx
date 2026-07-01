import { Suspense } from "react";
import SelectedFilters from "@/components/filters/SelectedFilters";
import ProductLoader from "@/components/loader/ProductLoader";
import ProductGrid from "@/components/ProductGrid";

type CategoryPageProps = {
	searchParams: SearchParamsType;
	params: {
		category: string;
		shop: string;
	};
};

const CategoryPage = ({ params, searchParams }: CategoryPageProps) => {
	return (
		<section className="category-page">
			<SelectedFilters />
			<Suspense fallback={<ProductLoader />}>
				<ProductGrid searchParams={searchParams} params={params} />
			</Suspense>
		</section>
	);
};

export default CategoryPage;
