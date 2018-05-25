const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

class result {
    constructor(timeRanges, course, number, name, EnglishName, credit, attribute, score) {
        this.timeRanges = timeRanges;
        this.course = course;
        this.number = number;
        this.name = name;
        this.EnglishName = EnglishName;
        this.credit = credit;
        this.attribute = attribute;
        this.score = score;
    }
}

let obj = [];
module.exports = function getScoreFromData(data) {
        const $ = cheerio.load(data);
        let datas = [];
        let index = 0;
        let term = [];
        $('a').each(function (i, elem) {
            term[i] = $(this).attr('name');

        })
        $('.displayTag').each(function (i, elem) {

            $(this).find('.odd').each(function (j, elem) {
                $(this).children().each(function (k, elem) {
                    datas[k] = $(this).text().trim();
                })
                //这里删掉了不需要的信息datas[1],datas[3],
                obj[index] = new result(term[i], datas[0],  datas[2],  datas[4], datas[5], datas[6]);
                index++;
            })
        })

        return obj;
  

 
}

