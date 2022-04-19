import React, { FC } from 'react';
import { IButton } from './AppButton.type';

export const AppButton: FC<{ btn: IButton }> = (props) => {
  const { type, text, btnOnClick, style} = props.btn;
  return (
    <button type={type} onClick={btnOnClick} className="button" style={style}>
      {text}
    </button>
  );
};
