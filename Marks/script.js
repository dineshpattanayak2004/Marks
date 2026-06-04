function calculateResult(){

    let s1 = Number(document.getElementById("s1").value);
    let s2 = Number(document.getElementById("s2").value);
    let s3 = Number(document.getElementById("s3").value);
    let s4 = Number(document.getElementById("s4").value);
    let s5 = Number(document.getElementById("s5").value);

    let total = s1 + s2 + s3 + s4 + s5;

    let percentage = total / 5;

    let grade;

    if(percentage >= 90){
        grade = "A+ 🏆";
    }
    else if(percentage >= 80){
        grade = "A ⭐";
    }
    else if(percentage >= 70){
        grade = "B 👍";
    }
    else if(percentage >= 60){
        grade = "C 🙂";
    }
    else if(percentage >= 40){
        grade = "D 😐";
    }
    else{
        grade = "Fail ❌";
    }

    document.getElementById("total").innerHTML = total;
    document.getElementById("percentage").innerHTML =
        percentage.toFixed(2) + "%";
    document.getElementById("grade").innerHTML = grade;
}