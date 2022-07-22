import type { NextPage } from "next";
import { UserContext } from "@/components/layout";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { ProfileHeader } from "@/components/sections/profile";

import { TileDocument } from "@ceramicnetwork/stream-tile";
import { schemaContent } from "@/lib/ceramic-schema";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { handle } = router.query;

  const { authenticatedCeramicInst } = useContext(UserContext);
  const ceramic = authenticatedCeramicInst;
  const [schemaDoc, setSchemaDoc] = useState<any>();

  useEffect(() => {
    const createSchemaDocument = async () => {
      // The following call will fail if the Ceramic instance does not have an authenticated DID
      const doc = await TileDocument.create(ceramic, schemaContent);
      setSchemaDoc(doc);
      console.log("Set Schema Doc:", doc);
      console.log("streamId", doc.commitId);
      // The stream ID of the created document can then be accessed as the `id` property
      // return doc.commitId;
    };
    if (authenticatedCeramicInst?.did) createSchemaDocument();
  }, [authenticatedCeramicInst, ceramic]);

  const handleEdit = async () => {
    console.log("Edit");
  };

  return (
    <div>
      <ProfileHeader onEdit={() => handleEdit()} />
    </div>
  );
};

export default ProfilePage;
