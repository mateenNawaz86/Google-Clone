import React from "react";
// import { useSelector } from "react-redux";
// import useGoogleSearch from "../components/useGoogleSearch";
import Response from "../components/Response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Button, IconButton, Tooltip } from "@mui/material";
import SearchOptions from "../components/SearchOptions";

const SearchRes = () => {
  // const { payload } = useSelector((state) => state.search);

  // Live API calls
  // const { data } = useGoogleSearch(payload);

  // Dummy response
  const data = Response;
  console.log(data);

  return (
    <>
      <div className="flex justify-between items-center px-6 mt-8">
        <div className="flex items-center sticky top-0 ">
          <Link to="/" title="Go to Goolge Home">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="searchImg"
              className="object-contain h-10 mr-12"
            />
          </Link>
          <Search
            hideButtons="false"
            className="w-w_un max-w-w_max_un m-mr_un"
          />
        </div>

        <div>
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
            sx={{ textTransform: "none", marginLeft: "8px" }}
          >
            Sign in
          </Button>
        </div>
      </div>

      <SearchOptions />
      <hr />
    </>
  );
};

export default SearchRes;
