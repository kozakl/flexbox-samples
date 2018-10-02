import React    from 'react';
import ReactDOM from 'react-dom';
import Content  from './components/Content'
import './Main.css';
/**
 * @author kozakluke@gmail.com
 */
class Main
{
    constructor()
    {
        window.onload = this.onLoad.bind(this);
    }
    
    /**
     * @private
     */
    onLoad()
    {
        ReactDOM.render(
            <Content/>,
            document.getElementById('main')
        );
    }
}

Main.instance = new Main();
