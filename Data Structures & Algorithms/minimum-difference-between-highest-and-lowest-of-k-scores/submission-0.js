class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums = nums.sort((a,b) => a-b)
        let l = 0
        let r = k-1
        let mind = 100000
        while(r<nums.length){

             mind = Math.min(mind,nums[r]-nums[l])
            l++;
            r++;

        }
        return mind
    }
}
