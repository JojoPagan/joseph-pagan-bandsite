
//project-1-api.herokuapp.com/?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4
const apiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";
  
  //comment entry
  function displayComments(arr) {
    
    let commentContainer = document.querySelector(".comment__display-comment");
    commentContainer.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {

    let m = new Date(arr[i]["timestamp"]);
    let dateString =
      m.getUTCMonth() + 1 + "/" + m.getUTCDate() + "/" + m.getUTCFullYear();
      
      const displaySection = document.createElement("div");
      displaySection.classList.add("comment__display");
      commentContainer.appendChild(displaySection);
  
      const avatarImage = document.createElement("div");
      avatarImage.classList.add("comment__comment__avatar-section-name");
      displaySection.appendChild(avatarImage);
  
      const titleSection = document.createElement("div");
      titleSection.classList.add("comment__header");
      displaySection.appendChild(titleSection);
  
      const image = document.createElement("div");
      image.classList.add("comment__title--image-avatar");
      avatarImage.appendChild(image);
  
      const name = document.createElement("h2");
      name.classList.add("comment__title--name");
      name.innerText = arr[i]["name"];
      titleSection.appendChild(name);
  
      const date = document.createElement("h3");
      date.classList.add("comment__title--date");
      date.innerText = dateString;
      titleSection.appendChild(date);
  
      const CommentText = document.createElement("div");
      CommentText.classList.add("comment__text-content-display");
      displaySection.appendChild(CommentText);
  
      const comment = document.createElement("p");
      comment.classList.add("comment__text-content-display--comment");
      comment.innerText = arr[i]["comment"];
      CommentText.appendChild(comment);
    }
  }
  
const form = document.querySelector(".comment__input-container");


form.addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();

  
  let newAdd = axios
  .post(
    "https://project-1-api.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4",
    {
      name: submitEvent.target.name.value,
      comment: submitEvent.target.comment.value
    }
  );

  newAdd.then(() => {
    getComments();
  });

  let clearInput = document.querySelector(".comment__input-container");
  clearInput.reset();
});


function getComments() {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"
    )
    .then(response => {
      displayComments(
        response.data.sort(function(a, b) {
          return b.timestamp - a.timestamp;
        })
      );
    });
}

getComments();


