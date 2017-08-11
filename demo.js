function month(date) {
    let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

        let result = monthName[date.getMonth() - 1]
        
        console.log(result);
        
} 

var testObj = new Date(2017, 4, 24)

month(testObj)