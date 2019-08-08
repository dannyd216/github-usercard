/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/




const followersArray = [

  "ayunas",
  "deeJayEaster",
  "Jonathan-YungHsin-Ho",
  "DanielWallen87",
  "brandonharris177",
  "nomadkitty",
  "EpiceneDev",
  "JaxAtwood"
  
  ];
  
  
  followersArray.forEach(currentItem => 
  {let devName=currentItem;
  console.log('index.js -> %cdevName:', 'color: red', devName);
  getDevData(devName) 
  })



  

function getDevData(devName)   {
axios
.get(`https://api.github.com/users/${devName}`)
.then(data => {
console.log('index.js -> %cdata status:', 'color: green', data)
 
  const devData = data.data;
  
  console.log('index.js -> %cdevData:', 'color: teal', devData)

  gitDevCard(devData)

})

.catch(error => {
  console.error("index.js -> %cData not coming through. Check this:", "color: orange", error);

});
}
gitDevCard(devData)

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/





function gitDevCard(devData) {



  const devCard = document.createElement("section");
  const devPicture = document.createElement("img");
  const devInfo = document.createElement("div");
  const devName = document.createElement("h3");
  const devUsername = document.createElement("p");
  const devLocation = document.createElement("p");
  const devProfile = document.createElement("p");
  const devPageLink = document.createElement("a");
  const devFollowers = document.createElement("p");
  const devFollowing = document.createElement("p");
  const devbio = document.createElement("p");

  // Setup structure of elementsreturn artBox;
  const cards = document.querySelector(".cards");

  cards.appendChild(devCard);
  devCard.appendChild(devPicture);
  devCard.appendChild(devInfo);
  devInfo.appendChild(devName);
  devInfo.appendChild(devUsername);
  devInfo.appendChild(devLocation);
  devInfo.appendChild(devProfile);
  devProfile.appendChild(devPageLink);
  devProfile.appendChild(devFollowers);
  devProfile.appendChild(devFollowing);
  devProfile.appendChild(devbio);

  // set class names
  devCard.classList.add("card");

  devInfo.classList.add("card-info");
  devName.classList.add("name");
  devUsername.classList.add("username");

  ///// content /////

  devPicture.src = devData.avatar_url; 
  devName.textContent = devData.name;
  devUsername.textContent = `User Name: ${devData.login}`;
  //devLocation.textContent = `Location: ${data.location}`;
  //devProfile.textContent = `Profile:`;
  devPageLink.href = devData.html_url;
  devFollowers.textContent = `Followers: ${devData.followers}`;
  devFollowing.textContent = `Following: ${devData.following}`;
  
  if (devbio.textContent !== null) {
  console.log('index.js -> %cdevbio.textContent !== null:', 'color: violet', devbio.textContent !== null)
 devbio.textContent = `Bio: ${devData.bio}`;

  }
    
  else{
 devbio.textContent = "This user has no bio";
};

if (devLocation.textContent != null) {
  devLocation.textContent = `Location: ${devData.location}`;
} else {
  devLocation.textContent = ` `;
}
  return devCard;

 
}





/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


// ${dev}