class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l =0
        let r = s.length-1
         while(l<r){
            if(s[l]==s[r]){
                l++
                r--
            }
            else{
                let output1 = Palindrome(s,l+1,r)
                let output2 = Palindrome(s,l,r-1)
                if((output1==false) && (output2==false)) return false
                break
            }
         }
        function Palindrome(s,l,r){
        while(l<r){
            if(s[l]==s[r]){
                l++
                r--
            }
            else{
                return false
            }


        }
        return true
        }
        return true
    }

}
