'use strict'

const THANK_WRITING = 'Grazie per avermi scritto, risponderò nel più breve tempo possibile';
const THANK_VISIT = 'Grazie per aver visitato il sito web';

function getMail(email) {
    const a = document.createElement('a');
    const message = document.createElement('h6');
    const hr = document.createElement('hr');
    message.style.color = 'whitesmoke';
    message.style.marginTop = '1em';
    a.href = `mailto:${email}`;
    a.click();
    const writingMessage = document.createTextNode(THANK_WRITING);
    message.appendChild(writingMessage);
    message.appendChild(hr);
    document.getElementById('message').appendChild(message);
    setTimeout(() => {
        message.removeChild(writingMessage);
        message.removeChild(hr);
    }, 10000);
}

function openURL(url) {
    const a = document.createElement('a');
    const message = document.createElement('h6');
    const hr = document.createElement('hr');
    message.style.color = 'whitesmoke';
    message.style.marginTop = '1em';
    a.href = `https://wwww.${url}`;
    a.target = '_blank';
    a.click();
    const visitMessage = document.createTextNode(THANK_VISIT);
    message.appendChild(visitMessage);
    message.appendChild(hr);
    document.getElementById('message').appendChild(message);
    setTimeout(() => {
        message.removeChild(visitMessage);
        message.removeChild(hr);
    }, 10000);
}