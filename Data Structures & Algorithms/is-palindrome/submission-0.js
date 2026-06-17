class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let point1 = 0;
        let point2 = s.length-1;
        while (point1<point2){
             if ( !/^[a-z0-9]+$/i.test(s[point1])){
                point1++;
                continue;
            }
            if ( !/^[a-z0-9]+$/i.test(s[point2])){
                point2--;
                continue;
            }
            if ((s[point1].toLowerCase() !== s[point2].toLowerCase()) ){
                return false

            }
           
            point1++;
            point2--;

        }
        return true
    }
}
