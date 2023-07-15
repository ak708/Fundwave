import React, { useEffect, useContext, useState } from "react";

import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PopUp } from "../components";
const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaigns,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);
  const [allcampaigns, setAllCampaigns] = useState([]);
  const [userCampaigns, setUserCampaigns] = useState([]);
  useEffect(() => {
    const getCampaignsData = getCampaigns;
    const userCampaignsData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllCampaigns(allData);
      setUserCampaigns(userData);
    };
  }, []);
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();
  console.log(donateCampaign);
  return (
    <>
      <Hero titleData={titleData} createCampaigns={createCampaigns} />
      <Card
        title="All Campaigns"
        allcampaigns={allcampaigns}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      <Card
        title="Your Campaigns"
        allcampaigns={userCampaigns}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};
export default index;
