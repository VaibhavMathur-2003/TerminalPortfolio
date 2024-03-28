#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import chalkAnimation from 'chalk-animation';

async function welcome() {
  console.log(
    gradient.rainbow(figlet.textSync('Welcome to My Portfolio!', { horizontalLayout: 'default' }))
  );
}

async function askForOption() {
  const { option } = await inquirer.prompt({
    name: 'option',
    type: 'list',
    message: 'What would you like to explore?',
    choices: [
      'Skills',
      'Projects',
      'About Me',
      'Experience',
      'Hobbies',
      'Exit',
    ],
  });
  return option;
}

async function displaySkills() {
  console.log(chalk.bold.underline.green('Skills'));
  // Display your skills here
  console.log(
    chalk.green(`Development:`),
    chalk.yellow('React, NextJs, Redux, NodeJs, Express, Socket.io, Firebase, RestAPI, Pytorch, Tensorflow, Scikit Learn, Selenium, Beautifulsoup, Netlify, Bootstrap, MaterialUI.'),
    chalk.green(`Languages:`),
    chalk.yellow('C++, JavaScript, Python, TypeScript, HTML, CSS.'),
    chalk.green(`Database:`),
    chalk.yellow('MySQL, MongoDB.'),
    chalk.green(`Relevant Coursework:`),
    chalk.yellow('Data Structures and Algorithms, Algorithm Design, Artificial Intelligence, Machine Learning, Computer Networks, OOPs.'),
    chalk.green(`Tools:`),
    chalk.yellow('VS Code, GitHub, Jupyter, Postman, Vite, Jira, Notion, MS Excel, QtSpim.'),
    chalk.green(`Other Skills:`),
    chalk.yellow('Management, Communication, Leadership.')
  );
}

async function displayProjects() {
  console.log(chalk.bold.underline.green('Projects'));
  // Display your projects here
  console.log(
    `No-Code Website Builder with MERN Stack ${chalk.green.bold('[Website]')}, ${chalk.blue.bold('[Frontend Github]')}, ${chalk.blue.bold('[Backend Github]')} (January 2024 – Present)\n`,
    `• Built a full-stack web application (MERN stack) that empowers users to create websites with a drag-and-drop interface.\n`,
    `• No coding required: Users can visually design websites by dragging and dropping pre-built, customizable components.\n`,
    `• Effortless export: The builder automatically generates the complete frontend code upon completion, ready to be used anywhere.\n\n`,
    `Full Stack Chat WebApp ${chalk.green.bold('[Website]')}, ${chalk.blue.bold('[Github]')} (February 2023 – July 2023)\n`,
    `• Developed a MERN stack chat application with real-time chat and secure login.\n`,
    `• Created interactive UI with React, achieved real-time messaging using Socket.io, and ensured security using encryption.\n`,
    `• Utilized React, Socket.io for messaging, scripts, and Node.js, Express, and MongoDB for backend and data handling.\n\n`,
    `Algorithm Visualizer. ${chalk.green.bold('[Website]')}, ${chalk.blue.bold('[Github]')} (June 2023 – August 2023)\n`,
    `• Built an interactive algorithm visualizer using React to explain concepts like searching, sorting, and pathfinding algorithms.\n`,
    `• Implemented efficient algorithms using Javascript, including selection sort, binary search, and Breadth-First Search (BFS).\n`,
    `• Included advanced algorithms like A*, which is significantly faster than Dijkstra’s algorithm.\n`
  );
}

async function displayAboutMe() {
  console.log(chalk.bold.underline.green('About Me'));
  // Display information about yourself here
  console.log(
    `• Worked as a Software Development Engineer Intern at a startup named Oxytocin.\n`,
    `• Co-Head of Web Development Team for Google Developer Student Club (GDSC) in IIT Goa.\n`,
    `• Member of Web Development Team at Indian Institute of Technology, Goa.\n`,
    `• Loves learning new things and solving problems.\n\n`,
    `• Conducted workshops for 12 schools as a lecturer in Goa and managed events for college fests, including IIT Goa’s annual tech and cultural festivals as event head and part of the management team.\n`,
    `• Mentored school students about coding basics using Scratch`
  );
}

async function displayExperience() {
  console.log(chalk.bold.underline.green('Experience'));
  // Display your experience here
  console.log(
    `Oxytocin (Startup) – Internship – Full Stack Developer. ${chalk.green.bold('[Website]')} (August 2022 – September 2022)\n`,
    `• A startup focused on real estate technology, tasked with enhancing a property value website.\n`,
    `• As a Full Stack Developer intern, responsible for adding 6+ features using React, TypeScript, Redux, Express, and MySQL in 8 weeks.\n`,
    `• Developed search, filtering, and nearest property functionalities, collaborating closely with teams.\n`,
    `• Enhanced user experience with advanced features, showcasing effective tech stack use.\n\n`,
    `OPOC (Software development) – Internship – Back-end Developer. ${chalk.green.bold('[Website], [Github]')} (June 2023 – July 2023)\n`,
    `• Involved in backend development for a discussion platform, leading a 6-member team.\n`,
    `• Lead team in Node.js, Socket.io for backend development, employed Selenium, and Beautifulsoup for web-scraping, and implemented MongoDB for data management.\n`,
    `• Successful discussion platform backend, efficient web scraping, and effective data handling.`
  );
}

async function displayHobbies() {
  console.log(chalk.bold.underline.green('Hobbies'));
  // Display your hobbies here
  console.log(
    `Playing Football 4+ days in a week, Travelling, Listening to music of 5+ different genres, Coding.\n`,
    `• Played in a futsal team of 5 members in a sporting event of IIT Goa.`
  );
}

async function handleOption(option) {
  switch (option) {
    case 'Skills':
      await displaySkills();
      break;
    case 'Projects':
      await displayProjects();
      break;
    case 'About Me':
      await displayAboutMe();
      break;
    case 'Experience':
      await displayExperience();
      break;
    case 'Hobbies':
      await displayHobbies();
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit(0);
    default:
      console.log('Invalid option');
  }
}

async function main() {
  await welcome();
  while (true) {
    const option = await askForOption();
    await handleOption(option);
  }
}

main();
