
function unique(arr) {
    function filterUniqueCallback(item, index, array) {
        return array
            .slice(0, index)
            .filter(atIndex => atIndex === item)
            .length === 0;
    }
    return arr.filter(filterUniqueCallback)
}


let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) );
