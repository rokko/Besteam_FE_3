import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";

import { inAppWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "....",
});

const wallets = [
  inAppWallet({
    auth: {
      options: ["discord"],
    },
  }),
];

function ButtonConnessione() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      connectModal={{ size: "compact" }}
    />
  );
}

export default ButtonConnessione