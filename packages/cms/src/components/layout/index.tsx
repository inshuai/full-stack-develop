import SideMenu from "./sidemenu";
import NavBar from "./navbar/index";
import Footer from "./footer";

export default function Layout({ menu, children }) {
  return (
    <div className="bg-base-100 drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* 页面内容 */}
        <NavBar></NavBar>
        {/* 内容 */}
        {children}
        <Footer></Footer>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        {/* 侧边栏 */}
        <div className="menu w-80 bg-base-200 p-2">
          <a className="btn btn-ghost text-2xl w-[154px] mb-4">前端大班车</a>
          <SideMenu menu={menu}></SideMenu>
        </div>
      </div>
    </div>
  );
}
