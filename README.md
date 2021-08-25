# JC Beauty Education

This repo contains the source code for a commercial website, JC Beauty Education. The website has been designed and developed entirely by myself.

## Contents

1. [Introduction](##introduction)
3. [Business Context](##business-context)
4. [Key Features](##key-features)
6. [Tech](##technology)
7. [Deployment](##deployment)

## Introduction

The website has been developed using the Next.js framework which builds upon React.js. The benefit for of Next.js includes SEO optimisation, and serverside rendering of brand pages and blog posts.

## Business Context

The Client required a website which would entice customers to enquire about the availability of beauty courses. I have taken advantage of Next.js and Netlify's serverless functionality to create a microservice based back end for email enquiries and user authentication.

## Key Features

- Serverside rendering based upon a dataset of beauty course brands and respective courses.
- Brand pages are defined by a single file, taking advantage of dynamic routing provided by Next.js through getStaticProps and getStaticPaths.
- User authentication (admin accounts only) using secure JSON Web tokens.
- Protected routes for admins to create new blog posts.
- Email service which sends email to the customer and the business upon submitting an enquiry.

## Tech

- Serverless React.js application built using the Next.js framework.
- Entirely custom designed CSS, no libraries used.
- Nodemailer.
- User authentication and protected routes using JSON web tokens.
- Server side rendering for SEO.

## Deployment

Deployed through Netlify, the website is available [here](https://www.jackiclarke.com/).

<!-- screenshots -->
![Capture2](https://user-images.githubusercontent.com/67362834/119010008-8c472e80-b98b-11eb-9384-d5306548f059.JPG)
![Capture](https://user-images.githubusercontent.com/67362834/119010014-8cdfc500-b98b-11eb-9ed6-80ad788c969d.JPG)
![Capture3](https://user-images.githubusercontent.com/67362834/119010016-8d785b80-b98b-11eb-913e-b8540262e6d5.JPG)

