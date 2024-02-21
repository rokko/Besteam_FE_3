import React from "react";
import "./App.css";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import HeaderBar from "../src/components/HeaderBar";
import { HelmetProvider, Helmet } from "react-helmet-async";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  trustWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";



const getLibrary = (provider?: any) => {
  return new Web3(provider);
};
function App() {
  // When the user clicks on the button, scroll to the top of the document

  return (
    <ThirdwebProvider
    activeChain="mumbai"
    clientId="YOUR_CLIENT_ID"
    supportedWallets={[
      
      metamaskWallet(),
      coinbaseWallet({ recommended: true }),
      walletConnect(),
      localWallet(),
      trustWallet(),
      embeddedWallet({
        auth: {
          options: [
            "email",
            "google",
            "apple",
            "facebook",
          ],
        },
      }),
    ]}
  >
    <Web3ReactProvider getLibrary={getLibrary}>
      <HelmetProvider>
        <div className="App">
          <Helmet>
            <title>Besteam.io </title>
            <meta name="description" content="PRE-Ico Besteam" />
            <meta name="og::name" content="Besteam.io" />
            <meta name="og::description" content="Besteam is in ICO! " />
          </Helmet>
          <HeaderBar />
        </div>
      </HelmetProvider>
    </Web3ReactProvider>
    </ThirdwebProvider>
  );
}

export default App;
