import { users , addresses , countries} from '../../../utils/users';

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

  console.log('addresses', addresses)
  console.log('user', user)
 // const tmpFunc = () =>

  const userAddress = addresses.find(
    (element, index) => (element.id === user.addressId)
  )

  console.log('userAddress')

  const userCountry = countries.find(
    (element) => element.id === userAddress?.countryId
  )

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

      {userAddress && (
                <div className='bg-gray-300 p-6 rounded-lg mt-4'>
                    <h2 className='text-2xl font-bold'>Address:</h2>
                    {userAddress?.customFields?.company && (
                        <p>{`Frima: ${userAddress.customFields.company}`}</p>
                    )}
                    {userAddress?.customFields?.vatId && (
                        <p>{`Nip: ${userAddress.customFields.vatId}`}</p>
                    )}
                    <p>{userCountry?.label}</p>
                    <p>{userAddress.zipCode} {userAddress.city}</p>
                    <p>{userAddress.street} {userAddress.buildNumber}</p>
                </div>
            )}
    </div>
  );
}
