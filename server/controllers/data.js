// Import data scraping modules 
var cheerio = require('cheerio')
var request = require('request');
var jsonframe = require('jsonframe-cheerio');


// ActiveSG website data scrape
// Get all gyms 
var gyms = [];
var formatted_words = [];
var gyms_full = [];         // Use this DB of fully-scraped gyms (Note: only some gyms are listed, due to inconsistent HTML structure)


exports.show = function (req, res) {
    new Promise(function (resolve, reject) {
        resolve(request('https://www.myactivesg.com/facilities?sport=All&q=&type=gym', function (err, resp, html) {
            if (!err) {
                const $ = cheerio.load(html);

                $('div.two-column.lists.listing a .desc-content h3').each(function (index, element) {
                    gyms.push(element['children'][0]['data'])
                })

                // gym details 
                for (i = 0; i < gyms.length; i++) {
                    var words = gyms[i].split(" ");
                    formatted_words.push(words.join("-"))
                }

                for (i = 0; i < formatted_words.length; i++) {
                    request('https://www.myactivesg.com/facilities/' + formatted_words[i], async function (err, resp, html) {
                        if (!err) {
                            const $ = cheerio.load(html);
                            jsonframe($)

                            $('.content-container.two-column.clearfix').each(function (index, element) {
                                var itemFrame = {       			              // jsonframe 
                                    "facility": ".page-header__title",
                                    "address": "address h4+p",
                                    "contact_num": "#mainplaceholder_0_P1 a",
                                    "description": ".facility-description p",
                                    "opening_hours": ".facility-operating-hours"
                                }

                                var item = $('body').scrape(itemFrame, { string: true })

                                gyms_full.push(item)
                            })
                        }
                    })
                }

                setTimeout(function () {
                    console.log(gyms_full)
                    console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
                }, 2000);           // Wait 2sec to console.log() after pushing into gyms_full, due to asynchronous effect
            }
            return gyms_full       // Needed?
        }
        )).then(function () {
            console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC")
        });
    })
}
