class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
            let l=0
    let r=0
    let maxl=0
    var seen =  new Set()
    while(r<s.length){
        
        if(seen.has(s[r])){
            
        seen.delete(s[l])
       
            l++;
        }
        else{
            seen.add(s[r])
            maxl = Math.max(seen.size,maxl)
            r++
            
        }
    }
    
    return maxl 
    }
}
