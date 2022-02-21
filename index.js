/* Using Text with fetch */

const textBtn = document.querySelector('.textBtn');

textBtn.addEventListener('click', () => {

    fetch("text.txt").then((response) => {

        return response.text();

    }).then((data) => {

        const output = document.querySelector('.output');

        output.innerHTML += data;

        console.log(data)

    })/* .catch((err) => {  This is error if you want to use. To see the problem

        console.log(err);

    }) */
    
})


/* Using another txt */

const textBtnTwo = document.querySelector('.textBtnTwo');

textBtnTwo.addEventListener('click', () => {

    fetch('javascript.txt')

        .then((res) => {

            if (res.ok == true) {

                console.log("Response is successful")

            } else {

                console.log("Response is not successful")

            }

            return res.text();

        }).then((data) => {

            document.querySelector('.output').innerHTML += data;

            console.log(data)

        })

});





/* Using Json */

const jsonBtn = document.querySelector('.jsonBtn');

jsonBtn.addEventListener('click', () => {

    fetch("article.json").then((response) => {

        return response.json()

    }).then((data) => {

        let output = "<ol>";

        data.forEach((article) => {

            output += `<li> Name ${ article.userName} - Surname ${ article.userSurname} </li> `;

            console.log(output)

        });

        output += "</ol>";

        document.querySelector(".output").innerHTML += output;

    })
})







/* Using Github Rest APİ */

const apiBtn = document.querySelector('.apiBtn');

apiBtn.addEventListener('click', () => {

    fetch("https://api.github.com/users").then((response) => {

        if (response.ok == false) {

            console.log("Not successful response");

        } else {

            console.log("successful response");

        }

        return response.json()

    }).then((users) => {

        let output = "<ol>";

        users.forEach((user) => {

            output += `<li> Name ${user.avatar_url}</li>`;

            /* if you want to see img */

            output += `<img style="width:180px;" src="${user.avatar_url}" />`;

            console.log(user)

        });

        output += "</ol>";

        document.querySelector(".output").innerHTML += output;

    })

})



/* Catching some jsons that I make */


/* 1-) Coworkers Json */

const coworkersBtn = document.querySelector('.coworkersBtn');

coworkersBtn.addEventListener('click', () => {

    fetch("coworkers.json").then((response) => {

        if (response.ok == true) {

            console.log("successful response");

        } else {

            console.log("Not successful response")

        }


        //console.log(response)

        return response.json();

    }).then((data) => {

        let output = '<ol>'

        data.forEach((data) => {

            output += 
            `
            <li>
             <p> ${data.name} </p>  
             <p> ${data.position} </p>
            </li>
            
            `;
            console.log(data.name)

        })

        output += "</ol>";

        document.querySelector('.output').innerHTML += output;
    })

})


/* 2-) GameUsers Json */

const gameUsersBtn = document.querySelector('.gameUsersBtn');

gameUsersBtn.addEventListener('click', () => {

    fetch("gameUsers.json").then((response) => {

        if (!response.ok) {

            console.log("Nos successful response")

        } else {

            console.log("successful response")

        }

        //console.log(response)

        return response.json();

    }).then((data) => {

        console.log(data)

        let output = '<ol>';

        data.forEach((data) => {

            output += `<li> ${data.level} </li>`;

        })

        output += '</ol>';

        document.querySelector('.output').innerHTML += output;


    })

})


/* ForEach */

const forEachAndArray = () => {

    const forArray = ["elma", "armut", "kiraz"]

    console.log(forArray);

    forArray.push("kiraz");

    console.log(forArray);

    forArray.forEach(element => console.log(element))

    forArray.forEach((element) => {

        console.log(element)

    })
}



/* Different APİs */

/* 1 -) https://random.dog/woof.json */

const duoWordApi = document.querySelector('.randomDogs');

duoWordApi.addEventListener('click', () => {

    fetch("https://random.dog/woof.json").then((res) => {

        if (res.ok) {

            console.log("successful response")

        } else {

            console.log("Not successful response")

        }

        return res.json()

    }).then((data) => {

        document.querySelector('.output').innerHTML += `<img style="width:100px; margin:1rem;" src="${data.url}" />`

        console.log(data);

    })

})


/* 2 -) https://api.pokemontcg.io/v2/cards?q=name:gardevoir */

const pokemon = document.querySelector('.pokemon');

pokemon.addEventListener('click', () => {

    fetch('https://api.pokemontcg.io/v2/cards?q=name:gardevoir')

        .then((res) => {

            return res.json();

        }).then((data) => {

            for (let i = 0; i < 42; i++) {

                document.querySelector('.output').innerHTML += data.data[i].name;

                console.log(data.data[i].name)

            }

        })

})


/* 3 -) Covid-19: https://covid-api.mmediagroup.fr/v1//history */

const covid = document.querySelector('.covid-19');

covid.addEventListener('click', () => {

    fetch('https://covid-api.mmediagroup.fr/v1/cases?country=France')

        .then((res) => {

            if (res.ok) {

                console.log("Connection is successful");

            } else {

                console.log('Connection is not successful');

            }

            return res.json()

        }).then((data) => {

            console.log(data)

        })

})


/* 4 -) http://api.citybik.es/v2/networks */

const cityBike = document.querySelector('.cityBike');

cityBike.addEventListener('click', () => {

    fetch(' http://api.citybik.es/v2/networks?fields=id,name,href ')

        .then((res) => {

            if (res.ok) {

                console.log("Connection is successful")

            } else {

                console.log("Connection is not successful")

            }

            return res.json();

        }).then((data) => {

            for (let i = 0; i < 100; i++) {

                console.log(data.networks[i].href)

                document.querySelector('.output').innerHTML += data.networks[i].href;

            }

        }).catch(err => { console.log(err) })
})


/* 5 -) https://myvaccination-backend.vercel.app/api/vacc */

const myvaccination = document.querySelector('.myvaccination');

myvaccination.addEventListener('click', () => {

    fetch('https://myvaccination-backend.vercel.app/api/vacc')

        .then((res) => {

            return res.json();

        }).then((data) => {

            for (let i = 0; i < 316; i++) {

                console.log(data.modifiedData[i])

            }

        })

})