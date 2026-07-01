"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { BiError } from "react-icons/bi";
import { Button } from "@/components/ui/button";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex justify-center items-center flex-col gap-5 h-screen">
			<p className="text-6xl text-primary">
				<BiError />
			</p>
			<p className="text-3xl font-semibold">Something went wrong!</p>

			<Button variant={"outline"} onClick={() => reset()}>
				Try Again
			</Button>
		</div>
	);
}
