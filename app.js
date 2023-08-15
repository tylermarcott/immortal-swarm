const locations = [
  '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
  name: 'Jimbo',
  picture: '🤵',
  location: '🏤'
},
{
  name: 'Sammy',
  picture: '🙆‍♀️',
  location: '🏤'
},
{
  name: 'Michael',
  picture: '👷',
  location: '🏤'
},
{
  name: 'Robert',
  picture: '👷',
  location: '🏥'
},
{
  name: 'Terry',
  picture: '🤴',
  location: '🏥',
},
{
  name: 'Bill',
  picture: '🕵️',
  location: '🏥',
},
{
  name: 'Marie',
  picture: '👩‍🍳',
  location: '🏭',
},
{
  name: 'Mykeal',
  picture: '💂',
  location: '🏭',
},
{
  name: 'Phil',
  picture: '🧜‍♂️',
  location: '🏭',
},
{
  name: 'Wilson',
  picture: '🏐',
  location: '🏢',
},
{
  name: 'Wendy',
  picture: '👩‍⚕️',
  location: '🏢',
},
{
  name: 'Jeremy',
  picture: '🦹',
  location: '🏢',
},
  // {
  //   name: 'Jessica',
  //   picture: '🧟‍♂️',
  //   location: '🏣',
  // },
  // {
  //   name: 'Peaches',
  //   picture: '🧞‍♀️',
  //   location: '🏣',
  // },
  // {
  //   name: 'Mr. Anderson',
  //   picture: '👨🏽‍🦳',
  //   location: '🏣',
  // }
]


// TODO: create function that chooses a person to be a vamp hunter

function chooseHunter() {
  let vampireHunter = ''

  let randomIndex = Math.floor(Math.random() * people.length)




}


function drawPeople() {
  locations.forEach((location) => {
    // console.log(location)
    let inArea = people.filter((people) => people.location == location)
    let peopleEmojis = inArea.map((people) => people.picture + people.name)
    // console.log(peopleEmojis)
    document.getElementById(location).innerText = peopleEmojis.join(' ')
  })
}

//NOTE: foreach shortcut to make a foreach layout

function peopleRun() {

  // NOTE: concept: in the forEach loop below, people and person. People is our object, person could be named anything you want. It's just more of a naming convention. 1 person in your of people object

  people.forEach((person) => {
    if (person.emoji != '🦇') {

      let randomIndex = Math.floor(Math.random() * locations.length)
      let newArea = locations[randomIndex]
      person.location = newArea
    }
  });
}

// daylight countdown variable
let daylightRemaining = 8

function attack(emoji) {
  let bat = '🦇'

  let inArea = people.filter((people) => people.location == emoji)
  inArea.map((people) => people.picture = bat)

  // NOTE: was able to fix my issue where not all people were being turned into bats on attacks by changing the order of peopleRun() and drawPeople()! ***keep in mind the order of the functions that you're calling.

  peopleRun()
  drawPeople()
  checkScore()

  daylightRemaining -= 1

  if (daylightRemaining == 0) {
    window.alert('The humans survived and all the vampires perished!🌞💀')
  }

}

function checkScore() {
  let bat = '🦇'

  let turned = people.filter((people) => people.picture == bat)
  if (turned.length == people.length) {
    window.alert("the vampires have taken over!!!!!!! 🧛🏻‍♀️🧛🏿🧛🏽‍♂️🦇")
  }
}



drawPeople()