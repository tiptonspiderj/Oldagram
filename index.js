import {posts} from "/data.js"

const myCounter = ["One",
                  "Two",
                  "Three"]

const wrapper = document.getElementById('sectionWrapper')
const innerHTMLString = ""

let myCounter1 = posts[0].likes
let myCounter2 = posts[1].likes
let myCounter3 = posts[2].likes


buildCard(posts)

function buildCard(posts) {
    for (let i = 0; i < posts.length; i++){
      innerHTMLString += `
      <section class="section-top">
          <img src=${posts[i].avatar} class="avatar" alt="A small image of ${posts[i].name}.">
          <p><span>${posts[i].name}</span><br>${posts[i].location}</p>
      </section>
      <section class="section-middle">
          <img src=${posts[i].post} class="painting" alt="A painting by the artist ${posts[i].name}.">
      </section>
      <section class="section-bottom">
          <div>
          <img src="images/icon-heart.png" class="icon" onClick="incrementLikes${myCounter[i]}()" alt="A heart or likes icon.">
          <img src="images/icon-comment.png" class="icon" alt="A comment icon.">
          <img src="images/icon-dm.png" class="icon" alt="A direct message icon">
          </div>
          <div>
              <p><span id="likes${myCounter[i]}">${posts[i].likes} likes</span</p>
              <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
          </div>
          <div class="spacer"></div>
      `
    }
    wrapper.innerHTML = innerHTMLString
}

function incrementLikesOne() {
  myCounter1 ++
  document.getElementById("likesOne").innerText = myCounter1 + " likes"
}

function incrementLikesTwo() {
  myCounter2 ++
  document.getElementById("likesTwo").innerText = myCounter2 + " likes"
}

function incrementLikesThree() {
  myCounter3 ++
  document.getElementById("likesThree").innerText = myCounter3 + " likes"
}
