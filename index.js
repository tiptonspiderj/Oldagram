const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const myCounter = ["One",
                  "Two",
                  "Three"]
                  
let myCounter1 = posts[0].likes
let myCounter2 = posts[1].likes
let myCounter3 = posts[2].likes

const wrapper = document.getElementById('sectionWrapper')
wrapper.innerHTML = ""
buildCard(posts)

function buildCard(posts) {
    for (let i = 0; i < posts.length; i++){
      wrapper.innerHTML += `
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
