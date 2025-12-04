import type { WordPressPage } from "../../lib/wordpress";
import SectionHeader from "../section_headers/SectionHeader";

interface SubpageView {
	page: WordPressPage;
}

export default function SubpageView({ page }: SubpageView) {

	return (
		<section className="page flex items-start justify-center flex-col mt-[150px] gap-10">
			<SectionHeader page={page} additionalText={[]} isSubpage={true} />

			<div
				className="text-white flex flex-col gap-2"
				dangerouslySetInnerHTML={{ __html: page.content.rendered }}
			/>
		</section>
	);
}
