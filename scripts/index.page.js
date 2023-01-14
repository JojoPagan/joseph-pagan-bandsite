//API key
const apiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";
// URL where all my comment information is stored:
//project-1-api.herokuapp.com/?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4

//Default comments
function displayComments(arr) {
 
  let commentContainer = document.querySelector(".comment__default-comment");
  commentContainer.innerHTML = "";
  
    for (let i = 0; i < arr.length; i++) {
      
      let displaySection = document.createElement("div");
      displaySection.classList.add("comment__display");
      commentContainer.appendChild(displaySection);
  
      let avatarImage = document.createElement("div");
      avatarImage.classList.add("comment__comment__avatar-section-name");
      displaySection.appendChild(avatarImage);
  
      let titleSection = document.createElement("div");
      titleSection.classList.add("comment__header");
      displaySection.appendChild(titleSection);
  
      let image = document.createElement("div");
      image.classList.add("comment__title--image-avatar");
      avatarImage.appendChild(image);
  
      let name = document.createElement("h2");
      name.classList.add("comment__title--name");
      name.innerText = arr[i]["name"];
      titleSection.appendChild(name);
  
      let date = document.createElement("h3");
      date.classList.add("comment__title--date");
      date.innerText = arr[i]["date"];
      titleSection.appendChild(date);
  
      let CommentText = document.createElement("div");
      CommentText.classList.add("comment__text-content-display");
      displaySection.appendChild(CommentText);
  
      let comment = document.createElement("p");
      comment.classList.add("comment__text-content-display--comment");
      comment.innerText = arr[i]["comment"];
      CommentText.appendChild(comment);
    }
  }
  displayComments(comments);
  

  const form = document.querySelector(".comment__input-container");
  
  form.addEventListener("submit", submitEvent => {
    submitEvent.preventDefault();
  
    const newComment = {};
    newComment.name = submitEvent.target.name.value;
    newComment.comment = submitEvent.target.comment.value;
   
    let commentContainer = document.querySelector(".comment__display-comment");
  
    let displaySection = document.createElement("div");
    displaySection.classList.add("comment__display");
    commentContainer.appendChild(displaySection);
  
    let avatarImage = document.createElement("div");
    avatarImage.classList.add("comment__comment__avatar-section-name");
    displaySection.appendChild(avatarImage);
  
    let titleSection = document.createElement("div");
    titleSection.classList.add("comment__header");
    displaySection.appendChild(titleSection);
  
    let image = document.createElement("div");
    image.classList.add("comment__title--image-avatar");
    avatarImage.appendChild(image);
  
    let name = document.createElement("h2");
    name.classList.add("comment__title--name");
    name.innerText = newComment.name;
    titleSection.appendChild(name);
  
    let todayDate = new Date();
    let day = todayDate.getDate();
    let month = todayDate.getMonth() +1;
    let year = todayDate.getFullYear();
  
    todayDate = month + "/" + day + "/" + year;
  
    let date = document.createElement("h3");
    date.innerText = todayDate;
    date.classList.add("comment__title--date");
    titleSection.appendChild(date);
  
    
    let CommentText = document.createElement("div");
    CommentText.classList.add("comment__text-content-display");
    displaySection.appendChild(CommentText);
  
   
    let comment = document.createElement("p");
    comment.classList.add("comment__text-content-display--comment");
    comment.innerText = newComment.comment;
    CommentText.appendChild(comment);
  
    
    let top = document.querySelector(".comment__display-comment");
    top.insertBefore(displaySection, top.childNodes[0]);
  
    
    let clearInput = document.querySelector(".comment__input-container");
    clearInput.reset();
  });

