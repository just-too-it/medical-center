export interface IAppIcon {
    type: 'button' | 'submit' | 'reset';
    name: string;
    iconOnClick(): void;
}