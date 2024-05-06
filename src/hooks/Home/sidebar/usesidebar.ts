import axios from "axios";
import config from "@/config/config.json";
import { dearV1Axios } from "@/libs/axios/CustomAxios";
import { useEffect, useState } from "react";
const Usesidebar =  () => {
    const [profileImg, setProfile] = useState("");
    const profile =async()=>{
        await dearV1Axios.get(`${config.server}/profile`).then((res) => {
            console.log(res.data);
            
            setProfile(res.data.name);
          });
    }
    useEffect(()=>{profile()},[])
  return{
    profileImg
  }
};
export default Usesidebar;