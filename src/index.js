import printMe from './print.js';
import {cube} from './math'
import append from './append.js';
import './style.css';

function component() {
    var element = document.createElement('pre');
    var btn = document.createElement('button');
    var state = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = [
        'Hello Webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    element.style.color = 'green';

    state.classList.add('state');
    state.innerText = 'Hello';

    btn.innerText = 'Click me and check the console';
    btn.onclick = append;

    element.appendChild(btn);
    element.appendChild(state);

    return element;
}

var element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function(){
        console.log('Accepting the update print module');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });

    module.hot.accept('./append.js', function(){
        console.log('Accepting the update append module');
        document.body.removeChild(element);
        const oldState = element.querySelector('.state').innerText;
        element = component();
        element.querySelector('.state').innerText = oldState;
        document.body.appendChild(element);
    });
}

