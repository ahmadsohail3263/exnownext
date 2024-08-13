import SideBar from "@/src/components/dashboard/SideBar";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="grid lg:grid-cols-[300px,1fr]   ">
        <div className="hidden lg:block p-2">
          <SideBar />
        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
}
