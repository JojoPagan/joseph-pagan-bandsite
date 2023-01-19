//posted comments
let comments = [
    {
      name: "Connor Walton",
      date: "02/17/2021",
      comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },

    {
      name: "Emilie Beach",
      date: "01/17/2021",
      comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
      name: "Miles Acosta",
      date: "12/20/2020",
      comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough"
    }
  ];
  
  //comment entry
  function displayComments(arr) {
    
    let commentContainer = document.querySelector(".comment__display-comment");
  
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
