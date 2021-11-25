// After loading the DOM, execute the processing in function()
$(document).ready(function () {
  // Logic to get the score (input value) of "Japanese, English, math, science, society" and get the total score and average score
  function score_indicate() {
    // Substitute an array of scores for "Japanese, English, math, science, and society" into the variable "subject_points".
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    // Add the score of "Japanese, English, math, science, society" to the variable "sum".
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // Output the variable "sum" (total score) to "total score:" (id = "sum_indicate").
    $("#sum_indicate").text(sum); 
    // Describe the process of outputting the average score of each subject in "Average score:".
    // Hint: Let's assign the average value to the variable "average" (total number of numbers you want to average (sum) / total number)
    // Tip: Use the length method to find the total number. (length method: Method to get the length of the character string, the number of elements in the array, etc.)
    $("#average_indicate").text(sum/subject_points.length);
    const avarage = sum/subject_points.length;
  };
  // Describe the logic to acquire the average score and rank it into "A, B, C, D" from the acquired average score.
  function get_achievement() {
    // In the variable "averageIndicate"
    // Get the average score from id = "average_indicate" on HTML and substitute it.
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    // If "averageIndicate" is 80 or higher, "A" is returned.
    if (averageIndicate >= 80) {
      return "A";
    } else
    // If "averageIndicate" is 60 or more, "B" is returned.
    if (averageIndicate >= 60) {
      return "B";
    } else
    // If "averageIndicate" is 40 or more, "C" is returned.
    if (averageIndicate >= 40) {
      return "C";
    } else
    // If "averageIndicate" is otherwise, it returns "D".
      return "D";
  };
  // Obtain the points of each subject and create the logic to judge "pass or fail" from the obtained points.
  function get_pass_or_failure() {
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];

    let newSum = subject_points[0];
    newSum = newSum + subject_points[1];
    newSum = newSum + subject_points[2];
    newSum = newSum + subject_points[3];
    newSum = newSum + subject_points[4];
    // Substitute the number of subjects entered in the variable "number".
    let number = subject_points.length;
    // Assign "pass" to the variable "judge".
    
    // If even one of the entered subjects has a score lower than 60 points, describe the process of reassigning "fail" to the variable "judge".
    // Tip: Find out about iterating arrays.
    let judge = "hi";
    if (newSum/number <60 )
      judge = "fail";
    else
      judge = "Pass";

    return judge;
  };
  // Create the final judge logic.
  function judgement() {
    // Assign "return value of get_achievement ()" to the variable "achievement".
    let achievement = get_achievement();
    // Substitute "return value of get_pass_or_failure ()" for variable "pass_or_failure".
    let pass_or_failure = get_pass_or_failure();
    // 「Result」(id="alert-indicate) press the button「Your grade is${achievement}です。${pass_or_failure}です。」 is the output process.
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${achievement}. You ${pass_or_failure}.</label>`);
  };
  // This process fires "function score_indicate ()" when any of the scores in [Japanese score, English score, math score, science score, social score] is changed.
  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });
  // When you press the "Rank" (id = "evaluation") button, "get_achievement ()" is output.
  $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });
  // When you press the "judgment" (id = "btn-judge") button, "function et_pass_or_failure ()" is output.
  $('#btn-judge').click(function () {
    $("#judge").text(get_pass_or_failure());
  });
  // When the "final judge" (id = "btn-declaration") button is pressed, the process of "function judgment ()" is executed.
  // When the "Final Judge" button is pressed from the second time onward, the HTML element of the judge that has been displayed up to that point is deleted and a new HTML element of the judge is added.
  // Tip: Find out about the remove method.
  $('#btn-declaration').click(function () {
    const myp = document.getElementById('declaration');
    myp.innerHTML = "";
    judgement();
  });
});
// The JavaScript description written here is just a template prepared as a hint, so if you want to implement it without following the written description, you can implement it as you like. If you meet all the pass requirements, you will pass.