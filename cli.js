#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const ora = require('ora');
const cliSpinners = require('cli-spinners');

clear();

const prompt = inquirer.createPromptModule();

const spinner = ora({
    text: 'Loading...',
    spinner: cliSpinners.dots
});

const questions = [
    {
        type: "list",
        name: "action",
        message: "What Do You Want to Do?",
        choices: [
            {
                name: `Send Me an ${chalk.green.bold("email")}?`,
                value: () => {
                    spinner.start();
                    open("mailto:pusarlatarunvamsi@gmail.com");
                    spinner.succeed("Done, see you soon at inbox.\n");
                }
            },
            {
                name: "Visit my LinkedIn",
                value: () => {
                    spinner.start();
                    open("https://linkedin.com/in/pusarla-tarun-vamsi");
                    spinner.succeed("Done, see you soon on LinkedIn.\n");
                }
            },
            {
                name: "Check out my GitHub",
                value: () => {
                    spinner.start();
                    open("https://github.com/Tarunvamsi");
                    spinner.succeed("Done, see you on GitHub.\n");
                }
            },
            {
                name: "Follow me on Twitter",
                value: () => {
                    spinner.start();
                    open("https://x.com/Vamsik1643");
                    spinner.succeed("Done, see you on Twitter.\n");
                }
            },
            {
                name: "Join me on Discord",
                value: () => {
                    spinner.start();
                    open("https://discord.gg/4CpjK2vveY");
                    spinner.succeed("Done, see you on Discord.\n");
                }
            },
            {
                name: "Visit my LeetCode profile",
                value: () => {
                    spinner.start();
                    open("https://leetcode.com/Vamsik1643");
                    spinner.succeed("Done, see you on LeetCode.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Hasta la vista.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                                             Pusarla Tarun Vamsi"),
    work: `${chalk.white("Aspiring")} ${chalk.hex("#f50a5c").bold("Software Developer")}`,
    linkedin: chalk.blue("https://linkedin.com/in/pusarla-tarun-vamsi"),
    github: chalk.white("https://github.com/Tarunvamsi"),
    twitter: chalk.cyan("https://x.com/Vamsik1643"),
    discord: chalk.magenta("https://discord.gg/4CpjK2vveY"),
    leetcode: chalk.yellow("https://leetcode.com/Vamsik1643/"),
    email: chalk.red("pusarlatarunvamsi@gmail.com"),
    phone: chalk.red("8919188499"),
    skills: [
        {
            category: chalk.white.bold("Technologies:"),
            details: chalk.white("React.js, Tailwind CSS, Redux, TypeScript, WebSockets")
        },
        {
            category: chalk.white.bold("Languages:"),
            details: chalk.white("Python, Java, HTML, CSS, JavaScript, SQL")
        },
        {
            category: chalk.white.bold("Tools:"),
            details: chalk.white("Git, VS Code, XAMPP, Jira, Selenium, Sonarqube, Jenkins, Postman")
        },
        {
            category: chalk.white.bold("Methodologies:"),
            details: chalk.white("Agile, SDLC, STLC")
        },
        {
            category: chalk.white.bold("Cloud:"),
            details: chalk.white("AWS, Azure, GCP")
        }
    ],
    education: [
        {
            institution: chalk.white.bold("Amrita Vishwa Vidyapeetham"),
            degree: chalk.white("Bachelor of Technology in Computer Science"),
            duration: chalk.white("2020-2024"),
            location: chalk.white("Coimbatore, Tamil Nadu"),
            gpa: chalk.white("GPA: 7.67/10.00")
        },
        {
            institution: chalk.white.bold("Tirumala Junior College"),
            degree: chalk.white("Intermediate (PCM)"),
            duration: chalk.white("2018-2020"),
            location: chalk.white("Rajahmundry, Andhra Pradesh"),
            gpa: chalk.white("GPA: 9.88/10.00")
        },
        {
            institution: chalk.white.bold("Tirumala English Medium High School"),
            degree: chalk.white("SSC (10th Class)"),
            duration: chalk.white("2017-2018"),
            location: chalk.white("Rajahmundry, Andhra Pradesh"),
            gpa: chalk.white("GPA: 10.00/10.00")
        }
    ],
    projects: [
        {
            name: chalk.red("Netflix Assist GPT"),
            link: chalk.red("https://netflix-assist-gpt.vercel.app/")
        },
        {
            name: chalk.yellow("ReactRestoClone: Swiggy Edition"),
            link: chalk.yellow("https://swiggy-vamsi.vercel.app/")
        }
    ],
    labelWork: chalk.white.bold("                                     🚀"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelDiscord: chalk.white.bold("    Discord:"),
    labelLeetCode: chalk.white.bold("   LeetCode:"),
    labelSkills: chalk.white.bold("     Skills:"),
    labelEducation: chalk.white.bold("  Education:"),
    labelProjects: chalk.white.bold("   Projects:"),
    labelCard: chalk.white.bold("                           Card:")
};

const header = `${chalk.bgBlue.white("Namastey!")} ${' '.repeat(40)}${chalk.bgMagenta.black("Welcome!")} ${' '.repeat(40)}${chalk.bgRed.white("vanakkam !")}`;

const me = boxen(
    [
        header,
        ``,
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelLinkedIn}   ${data.linkedin}`,
        `${data.labelGitHub}   ${data.github}`,
        `${data.labelTwitter}   ${data.twitter}`,
        `${data.labelDiscord}   ${data.discord}`,
        `${data.labelLeetCode}   ${data.leetcode}`,
        ``,
        `${data.labelSkills}`,
        ...data.skills.map(skill => `   - ${skill.category} ${skill.details}`),
        ``,
        `${data.labelEducation}`,
        ...data.education.map(edu => `   - ${edu.institution}, ${edu.degree}, ${edu.duration}, ${edu.location}, ${edu.gpa}`),
        ``,
        `${data.labelProjects}`,
        ...data.projects.map(project => `   - ${project.name}: ${project.link}`),
        ``,
        `${data.labelCard}  ${chalk.yellow("npx")} ${chalk.red("tarunvamsi")}`,
        ``,
        `${chalk.italic(
            chalk.redBright("Hey, I am Pusarla Tarun Vamsi")
        )}`,
        `${chalk.italic(
            chalk.red("A recent 2024 graduate from Amrita Vishwa Vidyapeetham with a degree in Computer Science and Engineering.")
        )}`,
        `${chalk.italic(
            chalk.blueBright("I am a Student, a Coder, and a Tech Enthusiast!")
        )}`,
        `${chalk.italic(
            chalk.greenBright("I love building new products and developing solutions that make a difference.")
        )}`,
        `${chalk.italic(
            chalk.yellowBright("I am always open to work and new opportunities!")
        )}`,
        `${chalk.italic(
            chalk.green("Whether you have a question or just want to say hi, I will get back to you!")
        )}`,
        `${chalk.italic(
            chalk.redBright("Email me: ") + chalk.red(data.email)
        )}`,
        `${chalk.italic(
            chalk.white("Phone: ") + chalk.red(data.phone)
        )}`,
        `${chalk.italic(
            chalk.blue("Thanks for visiting!")
        )}`,
        `${chalk.italic(
            chalk.magenta("See you again!")
        )}`,
        `${chalk.italic(
            chalk.bgWhite("                              🚀 The only way to do great work is to love what you do                          ")
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());
