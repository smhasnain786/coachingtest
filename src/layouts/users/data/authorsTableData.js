/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import { getUserDataService } from "../../../services/user.service";
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { useEffect,useState } from "react";



const getuserslist = async() => {   
  let result = await getUserDataService()
  console.log("resultresult",result)
  if(result.status){
     setExportData(result?.data)
  }

}
useEffect(() => {
  getuserslist()
  // console.log(exportData);
  
}, []);
const authorsTableData = {
  
  columns: [
    { name: "Name", align: "left" },
    { name: "emailId", align: "left" },
    { name: "mobileNumber", align: "center" },
    { name: "state", align: "center" },
    { name: "action", align: "center" },
  ],

  rows:exportData,
};

export default authorsTableData;
