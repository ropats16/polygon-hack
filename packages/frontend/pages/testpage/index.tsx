import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/elements";

import { Fluence } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import { sayHello, registerHelloPeer } from "../../_aqua/getting-started";

const relayNodes = [krasnodar[4], krasnodar[5], krasnodar[6]];

const TestPage: NextPage = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [helloMessage, setHelloMessage] = useState<string | null>(null);

  const [peerIdInput, setPeerIdInput] = useState<string>("");
  const [relayPeerIdInput, setRelayPeerIdInput] = useState<string>("");

  console.log("relayNodes", relayNodes);
  console.log("krasnodar", krasnodar);

  const connect = async (relayPeerId: string) => {
    try {
      await Fluence.start({ connectTo: relayPeerId });
      setIsConnected(true);
      // Register handler for this call in aqua:
      // HelloPeer.hello(%init_peer_id%)
      registerHelloPeer({
        hello: (from) => {
          setHelloMessage("Hello from: \n" + from);
          return "Hello back to you, \n" + from;
        },
      });
    } catch (err) {
      console.log("Peer initialization failed", err);
    }
  };

  const helloBtnOnClick = async () => {
    if (!Fluence.getStatus().isConnected) {
      return;
    }

    // Using aqua is as easy as calling a javascript funсtion
    const res = await sayHello(peerIdInput, relayPeerIdInput);
    setHelloMessage(res);
  };
  return (
    <div className="content text-slate-100">
      {isConnected ? (
        <>
          <h1>Connected</h1>
          <table>
            <tbody>
              <tr>
                <td className="bold">Peer id:</td>
                <td className="mono">
                  <span id="peerId">{Fluence.getStatus().peerId!}</span>
                </td>
                <td>
                  <button
                    className="btn-clipboard"
                    // onClick={() => copyToClipboard(Fluence.getStatus().peerId!)}
                  >
                    <i className="gg-clipboard"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="bold">Relay peer id:</td>
                <td className="mono">
                  <span id="relayId">{Fluence.getStatus().relayPeerId}</span>
                </td>
                <td>
                  <button
                    className="btn-clipboard"
                    // onClick={() =>
                    //   copyToClipboard(Fluence.getStatus().relayPeerId!)
                    // }
                  >
                    <i className="gg-clipboard"></i>
                  </button>
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
            <div className="row">
              <label className="label bold">Target peer id</label>
              <input
                id="targetPeerId"
                className="input"
                type="text"
                onChange={(e) => setPeerIdInput(e.target.value)}
                value={peerIdInput}
              />
            </div>
            <div className="row">
              <label className="label bold">Target relay</label>
              <input
                id="targetRelayId"
                className="input"
                type="text"
                onChange={(e) => setRelayPeerIdInput(e.target.value)}
                value={relayPeerIdInput}
              />
            </div>
            <div className="row">
              <button className="btn btn-hello" onClick={helloBtnOnClick}>
                say hello
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Intro 1: P2P browser-to-browser</h1>
          <h2>Pick a relay</h2>
          <ul className="">
            {relayNodes.map((x, index) => (
              <li key={index} className="p-8">
                <span className="pr-8">{x.peerId}</span>
                <Button onClick={() => connect(x.multiaddr)}>Connect</Button>
              </li>
            ))}
          </ul>
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
