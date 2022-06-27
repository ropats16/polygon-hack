import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ProfileHeader } from "@/components/sections/profile";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { handle } = router.query;
  return (
    <div>
      <ProfileHeader />
    </div>
  );
};

export default ProfilePage;
