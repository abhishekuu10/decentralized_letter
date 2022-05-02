import React from "react";
import Button from "../components/Button";
import Link from "next/link";
// import { Button } from "@mui/material";
// import { makeStyles } from "@material-ui/styles";
// import { useEthers } from "@usedapp/core";

const Header = ({ login, head }) => {
  return (
    <div className="border-solid flex p-4 content-center justify-between text-3xl border-2 bg-blue-400 text-white">
      <Link href={"/"}>Certification</Link>
      <div>
      </div>
    </div>
  );
};

export default Header;
