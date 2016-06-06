var bio = {
  name : "Jaudat Syed",
  role : "Web Developer",
  contacts : {
    mobile: "1234567890",
    email: "sjh.jaudat@gmail.com",
    github: "https://github.com/jaudat",
    location: "Toronto, ON"
  },
  welcomeMessage:  "Welcome to my online resume",
  skills: ["Python", "Java","Javascript"],
  biopic: "images/fry.jpg",
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
    $("#header").append(formattedWelcomeMsg + formattedBiopic + HTMLskillsStart);

    var formattedSkill;
    var skillsLength = bio.skills.length;
    for (var i=0; i < skillsLength; i++) {
      formattedSkill = HTMLskills.replace( "%data%", bio.skills[i] );
      $("#skills").append(formattedSkill);
    }

  }
};


var work = {
  jobs: [{
    employer: "IBM Canada", 
    title: "Software Engineer",
    location: "185 Spadina Ave, Toronto, ON M5T 2C6",
    dates: 'in progress',
    description: "Programming and Stuff" 
  }, {
    employer: "McKesson Canada", 
    title: "Software Engineer",
    location: "131 McNabb St, Markham, ON L3R",
    dates: '2013-2014',
    description: "Programming and Testing" 
  }],
  display: function() {
    var formattedEmployer;
    var formattedTitle;
    var formattedLocation;
    var formattedDates;
    var formattedDescription;

    var jobsLength = work.jobs.length;
    for (var i=0; i < jobsLength; i++) {
      $('#workExperience').append(HTMLworkStart);

      formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);


      $('.work-entry:last').append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
    }
  }
};


var education = {
  schools: [{
    name: "University of Toronto",
    location: "1265 Military Trail, Toronto, ON M1C 1A4",
    degree: "BSc",
    majors: ["CS"],
    dates: "2008-2013"
  }],
  onlineCourses: [{
    title: "Frontend Developer Nanodegree",
    school: "Udacity",
    date: "2016",
    url: "http://www.udacity.com"
  }],
  display: function() {
    var formattedName;
    var formattedLocation;
    var formattedDegree;
    var formattedMajors;
    var formattedDates;

    var formattedTitle;
    var formattedSchool;
    var formattedDate;
    var formattedURL;

    var schoolsLength = education.schools.length;
    for (var i=0; i < schoolsLength; i++) {
      $("#education").append(HTMLschoolStart);

      formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
      formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);

      $('.education-entry:last').append(formattedName + formattedDegree + formattedLocation + formattedDates);

      var majors = education.schools[i].majors;
      var majorsLength = majors.length;
      for (var j=0; j < majorsLength; j++) {
        formattedMajors = HTMLschoolMajor.replace("%data%", majors[j]);
        $('.education-entry:last').append(formattedMajors);
      }
    }

    $("#education").append(HTMLonlineClasses);
    var coursesLength = education.onlineCourses.length;
    for (var k=0; k < coursesLength; k++) {
      $("#education").append(HTMLschoolStart);
      formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
      formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
      formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[k].date);
      formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);

      $('.education-entry:last').append(formattedTitle + formattedSchool + formattedDate + formattedURL);
    }
  }
};


var projects = {
  projects: [{
    title: "Online resume",
    dates: "2016",
    description: "Online Resume for udacity",
    images: ["images/197x148.gif", "images/197x148.gif"]
  }],
  display: function() {
    var formattedTitle;
    var formattedDates;
    var formattedDescription;
    var formattedImages;

    var projectsLength = projects.projects.length;
    for (var i=0; i < projectsLength; i++) {
      $("#projects").append(HTMLprojectStart);

      formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

      var images = projects.projects[i].images;
      var imagesLength = images.length;
      for (var j=0; j < imagesLength; j++) {
        formattedImages = HTMLprojectImage.replace("%data%", images[j]);
        $(".project-entry:last").append(formattedImages);
      }
    }
  }
};


bio.display();
work.display();
education.display();
projects.display();

$('#mapDiv').append(googleMap);
