var Name_of_student_array = [];
function submit(){
    var Name_1 = document.getElementById("Name Of The Student1").value; 
    var Name_2 = document.getElementById("Name Of The Student2").value; 
    var Name_3 = document.getElementById("Name Of The Student3").value; 
    var Name_4 = document.getElementById("Name Of The Student4").value; 
    Name_of_student_array.push(Name_1);
    Name_of_student_array.push(Name_2);
    Name_of_student_array.push(Name_3);
    Name_of_student_array.push(Name_4);
    console.log(Name_of_student_array);
    document.getElementById("display_name").innerHTML = Name_of_student_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sort(){
    Name_of_student_array.sort();
    console.log(Name_of_student_array);
    document.getElementById("display_name").innerHTML = Name_of_student_array;
}