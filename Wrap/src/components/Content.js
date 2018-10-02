import React from 'react';
import style from './Content.css';
/**
 * @author kozakluke@gmail.com
 */
export default class Content extends React.Component
{
    render()
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
}
