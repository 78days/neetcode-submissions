class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = new Map()
        for (let i = 0;i<nums.length;i++){
            let comp = target - nums[i];
            if (hash.has(comp)){
                return [i,hash.get(comp)];
            }
            hash.set(nums[i],i)
        }
    }
}
