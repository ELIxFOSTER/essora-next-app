import Image from "next/image"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "radix-ui";
import { AlignRight } from 'lucide-react';
import Link from "next/link";


export default function Navbar() {
    return (
        <div className="sticky top-0 flex justify-between items-center backdrop-blur-sm bg-white/30 dark:bg-dark/30 border-b border-slate-300/20 dark:border-neutral-900 w-full p-3 z-50">
            <Image
                className="invert"
                src="/essora.svg"
                alt="Next.js logo"
                width={125}
                height={28}
                priority
            />
            <div>


                <Drawer>
                    <DrawerTrigger><AlignRight /></DrawerTrigger>
                    <DrawerContent className="h-5/6 py-6 px-3 dark:invert">
                        <DrawerHeader>
                            <VisuallyHidden.Root>
                                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                            </VisuallyHidden.Root>
                            <div className="flex flex-col gap-7 items-end justify-end">
                                <Link href="/pricing" className="font-semibold text-xl">Pricing</Link>
                                <Link href="/contact" className="font-semibold text-xl">Contact</Link>
                            </div>
                        </DrawerHeader>
                    </DrawerContent>
                </Drawer>

            </div>
        </div>
    )
}