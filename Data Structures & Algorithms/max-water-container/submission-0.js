class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l =0
        let r = heights.length-1
        let height = 0
        let maxi = 0
        let width = 0
        let vol = 0
        while(l<r){
            height = Math.min(heights[l],heights[r])
            width = r-l
            vol = height*width
            maxi = Math.max(maxi,vol)
            if(heights[l]<heights[r]){
                l++
            }
            else{
                r--
            }
        }
        return maxi
    }
}
