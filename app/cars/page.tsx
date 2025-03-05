import Link from "next/link";
import React from "react";
import Card from "../components/cards/Card";
import { Car } from "../lib/types/types";

type Props = {};

const cars: Car[] = [
    {
        name: "Super Car",
        type: "BMW X3",
        colour: "green",
        motor: {
            serialNumber: 1234,
            hp: 200,
        },
    },
    {
        name: "Speedster",
        type: "Audi R8",
        colour: "red",
        motor: {
            serialNumber: 5678,
            hp: 610,
        },
    },
    {
        name: "Road King",
        type: "Mercedes G-Wagon",
        colour: "black",
        motor: {
            serialNumber: 9101,
            hp: 416,
        },
    },
    {
        name: "Lightning",
        type: "Tesla Model S",
        colour: "blue",
        motor: {
            serialNumber: 1121,
            hp: 1020,
        },
    },
    {
        name: "Beast",
        type: "Ford Mustang",
        colour: "yellow",
        motor: {
            serialNumber: 3141,
            hp: 450,
        },
    },
];


export default function page({ }: Props) {
    return (
        <div>
            <h1>Cars</h1>
            {cars.map((car: Car) => (
                <Card car={car} />
            ))}
        </div>
    )
}