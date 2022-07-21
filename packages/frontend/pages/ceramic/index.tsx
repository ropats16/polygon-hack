import type { NextPage } from "next";
import { UserContext } from "@/components/layout";
import { useContext, useState } from "react";

import { TileDocument } from '@ceramicnetwork/stream-tile';

const CeramicPage: NextPage = () => {
  const { authenticatedCeramicInst } = useContext(UserContext);
  const ceramic = authenticatedCeramicInst;

  console.log(ceramic);

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
      profileImage: {
        type: 'string',
        maxLength: 200,
      },
      name: {
        type: 'string',
        maxLength: 150,
      },
      handle: {
        type: 'string',
        maxLength: 150,
      },
      id: {
        type: 'string',
        maxLength: 5,
      },
      assets: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            itemDescription: {
              type: 'string',
              maxLength: 420,
            },
            itemImage: {
              type: 'string',
              maxLength: 200,
            },
            itemName: {
              type: 'string',
              maxLength: 150,
            },
            itemAttributes: [
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
          }
        }
      }
    },
    required: ['name', 'handle'],
  }

  // const schemaContent = {
  //   $schema: 'http://json-schema.org/draft-07/schema#',
  //   title: 'NFT Standard Schema Test',
  //   type: 'object',
  //   properties: {
  //     description: {
  //       type: 'string',
  //       maxLength: 420,
  //     },
  //     image: {
  //       type: 'string',
  //       maxLength: 200,
  //     },
  //     name: {
  //       type: 'string',
  //       maxLength: 150,
  //     },
  //     attributes: [
  //       {
  //         strength: {
  //           type: 'integer',
  //           maxLength: 2,
  //         },
  //         stamina: {
  //           type: 'integer',
  //           maxLength: 2,
  //         },
  //         speed: {
  //           type: 'integer',
  //           maxLength: 2,
  //         },
  //         health: {
  //           type: 'integer',
  //           maxLength: 2,
  //         },
  //         magicMastery: {
  //           type: 'integer',
  //           maxLength: 2,
  //         },
  //       },
  //     ]
  //   },
  //   required: ['description', 'image', 'name', 'attributes'],
  // }

  // const profileContent = {
  //   description: 'Beveloper BAO | Development🤝Education | Full stack web3 dev | Buidlooor & Shipooor',
  //   image: 'https://gateway.pinata.cloud/ipfs/QmQQpDbHBpsUyr16CWsCn5ji4TpZzoYxTmeZJchvRjpYmn',
  //   name: 'Open Sourcerer',
  //   attributes: [
  //     {
  //       strength: 99,
  //       stamina: 87,
  //       speed: 1,
  //       health: 50,
  //       magicMastery: 0,
  //     }
  //   ]
  // }

  const profileContent = {
    description: 'Beveloper BAO | Development🤝Education | Full stack web3 dev | Buidlooor & Shipooor',
    profileImage: 'https://gateway.pinata.cloud/ipfs/QmQQpDbHBpsUyr16CWsCn5ji4TpZzoYxTmeZJchvRjpYmn',
    name: 'Open Sourcerer',
    handle: '@beveloperbao.eth',
    id: '16',
    assets: [
      {
        itemDescription: 'Fire Samurai with Katana',
        itemImage: 'https://gateway.pinata.cloud/ipfs/QmQQpDbHBpsUyr16CWsCn5ji4TpZzoYxTmeZJchvRjpYmn',
        itemName: 'Ronin 1',
        itemAttributes: [
          {
            strength: 99,
            stamina: 87,
            speed: 1,
            health: 50,
            magicMastery: 0,
          },
        ],
      },
      {
        itemDescription: 'Water Ninja with Nunchucks',
        itemImage: 'https://pbs.twimg.com/media/ERD_ZUZUUAIkwRn.jpg:large',
        itemName: 'Suigetsu',
        itemAttributes: [
          {
            strength: 99,
            stamina: 87,
            speed: 50,
            health: 100,
            magicMastery: 30,
          },
        ],
      },
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
    console.log("Latest Schema Doc:", schemaDoc);
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
    console.log("Latest Profile Doc:", profileDoc);
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
        {profileDoc &&
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyItems: 'center',
            padding: '25px',
          }}>
            <img style={{
              width: '200px',
              borderRadius: '5px'
            }} src={profileDoc.content.profileImage} />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              color: 'white'
            }}>
              <div style={{
                fontSize: '20px',
                fontWeight: 'bold',
                margin: '5px'
              }}>{profileDoc.content.name}</div>
              <div style={{
                width: '200px',
                textAlign: 'center',
              }}>{profileDoc.content.handle}<br></br>#{profileDoc.content.id}</div>
              <div style={{
                margin: '5px',
                width: '200px',
              }}>{profileDoc.content.description}</div>
            </div>
          </div>}
        <h2 style={{
          fontWeight: 'bold',
          margin: '5px',
          color: 'white'
        }}>NFTs</h2>
        <div style={{
          margin: '5px',
          width: '200px',
          color: 'yellowgreen',
        }}>Assets:
          {profileDoc && profileDoc?.content.assets.map((item: any, index: number) => (
            <div key={index}>
              <div>NFT Description: {item.itemDescription}</div>
              <img src={item.itemImage} />
              <div>Speed: {item.itemName}</div>
              {item.itemAttributes.map((attribute: any, index: number) => (
                <div>
                  <div>Strength: {attribute.strength}</div>
                  <div>Stamina: {attribute.stamina}</div>
                  <div>Speed: {attribute.speed}</div>
                  <div>Health: {attribute.health}</div>
                  <div>Magic Mastery: {attribute.magicMastery}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <br></br>
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
      </main >
    </div >
  )
};

export default CeramicPage;
