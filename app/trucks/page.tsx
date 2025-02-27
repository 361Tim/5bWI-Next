import Link from "next/link";
import React from "react";

type Props = {};

export default function page({ }: Props) {
    return <div>Trucks
        <Link href={"/"}>Go to root </Link>
    </div>
}