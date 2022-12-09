import { Fragment } from "react";
import "./Header.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import SearchIcon from "@mui/icons-material/Search";
import HeaderCartButton from "./Cart/HeaderCartButton";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TopMenu from "../Menu/TopMenu";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? "simple-popover" : undefined;

  return (
    <Fragment>
      <header className="flexContainer">
        <div className="leftElement">
          <div className="nav-logo">
            <a
              href="/ref=nav_logo"
              id="nav-logo-sprites"
              className="nav-logo-link nav-progressive-attribute"
              aria-label="Amazon"
            >
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg"
                className="imgLogo"
                alt="Amazon"
              />
            </a>
          </div>
          <div className="nav-locations">
            <a className="location-icons" href="/ref=nav_logo">
              <div className="locationIcons">
                <LocationOnIcon />
              </div>
              <div id="glow-ingress-block">
                <span className="nav-line-1" id="glow-ingress-line1">
                  Hello
                </span>
                <span className="nav-line-2 " id="glow-ingress-line2">
                  Select your address
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="middleElement">
          <InputGroup>
            <DropdownButton
              variant="warning"
              style={{ backgroundColor: "#dadada" }}
              title="All"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <Form.Control aria-label="Text input with dropdown button" />
            <Button variant="warning">
              <SearchIcon />
            </Button>
          </InputGroup>
        </div>
        <div className="rightElement">
          <div className="nav-language">
            <a
              className="location-icons"
              href="/ref=nav_logo"
              onMouseEnter={handleClick}
            >
              <div id="glow-ingress-block">
                <span className="nav-line-1" id="glow-ingress-line1">
                  English
                </span>
                <span className="nav-line-2 " id="glow-ingress-line2">
                  <img
                    height={14}
                    width={25}
                    src="https://cdn.pixabay.com/photo/2018/01/21/14/36/indian-flag-3096740__340.png"
                    alt="INDIA"
                  />
                </span>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  PaperProps={{
                    style: {
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      borderRadius: 0,
                      width: "220px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mt: "10px",
                      "&::before": {
                        backgroundColor: "white",
                        content: '""',
                        display: "block",
                        position: "absolute",
                        width: 12,
                        height: 12,
                        top: -6,
                        transform: "rotate(45deg)",
                        left: "calc(50% - 6px)",
                      },
                    }}
                  />
                  <Typography sx={{ backgroundColor: "white" }}>
                    <div className="nav-flyout">
                      <span className="nav-item">
                        <span className="nav-text">
                          <i className="icp-radio icp-radio-active"></i>
                          <span>English</span> - <span>EN</span>
                        </span>
                      </span>
                      <div className="nav-divider"></div>
                      <a
                        href="#switch-lang=hi_IN"
                        className="nav-link nav-item"
                      >
                        <span className="nav-text">
                          <i className="icp-radio"></i>
                          <span>हिन्दी</span> - <span>HI</span>
                        </span>
                      </a>
                      <a
                        href="#switch-lang=ta_IN"
                        className="nav-link nav-item"
                      >
                        <span className="nav-text">
                          <i className="icp-radio"></i>
                          <span>தமிழ்</span> - <span>TA</span>
                        </span>
                      </a>
                      <a
                        href="#switch-lang=te_IN"
                        className="nav-link nav-item"
                      >
                        <span className="nav-text">
                          <i className="icp-radio"></i>
                          <span>తెలుగు</span> - <span>TE</span>
                        </span>
                      </a>
                      <a
                        href="#switch-lang=kn_IN"
                        className="nav-link nav-item"
                      >
                        <span className="nav-text">
                          <i className="icp-radio"></i>
                          <span>ಕನ್ನಡ</span> - <span>KN</span>
                        </span>
                      </a>
                      <a
                        href="#switch-lang=ml_IN"
                        className="nav-link nav-item"
                      >
                        <span className="nav-text">
                          <i className="icp-radio"></i>
                          <span>മലയാളം</span> - <span>ML</span>
                        </span>
                      </a>
                      <a
                        href="#switch-lang=bn_IN"
                        className="nav-link nav-item"
                      >
                        <span className="nav-text">
                          <i className="icp-radio"></i>
                          <span>বাংলা</span> - <span>BN</span>
                        </span>
                      </a>
                      <a
                        href="#switch-lang=mr_IN"
                        className="nav-link nav-item"
                      >
                        <span className="nav-text">
                          <i className="icp-radio"></i>
                          <span>मराठी</span> - <span>MR</span>
                        </span>
                      </a>
                      <a
                        href="/hz/cs/help?ref_=icp_language_help&amp;nodeId=GARKQZZYZ542RGWK"
                        className="nav-link nav-item"
                      >
                        <span className="nav-text">
                          <div className="icp-helplink">Learn more</div>
                        </span>
                      </a>
                      <div className="nav-divider"></div>
                      <span className="nav-item">
                        <span className="nav-text">
                          <i className="icp-flyout-flag icp-flyout-flag-in"></i>
                          You are shopping on <span>Amazon.in</span>
                        </span>
                      </span>
                      <a
                        href="/customer-preferences/country?ref_=icp_lop_mop_chg&amp;preferencesReturnUrl=/"
                        className="nav-link nav-item"
                        id="icp-flyout-mkt-change"
                      >
                        <span className="nav-text">
                          <div className="icp-mkt-change-lnk">
                            Change country/region.
                          </div>
                        </span>
                      </a>
                    </div>
                  </Typography>
                </Popover>
              </div>
            </a>
          </div>
          <div className="nav-signin">
            <a
              className="location-icons"
              href="/ref=nav_logo"
              onMouseEnter={handleClick1}
            >
              <div id="glow-ingress-block">
                <span className="nav-line-1" id="glow-ingress-line1">
                  Hello, sign in
                </span>
                <span className="nav-line-2 " id="glow-ingress-line2">
                  Accounts & List
                </span>
                <Popover
                  id={id1}
                  open={open1}
                  anchorEl={anchorEl1}
                  onClose={handleClose1}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  PaperProps={{
                    style: {
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      borderRadius: 0,
                      width: "460px",
                      float: "right",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mt: "10px",
                      "&::before": {
                        backgroundColor: "white",
                        content: '""',
                        display: "block",
                        position: "absolute",
                        width: 12,
                        height: 12,
                        top: -6,
                        transform: "rotate(45deg)",
                        left: "calc(50% - 6px)",
                      },
                    }}
                  />
                  <Typography sx={{ backgroundColor: "white" }}>
                    <div className="nav-flyout-1">
                      <div className="nav-al-signin">
                        <div
                          id="nav-flyout-ya-signin"
                          class="nav-flyout-content nav-flyout-accessibility"
                        >
                          <a
                            href="/ddfgdfg"
                            rel="nofollow"
                            class="nav-action-button"
                            data-nav-role="signin"
                            data-nav-ref="nav_signin"
                          >
                            <span class="nav-action-inner">Sign in</span>
                          </a>
                          <div
                            id="nav-flyout-ya-newCust"
                            class="nav_pop_new_cust nav-flyout-content nav-flyout-accessibility"
                          >
                            New customer?
                            <a href="/gfhfgh" rel="nofollow" class="nav-a">
                              Start here.
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="wish-list-acount-list">
                        <div className="wishList">
                          <div class="nav-title" id="nav-al-title">
                            Your Lists
                          </div>
                          <a
                          href="/hz/wishlist/ls?triggerElementID=createList&amp;ref_=nav_ListFlyout_navFlyout_createList_lv_redirect"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">Create a Wish List</span>
                        </a>
                        <a
                          href="/wishlist/universal?ref_=nav_ListFlyout_gno_listpop_uwl"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">Wish from Any Website</span>
                        </a>
                        <a
                          href="/baby-reg/homepage?ref_=nav_ListFlyout_gno_listpop_br"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">Baby Wishlist</span>
                        </a>
                        <a
                          href="/discover/?ref_=nav_ListFlyout_sbl"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">Discover Your Style</span>
                        </a>
                        <a
                          href="/showroom?ref_=nav_ListFlyout_srm_your_desk_wl_in"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">Explore Showroom</span>
                        </a>
                        </div>
                        <div className="accountList">
                        <div class="nav-title">Your Account</div>
                        <a
                          href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">Your Account</span>
                        </a>
                        <a
                          id="nav_prefetch_yourorders"
                          href="/gp/css/order-history?ref_=nav_AccountFlyout_orders"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">Your Orders</span>
                        </a>
                        <a
                          href="/hz/wishlist/ls?requiresSignIn=1&amp;ref_=nav_AccountFlyout_wl"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">Your Wish List</span>
                        </a>
                        <a
                          href="/gp/yourstore?ref_=nav_AccountFlyout_recs"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">Your Recommendations</span>
                        </a>
                        <a
                          href="/gp/primecentral?ref_=nav_AccountFlyout_prime"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">Your Prime Membership</span>
                        </a>
                        <a
                          href="/gp/redirect.html?location=https%3A%2F%2Fwww.primevideo.com%2F%3Fref_%3D_apv&amp;source=nav_linktree&amp;token=13D4F90D28CD96790B94E6091246BB1B2AE9FA05"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">Your Prime Video</span>
                        </a>
                        <a
                          href="/auto-deliveries?ref_=nav_AccountFlyout_sns"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">
                            Your Subscribe &amp; Save Items
                          </span>
                        </a>
                        <a
                          href="/hz5/yourmembershipsandsubscriptions?ref_=nav_AccountFlyout_digital_subscriptions"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">
                            Memberships &amp; Subscriptions
                          </span>
                        </a>
                        <a
                          href="/gp/browse.html?node=21102587031&amp;ref_=nav_ya_flyout_b2b_reg"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">
                            Your Amazon Business Account
                          </span>
                        </a>
                        <a
                          href="/b/?node=2838698031&amp;ld=AZINSOAYAFlyout&amp;ref_=nav_AccountFlyout_sell"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">Your Seller Account</span>
                        </a>
                        <a
                          href="/hz/mycd/myx?ref_=nav_AccountFlyout_myk"
                          class="nav-link nav-item"
                        >
                          <span class="nav-text">
                            Manage Your Content and Devices
                          </span>
                        </a>
                        </div>
                      </div>
                    </div>
                  </Typography>
                </Popover>
              </div>
            </a>
          </div>
          <div className="nav-returnorder">
            <a className="location-icons" href="/ref=nav_logo">
              <div id="glow-ingress-block">
                <span className="nav-line-1" id="glow-ingress-line1">
                  Returns
                </span>
                <span className="nav-line-2 " id="glow-ingress-line2">
                  & Orders
                </span>
              </div>
            </a>
          </div>
          <div className="nav-locations">
            <a className="location-icons" href="/ref=nav_logo">
              <div id="glow-ingress-block">
                <HeaderCartButton />
              </div>
            </a>
          </div>
        </div>
      </header>
      <TopMenu/>
    </Fragment>
  );
};

export default Header;
