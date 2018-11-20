import * as React from 'react';
import * as style from './WrapSample.pcss';

export default function WrapSample()
{
    return (
        <div className={style.content}>
            <div className={style.div1}>DIV-1</div>
            <div className={style.div2}>DIV-2</div>
            <div className={style.div3}>DIV-3</div>
            <div className={style.div4}>DIV-4</div>
        </div>
    );
}
