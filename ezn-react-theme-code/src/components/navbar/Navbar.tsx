import { Link } from "@tanstack/react-router";
import Button from "../buttons/Button";
import { useState, useEffect } from "react";
import {
	faBars,
	faXmark,
	faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarLink from "./NavbarLink";

import axios from "axios";

type Link = {
	parent_element: boolean;
	id: number;
	name: string;
	url: string;
	parent_id: any;
	children: [];
};

export default function Navbar() {
	const [fetchedLinks, setFetchedLinks] = useState<Link[]>([]);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const [navIcon, setNavIcon] = useState(true);
	const [activeMobileMenu, setActiveMobileMenu] = useState(false);
	const [openMobileItemId, setOpenMobileItemId] = useState<number | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get<Link[]>(
					`/wp-json/wp/v2/glowne-menu`
				);
				setFetchedLinks(response.data);
			} catch (err: any) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

  if(loading) {
    console.log("loading");
  }

	if (error)
		return (
			<div className="text-center py-8 text-red-500">Błąd: {error.message}</div>
		);


	function scrollToContent() {
		const footer = document.getElementById("footer");
		footer?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}

	const toggleMobileMenu = () => {
		setNavIcon(!navIcon);
		setActiveMobileMenu(!activeMobileMenu);
		setOpenMobileItemId(null);

		if (!activeMobileMenu) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	};

	const handleMobileItemClick = (linkId: number, hasTabs: boolean) => {
		if (!hasTabs) {
			toggleMobileMenu();
			return;
		}
		if (openMobileItemId === linkId) {
			setOpenMobileItemId(null);
		} else {
			setOpenMobileItemId(linkId);
		}
	};

	return (
		<>
			<nav
				className={`navbar fixed top-5 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1400px] rounded-[30px] text-white h-20 flex justify-between items-center px-5 z-40`}>
				<Link to="/" activeProps={{ className: "text-white" }}>
					<img
						className="w-[170px] sm:w-[190px]"
						src="/wp-content/uploads/2025/12/logo-ezn.png"
						alt="EZN logo."
					/>
				</Link>

        	{/* {loading && <p>ladowanie...</p>} */}

				<div className="gap-5 items-center lg:text-lg hidden 2lg:flex">
					<ul className="flex gap-5 ">
						{fetchedLinks.map(link => {
							return (
								<NavbarLink
									key={link.id}
									name={link.name}
									tabs={link.children}
									functionToScroll={scrollToContent}
									linkTo={link.url}
								/>
							);
						})}
					</ul>

					<Button text="Rekrutacja" link="/dla-kandydatow/zasady-rekrutacji" />
				</div>

				<button
					className="flex justify-center items-center text-3xl cursor-pointer text-(--default-light-blue) 2lg:hidden"
					onClick={toggleMobileMenu}>
					<FontAwesomeIcon icon={navIcon ? faBars : faXmark} className="" />
				</button>
			</nav>

			<div
				className={`fixed inset-0 z-30 transition-transform duration-500 ease-in-out pt-[5vh] ${
					activeMobileMenu ? "translate-y-0" : "-translate-y-full"
				}`}>

				<div className="absolute inset-0 gradient" onClick={toggleMobileMenu} />

				<div className="relative z-10 w-full h-full">
					<div className="pt-[10vh] px-4 pb-6 h-full overflow-y-auto">
						<div className="flex flex-col items-start space-y-2 max-w-md mx-auto">
							{fetchedLinks.map(link => {
								const hasTabs = link.children && link.children.length > 0;
								const isOpen = openMobileItemId === link.id;

								if (link.id === 5 || link.id === 4) {
									return (
										<Link
											to={link.url}
											key={link.id}
											onClick={() => {
												scrollToContent();
												toggleMobileMenu();
											}}
											className="text-white text-xl font-semibold hover:text-(--default-light-blue) cursor-pointer transition-colors py-3 px-2 w-full text-left">
											{link.name}
										</Link>
									);
								}

								return (
									<div key={link.id} className="w-full">
										<button
											onClick={() => handleMobileItemClick(link.id, hasTabs)}
											className={`text-xl font-semibold hover:text-(--default-light-blue) cursor-pointer transition-colors flex items-center justify-between w-full py-3 px-2 text-left ${
												isOpen ? "text-(--default-light-blue)" : "text-white"
											}`}>
											<span>{link.name}</span>
											{hasTabs && (
												<FontAwesomeIcon
													icon={faAngleDown}
													className={`transition-transform duration-300 ${
														isOpen
															? "rotate-180 text-(--default-light-blue)"
															: "rotate-0"
													} ml-2`}
												/>
											)}
										</button>

										{hasTabs && isOpen && (
											<div className="ml-4 mt-1 space-y-1">
												{link.children.map((tab:Link, index) => (
													<Link
														to={tab.url}
														key={index}
														onClick={() => toggleMobileMenu()}
														activeProps={{ className: "text-white" }}
														className="text-white cursor-pointer text-lg opacity-80 hover:opacity-100 block w-full text-left py-2 px-2 hover:pl-3 transition-all">
														{tab.name}
													</Link>
												))}
											</div>
										)}
									</div>
								);
							})}
							<div className="pt-4 w-full">
								<Button
									text="Rekrutacja"
									link="/dla-kandydatow/zasady-rekrutacji"
									className="w-full justify-center"
									onClick={toggleMobileMenu}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
