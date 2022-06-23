import type { NextPage } from "next";
import { useRouter } from "next/router";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { handle } = router.query;
  return (
    <div>
      <div>profile page handle: {handle}</div>
    </div>
  );
};

export default ProfilePage;
