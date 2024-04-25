import immutable from 'immutable';

const { List } = immutable;

const getListObject = (array) => List(array);

const addElementToList = (list, element) => list.push(element);

export { getListObject, addElementToList };
