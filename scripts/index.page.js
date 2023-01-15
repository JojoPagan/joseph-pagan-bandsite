//API key
const apiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";
// URL where all my comment information is stored:
//project-1-api.herokuapp.com/?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4

//Default comments
function displayComments(arr) {
 
  let commentContainer = document.querySelector(".comment__display-comment");
  commentContainer.innerHTML = "";
  
    for (let i = 0; i < arr.length; i++) {

      let m = new Date(arr[i]["timestamp"]);
      let dateString =
        m.getUTCMonth() + 1 + "/" + m.getUTCDate() + "/" + m.getUTCFullYear();
      
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
      
      //delete button container
      let deleteButtonContainer = document.createElement("div");
      deleteButtonContainer.classList.add("comment__delete-button-container");
      defaultContainer.appendChild(deleteButtonContainer);
  
      //delete
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("comment__delete-button");
      deleteButton.addEventListener("click", event => {
        let varId = event.target.id;
        deleteComment(varId);
      });
      deleteButton.id = arr[i]["id"];
      deleteButton.innerText = "Remove";
      deleteButtonContainer.appendChild(deleteButton);
    }
  }
  
  //use Dom APi to get access to the form in html
  const form = document.querySelector(".comment__input-container");
  
  //attach an event listener on the form of type submit in order to create new comments
  form.addEventListener("submit", submitEvent => {
    //prevents page form reloading upon clicking submit button
    submitEvent.preventDefault();
  
    //Post Comments
    let newAdd = axios.post(
      "https://project-1-api.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4",
      {
        name: submitEvent.target.name.value,
        comment: submitEvent.target.comment.value
      }
    );
  
    newAdd.then(() => {
      //Get Comments
      getComments();
    });
  
    //clears my input from the entry fields
    let clearInput = document.querySelector(".comment__input-container");
    clearInput.reset();
  });
  
  // function to get comments
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
  
  //Get Comments
  getComments();
  
  //Delete Comments
  function deleteComment(id) {
    axios
      .delete(
        `https://project-1-api.herokuapp.com/comments/${id}?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4`
      )
      .then(response => {
        getComments();
      });
  }