import AOS from "aos";
import "aos/dist/aos.css";

interface SectionHeaderProps {
	title?: string;
	subpageTitle?: { __html: string };
	additionalText: string[];
	isMainHeader?: boolean;
	isSubpage?: boolean;
	page?: any;
	isArticle?: true;
}

export default function SectionHeader({
	title,
	additionalText,
	isSubpage,
	isMainHeader,
	page,
	isArticle,
}: SectionHeaderProps) {
	AOS.init({
		duration: 500,
	});
	AOS.refresh();

	return (
		<div className="flex flex-col w-64 text-white">
			{!isSubpage ? (
				<>
					{" "}
					<div className="flex flex-row justify-start gap-3 lg:gap-6">
						{additionalText.map(el => (
							<p
								data-aos="fade-right"
								data-aos-delay="100"
								key={el}
								className="odd:text-[#0CBDBD] even:text-white uppercase text-[12px] md:text-xl lg:text-xl font-semibold">
								{el}
							</p>
						))}
					</div>
					<h2
						data-aos="fade-right"
						data-aos-delay="200"
						className={`text-2xl lg:text-3xl w-[70vw] ${isMainHeader ? "uppercase text-3xl md:text-4xl lg:text-5xl w-[90vw] lg:w-[40vw]" : null}`}>
						{title}
					</h2>
				</>
			) : (
				<>
					{" "}
					{isArticle ? (
						<div className="flex flex-row justify-start gap-3 lg:gap-6">
							<p
								data-aos="fade-right"
								data-aos-delay="100"
								className="odd:text-[#0CBDBD] even:text-white uppercase text-[12px] md:text-xl lg:text-xl font-semibold">aktualności</p>
						</div>
					) : (
						<div className="flex flex-row justify-start gap-3 lg:gap-6">
							<p
								data-aos="fade-right"
								data-aos-delay="100"
								dangerouslySetInnerHTML={{ __html: page.title.rendered }}
								className="odd:text-[#0CBDBD] even:text-white uppercase text-[12px] md:text-xl lg:text-xl font-semibold"></p>
						</div>
					)}
					<h2
						data-aos="fade-right"
						data-aos-delay="200"
						dangerouslySetInnerHTML={{ __html: page.title.rendered }}
						className={`text-2xl lg:text-3xl w-[70vw] ${isMainHeader ? "uppercase text-3xl md:text-4xl lg:text-5xl w-[90vw] lg:w-[40vw]" : null}`}></h2>
				</>
			)}
		</div>
	);
}
