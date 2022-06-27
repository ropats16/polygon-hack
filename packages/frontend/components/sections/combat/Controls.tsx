import { Button } from "@/components/elements";

export const Controls = () => {
  const handleWeaponAttack = () => {
    console.log("handleWeaponAttack");
  };

  const handlePowerAttack = () => {
    console.log("handlePowerAttack");
  };

  const handleCriticalAttack = () => {
    console.log("handleCriticalAttack");
  };

  const handleFlee = () => {
    console.log("flee");
  };

  return (
    <div className="flex max-w-lg justify-between m-auto">
      <Button onClick={() => handleWeaponAttack()}>Weapon Attack</Button>
      <Button onClick={() => handlePowerAttack()}>Power Attack</Button>
      <Button onClick={() => handleCriticalAttack()}>Critical Attack</Button>
      <Button onClick={() => handleFlee()}>Flee</Button>
    </div>
  );
};
