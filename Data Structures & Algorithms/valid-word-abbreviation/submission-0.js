class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let n = word.length
    let m = abbr.length
    let p = 0
    let q = 0
    let num 
    while(p<n && q<m){
        if(word[p]==abbr[q]){
            p++
            q++
        }
        else if(/^\d$/.test(abbr[q]) ){
            num = Number(abbr[q])
            if(num==0)return false

            while(/^\d$/.test(abbr[q+1])){
                
                 num = 10 * num + Number(abbr[q+1]) 
                 q++
            }
            p+=num
            q++
        }
        else{
            return false
        }

    }
    if(p==n && q==m) return true
    return false
    }
}
