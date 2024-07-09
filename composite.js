class List {
    items = UndefinedItem
  
    push(value) {
      this.items = this.items.push(value)
    }
  
    last() {
      return this.items.last()
    }
  
    first() {
      return this.items.first()
    }
  }
  
  class UndefinedItem {
    static push(value) {
      return new Item(value)
    }
  
    static first() {
      return undefined
    }
  
    static last() {
      return undefined
    }
  }
  
  class NextItem {
    value = undefined
  
    constructor(value) {
      this.value = value
    }
  
    push(value) {
      return new Item(value)
    }
  
    first() {
      return this.value
    }
  
    last() {
      return this.value
    }
  }
  
  class Item {
    value = undefined
    nextItem = UndefinedItem
  
    constructor(value) {
      this.value = value
      this.nextItem = new NextItem(value)
    }
  
    push(value) {
      this.nextItem = this.nextItem.push(value)
  
      return this
    }
  
    last() {
      return this.nextItem.last()
    }
  
    first() {
      return this.value
    }
  }

module.exports = List ;
