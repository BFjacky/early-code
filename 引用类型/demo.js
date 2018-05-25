function smartSemesterId(semesterStr) {
    if (semesterStr === undefined || semesterStr === null) {
        console.log(semesterStr);
        return undefined;
    }
    /**
       * beginwith 2008-2009秋季学期   semesterId = 1
       * 2010-2011春季学期（匹配两个数字和一个关键字->春、秋）
       */
    const beginStr = '2008-2009秋季学期';
    const patt1 = /\d+/g;
    const patt2 = /春/g;

    const beginNumbers = beginStr.match(patt1);

    const nowNumbers = semesterStr.match(patt1);
    const nowOrder = semesterStr.match(patt2) === null ? 1 : 2;

    const betweenYears = parseInt(nowNumbers[0], 10) - parseInt(beginNumbers[0], 10);

    if (betweenYears >= 0) {
        const id = (betweenYears * 2) + nowOrder;
        return id;
    }
    return undefined;
}
console.log(smartSemesterId('2017 - 2018春季学期'));