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

  }
}


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

var education = {
  schools: [{
    name: "University of Toronto",
    location: "Toronto, Ontario",
    degree: "BSc",
    majors: ["CS"],
    dates: "2008-2013",
    url: "http://www.utoronto.ca"
  }],
  onlineCourses: [{
    title: "Frontend Developer Nanodegree",
    school: "Udacity",
    date: "2016-2016",
    url: "http://www.udacity.com"
  }],
  display: function() {

  }
}




var work = {
  jobs: [{
    employer: string 
    title: string 
    location: string 
    dates: string (Can be 'in progress')
    description: string 
  }],
  display: function() {

  }
}
