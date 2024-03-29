#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import chalkAnimation from 'chalk-animation';

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));


async function welcome() {
  figlet("Vaibhav Mathur", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(gradient('green', 'cyan')(data));
  });

  await sleep();

  console.log(`
    ${chalk.bgBlue(`What's This?`)} 
    I am a CLI portfolio app. You can explore different sections of my portfolio by selecting the corresponding option from the menu.
  `);
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
  console.log(chalk.yellow('Development:'), chalk.white('React, NextJs, Redux, NodeJs, Express, Socket.io, Firebase, RestAPI, Pytorch, Tensorflow, Scikit Learn, Selenium, Beautifulsoup, Netlify, Bootstrap, MaterialUI.'));
  console.log(chalk.yellow('Languages:'), chalk.white('C++, JavaScript, Python, TypeScript, HTML, CSS.'));
  console.log(chalk.yellow('Database:'), chalk.white('MySQL, MongoDB.'));
  console.log(chalk.yellow('Relevant Coursework:'), chalk.white('Data Structures and Algorithms, Algorithm Design, Artificial Intelligence, Machine Learning, Computer Networks, OOPs.'));
  console.log(chalk.yellow('Tools:'), chalk.white('VS Code, GitHub, Jupyter, Postman, Vite, Jira, Notion, MS Excel, QtSpim.'));
  console.log(chalk.yellow('Other Skills:'), chalk.white('Management, Communication, Leadership.'));
}

async function displayProjects() {
  console.log(chalk.bold.underline.green('Projects'));
  console.log(`
    ${chalk.blue('No-Code Website Builder with MERN Stack')} ${chalk.green.bold('[Website]')}, ${chalk.blue.bold('[Frontend Github]')}, ${chalk.blue.bold('[Backend Github]')} (January 2024 – Present)
    • Built a full-stack web application (MERN stack) that empowers users to create websites with a drag-and-drop interface.
    • No coding required: Users can visually design websites by dragging and dropping pre-built, customizable components.
    • Effortless export: The builder automatically generates the complete frontend code upon completion, ready to be used anywhere.

    ${chalk.blue('Full Stack Chat WebApp')} ${chalk.green.bold('[Website]')}, ${chalk.blue.bold('[Github]')} (February 2023 – July 2023)
    • Developed a MERN stack chat application with real-time chat and secure login.
    • Created interactive UI with React, achieved real-time messaging using Socket.io, and ensured security using encryption.
    • Utilized React, Socket.io for messaging, scripts, and Node.js, Express, and MongoDB for backend and data handling.

    ${chalk.blue('Algorithm Visualizer.')} ${chalk.green.bold('[Website]')}, ${chalk.blue.bold('[Github]')} (June 2023 – August 2023)
    • Built an interactive algorithm visualizer using React to explain concepts like searching, sorting, and pathfinding algorithms.
    • Implemented efficient algorithms using Javascript, including selection sort, binary search, and Breadth-First Search (BFS).
    • Included advanced algorithms like A*, which is significantly faster than Dijkstra's algorithm.
  `);
}

async function displayAboutMe() {
  console.log(chalk.bold.underline.green('About Me'));
  console.log(`
    • Worked as a Software Development Engineer Intern at a startup named Oxytocin.
    • Co-Head of Web Development Team for Google Developer Student Club (GDSC) in IIT Goa.
    • Member of Web Development Team at Indian Institute of Technology, Goa.
    • Loves learning new things and solving problems.

    • Conducted workshops for 12 schools as a lecturer in Goa and managed events for college fests, including IIT Goa's annual tech and cultural festivals as event head and part of the management team.
    • Mentored school students about coding basics using Scratch.
  `);
}

async function displayExperience() {
  console.log(chalk.bold.underline.green('Experience'));
  console.log(`
    ${chalk.blue('Oxytocin')} (Startup) – Internship – Full Stack Developer. ${chalk.green.bold('[Website]')} (August 2022 – September 2022)
    • A startup focused on real estate technology, tasked with enhancing a property value website.
    • As a Full Stack Developer intern, responsible for adding 6+ features using React, TypeScript, Redux, Express, and MySQL in 8 weeks.
    • Developed search, filtering, and nearest property functionalities, collaborating closely with teams.
    • Enhanced user experience with advanced features, showcasing effective tech stack use.

    ${chalk.blue('OPOC')} (Software development) – Internship – Back-end Developer. ${chalk.green.bold('[Website], [Github]')} (June 2023 – July 2023)
    • Involved in backend development for a discussion platform, leading a 6-member team.
    • Lead team in Node.js, Socket.io for backend development, employed Selenium, and Beautifulsoup for web-scraping, and implemented MongoDB for data management.
    • Successful discussion platform backend, efficient web scraping, and effective data handling.
  `);
}

async function displayHobbies() {
  console.log(chalk.bold.underline.green('Hobbies'));
  console.log(`
    • Playing Football 4+ days in a week, Travelling, Listening to music of 5+ different genres, Coding.
    • Played in a futsal team of 5 members in a sporting event of IIT Goa.
  `);
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