import Link from "next/link"
import Image from "next/image"
import { UserButton, SignedIn, SignOutButton } from "@clerk/nextjs"
import { dark } from '@clerk/themes';

const Topbar = () => {
    return(
        <nav className="topbar">
            <Link href={'/'} className="flex items-center gap-4">
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28}/>
                <p className="text-heading3-bold text-light-1 max-xs::hidden">Threads</p>
            </Link>

            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    
                </div>
                <UserButton />
            </div>
        </nav>
    )
}

export default Topbar