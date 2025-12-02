// method 1
// easy quicka nd dity

// window.addEventListener('keydown', (e) => {
//     const insert = document.getElementById('insert');

//     insert.innerHTML = `
//     <div class="key">
//         ${e.key === ' ' ? 'Space' : e.key}
//         <small>e.key</small>
//     </div>

//     <div class="key">
//         ${e.keyCode}
//         <small>e.keyCode</small>
//     </div>

//     <div class="key">
//         ${e.code}
//         <small>e.code</small>
//     </div>
//     `;
// }
// )

//method 2 - build out html
function showKeyCodes(e) {
    const insert = document.getElementById('insert');
    insert.innerHTML = '';

    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    }

    for(let key in keyCodes) {
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key)
        const valueText = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small)

        insert.appendChild(div);
        //insert any key still there, any key pressed woill keep adding have to ad innerhtml to insert div see above
    }
}

window.addEventListener('keydown', showKeyCodes)