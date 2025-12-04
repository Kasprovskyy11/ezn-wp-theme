import Profile from "./Profile";
import SectionHeader from "../section_headers/SectionHeader";

export default function ProfilesLayer() {
  const profiles = [
    {
      id: 0,
      title: "Technik programista",
      photoUrl: "/wp-content/uploads/2025/12/programmer.jpg",
    },
    {
      id: 1,
      title: "Technik elektronik",
      photoUrl: "/wp-content/uploads/2025/12/electronic.jpg",
    },
    {
      id: 2,
      title: "Technik robotyk",
      photoUrl: "/wp-content/uploads/2025/12/robotic.jpg",
    },
    {
      id: 3,
      title: "Technik informatyk",
      photoUrl: "/wp-content/uploads/2025/12/ITSpec.jpg",
    },
    {
      id: 4,
      title: "Technik automatyk",
      photoUrl: "/wp-content/uploads/2025/12/automatic.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-15">
      <SectionHeader title="Dołącz do nas!" additionalText={["profile klas"]} />
      <div className="grid grid-cols-1 lg:flex lg:flex-row lg:flex-wrap lg:justify-center xl:grid xl:grid-cols-5 gap-8 -mt-6">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="w-full lg:w-1/4 xl:w-auto flex justify-center items-center"
          >
            <Profile
              name={profile.title}
              photoUrl={profile.photoUrl}
              path="/dla-kandydatow/zasady-rekrutacji"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
