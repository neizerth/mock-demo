import { XMLHttpRequest } from "xmlhttprequest";

export class CatAPI {
    static get(onload) {
        const url = 'https://api.thecatapi.com/v1/images/search?limit=10';

        const xhr = new XMLHttpRequest;
        // xhr.responseType = 'json';
        xhr.addEventListener('load', () => onload(xhr.response));

        xhr.open('GET', url);

        xhr.send();
    }
}