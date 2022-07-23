import type { NextPage } from "next";
import { UserContext } from "@/components/layout";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { ProfileHeader } from "@/components/sections/profile";
import { Modal, Button, TextField, AddPhoto } from "@/components/elements";

import { TileDocument } from "@ceramicnetwork/stream-tile";
import { schemaContent } from "@/lib/ceramic-schema";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { handle } = router.query;

  const { authenticatedCeramicInst } = useContext(UserContext);
  const ceramic = authenticatedCeramicInst;
  const [schemaDoc, setSchemaDoc] = useState<any>();

  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");

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
    setIsOpen(!isOpen);
  };

  const handleSave = async () => {
    console.log("Save");
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ProfileHeader onEdit={() => handleEdit()} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="">
          <div>{name}</div>
          <div className="my-2">
            <TextField
              name="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <AddPhoto onSelect={(image) => console.log(image)} />
          </div>
          <div className="my-2">
            <Button onClick={() => handleSave()}>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;
