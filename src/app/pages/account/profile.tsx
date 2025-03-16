import AccountLayout from '../../components/AccountLayout';
import Layout from '../../components/layout';

const ProfilePage = () => {
  return (
    <Layout>
      <AccountLayout>
        <h2>Profil użytkownika</h2>
        <p>Tutaj znajduje się treść profilu użytkownika.</p>
      </AccountLayout>
    </Layout>
  );
};

export default ProfilePage;