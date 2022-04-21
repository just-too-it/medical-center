import React, {FC} from 'react';
import { IBreadcrumbs } from './Breadcrumbs.type';
import Router, { useRouter } from 'next/router';

export const Breadcrumbs:FC<{ item: IBreadcrumbs}> = (props)=> {
    const { title, link } = props.item;

    return (
        <button type='button' onClick={()=>Router.push(`${link}`)} className='breadcrumbs'>{title}</button>

    )
}