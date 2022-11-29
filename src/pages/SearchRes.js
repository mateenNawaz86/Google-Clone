import React from "react";
// import { useSelector } from "react-redux";
// import useGoogleSearch from "../components/useGoogleSearch";
import Response from "../components/Response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Button, IconButton, Tooltip } from "@mui/material";

const SearchRes = () => {
  // const { payload } = useSelector((state) => state.search);

  // Live API calls
  // const { data } = useGoogleSearch(payload);

  // Dummy response
  const data = Response;
  console.log(data);

  return (
    <>
      <div className="flex justify-between items-center border-b-2 border border-gray-200 bg-white">
        <div className="flex items-start p-8 sticky top-0 ">
          <Link to="/">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="searchImg"
              className="object-contain h-12 mr-12"
            />
          </Link>
        </div>
        <div>
          <Search
            hideButtons="false"
            className="w-w_un max-w-w_max_un m-mr_un"
          />
        </div>

        <div className="links">
          <Tooltip title="Settings">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <SettingsIcon />
            </IconButton>
          </Tooltip>

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
      </div>
    </>
  );
};

export default SearchRes;
