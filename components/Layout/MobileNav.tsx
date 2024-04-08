import { AiOutlineClose } from "react-icons/ai";
import { navItems } from "./NavItems";
import SingleNavItem from "./SingleNavItem";


const MobileNav = ({ closeSideMenu }: { closeSideMenu: () => void }, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div className="fixed top-0 left-0 flex justify-end w-full h-full min-h-screen bg-black/60 lg:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4" ref={ref} >
        <section className="flex justify-end">
          <AiOutlineClose onClick={closeSideMenu} className="text-4xl text-black cursor-pointer text-wh" />
        </section>
        <div className="flex flex-col gap-2 text-base font-semibold text-black transition-all" >
          {navItems.map((d, i) => (
            <SingleNavItem key={i} label={d.label} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileNav;