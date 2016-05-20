var bio = {
  name : "Jaudat Syed",
  role : "Web Developer",
  contacts : {
    mobile: 1234567890,
    email: "sjh.jaudat@gmail.com",
    github: "https://github.com/jaudat",
    location: "Toronto, Canada"
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

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    $("#header").append(formattedWelcomeMsg);
    $("#header").append(formattedBiopic);

    $("#header").append(HTMLskillsStart);
    var formattedSkill;
    for (skill in bio.skills) {
      formattedSkill = HTMLskills.replace( "%data%", bio.skills[skill] );
      $("#skills").append(formattedSkill);
    }

  }
}


var work = {
  jobs: [{
    employer: "IBM Canada", 
    title: "Software Engineer",
    location: "Toronto, Canada",
    dates: 'in progress',
    description: "Programming and Stuff" 
  }],
  display: function() {
    var formattedEmployer;
    var formattedTitle;
    var formattedLocation;
    var formattedDates;
    var formattedDescription;

    for (job in work.jobs) {
      $('#workExperience').append(HTMLworkStart);

      formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


      $('.work-entry:last').append(formattedEmployer);
      $('.work-entry:last').append(formattedTitle);
      $('.work-entry:last').append(formattedDates);
      $('.work-entry:last').append(formattedLocation);
      $('.work-entry:last').append(formattedDescription);
    }
  }
}


var education = {
  schools: [{
    name: "University of Toronto",
    location: "Toronto, Ontario",
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

    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);

      formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

      $('.education-entry:last').append(formattedName);
      $('.education-entry:last').append(formattedDegree);
      $('.education-entry:last').append(formattedLocation);
      $('.education-entry:last').append(formattedDates);
      $('.education-entry:last').append(formattedMajors);
    }

    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
      formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

      $('.education-entry:last').append(formattedTitle);
      $('.education-entry:last').append(formattedSchool);
      $('.education-entry:last').append(formattedDate);
      $('.education-entry:last').append(formattedURL);
    }
  }
}

bio.display();
work.display();
education.display();
