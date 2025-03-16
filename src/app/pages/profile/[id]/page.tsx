import { users } from '../../../utils/users';

interface PageProps {
  params: { id: string };
  searchParams: { id?: string };
}

export default function ProfilePage({ params, searchParams }: PageProps) {
  const userId = Number(params.id);
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return <div>Użytkownik nie istnieje</div>;
  }

  let detailsToDisplay = user.details;
  if (searchParams.id) {
    const detailId = Number(searchParams.id);
    const detail = user.details.find((item) => item.id === detailId);
    if (!detail) {
      return <div>Nie znaleziono elementu o podanym id</div>;
    }
    detailsToDisplay = [detail];
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <h2>Elementy:</h2>
      <ul>
        {detailsToDisplay.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
