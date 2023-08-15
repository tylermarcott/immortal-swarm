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
  people.forEach((person) => {
    if (person.emoji != '🦇') {

      let randomIndex = Math.floor(Math.random() * locations.length)
      console.log(randomIndex)
      let newArea = locations[randomIndex]
      person.location = newArea


    }
  });
}




function attack(emoji) {
  console.log(emoji)

  let bat = '🦇'

  // when a button is clicked, get all the people who have the same location as the button

  let inArea = people.filter((people) => people.location == emoji)

  let peoplePictures = inArea.map((people) => people.picture = bat)

  // console.log(peoplePictures)

  drawPeople()
  peopleRun()
  checkScore()
}

function checkScore() {
  let bat = '🦇'

  let turned = people.filter((people) => people.picture == bat)
  if (turned.length == people.length) {
    window.alert("the vampires have taken over!!!!!!! 🧛🏻‍♀️🧛🏿🧛🏽‍♂️🦇")
  }
}



drawPeople()