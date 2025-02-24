export default function Profile({ params }: { params: { id: string } }) {
    return (
      <div style={{ padding: '1rem' }}>
        <h1>Profil użytkownika {params.id}</h1>
      </div>
    );
  }
  