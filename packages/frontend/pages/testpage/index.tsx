import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/elements";

import { Fluence } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import { sayHello, registerHelloPeer } from "../../_aqua/getting-started";

import { ClipboardIcon } from "@heroicons/react/solid";
import { setTimeout } from "timers";

// const relayNodes = [krasnodar[4], krasnodar[5], krasnodar[6]];
const relayNode = [krasnodar[4]];

const TestPage: NextPage = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [helloMessage, setHelloMessage] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("Hello");

  const [peerIdInput, setPeerIdInput] = useState<string>("");
  const [relayPeerIdInput, setRelayPeerIdInput] = useState<string>("");

  // console.log("relayNodes", relayNodes);
  // console.log("krasnodar", krasnodar);
  // console.log("relayNode", relayNode);

  useEffect(() => {
    const connectFluence = async () => {
      try {
        // await Fluence.start({ connectTo: relayNode[0].multiaddr });
        await Fluence.start({
          connectTo: krasnodar[5],

          // KeyPair: await FluenceKeyPair.fromEd25519SK(SeedArray),
        });

        setRelayPeerIdInput(Fluence.getStatus().relayPeerId!);
        setIsConnected(true);
        // Register handler for this call in aqua:
        // HelloPeer.hello(%init_peer_id%)
        registerHelloPeer({
          hello: (from) => {
            setHelloMessage("Hello from: \n" + from);
            return "Hello back to you, \n" + from;
          },
          is_connected: (peer) => {
            console.log("peer", peer);
            return peer;
          },
        });
      } catch (err) {
        console.log("Peer initialization failed", err);
      }
    };
    setTimeout(() => {
      connectFluence();
    }, 5000);
  }, []);

  const connect = async (relayPeerId: string) => {
    console.log("connect", relayPeerId);
    try {
      await Fluence.start({ connectTo: relayPeerId });
      setIsConnected(true);
      // Register handler for this call in aqua:
      // HelloPeer.hello(%init_peer_id%)
      // registerHelloPeer({
      //   hello: (from) => {
      //     setHelloMessage("Hello from: \n" + from);
      //     return "Hello back to you, \n" + from;
      //   },
      // });
    } catch (err) {
      console.log("Peer initialization failed", err);
    }
  };

  const helloBtnOnClick = async () => {
    if (!Fluence.getStatus().isConnected) {
      return;
    }

    console.log(
      "%c relayPeerIdInput",
      "color: green; background: yellow; font-size: 30px",
      relayPeerIdInput
    );
    console.log(relayNode[0].multiaddr);
    console.log(Fluence.getStatus().relayPeerId);
    console.log(Fluence.getStatus().relayPeerId!);

    // Using aqua is as easy as calling a javascript funсtion
    const res = await sayHello(peerIdInput, relayPeerIdInput);
    // const res = await sayHello(peerIdInput, relayNode[0].multiaddr);
    console.log(
      "%c res",
      "color: green; background: yellow; font-size: 30px",
      res
    );
    setHelloMessage(res);
  };

  const checkStatus = async () => {
    const check = Fluence.getStatus().relayPeerId!;
    console.log("check status", check);
  };

  const checkPeer = async () => {
    const check = Fluence.getPeer();
    console.log("check peer", check);
  };

  return (
    <div className="content text-slate-100">
      {isConnected ? (
        <>
          <h1>Connected</h1>
          <div className="m-4 flex">
            <div className="m-auto">
              <Button
                className=""
                onClick={() => connect(relayNode[0].multiaddr)}
              >
                connect
              </Button>
            </div>

            <div className="mx-4 w-full">
              <label className="font-bold m-2">Target relay</label>
              <input
                id="targetRelayId"
                className="text-slate-800 p-2 rounded w-full"
                type="text"
                onChange={(e) => setRelayPeerIdInput(e.target.value)}
                value={relayPeerIdInput}
              />
            </div>
          </div>
          <table>
            <tbody>
              <tr className="border">
                <td className="font-bold p-2">Peer id:</td>
                <td className="p-2">
                  <span id="peerId">{Fluence.getStatus().peerId!}</span>
                </td>
                <td>
                  <Button
                    // navigator.clipboard.writeText(val);
                    onClick={() =>
                      navigator.clipboard.writeText(Fluence.getStatus().peerId!)
                    }
                  >
                    <ClipboardIcon className="w-5 h-5" />
                  </Button>
                </td>
              </tr>
              <tr className="border">
                <td className="font-bold p-2">Relay peer id:</td>
                <td className="p-2">
                  <span id="relayId">{Fluence.getStatus().relayPeerId}</span>
                </td>
                <td>
                  <Button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        Fluence.getStatus().relayPeerId!
                      )
                    }
                  >
                    <ClipboardIcon className="w-5 h-5" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="text-slate-200">
            <h2>Say hello!</h2>
            <p className="p">
              Now try opening a new tab with the same application. Copy paste
              the peer id and relay from the second tab and say hello!
            </p>
            <div className="m-4">
              <label className="font-bold m-2">Target peer id</label>
              <input
                id="targetPeerId"
                className="text-slate-800 p-2 rounded w-full"
                type="text"
                onChange={(e) => setPeerIdInput(e.target.value)}
                value={peerIdInput}
              />
            </div>

            <div className="m-4">
              <label className="font-bold m-2">Message</label>
              <input
                id="targetPeerId"
                className="text-slate-800 p-2 rounded w-full"
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>

            <div className="m-4">
              <Button className="" onClick={helloBtnOnClick}>
                say hello
              </Button>
            </div>
            <div className="m-4">
              <Button className="" onClick={checkStatus}>
                check status
              </Button>
            </div>
            <div className="m-4">
              <Button className="" onClick={checkPeer}>
                check peer
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>loading...</div>
          {/* <h1>Intro 1: P2P browser-to-browser</h1>
          <h2>Pick a relay</h2>
          <ul className="">
            {relayNodes.map((x, index) => (
              <li key={index} className="p-8">
                <span className="pr-8">{x.peerId}</span>
                <Button onClick={() => connect(x.multiaddr)}>Connect</Button>
              </li>
            ))}
          </ul> */}
        </>
      )}

      {helloMessage && (
        <>
          <h2>Message</h2>
          <div id="message"> {helloMessage} </div>
        </>
      )}
    </div>
  );
};

export default TestPage;
