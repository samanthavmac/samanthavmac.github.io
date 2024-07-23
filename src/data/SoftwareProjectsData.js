// Projects Data
// Holds data for React component

const SoftwareProjectsData = [
  {
    key: 1,
    name: "Safest Route for Haven & Angie",
    path: "haven-safe",
    tagline:
      "Finding the Safest Route to your destination while sharing your location",
    techStack: "Swift, RESTful APIs",
    usageDescription:
      "Haven is an expert-endorsed app used by students to quickly connect with loved ones and police in emergency situations.",
    keyFeatures: [
      {
        icon: "🛣️",
        feature:
          "Get directions of the safest walkable route to your destination",
      },
      {
        icon: "🗺️",
        feature:
          "Share your real-time location, intended destination, and time of arrival with your ‘Angels’",
      },
      {
        icon: "🛑",
        feature:
          "Report unsafe locations, which Haven will avoid on future routes for all users",
      },
      {
        icon: "🚨",
        feature:
          "Enter ‘Emergency Mode’ to alert your ‘Angels’ and campus police, record your surroundings, and sound your alarm.",
      },
    ],
    technicalDescription: [
      "Designed and deployed over 20 RESTful API endpoints to Heroku Cloud, integrating with Google Place API for route instructions and location tracking.",
      "Built custom animated UI components and standardized auto layout constraints on Swift Storyboard for reusable and efficient development across view controllers.",
      "Integrated over 150 outlets and multiple segues for seamless UI interaction and navigation.",
    ],
    awards: [],
    links: [
      {
        type: "apple",
        title: "App Store",
        url: "https://apps.apple.com/ca/app/haven-safety-alert-locator/id1569921454",
      },
      {
        type: "android",
        title: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.havensafe.havenandroid&pli=1",
      },
      {
        type: "website",
        title: "Website",
        url: "https://www.havensafe.co/",
      },
    ],
    numImages: 4,
  },
  {
    key: 2,
    name: "Personal Website",
    path: "personal-website",
    tagline: "Showcasing my software projects through Spotify",
    techStack: "React, Node.js, Express.js, PostgreSQL",
    usageDescription:
      "With each iteration of my personal website, I challenge myself to implement new frameworks, coding practices, and features to enhance my website's efficiency and complexity.",
    keyFeatures: [
      {
        icon: "🌙",
        feature: "Switch between dark and light mode",
      },
      {
        icon: "💻",
        feature:
          "Software and design project breakdowns with embedded Figma prototypes",
      },
    ],
    technicalDescription: [
      "Utilized React's component-based architecture, integrating React libraries for responsive layouts and animations and SASS for light/dark mode themes.",
      "Engineered a local PostgreSQL database integrated with Node.js and Express.js to handle POST requests for password-protected resume access.",
    ],
    awards: [],
    links: [
      {
        type: "github",
        title: "Github",
        url: "https://github.com/samanthavmac.github.io",
      },
      {
        type: "website",
        title: "2023 Portfolio",
        url: "https://samanthavmac.github.io/s2023portfolio/",
      },
    ],
    numImages: 4,
  },
  {
    key: 3,
    name: "Sonic Music",
    path: "sonic-music",
    tagline: "Analyzing an image's colours to curate a Spotify playlist",
    techStack: "Java",
    usageDescription:
      "Can't find a playlist that fits the mood? Take a picture of what you are up to and generate a new playlist.",
    keyFeatures: [
      {
        icon: "🎧",
        feature:
          "Create an account to modify and store your custom playlists in",
      },
      {
        icon: "🖼️",
        feature:
          "Upload an image and extract related emotions and objects based on its dominant colours",
      },
      {
        icon: "🎼",
        feature:
          "Curate a Spotify playlist based on information extracted from your image",
      },
    ],
    technicalDescription: [
      "Formulated a k-means++ clustering algorithm that identifies dominant colours in an image by iteratively updating centroid positions until convergence in <2 seconds.",
      "Developed GET and POST requests for the Colour API and DataMuse API and parsed JSON responses for data retrieval and manipulation.",
      "Built API endpoints to the Spotify Web API for users to retrieve songs and modify and save playlists.",
      "Applied OOP concepts and encapsulation using the MVC framework for efficient data processing, seamless user interactions, and dynamic updates.",
    ],
    awards: [],
    links: [
      {
        type: "github",
        title: "Github",
        url: "https://github.com/samanthavmac/SonicMusic",
      },
    ],
    numImages: 3,
  },
  {
    key: 4,
    name: "Labyrinth Game",
    path: "labyrinth-game",
    tagline:
      "Strategically navigate a shifting maze to collect all your treasures",
    techStack: "Java",
    usageDescription:
      "A fun spin on the classic Labyrinth board game: Play with new modifications like a treasure pathfinder and animated game board.",
    keyFeatures: [
      { icon: "🃏", feature: "Distribute treasure cards to 2-4 players" },
      { icon: "💸", feature: "Collect your treasures first to win!" },
      {
        icon: "🔄",
        feature: "Alter walkable paths on the board by inserting tiles",
      },
      {
        icon: "🔦",
        feature:
          "Strategize with the Pathfinder to highlight the most efficient route to your treasures",
      },
    ],
    technicalDescription: [
      "Designed and implemented a recursive pathfinding algorithm to identify the shortest path to collectable treasures and the longest overall path.",
      "Engineered a dynamic game board, featuring tile insertion for board shifting, a  score system, and animated player movements.",
      "Tested edge cases and devised solutions to ensure smooth gameplay.",
      "Created project management tools including a Gantt chart and schedule to effectively plan and manage project goals and resources.",
    ],
    awards: [],
    links: [
      {
        type: "github",
        title: "Github",
        url: "https://github.com/samanthavmac/LabyrinthGame",
      },
    ],
    numImages: 3,
  },
  {
    key: 5,
    name: "Nightlight",
    path: "nightlight",
    tagline: "Informing women+ about suspicious activity on public transit",
    techStack: "HTML, CSS, JS",
    usageDescription:
      "Sexual harrassment and assault on public transit is an unfortunate reality for many. Nightlight leverages user engagement to alert commuters about unsafe incidents.",
    keyFeatures: [
      {
        icon: "🚇",
        feature:
          "Report and notify the Nightlight community about unsafe incidents on the TTC",
      },
      { icon: "📰", feature: "Read articles about tips for staying safe" },
      {
        icon: "🧑‍🤝‍🧑",
        feature:
          "Post to the Community Forum to engage with the Nightlight community",
      },
    ],
    technicalDescription: [
      "Built a responsive user interface using the TailwindCSS framework for users to report and view incident reports on an interactive TTC map.",
      "Engaged in the engineering design process by conducting usability interviews with key stakeholders, designing high-fidelity prototypes in Figma, and negotiating technical requirements.",
    ],
    awards: [
      "🥇 1st Place Connectivity Hack, sponsored by Hudson River Trading @ University of Waterloo Technova Hackathon",
      "🥇 People’s Choice Award @ University of Waterloo Technova Hackathon",
    ],
    links: [
      {
        type: "github",
        title: "Github",
        url: "https://github.com/samanthavmac/nightlight",
      },
      {
        type: "devpost",
        title: "Devpost",
        url: "https://devpost.com/software/nightlight-64g8wc",
      },
    ],
    numImages: 3,
  },
  {
    key: 6,
    name: "Eye Hope Canada",
    path: "eye-hope-canada",
    tagline: "Web development for non-profits",
    techStack: "HTML, CSS, JS",
    usageDescription:
      "Eye Hope Canada is a student-led organization that supports families affected by childhood cancer.",
    keyFeatures: [],
    technicalDescription: [
      "Built a responsive grid design and implemented animations and interactive popups to enhance user engagement and visual appeal.",
      "Led a team of designers and web developers in prototyping on Figma and programming the website within two weeks, while establishing protocols for ongoing website maintenance.",
    ],
    awards: [],
    links: [
      { type: "website", title: "Website", url: "https://eyehopecanada.com" },
    ],
    numImages: 2,
  },
  {
    key: 7,
    name: "Animal Crossing x Super Mario",
    path: "animal-crossing",
    tagline:
      "Top the leaderboards by guiding your Animal Crossing character through custom maps.",
    techStack: "Java",
    usageDescription:
      "Where Animal Crossing meets Super Mario Bros! Jump, run, and teleport through the Animal Crossing world.",
    keyFeatures: [],
    technicalDescription: [
      "Implemented keyboard listeners and smooth player animations for movements like walking, jumping, and teleportation.",
      "Designed and implemented custom maps featuring interactive elements like walls, jumping platforms, and portals.",
      "Integrated character selection, account creation, game progress saving and leaderboard functionality.",
    ],
    awards: [],
    links: [
      {
        type: "github",
        title: "Github",
        url: "https://github.com/samanthavmac/AnimalCrossingXSuperMario",
      },
    ],
    numImages: 4,
  },
  {
    key: 8,
    name: "Object-Oriented Programming Curriculum",
    path: "oop-module",
    tagline: "Learn about Object-Oriented programming",
    techStack: "Java",
    usageDescription:
      "New to Java, Python, or C++? This user-friendly course introduces object-oriented programming through engaging modules and games.",
    keyFeatures: [],
    technicalDescription: [
      "Researched and deconstructed OOP concepts such as inheritance, polymorphism, and encapsulation to develop comprehensive learning modules.",
      "Created engaging and interactive activities that reinforce OOP principles, such as a matching game and quiz with scoring and feedback on areas of improvement for students.",
    ],
    awards: [],
    links: [
      {
        type: "github",
        title: "Github",
        url: "https://github.com/samanthavmac/OOPModule",
      },
    ],
    numImages: 5,
  },
];

export default SoftwareProjectsData;
