class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = 0
        let r= nums.length-1
        let mid = 0
        while(l<=r){
             mid =  l + Math.floor((r - l) / 2);
            if(nums[mid]==target){
                return mid
            }
            else if(nums[mid]>target){
                r = mid-1
            }
            else{
                l = mid+1
            }

        }
        return l
    }
}
