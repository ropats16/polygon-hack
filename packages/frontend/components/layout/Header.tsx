import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Menu } from "./Menu/Menu";

export const Header = () => {
  return (
    <header className="p-4 flex justify-between">
      <div className="">
        <Menu />
      </div>
      <ConnectButton />
    </header>
  );
};
