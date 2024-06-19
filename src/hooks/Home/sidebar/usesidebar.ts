"use client";
import { useRouter } from "next/navigation";
import { useState, SetStateAction } from "react";

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
