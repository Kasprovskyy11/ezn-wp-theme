import SectionHeader from "../section_headers/SectionHeader";
import FaqQuestion from "./FaqQuestion";
import {questions} from "./questions.ts";

import { useState } from "react";

export default function FaqLayer() {
	

	const [activeIndex, setActiveIndex] = useState(null);

	return (
		<div  id="FAQ" className="-scroll-mt-10 flex flex-col w-full">
			<div   className=" w-full max-w-[1400px]">
				<SectionHeader
					title="Najczęściej zadawane pytania"
					additionalText={["FAQ"]}
				/>
			</div>
			<div className="w-full max-w-[1400px] mx-auto mt-8 space-y-6 ">
				{questions.map((question, index) => (
					<FaqQuestion
						key={index}
						index={index}
						activeIndex={activeIndex}
						setActiveIndex={setActiveIndex}
						question={question.question}
						answer={question.answer}
					/>
				))}
			</div>
		</div>
	);
}
