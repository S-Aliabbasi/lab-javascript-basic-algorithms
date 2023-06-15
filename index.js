// Iteration 1: Names and Input

//   1.1 Create a variable `hacker1` with the driver's name. <br>
//   1.2 Print `"The driver's name is XXXX"`.<br>
//   1.3 Create a variable `hacker2` with the navigator's name.<br>
//   1.4 Print `"The navigator's name is YYYY"`.

const hacker1 = ["Ali", "sona", "reza", "mona", "sepideh"];
const hacker2 = ["googlemap", "waze", "applemap"];

console.log("The driver's name is :", hacker1);
console.log("The navigator's name is:", hacker2);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
function detect_max(arg) {
  let j = 1,
    equal = [0];
  let max = arg[0];
  for (let i = 1; i < arg.length; i++) {
    if (max.length < arg[i].length) {
      max = arg[i];
      equal = [0];
    }
    if (max.length == arg[i].length && max != arg[i]) {
      equal[j] = arg[i];
      j++;
    }
    equal[0] = max;
  }
  return equal;
}
let max_driver_name = detect_max(hacker1);
let max_navigator_name = detect_max(hacker2);
if (max_driver_name.length < 2)
  console.log(
    "The driver has the longest name is " +
      max_driver_name +
      " with " +
      max_driver_name[0].length +
      " character"
  );
else
  console.log(
    "Wow, you both have equally long names," +
      max_driver_name +
      " with " +
      max_driver_name[0].length +
      "characters!."
  );
if (max_navigator_name.length < 2)
  console.log(
    "It seems that the navigator has the longest name is " +
      max_navigator_name +
      " with " +
      max_navigator_name[0].length +
      " character"
  );

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?
//##############################################################################################

//3.1
//I print the characters of the longest driver`s name

if (max_driver_name.length < 2) {
  let i = 0;
  let str = "";
  while (i <= max_driver_name[0].length - 1) {
    let char = max_driver_name[0][i];
    str += char + " ";
    i++;
  }
  console.log(str.toUpperCase());
}

// 3.2 Print all the characters of the navigator's name in reverse order
if (max_navigator_name.length < 2) {
  let i = max_navigator_name[0].length - 1;
  let str = "";
  while (i >= 0) {
    let char = max_navigator_name[0][i];
    str += char + " ";
    i--;
  }
  console.log(str.toUpperCase());
}

//3.3;

console.log(
  hacker1.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }))
);
console.log(
  hacker2.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }))
);

// Bonus 1:
// Go to the lorem ipsum generator website and:

// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ipsum a lacus interdum convallis vulputate ac libero. Aenean vulputate orci et auctor dignissim. Suspendisse sed odio mattis, vestibulum odio quis, semper justo. Morbi aliquam quis sem et tincidunt. Aenean finibus sed quam sit amet interdum. Suspendisse congue odio vel enim pulvinar rhoncus. Proin vitae hendrerit mi. Pellentesque malesuada eu erat vel vulputate. Pellentesque quis risus eget sapien ultrices hendrerit.\nNullam feugiat leo nec quam consequat, sit amet pellentesque justo suscipit. Aliquam non tristique tortor, id dictum felis. Nullam rutrum, turpis sed sollicitudin sodales, libero tellus tincidunt leo, et facilisis turpis erat at turpis. Vivamus efficitur a nisi id efficitur. Etiam sagittis, massa nec blandit finibus, turpis dolor elementum sem, sit amet venenatis ante orci eget quam. Phasellus sagittis mattis arcu, id aliquet enim sagittis id. Nullam rhoncus lobortis libero sit amet consequat. Suspendisse a lectus volutpat lorem efficitur dictum vitae eget odio. Nulla in ex leo.\nDonec eget lacus nulla. Nunc feugiat libero id volutpat pretium. Nulla rhoncus blandit neque bibendum vestibulum. Duis vestibulum turpis id dui interdum, non euismod ipsum dapibus. Praesent eu pellentesque lectus. Maecenas tincidunt felis nisl, sit amet vulputate arcu finibus ut. Aliquam faucibus massa eget justo egestas, ut tristique mauris posuere. Duis non ipsum at metus pellentesque eleifend vitae eget sapien. Phasellus quis lectus nulla.";
//Generated 3 paragraphs, 221 words, 1517 bytes of Lorem Ipsum

function count(txt, len) {
  let count = 0,
    index = 1,
    longTexttemp;
  longTexttemp = longText;

  while (index > 0) {
    index = longTexttemp.search(txt);
    longTexttemp = longTexttemp.substring(index + len);
    ++count;
  }
  return count;
}

console.log("the number of words in the string is ", count("\\s", 1));
console.log(
  "the number of times the Latin word et appears is ",
  count("et", 2)
);

// Bonus 2:
// Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

let phraseToCheck = "racecar";

function reverse_str(strings, index) {
  let i = strings.length - 1;
  let revers_str = "";
  while (i >= strings.search(index)) {
    let char = strings[i];
    revers_str += char;
    i--;
  }
  return revers_str;
}
let tmp;
if (phraseToCheck.length % 2 == 1)
  tmp = reverse_str(
    phraseToCheck,
    phraseToCheck.substring((phraseToCheck.length - 1) / 2 + 1)
  );
else
  tmp = reverse_str(
    phraseToCheck,
    phraseToCheck.substring(phraseToCheck.length / 2)
  );

if (tmp == phraseToCheck.substring(0, tmp.length))
  console.log("this variable is a Palindrome");
else console.log("this variable is not a Palindrome");
