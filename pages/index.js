import React, { useState, useEffect, useContext } from "react";
//INTERNAL IMPORT
import{
  Table,
  Form,
  Services,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment,
} from "../Components/index";
import { TrackContext } from "../Conetxt/Track";


const index =() => {
  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentsCount,

  } = useContext(TrackContext);
//state variable

const [createShipmentModel, setCreateShipmentModel] = useState(false);
const [openProfile, setOpenProfile] = useState(false);
const [startModal, setStartModal] = useState(false);
const [completeModal, setCompleteModal] = useState(false);
const [getModel, setGetModel] = useState(false);

//Data State Variable

const [allShipmentsdata, setallShipmentsdata] = useState();

useEffect(() => {
  const getCampaignData = getAllShipment();
  return async () =>{
  const allData = await getCampaignData;
  setallShipmentsdata(allData);


  };

},[]);

return (
  <>
  <Services
    setOpenProfile={setOpenProfile}
    setCompleteModal={setCompleteModal}
    setGetModel={setGetModel}
    setStartModal={setStartModal}
    />
  
  <Table
  setCreateShipmentModel={setCreateShipmentModel}
  allShipmentsdata={allShipmentsdata}
  />
  <Form
  createShipmentModel={createShipmentModel}
  createShipment={createShipment}
  setCreateShipmentModel={setCreateShipmentModel}
  />
  <Profile
    openProfile={openProfile}
    setOpenProfile={setOpenProfile}
    currentUser={currentUser}
    getShipmentsCount={getShipmentsCount}
    />
    <CompleteShipment
      completeModal={completeModal}
      setCompleteModal={setCompleteModal}
      completeShipment={completeShipment}
      />
      <GetShipment
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={getShipment}
        />

        <StartShipment 
        startModal={startModal}
        setStartModal={setStartModal}
        startShipment={startShipment}
        />
  
  </>
);

};
 
export default index;