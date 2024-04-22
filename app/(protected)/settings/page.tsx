import { auth } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return <div>SettingsPage</div>;
};

export default SettingsPage;
