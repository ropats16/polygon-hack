import type { NextPage } from "next";
import { UserContext } from "@/components/layout";
import { useContext, useState } from "react";

import { TileDocument } from '@ceramicnetwork/stream-tile';

const CeramicPage: NextPage = () => {
  const { authenticatedCeramicInst } = useContext(UserContext);
  const ceramic = authenticatedCeramicInst;

  const [schemaDoc, setSchemaDoc] = useState<any>();
  const [profileDoc, setProfileDoc] = useState<any>();

  const schemaContent = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'NFT Standard Schema Test',
    type: 'object',
    properties: {
      description: {
        type: 'string',
        maxLength: 420,
      },
      image: {
        type: 'string',
        maxLength: 200,
      },
      name: {
        type: 'string',
        maxLength: 150,
      },
      attributes: [
        {
          strength: {
            type: 'integer',
            maxLength: 2,
          },
          stamina: {
            type: 'integer',
            maxLength: 2,
          },
          speed: {
            type: 'integer',
            maxLength: 2,
          },
          health: {
            type: 'integer',
            maxLength: 2,
          },
          magicMastery: {
            type: 'integer',
            maxLength: 2,
          },
        },
      ]
    },
    required: ['description', 'image', 'name', 'attributes'],
  }

  const profileContent = {
    description: 'Beveloper BAO | Development🤝Education | Full stack web3 dev | Buidlooor & Shipooor',
    image: 'https://gateway.pinata.cloud/ipfs/QmQQpDbHBpsUyr16CWsCn5ji4TpZzoYxTmeZJchvRjpYmn',
    name: 'Open Sourcerer',
    attributes: [
      {
        strength: 99,
        stamina: 87,
        speed: 1,
        health: 50,
        magicMastery: 0,
      }
    ]
  }

  const createSchemaDocument = async () => {
    // The following call will fail if the Ceramic instance does not have an authenticated DID
    const doc = await TileDocument.create(ceramic, schemaContent);

    console.log(typeof doc);
    console.log(doc);
    setSchemaDoc(doc);
    console.log("Set Schema Doc:", schemaDoc);
    // The stream ID of the created document can then be accessed as the `id` property
    return doc.commitId
  }

  const updateSchemaDocument = async () => {
    console.log(schemaDoc);
    // First, we need to load the document
    const doc = await TileDocument.load(ceramic, schemaDoc.id);
    console.log(doc);
    // The following call will fail if the Ceramic instance does not have an authenticated DID
    await doc.update(schemaContent);
    setSchemaDoc(doc);
    console.log("Update Schema Doc:", schemaDoc);
  }

  // The `id` argument can be a stream ID (to load the latest version)
  // or a commit ID (to load a specific version)
  const loadSchemaDocument = async () => {
    const doc = await TileDocument.load(ceramic, schemaDoc.id);
    setSchemaDoc(doc);
    console.log(schemaDoc);
  }

  const createProfileDocument = async () => {
    const doc = await TileDocument.create(ceramic, profileContent, schemaDoc.commitId);
    setProfileDoc(doc);
    console.log("New Profile:", profileDoc);
  }

  const updateProfileDocument = async () => {
    // First, we need to load the document
    const doc = await TileDocument.load(ceramic, profileDoc.id);
    // The following call will fail if the Ceramic instance does not have an authenticated DID
    await doc.update(profileContent);
    setProfileDoc(doc);
    console.log("Update Profile Doc:", profileDoc);
  }

  const loadProfileDocument = async () => {
    const doc = await TileDocument.load(ceramic, profileDoc.commitId);
    setProfileDoc(doc)
    console.log(doc);
    console.log(profileDoc);
  }

  return (
    <div>
      <header>
        <h1 style={{
          color: 'white',
          fontSize: 'large'
        }}>
          User Profile
        </h1>
      </header>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
      }}>
        <button style={{
          backgroundColor: 'white',
          margin: '10px 100px',
          padding: '5px',
          border: 'solid 3px gold'
        }} onClick={createSchemaDocument}>
          Create Schema Document
        </button>
        <button style={{
          backgroundColor: 'white',
          margin: '10px 100px',
          padding: '5px',
          border: 'solid 3px gold'
        }} onClick={updateSchemaDocument}>
          Update Schema Document
        </button>
        <button style={{
          backgroundColor: 'white',
          margin: '10px 100px',
          padding: '5px',
          border: 'solid 3px gold'
        }} onClick={loadSchemaDocument}>
          Load Schema Document
        </button>
        {profileDoc &&
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyItems: 'center',
            padding: '25px',
            border: 'solid 3px red',
            borderRadius: '5px'
          }}>
            <img style={{
              width: '200px',
              borderRadius: '5px'
            }} src={profileDoc.content.image} />
            <div style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '5px'
            }}>{profileDoc.content.name}</div>
            <div style={{
              margin: '5px',
              width: '200px',
            }}>{profileDoc.content.description}</div>
            <div style={{
              margin: '5px',
              width: '200px',
            }}>Attributes:
              {profileDoc.content.attributes.map((attribute: any, index: number) => (
                <div key={index}>
                  <div>Strength: {attribute.strength}</div>
                  <div>Stamina: {attribute.stamina}</div>
                  <div>Speed: {attribute.speed}</div>
                  <div>Health: {attribute.health}</div>
                  <div>Magic Mastery: {attribute.magicMastery}</div>
                </div>
              ))}
            </div>
          </div>}
        <button style={{
          backgroundColor: 'white',
          margin: '10px 100px',
          padding: '5px',
          border: 'solid 3px gold'
        }} onClick={createProfileDocument}>
          Create Profile
        </button>
        <button style={{
          backgroundColor: 'white',
          margin: '10px 100px',
          padding: '5px',
          border: 'solid 3px gold'
        }} onClick={updateProfileDocument}>
          Update Profile
        </button>
        <button style={{
          backgroundColor: 'white',
          margin: '10px 100px',
          padding: '5px',
          border: 'solid 3px gold'
        }} onClick={loadProfileDocument}>
          Load Profile
        </button>
      </main>
    </div>
  )
};

export default CeramicPage;
