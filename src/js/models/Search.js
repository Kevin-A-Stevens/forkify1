import axios from 'axios';
// import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        // const key = 'MY_API_KEY';
        // const proxy = 'https://cors-anywhere.herokuapp.com/';
        try {
            // const res = await axios(`${proxy}https://food2fork.com/api/search?${key}&q=${query}`)
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        } 
    }
}




