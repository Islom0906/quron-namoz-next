import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
    return(
        <div className="sm:w-16 w-full bg-white sm:h-full h-16  fixed sm:top-16 bottom-0 left-0 z-20">
            <ul className="flex sm:flex-col w-full h-full flex-row items-center sm:justify-start justify-evenly sm:mt-10 sm:space-y-5">
                <li>
                    <Link href="/surah" >
                        <a className="flex flex-col items-center justify-center w-10 h-10">
                        <i className="ri-book-open-fill ri-lg text-secondary"></i>
                        <p>Quron</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={"/namoz" } >
                        <a className="flex flex-col items-center justify-center w-10 h-10">
                        <Image className="w-5 h-5"src="/prayer-time.svg" alt="" width={20} height={20}  />
                        <p>Namoz</p>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar