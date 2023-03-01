import Link from "next/link";
import Languages from "@/components/Languages";

const Navbar = () => {
    return (
        <div className="flex items-center  w-full bg-white fixed top-0 left-0 z-10 space-x-5 pr-5">
            <div className="bg-primary h-16 w-[64px] flex items-center justify-center">
                <Link href={'/'}>
                    <i className="ri-book-open-line ri-xl text-white"></i>
                </Link>
            </div>
            <div className="flex items-center justify-between w-full">
                <form className="flex items-center py-5  pr-7">
                    <i className="ri-search-line ri-lg text-primary cursor-pointer"></i>
                    <input
                        type="text"
                        placeholder="Search here for"
                        className="outline-none border-0 ml-5 text-primary w-full"
                    />
                </form>
                <Languages/>
            </div>
        </div>
    )
}
export default Navbar