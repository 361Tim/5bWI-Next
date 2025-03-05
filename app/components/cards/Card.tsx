import React from "react";
import { Car } from "@/app/lib/types/types";

type Props = { car: Car };

export default function Card({ car }: Props) {
    return <div className="bg-green-500 border p-4">
        <h2>{car.name}</h2>
        <div>{car.colour}</div>
    </div>;
}