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
    console.log(location)
    let inArea = people.filter((people) => people.location == location)
    let peopleEmojis = inArea.map((people) => people.picture + people.name)
    console.log(peopleEmojis)
    document.getElementById(location).innerText = peopleEmojis.join(' ')



  })
}

function attack() {

}


drawPeople()