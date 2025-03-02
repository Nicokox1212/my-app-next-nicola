export default function Profil({ params }: { params: { id: string } }) {
    return <h1 className="text-center text-2xl">Profil użytkownika {params.id}</h1>;
  }
  