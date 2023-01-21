//Show info
let shows = [
    {
      date: "Mon Sept 06 2021",
      venue: "Ronald Lane",
      location: "San Francisco, CA"
    },
    {
      date: "Tue Sept 21 2021",
      venue: "Pier 3 East",
      location: "San Francisco, CA"
    },
    {
      date: "Fri Oct 15 2021",
      venue: "View Lounge",
      location: "San Francisco, CA"
    },
    {
      date: "Sat Nov 06 2021",
      venue: "Hyatt Agency",
      location: "San Francisco, CA"
    },
    {
      date: "Fri Nov 26 2021",
      venue: "Moscow Center",
      location: "San Francisco, CA"
    },
    {
      date: "Wed Dec15 2021",
      venue: "Pres Club",
      location: "San Francisco, CA"
    }
  ];
  
  function table(arr) {
   
    const displaySection = document.querySelector(".shows__section");

    const allShowsSection = document.createElement("div");
    allShowsSection.classList.add("shows__section-all");
    displaySection.appendChild(allShowsSection);
  
    const titleSection = document.createElement("div");
    titleSection.classList.add("shows__title-section");
    allShowsSection.appendChild(titleSection);
  
    const titleDate = document.createElement("body");
    titleDate.classList.add("shows__title-section--date");
    titleSection.appendChild(titleDate);
    titleDate.innerText = "DATES";
  
    const titleVenue = document.createElement("body");
    titleVenue.classList.add("shows__title-section--venue");
    titleSection.appendChild(titleVenue);
    titleVenue.innerText = "VENUE";
  
    const titleLocation = document.createElement("body");
    titleLocation.classList.add("shows__title-section--location");
    titleSection.appendChild(titleLocation);
    titleLocation.innerText = "LOCATION";
  
    const buttonSection = document.createElement("button");
    buttonSection.classList.add("shows__title-section--button-header");
    titleSection.appendChild(buttonSection);
  
    buttonSection.innerText = "BUY TICKETS";
  
    for (let i = 0; i < shows.length; i++) {

      const baodyAll = document.createElement("div");
      baodyAll.classList.add("shows__body-all");
      allShowsSection.appendChild(baodyAll);
  
      const dateLabel = document.createElement("h3");
      dateLabel.classList.add("shows__body-all--date-label");
      baodyAll.appendChild(dateLabel);
      dateLabel.innerText = "DATE";
  
      const date = document.createElement("h4");
      date.classList.add("shows__body-all--date");
      baodyAll.appendChild(date);
  
      date.innerText = arr[i]["date"];
  
      const venueLabel = document.createElement("h3");
      venueLabel.classList.add("shows__body-all--venue-label");
      baodyAll.appendChild(venueLabel);
      venueLabel.innerText = "VENUE";
  
      const venue = document.createElement("h4");
      venue.classList.add("shows__body-all--venue");
      baodyAll.appendChild(venue);
  
      venue.innerText = arr[i]["venue"];

      const locationLabel = document.createElement("h3");
      locationLabel.classList.add("shows__body-all--location-label");
      baodyAll.appendChild(locationLabel);
      locationLabel.innerText = "LOCATION";
  
      const location = document.createElement("h4");
      location.classList.add("shows__body-all--location");
      baodyAll.appendChild(location);
  
      location.innerText = arr[i]["location"];
     
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("shows__body-all--button-container");
      baodyAll.appendChild(buttonContainer);
  
      const button = document.createElement("button");
      button.classList.add("shows__body-all--button");
      buttonContainer.appendChild(button);
  
      button.innerText = "BUY TICKETS";
    }
  }
  table(shows);