// abc()
//ayylmao();

// Get all elements with the class name "product-list"
const productLists = document.getElementsByClassName("product-list");

// Loop through each element and add a click event handler
for (const element of productLists) {
    element.addEventListener("click", fun);
}

//set background to a specific color
function fun(event) {
    // 'event.target' refers to the clicked element
    //event.target.style.backgroundColor = "red";
    event.target.style.zIndex = 2;

}



function floorTest(parms) {
    let a = Math.floor(parms);
    document.write(a);
}

function jsbackground1ColorTransformRed() {
    document.querySelector("#jsbackground1").style.backgroundColor = "red";
}

//Closure allows functions to access variables from heap memory
function closureExample() {
    function iNeedClosure() {
        let a = 10;
        return function () {
            a++;
            return a;
        };
    }

    let closureFunction = iNeedClosure();
    let result = closureFunction();
    document.write(result);
}

function functionWithinObjectEx() {
    const person = {
        wtfIsThis: () => {
            console.log(this);
            console.log('Yeaaa boi');
        }
    };
    person.wtfIsThis();
}

function abc() {
    let c = prompt("Insert your name");
    let a = confirm("Do you think that you are a human?");
    document.write(a);
    if (a) {
        alert("ok " + c);
    } else {
        alert("X for doubt");
        alert(c + " is giving major robot vibes");
    }
}
function ayylmao() {
    let a = {
        firstname: 'Jaloppy',
        lastname: 'Mills',
        age: 69,
        xd: true
    };

    // Using a for...in loop to iterate through object properties
    for (const key in a) {
        document.write(key + ': ' + a[key] + '<br>');
    }

    // Using Object.values() to get an array of object values and forEach to iterate through them
    Object.values(a).forEach(function (value) {
        document.write(value + '<br>');
    });
}