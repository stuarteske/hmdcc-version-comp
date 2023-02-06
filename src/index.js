module.exports = class Comparitator {

    static aryToStr = (ary, ignoreFirstChar = false) => {

        let str = '';

        for (let i = 0; i < ary.length; i++) {

            if (
                ignoreFirstChar
                && i == 0
            ) continue;

            // If not 0 or null then add it to the string
            if (ary[i])
                str = str + String.fromCharCode(ary[i]);

        }

        // For later
        //let segments = text.split(/[.,!,?,;,...]/);

        return str;
    }

    static compWithStr = (ary1, str1, ignoreFirstChar = false) => {

        let str2 = Comparitator.aryToStr(ary1, ignoreFirstChar);

        let isSame = true;

        if (str1 !== str2) {
            isSame = false
        }

        return isSame;
    }

    static compWithAry = (ary1, ary2) => {

        let isSame = true;

        for (let i = 0; i < ary1.length; i++) {

            if (
                ary1[i]
                && ary1[i] != ary2[i]
            ) isSame = false

            if (!isSame)
                break;

        }

        return isSame;
    }

}