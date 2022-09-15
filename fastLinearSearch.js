/**
 * This is the fastest linear search algorithm
 * It has a run time of O(n/4) in the worst case
 * 
 * Searching for item at the end or begining or near the middle returns very fast
 * it return the index of the item found or -1 if the item is not in the array
 * @param searchItem 
 * @param  arr 
 * @returns 
 */
function fastLinearSearch(searchItem, arr) {
    //get the middle of the items
    let mid = parseInt(arr.length / 2);
    let midRight = mid;

    //Start searching from left and right and middle
    for (let i = 0, j = arr.length -1; i < arr.length, j > 0; i++ , j--) {
        if (i >= j) {
            return -1;
        }

        //if middle left gets lower than left and middle right gets higher than right then we didnt find the item
        if (midRight > j && mid < i) {
            return -1;
        }

        if (arr[mid] === searchItem) {
            return mid;
        }
        if (arr[midRight] === searchItem) {
            return midRight;
        }

        if (mid > i) {
            mid--;
        }
        if (midRight < j){
            midRight++;
        }

        if (arr[i] === searchItem) {
            return i;
        }
        if (arr[j] === searchItem) {
            return j;
        }
    }
}

let items = [1,4,2,8,7,0,10,20,21,19,13,12,15,14,17,5,3,9];

console.log(fastLinearSearch(21, items));