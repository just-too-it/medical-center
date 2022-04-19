import { CSSProperties } from "react";

export interface IButton {
    type: 'button' | 'submit' | 'reset';
    text: string;
    btnOnClick(): void;
    style?: CSSProperties;
}