import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog'
import { Button } from './ui/button'

// Navigation data
const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
];


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 p-4"
        >
            {/* Mobile Navbar */}
            <div className=" sm:hidden flex items-center gap-2 justify-center">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger onClick={() => setIsOpen(true)}>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white/80 backdrop-blur-sm border border-gray-300"
                        >
                            Menu <ChevronDown className="ml-2 w-4 h-4" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-md self-start font-medium">
                                Navigation
                            </DialogTitle>
                        </DialogHeader>
                        <nav>
                            <ul>
                                {navLinks.map((data) => (
                                    <li
                                        key={data.name}
                                        onClick={() => setIsOpen(false)}
                                        className="border-gray-200 py-3 text-sm [&:not(:last-child)]:border-b cursor-pointer"
                                    >
                                        <a
                                            className="block hover:text-blue-600 transition-colors"
                                            href={data.href}
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Desktop Navbar */}
            <div className="hidden sm:block">
                <nav className="bg-white/80 items-center gap-2 text-gray-600 text-sm flex rounded-full border px-2 py-3 backdrop-blur-sm mx-auto max-w-fit">
                    <ul className="flex gap-5">
                        {navLinks.map((data) => (
                            <li key={data.name}>
                                <a
                                    href={data.href}
                                    className="hover:text-gray-900 relative px-4 py-2 transition-colors cursor-pointer"
                                    onClick={() => setActiveSection(data.name)}
                                >
                                    {data.name}
                                    {data.name === activeSection && (
                                        <motion.span
                                            className="bg-gray-100 absolute inset-0 -z-10 rounded-full"
                                            layoutId="activeSection"
                                            transition={{
                                                type: 'spring',
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
}

export default function HeaderComponent() {
    return <Header />;
}