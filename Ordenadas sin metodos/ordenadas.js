"use strict"
var MAX_SIZE_LIST = 5;
var list = [];

function create(){
    var i;
    for (i=0; i<MAX_SIZE_LIST; i++){
        list[i] = Number.NaN;
    }
    console.log(list);
}

function isEmpty(list){
    var isEmp = false;
    if (isNaN (list[0])){
        isEmp = true;
    }
    return isEmp;
}

function isFull(list){
    var isFull = false;
    if (!isNaN(list[MAX_SIZE_LIST - 1])){
        isFull = true;
    }
    return isFull;
}

function size(list){
    var length = 0;
    while(length < MAX_SIZE_LIST && !isNaN(list[length])){
        length++;
    }
    return length;
}

function add(list, element){
    var index = 0;
    var aux, aux2;
    if (isNaN(element)){
        throw "The element isnt a number!";
    }else {
        if (!isFull(list)){
            if (size(list) === 0){
                list[0] = element;
            }else{
                while (element >= list[index]){
                    index++;
                }
                aux = list[index];
                list[index] = element;
                while (index < size(list)){
                    aux2 = list[index+1];
                    list[index+1] = aux;
                    aux = aux2;
                    index++;
                }
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
    var string = list[0];
    var i;
    for (i=1; i < size(list); i++){
        string = string +"-"+list[i];
    }
    return string;
}
    
function indexOf(list, element){
    var found = false;
    var i = 0;
    if (isNaN(element)){
        throw "The element isnt a number!";
    }else {
        while (found === false && i < MAX_SIZE_LIST)
            if (list[i] === element){
                found = true;
            }else {
                i++;
            }
        if (i === MAX_SIZE_LIST){
            return -1;
        }else {
            return i;
        }
    }
}
    
function lastIndexOf(list, element){
    var found = false;
    var i = size(list);
    if (isNaN(element)){
        throw "The element isnt a number!";
    }else {
        while (found === false && i >= 0)
            if (list[i] === element){
                found = true;
            }else {
                i--;
            }
        if (i === MAX_SIZE_LIST){
            return -1;
        }else {
            return i;
        }
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
        return list[size(list)-1];
    }
}

function remove(list, index){
    var aux;
    if (index > MAX_SIZE_LIST){
        throw "The index is longer than the max size!";
    }else {
        aux = list[index];
        while (index < size(list)){
            list[index] = list[index+1];
            list[MAX_SIZE_LIST-1] = Number.NaN;
            index++;
        }
    }
    return aux;
}

function removeElement(list, element){
    var index;
    if (isNaN(element)){
        throw "The element isnt a number!";
    }else {
        index = indexOf(list, element);
        if (index !== -1){
            while (index < size(list)){
            list[index] = list[index+1];
            list[MAX_SIZE_LIST-1] = Number.NaN;
            index++;
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
    console.log(remove(list, 0));
    console.log(list);
    console.log("Probamos removeElement");
    console.log(removeElement(list, 3));
    console.log(list);
}
create();
test();