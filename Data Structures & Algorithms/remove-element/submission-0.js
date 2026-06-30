class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left =0 
        let right = 0
        const swap = (nums,left,right) => {
           [nums[left],nums[right]] = [nums[right],nums[left]]
        }
        while(right<nums.length){
            if (nums[right]!==val){
                swap(nums,left,right)
                left++
            }
            right++
            
        }
        
        return left
    }
}
