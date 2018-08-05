var _ = require('underscore');


var phone_numbersRegEx = [/(\d{2,4}[-| |\.]+\d{3}[-| |\.]+\d{1,5})/g, //1444-555-1234, 1444 555 1234, 1444.555.1234
    /(\d{10,12})/g, // 1234567963
    /([\(]?\d{1,4}[\)]+\s?\d{1,4}[\.|-]\d{1,5})/g, // (123)456-7890, 123)456.0987, (123)456-7890, (123)456-7890
    /(\+?\d{11,12})/g, // 1611234567
    /(\d{4}[-|\s]+\d{3}[-|\s]+\d{4})/g, // 0161-158-5587
    /(\d{4}[-|\s]+\d{3}[-|\s]+\d{4}[ ]?(?:ext)[\.|\s]?[ ]?\d{3})/g, // 0161 123 4567 ext 123
    /(\(+\d{4}\)?\s\d{3}\s\d{4})/g, // (0161) 123 4567
    /(\+\d{2}\s+\d{3}\s+\d{3}\s+\d{4})/g, // +44 161 123 4567
    /(\+\d{2}\(?0\)?\d{9})/g, // +44(0)161234567
    /(\d{2}[ ]\d{2}[ ]\d{3}[ ]\d{7})/g, // 00 44 161 1234567
    /(\(\d{3}\)\s\d{2}\s\d{3}\s\d{6})/g, // (011) 44 161 234567
    /(\+?\d{11}\x\d{3})/g, // +01611234567x123, +44161234567x123
    /(\+?\d{2}\s\(0\)\s\d{3}\s\d+\s(?:ext)\s\d{3})/g, // +44 (0) 161 1234567 ext 123
    /(\+?\d+\s?\(0\)\d{2}\s\d{4}\s\d{4})/g, // +44 (0)20 7589 1105
    /(\d{4}[ ]\d{7})/g, //0759 4606351

];



var customFormat = function (business_phone_numbers) {
    if (business_phone_numbers) {


        if (business_phone_numbers.constructor === Object) {
            if (Object.keys(business_phone_numbers).length > 30) {
                let temp = [];
                for (let i = 0; i < 30; i++) {
                    temp.push(business_phone_numbers[i]);
                }

                business_phone_numbers = "";
                business_phone_numbers = temp;

            } else {

                let temp = business_phone_numbers;
                business_phone_numbers = "";
                business_phone_numbers = Object.values(temp);

            }
        }

        if (business_phone_numbers.length > 30) {
            business_phone_numbers = business_phone_numbers.slice(0, 30);
        }

        function formatPhoneNumbers(phone_numbersArray) {
            let formatPhoneNumbers = [];
            _.each(phone_numbersArray, (phone_number) => {
                var matchedPhones = [];
                for (eachRegEx of phone_numbersRegEx) {
                    matchedPhone = phone_number.match(eachRegEx);
                    if (matchedPhone) {
                        formatPhoneNumbers.push(matchedPhone[0]);
                        break;
                    }
                }
            })

            return formatPhoneNumbers;

        }
        
        business_phone_numbers = formatPhoneNumbers(business_phone_numbers);
      

        return business_phone_numbers;
    }


}


var doc = {
    "business": {
        "phone_numbers": [
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723",
            "9739009723"
        ]

    }
};

var objDoc = {
    business: {
        phone_numbers: {
            0: "9739009723",
            1: "ext..9739009723 ext",
            2: "973900973788",
            3: "9739009723",
            4: "9739009723",
            5: "9739009723",
            6: "9739009723",
            7: "9739009723",
            8: "9739009723",
            9: "9739009723",
            10: "9739009723",
            11: "9739009723",
            12: "9739009723",
            13: "9739009723",
            14: "9739009723",
            15: "9739009723",
            16: "9739009723",
            17: "9739009723",
            18: "9739009723",
            19: "9739009723",
            20: "9739009723",
            21: "9739009723",
            22: "9739009723",
            23: "9739009723", 24: "9739009723",
            25: "9739009723",
            26: "9739009723",
            27: "9739009723",
            28: "9739009723",
            29: "9739009723",
            30: "9739009723",
            31: "9739009723",
            32: "9739009723",
            33: "9739009723",
            34: "9739009723",
            35: "9739009723",
            36: "9739009723",
            37: "9739009723",
            38: "9739009723",
            39: "9739009723"
        }

    }

}

var sam = {
    business: {
        phone_numbers: ["9739009723---11111bhbbb--12334"]
    }
}



module.exports = customFormat;