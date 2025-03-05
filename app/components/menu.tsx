import React from "react";
import Link from "next/link";

type Props = {}

export default function Menu({ }: Props) {
    return (
        <div>
            <ul className="flex p-4">
                <li className="p-2 hover:bg-amber-200">
                    <Link href="/">Home</Link>
                </li>
                <li className="p-2 hover:bg-amber-200">
                    <Link href="/">Cars</Link>
                </li>
                <li className="p-2 hover:bg-amber-200">
                    <Link href="/">Trucks</Link>
                </li>
            </ul>
        </div>
    )
}