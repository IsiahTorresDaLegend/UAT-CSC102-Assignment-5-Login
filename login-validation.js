// Log in/input validation for UAT CSC 102 Login assignment. Code written by Isiah Torres.
function loginValidate() {
    // Set multiple bindings with let, used document.getElementById().value to bind to user's input.
    let firstName = document.getElementById("fName").value,
        lastName = document.getElementById("lName").value,
        fullName = firstName + lastName,
        badgeNum = document.getElementById("bNum").value;
        
        
        // If name and badge number is empty, this message will appear to help the user.
        if (fullName == "" && badgeNum == "") {
            document.getElementById("status").innerHTML = "Please enter a valid name and badge number.";
        }
        
        // If name is longer than 20 characters or shorter than 2 characters, this message will appear to help the user.
        else if (fullName.length > 20 || fullName.length < 2) {
            document.getElementById("status").innerHTML = "Please enter a valid name. Full name should be more than 2 characters, but not more than 20 characters.";
          
        
        }
        // If badge number's length does not equal 3, if its value is less than 0 (negative), if it is empty, or if it includes a "-" sign, this message will appear to help the user.
        else if (badgeNum.length != 3 || badgeNum < 0 || badgeNum == "" || badgeNum.includes("-")) {
            document.getElementById("status").innerHTML = "Please enter a valid badge number. Whole, positive, integers, only.";
            
        }  
        
        // If all requirments pass, direct user to the other UAT page. 
        else {
        // The message displayed when successful. name[0].toUpperCase() capitalizes initials (or first charater), .slice adds the rest of the element. Used "+" to glue it all together.
            alert('Signed in. Welcome ' + firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName[0].toUpperCase() + '.');
            location.replace("buttons-sound-and-table.html");
        }
}

