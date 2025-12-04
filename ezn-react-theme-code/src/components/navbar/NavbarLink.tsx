import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@tanstack/react-router";

interface NavbarLinkProps {
	name: string;
	tabs: any;
	functionToScroll?: () => void;
	linkTo: string;
}

export default function NavbarLink({
	name,
	tabs,
	functionToScroll,
	linkTo,
}: NavbarLinkProps) {
	const [extended, setExtended] = useState(false);

	return (
		<div
			className="relative flex flex-col justify-center items-center text-white h-auto"
			onMouseEnter={() => setExtended(true)}
			onMouseLeave={() => setExtended(false)}>
			<div
				className={`cursor-pointer hover:text-(--default-light-blue) py-4 flex items-center gap-2 ${extended ? "text-(--default-light-blue)" : "text-white"}`}
				onClick={functionToScroll}>
				<Link
					to={linkTo}
					activeProps={{ className: "text-white" }}
					className="lg:text-md text-lg">
					{name}
				</Link>
				{tabs.length == 0 ? null : (
					<FontAwesomeIcon
						icon={faAngleDown}
						className={`transition-transform duration-300 ${
							extended ? "rotate-180" : "rotate-0"
						}`}
					/>
				)}
			</div>

			<div
				className={`absolute top-full left-0 w-48 navbar shadow-lg rounded-md transition-all duration-300 overflow-hidden ${
					extended && tabs.length > 0 ? "opacity-100" : "max-h-0 opacity-0"
				}`}>
				<div
					className={`p-2 flex flex-col ${tabs.length > 10 && "overflow-y-scroll"} max-h-[50vh]`}>
					{tabs.map((tabElement: any, index: any) => (
						<Link
							to={tabElement.url}
							activeProps={{ className: "text-white" }}
							key={index}
							className="text-white  hover:bg-blue-950 px-3 py-2 rounded-md cursor-pointer transition-colors">
							{tabElement.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}