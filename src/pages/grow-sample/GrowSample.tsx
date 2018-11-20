import * as React from 'react';
import * as style from './GrowSample.pcss';

export default function GrowSample()
{
    return (
        <div className={style.grow}>
            <div className={style.div1}>DIV-1</div>
            <div className={style.div2}>DIV-2</div>
            <div className={style.div3}>DIV-3</div>
            <div className={style.div4}>DIV-4</div>
        </div>
    );
}
