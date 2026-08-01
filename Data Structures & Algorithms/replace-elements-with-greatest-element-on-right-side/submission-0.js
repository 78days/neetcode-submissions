class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let newa = new Array(arr.length).fill(0)
        newa[arr.length-1] = -1
        for(let i = arr.length-2;i>=0;i--){
            newa[i] = Math.max(...arr.slice(i+1,arr.length))
        }
        return newa
    }
    
}
