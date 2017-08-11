

module.exports = {

        getMonthName(date){
            let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                            'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            let result;                

                if (typeof date !== 'object'){
                    throw new TypeError("Function takes a Date Object")
                }
                else {
                    return result = monthName[date.getMonth() - 1]                                       
                }
                           
        },
        
        reverseSentence(string) {
            let result;

                if(typeof string !== 'string'){
                    throw new TypeError("Function takes a string type only")
                }
                else {
                    result = string.split(" ").reverse().join(" ")
                    return result 
                }
        },

        propertyNames(object) {
            let result;

                if (typeof object !== 'object') {
                    throw new TypeError('Argument is not valid data type, needs Object Type')
                }
                else {
                    return result = Object.getOwnPropertyNames(object).sort()
                }            
        },

        filterBetween(array, min, max) {
            let result;

                if (!Array.isArray(array))  {
                    throw new TypeError('Invalid Arguments! Function takes an Array')
                }
                else {
                    result = array.filter((item) => {
                        if (min.toLowerCase() < item.toLowerCase() && item.toLowerCase() < max.toLowerCase())
                            return item
                    }).sort()
                }
                return result            
        }
}
