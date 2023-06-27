function firstUniqChar(s) {
    const charCount = new Map();
  
    // Count the frequency of each character in the string
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    // Find the index of the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      if (charCount.get(s[i]) === 1) {
        return i;
      }
    }
  
    return -1;
  }
  