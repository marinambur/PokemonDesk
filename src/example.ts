// concat('Hello ', 'World') // -> Hello World;
function concat(firstWord: string, secondWord: string): string {
  return firstWord + secondWord;
}
concat('Hello ', 'World');

type howIDoIt = string;
type simeArray = Array<string | number>;
interface MyInterface {
  howIDoIt: howIDoIt;
  simeArray: simeArray;
  withData: [{ howIDoIt: howIDoIt; simeArray: simeArray }];
}

const myHometask: MyInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};
interface MyArray<T> {
  [N: number]: T;
  reduce<U>(callbackfn: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U, initValue: U): U;
}

function myFunc(first: MyArray<number>) {
  return first;
}
myFunc([1, 2]);

function alertFunc(obj: object) {
  alert(obj);
}
alertFunc(myHometask);
