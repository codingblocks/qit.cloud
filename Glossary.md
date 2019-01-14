# Terms used in this document #

For those of you who may not be familiar with some of the terms used here, this is a glossary of what they mean. The explanations are not too deep, but it will give you the information needed to explore more deeply, if you wish. 

Terms that are in **bold** have a further definition, to avoid cluttering this document with repeated information.

**Lots of TODO here **
## a11y ## 
A-one-one-Y”, “A-eleven-Y”, and liberally as “ally”. The shorter form of "accessibility". Written this way, it should be read as accessibility, for ease of understanding.

## Accessibility Testing ## 
The process of insuring that the **a11y** and other standards actually are effective for the end users.

## Analytics ## 
The process of finding patterns (in this case, the topic of the podcast) in a mass of data.

## App or Application ## 
Used here, this refers to either the:
- Qit searcher/loader
- Pod cast Feed loader

## Build status ## 
An item, normally a bar with the word `Build` on one side. This indicates a useable as-is version (`Passing`) or one that might be changed, or having problems (`Failing`).

## Caching ## 
Storage for information that can be used when there is no Internet/WiFi connection - the application will use this information, and save any changes - ready to be updated quickly when a connection is established and approved.

## Containers ## 
This is the setup that keeps various elements together, such as the list of found pod casts, or the **Docker** that builds the application with little effort for the user.

## Cypress ## 
Our chosen end-to-end **testing harness** . Cypruss was been built specifically for this task.

## DevOps ## 
Short for Developer/Operations, this section makes sure that not only the applications works, but that the quality and usability are at as high a level possible, at that time.

## Docker ## 
A system where an application can be developed, shipped, and run within a single platform. It does require an installation to work. This application has directions to install and start it (spin it up is a common term for this).

## Drag and drop ## 
The ability to rearrange items in the queue by selecting them, and setting them in their new position, letting the other items adjust to the change in the list.

## Headless ## 
This removes the browser window, showing instead a text window , where you can focus on the text, not the visual items.

## Hooks ## 
This is a different way to work with React components: it functions much the same way **libraries** do.

## Jest ##
The **testing harness** used here for unit tests. This is a more-general tool, but with certain libraries added, is excellent for this task.

## Libraries ##
Like libraries for people, these are items that can be added to a **testing harness** to add extra abilities, or allow for faster usage.

## Linter ##
Linters are small programs that help programmers catch any errors they make. They are a part of getting a `Passing` **build status**, since the code is similar in style all the way through.

## MIT License ##
One of the many classes of Open Source (which means anyone can work on it!) licences. A comparison of some of the popular ones is located [here](https://www.kiuwan.com/blog/a-comparison-of-the-most-popular-open-source-licenses/).

## Podcast Feed ##
The way that Qit is able to find the newest, greatest pod casts for your listening pleasure. Each site has a specific way that they send out information about new podcasts - this is what the podcast feed captures, so new episodes are available quickly and the information is correct.

## Pre-Commit ##
This is a part of the **build status**, that checks for any obvious errors before changes are made to the main program.

## Project Management ##
This is a blanket term for the planning, creating, inspiring, and finishing a project. Normally, this is limited by goals, time, and what is decided on as success for the project.

## Sharing ##
Have a pod cast that you think a friend would enjoy? The sharing feature allows you to send a copy of the specific episode to them, so they can listen to it without delay.

## Smoke Test ##
A simple test to ensure that that component will open - a very basic test to insure functionality.

## Snapshot ##
This method of testing takes a word-picture (it shows as code of what is actually on the screen), and has it available to compare later changes to insure that there is not anything added that is unexpected.

## Testing harness ##
A specific program, or set of **libraries** that deliver a way to test an application. Some of these are designed for specific tasks, or a more-general way to test an application.

## UX ##
Short for User experience, this is how the application looks and behaves for the user. This is a large part of the goal of any application, and has specific goals for **a11y** and design considerations.