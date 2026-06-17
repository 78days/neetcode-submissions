class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let l =0
        let r= k-1
        
        let min = Infinity
        while (r<blocks.length){
            let wcount = 0
            for (let i = l;i<=r;i++){
                if(blocks[i]==='W'){
                    wcount++
                }

            }
            min = Math.min(min,wcount)
             l++;
            r++;
   
        }
        return min
    }
}
