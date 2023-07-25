// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function (json) {
            const container = document.getElementById("container");
            json.sort(function(a, b){return b.hoursInSpace-a.hoursInSpace});


            let i = 0;

            function skillz(json) {
                let skillList = "";
                for(let j = 0; j < json[i].skills.length; j++){
                    skillList += `${json[i].skills[j]}, `;
                }
                return skillList
            }

            function greenActive(json) {
                let active = "";
                if (json[i].active === true){
                     active = `<li id="active">Active: true</li>`
                } else {
                    active = `<li>Active: ${json[i].active}</li>`
                }
                return active
            }

            while (i < json.length) {
                
                let active = "active";
                if (json[i].active === "true"){
                    active = "active";
                } else {
                    active = "inactive";
                }

                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                ${greenActive(json)}
                                <li>Skills: ${skillz(json)}</li>
                            </ul>
                    </div>
                    <img class="avatar" src=${json[i].picture}>
                </div>
                `;

                i++;
            }
            
        });
    
        




    });




});