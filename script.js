// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function (json) {
            const container = document.getElementById("container");
            let i = 0;

            function skillz(json) {
                let skillList = "";
                for(let j = 0; j < json[i].skills.length; j++){
                    skillList += `${json[i].skills[j]}, `;
                }
                return skillList
            }

            while (i < json.length) {
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
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