function isPalindrome(word) {
  // Write your algorithm here

    if ( word.length == 0 ) {
        return "String cannot be empty";
    }
    if ( typeof word != "string") {
        return "Only strings allowed";
    }
  
    let reversedStr = "";
  
    for ( i = word.length -1; i >= 0; i-- ) {
        reversedStr = reversedStr + word [i]
    }
  
    
  if ( reversedStr == word ) {
    return true;
  }
  else if ( reversedStr != word ){
    return false;
  }

}

/* 
  Add your pseudocode here

  Inside the isPalindrome function:
  -ensure the word is a string
  -ensure the function is not empty

  create a new string
  use a for loop, starting from the last letter to push the letters to a new string
  return the new string

  use comparison operators to compare the words
  return boolean
*/

/*
  Add written explanation of your solution here
  I have created a new string inside the function
  I have used the for loop to iterate through the string as in an array and push each letter into the new array beginning from the last one.
  I then used the comparison operators to determine whether the two strings are alike or not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log( "Expecting: false" );
  console.log( "=> ", isPalindrome( "machine" ) );

  console.log("Expecting: true" );
  console.log("=>", isPalindrome( "radar" ) );

  console.log("Expecting: false" );
  console.log("=>", isPalindrome( "ab" ) );

  console.log("Expecting: true" );
  console.log("=>", isPalindrome( "civic" ) );
}
