const passwordlengde = document.getElementById("Length");
const knapp = document.getElementById("button");
const resultat = document.getElementById("output");

const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const number = document.getElementById("number");
const symbols = document.getElementById("symbols");


const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=";




knapp.addEventListener("click", function() {
    generateRandompassword();
});


function generateRandompassword(){
    if(passwordlengde.value < 4 || passwordlengde.value > 30){
        resultat.textContent = "PASSWORD CAN NOT BE LESS THAN 4 OR BIGGER THAN 30 CHARARCTERS LONG";
    }else{
        let password = ""; 
        let list = "";

        const checkeddata =  [
            { checked: lowercase.checked, chars: lowercaseChars },
            { checked: uppercase.checked, chars: uppercaseChars },
            { checked: number.checked, chars: numberChars },
            { checked: symbols.checked, chars: symbolChars }
        ];
        const unchecked = checkeddata.every(checkbox => !checkbox.checked);

        if(unchecked){
            resultat.textContent = "YOU MUST HAVE ONE OF THE CHECKBOXES CHECKED";
            return;
        }
        
        checkeddata.forEach(checkbox => {
            if(checkbox.checked){
                list += checkbox.chars;
            }
        })
        
        
        for(let i = 0; i < passwordlengde.value; i++){
            const randomindex = Math.floor(Math.random()*list.length)
            password += list[randomindex];
        }
        
        resultat.textContent = password;
    }
}