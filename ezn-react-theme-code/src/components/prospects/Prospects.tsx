import SectionHeader from "../section_headers/SectionHeader";

export default function Prospects() {
  return (
    <div className="relative flex flex-col sm:flex-row gap-6 items-center justify-center">
      <div className="absolute w-screen h-full sm:h-70 lg:h-60 bg-(--prospects-bg-color) -z-10 left-1/2 -translate-x-1/2"></div>

      <div className="flex flex-col gap-6 pt-5">
        <SectionHeader
          title="Nasza szkoła w rankingu PERSPEKTYWY 2025"
          additionalText={["Perspektywy 2025"]}
        />
        <p className="text-white text-md md:text-lg lg:text-lg">
          Fundacja Edukacyjna „Perspektywy” potwierdza, że Technikum nr 10 w
          Elektronicznych Zakładach Naukowych we Wrocławiu jest wśród 500
          najlepszych techników w Polsce sklasyfikowanych w Rankingu Liceów i
          Techników PERSPEKTYWY 2025 i przysługuje mu tytuł „Złotej Szkoły
          2025”.
        </p>
      </div>

      <img
        src="/wp-content/uploads/2025/12/Perspektywy_2025.png"
        className="pb-5 h-40 sm:h-40 md:h-50 lg:h-75"
        alt="Perspektywy 2025 - logo, tarcza."
      />
    </div>
  );
}
