const funk = require('../functions')
const expect = require('chai').expect
const assert = require('chai').assert


describe("Phase 2 part-1 functions", 
function() {

    context("getMonthName()", function() {

        it("Checks to see if function throws an TypeError for invalid data types.", function () {

            let invalidDate1 = 'An invalid string that should throw error'
            let invalidDate2 = 19870101
            
            let invalidTest1 = () => funk.getMonthName(invalidDate1)
            let invalidTest2 = () => funk.getMonthName(invalidDate2) 

            expect(invalidTest1).to.throw(TypeError)
            expect(invalidTest2).to.throw(TypeError)


        })       
    })
    context("getMonthName()", function() {

        it("Returns a month name based on a given Date object", function () {

            let validDate1 = new Date(1987, 01, 01) // Should Return Jan
            let validDate2 = new Date(2005, 05, 14) // Should Returm May

            let validTest1 = funk.getMonthName(validDate1)
            let validTest2 = funk.getMonthName(validDate2)

            expect(validTest1).to.equal('Jan')            
            expect(validTest2).to.equal('May')            
        })       
    })

    context("reverseSentence()", function() {

        it("Checks if the argument is a String type", 
        function () {

            let invalidType1 = 4000500
            let invalidType2 = ['An', 'Invalid', 'Data', 'Type']
            
            let invalidTest1 = () => funk.reverseSentence(invalidType1)
            let invalidTest2 = () => funk.reverseSentence(invalidType2)
            
            expect(invalidTest1).to.throw(TypeError)
            expect(invalidTest2).to.throw(TypeError)
        })
    })

    context("reverseSentence()", function() {

        it("Checks if function reverses order of a sentence", function () {

            let validString1 = 'This is the rewind'
            let validString2 = 'Remix the order of this sentence'

            let validTest1 = funk.reverseSentence(validString1)
            let validTest2 = funk.reverseSentence(validString2)
            
            expect(validTest1).to.equal('rewind the is This')
            expect(validTest2).to.equal('sentence this of order the Remix')            
        })    
    })

    context("propertyNames()", function() {

        it("Checks if the argument is an Object Type", function() {

            let invalidObject1 = 'This is not an Object'
            let invalidObject2 = true

            let invalidTest1 = () => funk.propertyNames(invalidObject1)
            let invalidTest2 = () => funk.propertyNames(invalidObject2)

            expect(invalidTest1).to.throw(TypeError)
            expect(invalidTest2).to.throw(TypeError)            
        })
    })

    context("propertyNames()", function() {

        it("Returns all properties of an Object in sorted order", function() {

            let testObj1 = { 'Z': 3, 'X': 4, 'Y': 2, 'T': 1 }
            let testObj2 = { 'E-bay': 3, 'Yahoo': 4, 'Google': 2, 'Amazon': 1 }

            let validTest1 = funk.propertyNames(testObj1)
            let validTest2 = funk.propertyNames(testObj2)

            expect(validTest1).to.be.an('array').to.have.members(['T', 'X', 'Y', 'Z'])
            expect(validTest2).to.be.an('array').to.have.members(['Amazon', 'E-bay', 'Google', 'Yahoo'])            
        })
    })

    context("filterBetween()", function() {

        it("Checks if the array argument is valid type", function() {

            let invalidParameter1 = {'Some': 10, 'Object': 20, 'With': 30, 'Numbers': 40}
            let invalidParameter2 = 30025000600

            let invalidTest1 = () => funk.filterBetween(invalidParameter1, 'arbitrary', 'parameters')
            let invalidTest2 = () => funk.filterBetween(invalidParameter2, 'arbitrary', 'parameters')

            expect(invalidTest1).to.throw(TypeError)
            expect(invalidTest2).to.throw(TypeError)            
        })      
    })

    context("filterBetween()", function() {

        it("Checks if return values are correct", function() {
             var testArray1 = ['pig', 'rat', 'cat', 'dog', 'mice', 'ant', 'zebra', 'goat', 'whale']
            var testArray2 = ['Paul', 'Rick', 'Catherine', 'Donny', 'Mike', 'Anthony', 'Zane', 'George', 'Walter']

            var validTest1 = funk.filterBetween(testArray1, 'demon', 'pug')
            var validTest2 = funk.filterBetween(testArray2, 'Lou', 'Xavier')

            expect(validTest1).to.include.ordered.members(['dog', 'goat', 'mice', 'pig'])
            expect(validTest2).to.include.ordered.members(['Mike', 'Paul', 'Rick', 'Walter'])
        })      
    })

} )