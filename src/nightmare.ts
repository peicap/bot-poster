import * as Nightmare from 'nightmare'
const c = require('cheerio')
const yargs = require('yargs')
declare var document;

class nightmare extends Nightmare {
    /**
     * Important functionalites. 
     * 1. Go to a url
     */

     /**
      * Goes to  
      */
      async get(url) {
        let html = await this 
          .goto(url)

    }  
}