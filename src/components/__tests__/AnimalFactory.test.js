import {AnimalFactory, Chat, Chien, Elephant} from './AnimalFactory';

it('should return instance of Chien', () => {
    expect(new AnimalFactory("chien")).toBeInstanceOf(Chien)
})

it('should return instance of Chat', () => {
    expect(new AnimalFactory("chat")).toBeInstanceOf(Chat)
})

it('should return instance of Elephant', () => {
    expect(new AnimalFactory("elephant")).toBeInstanceOf(Elephant)
})
