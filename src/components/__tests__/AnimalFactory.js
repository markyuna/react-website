
class Chien {
    constructor(props) {
        this.animalType = "chien"
        this.props = props
    }
}

class Chat {
    constructor(props) {
        this.animalType = "chat"
        this.props = props
    }
}

class Elephant {
    constructor(props) {
        this.animalType = "elephant"
        this.props = props
    }
}



class AnimalFactory  {
    
    constructor(type, props) {
      if(type === "chien")
        return new Chien(props);
      if(type === "chat")
        return new Chat(props);
      if(type === "elephant")
        return new Elephant(props);
    }
  
}

export {
    AnimalFactory, 
    Chien,
    Chat,
    Elephant,
}