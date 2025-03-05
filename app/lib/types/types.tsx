export interface Motor {
    serialNumber: number;
    hp: number;
}

export interface Car {
    name: string;
    type: string;
    colour: string;
    motor: Motor;
}



