interface FooterSocialMediaBox {
	icon?: React.ReactNode;
	path: string;
}

export default function FooterSocialMediaBox({
	icon,
	path,
}: FooterSocialMediaBox) {
	return (
		<a
			href={path}
            target="_blank"
			className="h-7 w-7 bg-(--default-light-blue) hover:bg-(--default-light-blue-hover) rounded-[10px] cursor-pointer transition duration-300 ease-in-out flex justify-center items-center text-md">
			{icon}
		</a>
	);
}
