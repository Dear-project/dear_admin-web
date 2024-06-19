
import axios from "axios";
import config from "@/config/config.json";
import { dearV1Axios } from "@/libs/axios/CustomAxios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, SetStateAction } from "react";


const Usesidebar = () => {
  const router = useRouter();
  const [profileInfo, setProfile] = useState("");
  const [isProfileModel, setProfileModel] = useState(false);
  const [selectBlock, setSelectBlock] = useState<string>("");

  const handleItemClick = (name: SetStateAction<string>) => {
    setSelectBlock(name);
    router.push(`/${name}`);
  };

  const OpenProfileSetting = () => {
    setProfileModel((prev) => !prev);
  };

  return {
    selectBlock,
    profileInfo,
    handleItemClick,
    OpenProfileSetting,
    isProfileModel,
  };
};

export default Usesidebar;
