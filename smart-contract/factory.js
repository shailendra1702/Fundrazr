import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x133ca47eF2A14188601680e9c8A766d16cE63840"
);

export default instance;
