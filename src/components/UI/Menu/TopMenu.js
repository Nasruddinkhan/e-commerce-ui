import "./TopMenu.scss";
const TopMenu = () => {
    const openNav = () => {
    document.getElementById("mySidenav").style.animation ="expand 0.3s forwards";
    document.getElementById("closeBtn").style.display = "block";
    document.getElementById("closeBtn").style.animation = "show 0.3s";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.animation = "show 0.3s";
  };

  const closeNav =()=> {
    document.getElementById("mySidenav").style.animation = "collapse 0.3s forwards";
    document.getElementById("closeBtn").style.animation = "hide 0.3s";
    document.getElementById("overlay").style.animation = "hide 0.3s";
    setTimeout(() => {
        document.getElementById("closeBtn").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        document.getElementById("main-container").style.animation = "";
        document.getElementById("main-container").style.transform = "translateX(0px)";
        document.getElementById("sub-container").style.animation = "";
        document.getElementById("sub-container").style.transform = "translateX(380px)";
    }, 300)
}

  return (
    <div className="topMenus">
      <div className="nav-pills">
        <span className="nav-a" onClick={openNav}>
          <span >&#9776;</span> All
        </span>
        <a href="/b/32702023031?node=32702023031" className="nav-a">
          Sell
        </a>
        <a href="/b/32702023031?node=32702023031" className="nav-a">
          Best Sellers
        </a>
        <a href="/b/32702023031?node=32702023031" className="nav-a">
          Today's Deals
        </a>
        <a href="/b/32702023031?node=32702023031" className="nav-a">
          Mobiles
        </a>
        <a href="/b/32702023031?node=32702023031" className="nav-a">
          Customer Service
        </a>
        <a href="/b/32702023031?node=32702023031" className="nav-a">
          Electronics
        </a>
        <a href="/b/32702023031?node=32702023031" className="nav-a">
          Home & Kitchen
        </a>
        <a href="/b/32702023031?node=32702023031" className="nav-a">
          Fashion
        </a>
        <a href="/b/32702023031?node=32702023031" className="nav-a">
          Books
        </a>
        <a href="/b/32702023031?node=32702023031" className="nav-a">
          Prime
        </a>
      </div>
      <div className="nav-right">
        <a
          aria-label="Amazon App"
          href="/hghg"
          class="nav-imageHref"
          tabindex="0"
        >
          <img
            height={30}
            alt="Amazon App"
            src="https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
          />
        </a>
      </div>
      <div id="overlay"  onClick={closeNav}></div>
      <div id="closeBtn" onClick={closeNav}>
        &times;
      </div>
      <div class="sidenav" id="mySidenav">
        <div class="sidenavHeader">
          <i class="fas fa-user-circle"></i> Hello, Sign In
        </div>
        
      </div>
    </div>
  );
};
export default TopMenu;
