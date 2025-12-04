import Button from "../buttons/Button";

interface NotFoundSite {
	queryName: string;
}

export default function NotFoundSite({ queryName }: NotFoundSite) {
	return (
		<div className="w-full flex justify-center items-center">
			<div className="flex flex-col items-center gap-5 mt-[150px]">
				<h1 className="text-red-400 text-2xl">
					Strona "{queryName}" nie została odnaleziona!
				</h1>
				<p className="text-white text-lg">
					Wygląda na to, że podany adres jest nieprawidłowy lub strona została
					przeniesiona. Sprawdź poprawność wpisanego linku lub wróć na stronę
					główną.
				</p>
				<Button text="Powrót na stronę główną" link="/" />
			</div>
		</div>
	);
}
