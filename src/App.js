import './App.css';
import { useState, useEffect} from 'react';
import { ethers } from 'ethers';

function App() {
  const[provider,setProvider] = useState(undefined)
  const[signer,setSigner] = useState(undefined)
  const[signerAddress, setSignerAddress] = useState(undefined)

  useEffect(() => {
    const onLoad = async () => {
      const provider = await new ethers.providers.Web3Provider(window.ethereum)
      setProvider(provider)
    }
    onLoad()
  }, [])

  const getSigner = async provider => {
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setSigner(signer);
  }





  return (
    <div className="App">

    </div>
  );
}

export default App;
