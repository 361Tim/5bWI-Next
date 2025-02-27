import React from "react";
import Link from "next/link";

type Props = {}

export default function Menu({ }: Props) {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Cars</Link>
                </li>
                <li>
                    <Link href="/">rucks</Link>
                </li>
            </ul>
        </div>
    )
}