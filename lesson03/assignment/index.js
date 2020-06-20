// Local data copied from data.json and saved into variable
const cards = [
  {
    "name": "Steve Smith",
    "jobTitle": "Project Manage",
    "company": "Front End Dev Co",
    "experience": "3 years",
    "school": "UW",
    "major": "Marketing",
    "email": "steve@fedc.com",
    "linkedInUrl": "steve.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", ".NET", "C#"
    ]
  },
  {
    "name": "Aaron Katz",
    "jobTitle": "Full Stack Developer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "SU",
    "major": "Computer Science",
    "email": "aaronNotMyemail@uw.com",
    "linkedInUrl": "aaron.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "PHP", "Twig"
    ]
  },
  {
    "name": "Kyle Hendricks",
    "jobTitle": "Starting Pitcher",
    "company": "Chicago Cubs",
    "experience": "12 years",
    "school": "USC",
    "major": "Pitching",
    "email": "kyleH@cubs.com",
    "linkedInUrl": "kyle.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Ruby", "Rails"
    ]
  },
  {
    "name": "Michael Jordan",
    "jobTitle": "Point Guard",
    "company": "Chicago Buls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordas.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "Java", "Spring"
    ]
  }
];

// Looping over the array with a method and using map() to apply a template string
const cardsHTML = cards.map(function(el) {
  return `
  <article class="card">
    <div class="card-body">
      <div class="card-image">
        <img class="headshot" src="img/unsplash-headshot.jpg" alt="">
        <p class="name">${el.name}</p>
        <p class="title">${el.jobTitle}</p>
      </div>
      <div class="card-copy">
        <ul class="about">
          <li class="about-item"><strong>Company:</strong>${el.company}</li>
          <li class="about-item"><strong>Experience:</strong>${el.experience}</li>
          <li class="about-item"><strong>School:</strong>${el.school}</li>
          <li class="about-item"><strong>Major:</strong>${el.major}</li>
          <li class="about-item"><strong>Email:</strong>${el.email}</li>
          <li class="about-item linkedin"><img src="img/linkedin.svg" alt="linkedin logo">${el.linkedInUrl}</li>
        </ul>
      </div>
    </div>
  </article>
  `;
});
console.log($(".cards"));

// Hook to display data on index.html within .cards section
$(".cards").append(cardsHTML);
