import React from "react";
import { useSelector } from "react-redux";
import useGoogleSearch from "../components/useGoogleSearch";
// import Response from "../components/Response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Button, IconButton, Tooltip } from "@mui/material";
import SearchOptions from "../components/SearchOptions";

const SearchRes = () => {
  const { payload } = useSelector((state) => state.search);

  // Live API calls
  const { data } = useGoogleSearch(payload);

  // Dummy response
  // const data = Response;
  // console.log(data);

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

      {true && (
        <div className="max-w-2xl mt-5 ml-52 mb-24">
          {/* Getting the results count & time */}
          <p className="text-[#70757a] text-base">
            About {data?.searchInformation.formattedTotalResults} results(
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>

          {/* Search result data */}
          {data?.items.map((item, index) => (
            <div className="my-10 mx-0" key={index}>
              <a className="no-underline flex" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0].src
                      }
                      alt="searchImg"
                      className="object-contain w-5 h-5 mr-3 rounded"
                    />
                  )}
                {item.displayLink}
              </a>

              <a
                className="text-[#3248C2] text-lg font-semibold hover:underline"
                href={item.title}
              >
                <h2>{item.title}</h2>
              </a>

              <p className="mt-2">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchRes;
