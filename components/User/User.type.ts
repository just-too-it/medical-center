import { StaticImageData } from "next/image";

export interface IUser {
    id: string | number;
    name: string;
    image: StaticImageData | string;
}