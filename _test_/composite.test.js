const List = require('../composite.js');

describe("List", () => {
  const aValue = 'aValue'
let list
 
  beforeEach(() => {
    list = new List()
  })

  describe("when there are not stored items", () => {
    it("retrieves an undefined as the first stored item", () => {

      const firstStoredItem = list.first()

      expect(firstStoredItem).toBe(undefined)
    })
    it("retrieves an undefined as the last stored item", () => {

      const lastStoredItem = list.last()

      expect(lastStoredItem).toBe(undefined)
    })
  })

  describe("when there is store item", () => {
    beforeEach(() => {
      list.push(aValue)
    })

    it("retrieves the value of the first stored item", () => {

      const firstStoredItem = list.first()

      expect(firstStoredItem).toBe(aValue)
    })

    it("retrieves the value of the last stored item", () => {

      const lastStoredItem = list.last()

      expect(lastStoredItem).toBe(aValue)
    })
  })

  describe("when there are stored items", () => {
    const anotherValue = 'anotherValue'

    beforeEach(() => {
      list.push(aValue)
      list.push(anotherValue)
    })

    it("retrieves the value of the first stored item", () => {

      const firstStoredItem = list.first()

      expect(firstStoredItem).toBe(aValue)
    })

    it("retrieves the value of the last stored item", () => {

      const lastStoredItem = list.last()

      expect(lastStoredItem).toBe(anotherValue)
    })
  })
});
