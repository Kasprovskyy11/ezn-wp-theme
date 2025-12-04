import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type Dispatch, type SetStateAction } from "react";

interface questionInterface {
	question: string;
	answer: string;
	activeIndex: null;
	setActiveIndex: Dispatch<SetStateAction<any>>;
  index: number;
}

export default function FaqQuestion({
	question,
	answer,
	activeIndex,
	setActiveIndex,
  index
}: questionInterface) {
  const isOpen = index == activeIndex;

  const HandleOpenQuestion = () => {
    if(isOpen) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

	return (
		<div className="w-full max-w-[1400px] mx-auto mb-4">
			<div
				className={`w-full bg-[#06122A] text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl ${
					isOpen ? "rounded-b-lg" : "rounded-lg"
				}`}>
				<button
					onClick={HandleOpenQuestion}
					className="cursor-pointer w-full flex justify-between items-center p-6 hover:bg-[#0a1a3a] transition-colors duration-200 rounded-lg">
					<h3 className="text-lg font-semibold text-left pr-4">{question}</h3>
					<div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110">
						<FontAwesomeIcon
							icon={isOpen ? faMinus : faPlus}
							className="text-white text-xl"
						/>
					</div>
				</button>

				<div
					className={`overflow-hidden transition-all duration-300 ${
						isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					}`}>
					<div className="p-6 pt-2 border-t border-gray-700">
						<p className="text-gray-300 leading-relaxed text-lg">{answer}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
