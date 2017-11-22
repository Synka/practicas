"use strict"
var MAX_SIZE_LIST = 5;
var list;

function create(){
    list = [];
}

function isEmpty(list){
    var isEmp = false;
    if (list.length === 0){
        isEmp = true;
    }
    return isEmp;
}

function isFull(list){
    var isFull = false;
    if (list.length === MAX_SIZE_LIST){
        isFull = true;
    }
    return isFull;
}

function size(list){
    return list.length;
}
    
function add(list, element){
    var index = 0;
    if (isNaN(element)){
        throw "The element isnt a number!";
    }else {
        if (!isFull(list)){
            if (list.length === 0){
                list.push(element);
            }else {
                while (element >= list[index]){
                    index++;
                }
                list.splice(index, 0, element);
            }
        } else {
            throw "Sorry, the list is full";
        }
    }
    return size(list);
}
    
function get(list, index){
    if (index > MAX_SIZE_LIST){
        throw "The index is longer than the max size!";
    }else {
        return list[index];
    }
}
    
function toString(list){
    var string = list.toString();
    return string;
}
    
function indexOf(list, element){
    var index;
    if (isNaN(element)){
        throw "The element isnt a number!";
    }else {
        index = list.indexOf(element);
        return index;
    }
}
    
function lastIndexOf(list, element){
    var index;
    if (isNaN(element)){
        throw "The element isnt a number!";
    }else {
        index = list.lastIndexOf(element);
        return index;
    }
}
    
function firstElement(list){
    if (isEmpty(list)){
        throw "The list is empty!";
    }else {
        return list[0];
    }
}
    
function lastElement(list){
    if (isEmpty(list)){
        throw "The list is empty!";
    }else {
        return list[list.length-1];
    }
}

function remove(list, index){
    var aux;
    if (index > MAX_SIZE_LIST){
        throw "The index is longer than the max size!";
    }else {
        var aux;
        aux = list[index];
        list.splice(index, 1);
    }
    return aux;
}

function removeElement(list, element){
    var index;
    var i;
    var number;
    if (isNaN(element)){
        throw "The element isnt a number!";
    }else {
        index = indexOf(list, element);
        number = lastIndexOf(list, element) - index + 1;
        if (index !== -1){
            for (i=index; i<= number;i++){
                list.splice(index, 1);
            }
            return true;
        } else {
            return false;
        }  
    }
    
}

function test(){
    console.log("Probamos isEmpty");
    console.log(isEmpty(list));
    console.log("Probamos isFull");
    console.log(isFull(list));
    console.log("Probamos size");
    console.log(size(list));
    console.log("Probamos add");
    console.log(add(list, 3));
    console.log(list);
    console.log(add(list, 2));
    console.log(list);
    console.log(add(list, 3));
    console.log(list);
    console.log(add(list, 9));
    console.log(list);
    console.log(add(list, 3));
    console.log(list);
    console.log("Probamos get");
    console.log(get(list, 1));
    console.log("Probamos toString");
    console.log(toString(list));
    console.log("Probamos indexOf");
    console.log(indexOf(list, 3));
    console.log("Probamos lastIndexOf");
    console.log(lastIndexOf(list, 3));
    console.log("Probamos firstElement");
    console.log(firstElement(list));
    console.log("Probamos lastElement");
    console.log(lastElement(list));
    console.log("Probamos remove");
    console.log(remove(list, 2));
    console.log(list);
    console.log("Probamos removeElement");
    console.log(removeElement(list, 3));
    console.log(list);
}
create();
test();