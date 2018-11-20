import * as React from 'react';
import * as style from './FlexSample.pcss';

export default function FlexSample()
{
    return (
        <div className={style.flex}>
            <div className={style.div1}>DIV-1</div>
            <div className={style.div2}>DIV-2</div>
            <div className={style.div3}>DIV-3</div>
            <div className={style.div4}>DIV-4</div>
        </div>
    );
}
