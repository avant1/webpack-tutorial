import _ from 'lodash';
import './css/style.css';
import myIcon from './icon.png';
import data from './data/data.xml';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var icon = new Image();
    icon.src = myIcon;
    icon.width = 200;
    element.appendChild(icon);
    console.log(data);


    return element;
}

document.body.appendChild(component());
