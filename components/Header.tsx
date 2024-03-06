import Image from 'next/image'
import Link from 'next/link';
import MobileNav from '@/components/MobileNav';

export default function Header() {
    const NavLinks = ['Projetos','Sobre','Contato']
    return (
            <header className="container flex items-center justify-between h-24 md:h-32 ">
                <Link href="/">
                    <Image
                        className='w-36 md:w-auto h-auto' 
                        src='/logo-felipe-gomes.svg' 
                        alt="Felipe Gomes Design and Code" 
                        width={196} height={62}
                    />
                </Link>
                <nav className="hidden sm:block">
                    <ul className="flex gap-10">
                        {
                            NavLinks.map((navLink, index) => (
                                <li key={index}>
                                    <Link href={navLink}>{navLink}</Link>
                                </li>
                            ))
                        }
                        
                    </ul>
                </nav>
                <MobileNav />
            </header>
    );
}