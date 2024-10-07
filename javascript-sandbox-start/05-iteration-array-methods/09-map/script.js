let companies = [
  {
      "name": "Tech Solutions Inc.",
      "industry": "Information Technology",
      "location": "San Francisco, CA",
      "founded": 2010,
      "employees": 250
  },
  {
      "name": "GreenFields LLC",
      "industry": "Agriculture",
      "location": "Austin, TX",
      "founded": 2015,
      "employees": 75
  },
  {
      "name": "HealthFirst Corp.",
      "industry": "Healthcare",
      "location": "New York, NY",
      "founded": 2005,
      "employees": 500
  },
  {
      "name": "Finance Guru",
      "industry": "Finance",
      "location": "Chicago, IL",
      "founded": 2018,
      "employees": 150
  },
  {
      "name": "TravelMate",
      "industry": "Travel and Tourism",
      "location": "Miami, FL",
      "founded": 2020,
      "employees": 40
  },
  {
      "name": "EduTech Innovations",
      "industry": "Education Technology",
      "location": "Seattle, WA",
      "founded": 2017,
      "employees": 60
  },
  {
      "name": "City Builders Group",
      "industry": "Construction",
      "location": "Los Angeles, CA",
      "founded": 2000,
      "employees": 320
  },
  {
      "name": "EcoFriendly Products",
      "industry": "Consumer Goods",
      "location": "Portland, OR",
      "founded": 2016,
      "employees": 100
  },
  {
      "name": "Cyber Security Pros",
      "industry": "Cybersecurity",
      "location": "Washington, D.C.",
      "founded": 2019,
      "employees": 80
  },
  {
      "name": "Fashion Hub",
      "industry": "Fashion Retail",
      "location": "New York, NY",
      "founded": 2012,
      "employees": 200
  }
]

// console.log(companies); 

// Create an empty array of company names

// ForEach method 

let names = []; 

const companyNames = companies.forEach(function(company) {

  names.push(company.name); 


}

)

// console.log(names); 

// Map method 

const industry = companies.map(function(company) {

  return company.industry

})


console.log(industry); 
