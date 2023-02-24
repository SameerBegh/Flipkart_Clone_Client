import { Grid, Box, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductDetails } from "../../Redux/Action/productAction";
import DetailItems from "./DetailItems";
import ProductDetail from "./ProductDetail";
import ShareIcon from "@mui/icons-material/Share";
import "./detail.css";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import {
  EmailShareButton,
  FacebookShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
    fontSize: "25px",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    padding: "15px",
    alignItems: "center",
  },
}));

const share = {
  cursor: "pointer",
  "&:hover": {
    color: "#2874f0",
  },
};

const link = {
  textDecoration: "none",
  color: "#111",
  "&:hover": {
    color: "red",
  },
};

const Detail = () => {
  const [shareTooltip, setshareTooltip] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, id, product, loading]);

  const FbUrl =
    "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttp%253A%252F%252Fgithub.com%26quote%3DGitHub&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB";
  const twitterUrl =
    "https://twitter.com/intent/tweet?url=http%3A%2F%2Fgithub.com&text=GitHub";
  return (
    <Box className="detail">
      {product && Object.keys(product).length && (
        <Grid container sx={{ backgroundColor: "#fff", display: "flex" }}>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <DetailItems />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            sm={8}
            xs={12}
            sx={{ padding: "15px", position: "relative" }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={"/"} style={link}>
                <Typography
                  sx={{ color: "inherit", "&:hover": { color: "#2478f0" } }}
                >
                  Home
                </Typography>
              </Link>
              <LightTooltip
                placement="bottom-end"
                open={shareTooltip}
                onOpen={() => setshareTooltip(!shareTooltip)}
                onClick={() => setshareTooltip(!shareTooltip)}
                onClose={() => setshareTooltip(false)}
                title={
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{ margin: "0 10px" }}
                      onClick={() => setshareTooltip(!shareTooltip)}
                    >
                      <FacebookShareButton url={FbUrl}>
                        <FacebookIcon size={32} round={true} />
                      </FacebookShareButton>
                    </Box>
                    <Box
                      sx={{ margin: "0 10px" }}
                      onClick={() => setshareTooltip(!shareTooltip)}
                    >
                      <TwitterShareButton url={twitterUrl}>
                        <TwitterIcon size={32} round={true} />
                      </TwitterShareButton>
                    </Box>
                    <Box
                      sx={{ margin: "0 10px" }}
                      onClick={() => setshareTooltip(!shareTooltip)}
                    >
                      <EmailShareButton>
                        <EmailIcon size={32} round={true} />
                      </EmailShareButton>
                    </Box>
                  </Box>
                }
                TransitionComponent={Zoom}
              >
                <Box sx={share}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: shareTooltip ? "#2478f0" : "#111",
                    }}
                  >
                    <ShareIcon sx={{ fontSize: "18px", marginRight: "10px" }} />
                    Share
                  </Typography>
                </Box>
              </LightTooltip>
            </Box>
            <ProductDetail product={product} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Detail;
