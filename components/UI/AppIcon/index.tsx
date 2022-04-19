import React from 'react';
import { IAppIcon } from './AppIcon.type';

export const AppIcon = (icon: IAppIcon) => {
    const {type, name, iconOnClick, ...rest} = icon;

    return (
        <button type={type} className={`icon icon_${name}`} onClick={iconOnClick} {...rest}/>
    )
}