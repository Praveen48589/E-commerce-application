import React from "react";
import { cn } from "@/lib/utils";

const LoaderDots = ({ className }: { className?: string }) => {
	return (
		<div className={cn("", className)}>
			<div className="loader_dots">
				<div className="circle" />
				<div className="circle" />
				<div className="circle" />
				<div className="circle" />
			</div>
		</div>
	);
};

export default LoaderDots;
