class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let el = nums[0];
        let cnt = 0;
        for(let i =0;i<nums.length;i++){
            if(cnt ===0){
                el = nums[i];
                cnt++;
            }
            else if(el === nums[i]){
                cnt++;
            }
            else{
                cnt--
            }
        }
        return el !== Infinity ? el:0;
    }
}
