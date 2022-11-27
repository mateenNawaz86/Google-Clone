import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <div className="flex justify-end items-center px-8 py-5 space-x-4 min-w-fit">
          <Link
            to="/gmail"
            className=" text-base no-underline hover:underline text-[#000000b3]"
          >
            Gmail
          </Link>
          <Link
            to="/images"
            className=" text-base no-underline hover:underline text-[#000000b3]"
          >
            Images
          </Link>
          <Tooltip title="Google Apps">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AppsIcon />
            </IconButton>
          </Tooltip>
          <Button
            variant="contained"
            size="medium"
            sx={{ textTransform: "none" }}
          >
            Sign in
          </Button>
        </div>
        <div className="flex-1 mt-8 flex flex-col">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="logo"
            className="object-contain h-24"
          />
          <Search  />
        </div>
      </div>
    </>
  );
};

export default Home;
