# QIT #

- MVP Test Plan 1.10
- Versioned for Core User Experience 1.0; produced on 25 January, 2018
- Plan produced by Arlene Andrews (@ArleneAndrews)
- Modification to include more test activity and data locations 

## Introduction ##
This is a master-level plan to insure that all of the areas of the QIT Core User Experience have unit and end-to-end tests. With many active and not always consistent improvements, this plan will assure that all the important areas have unit tests, and that both **online** and **offline** **end-to-end** tests are created, maintained and checked on a regular basis.

Having these tests in place will give a head-start of the final product, building on the work done at this level. 

Being hosed on **GitHub**, this plan will be able to be updated as requirements change, and as tests and features are added.

Using the **linter, Netlify**'s process and **Jenkins**, plus manual review of the proposed changes to the plan will ensure that this is standardized, current, up-to-date, and valuable to all users.


## Environmental Needs ##
As this is a **Progressive Web Application** (PWA), the environmental needs are minimal, but without them, the tests and application cannot be run. If there are terms used in an unfamiliar manner, please consult the Glossary to insure that the working vocabulary is consistent.

Hardware:

- A Windows computer **or** a 2010 or newer Macintosh

  - Chosen hardware should be capable of running a 64 bit [operating system](https://github.com/codingblocks/qit.cloud/wiki/glossary#operating-system) and have a minimum of 500**MB** free hard drive space
  - Specific requirements for the major **operating system**s are listed on the [Docker CE page](https://docs.docker.com/install/#supported-platforms)
- Stable internet connection of 600 **Kbps** download or faster
- Reliable source of power
- Monitor (800 x 600 providing 32 color display or higher)
- Keyboard
- Mouse


Software:

- Preferred **operating system** installed and functional
- **Browser** [capable of running service workers](https://vaadin.com/pwa/learn/browser-support)
- **IDE** that has a **terminal** and is capable of interacting with **GitHub**
- Either:
   - The current version of [Docker](https://github.com/codingblocks/qit.cloud/wiki/glossary#docker) **OR**
   - The current versions of [Ruby](https://www.ruby-lang.org/en/downloads/) and [PostgreSQL](https://www.postgresql.org/download/)

Data:

- The podcast has a **search engine** installed, for live tests.
- There is data in `/cypress/fixtures` that is used for mocking API calls and audio check.
- User stories that are in a separate file, and at the moment unwritten.



## Test Items ##

Both of these test suites should run in **online** and **offline** mode; there are some obvious things that will fail, and should have a graceful **fallback** (such as downloading a new pod cast while offline).

A checkbox has been added to indicate if a test in in place [x], in the process of being written [?], or needs to be added [ ]. Keeping this up-to-date will ensure that duplicate tests in the same level are not created.

This will also allow us to have a better grasp on what the [Code Coverage](https://github.com/codingblocks/qit.cloud/issues/110) **badge** actually means for the vital areas. 

After speaking with others int he project, this section may undergo a major revision, once all test areas are identified, and the overall goals for each area updated.

###Unit tests:###

Testing of the individual sections of the program: this is an overall view, and includes the tests that should be added during the updates and commits of code. 

[ ]  [All areas that are user-facing are a11y](https://github.com/codingblocks/qit.cloud/issues/228)  
[ ]  [Unique ids](https://github.com/codingblocks/qit.cloud/issues/230)  
[ ]  [Meta description is included](https://github.com/codingblocks/qit.cloud/issues/275)  
[ ]  All units should be working before being committed - simple check to insure it shows on screen  
[ ]  Tests should be kept together  
[ ]  Mocks should be kept close to what they are mocking  
[ ]  Individual areas may have their own subsection for test coverage
     
- QIT **API**
- Website
- Service worker(s)
- Components
- Hooks
- Models
- Login/Logout
- Email verification
- UI/UX
- Sharing
- Errors/Logs/Reporting
- Security
- QIT Feed Loader (in its own repo)

 
[ ]  Feed loader adds new pod casts to search engine   
[ ]  Any errors are logged  
[ ]  Service worker(s) communicate between modules     
[ ]  Controllers are able to access needed modules and data   
[ ]  API can access the newest podcast feed  
[ ]  [SSL Proxy Bug](https://github.com/codingblocks/qit.cloud/issues/45)  
[ ]  [Google analytics code should be extracted from the code base](https://github.com/codingblocks/qit.cloud/issues/47)  
[ ]  [Should be able to view full screen content for episode](https://github.com/codingblocks/qit.cloud/issues/53)  
[ ]  [Automated dependency management](https://github.com/codingblocks/qit.cloud/issues/154)  
[ ]  [Automatic deployment](https://github.com/codingblocks/qit.cloud/issues/163)  
[ ]  [Optimize SVG images during build/test](https://github.com/codingblocks/qit.cloud/issues/170)     
[ ][Basic metrics and button to clear cache/sw](https://github.com/codingblocks/qit.cloud/issues/7)  
[ ]  [Text completion / auto suggestion for search terms?](https://github.com/codingblocks/qit.cloud/issues/48)    
[ ]  
[ ]  
[ ] 

###End-to-End tests###
[ ] [Offline graceful fails](https://github.com/codingblocks/qit.cloud/issues/137)   
[ ] [Stubs/mocks are correct](https://github.com/codingblocks/qit.cloud/issues/198)   
[ ] [The site is easily crawled for searching](https://github.com/codingblocks/qit.cloud/issues/276)   
[ ] Can a transfer between devices for a registered user pick up changes (volume, position, queue, etc) to a podcast  



## Features To Be Tested ##

This section needs a redesign, to allow for a risk level column, with the High- Medium- Low risk scale. All of these tests and checks need to be looked at from the USERS point of view, and fail or pass on that criteria.

This list is incomplete, and needs additions to it.

[x]  Main page loads    
[x]  Performs a search via the form    
[x]  Add item to queue    
[x]  Removes item from queue 
[x]  Multiple items can be removed from queue    
[x]  Multiple items can be added to queue    
[x]  Queue page is loaded when adding items    
[ ]  Queue page is accessible via a button   
[?]  Drag and drop to move item up    
[?]  Drag and drop to move item down    
[x]  Shows a "No Results" page    
[ ]  Service workers are installed and running correctly    
[ ]  Opens without log-in required  
[ ]  Log-in opens in new window  
[ ]  There is an option to use without registration  
[ ]  Log-in security  
[ ]  Password security  
[ ]  Registration verification  
[x]  QIT opens the about page  
[ ]  Queue is empty on first load  
[ ]  Double clicking the show title plays it  
[ ]  Add to queue button shows up  
[ ]  Play bar has speed adjustment, play button, forward and back, volume slider elapsed time  
[ ]  Episode length is accurate  
[x]  Audio plays  
[x]  Audio will pause  
[ ]  Audio resumes at the same spot   
[ ]  Title and pod cast name is shown  
[ ]  There is a link to the GitHub project on the About page  
[ ]  The GitHub link opens in a new tab (current fail)  
[ ]  The privacy notice opens in a new window  
[ ]  Local version will reload if page is navigated away from  
[ ]  Podcast will resume at previous position if the page is navigated away from 
[x]  Back button returns to the main search page  
[ ]  Clicking elsewhere will close log-in window  
[ ]  Slider is adjustable  
[ ]  Slider changes persist  
[ ]  Volume and position adjustment are a11y  
[ ]  Search terms come up accurately  
[ ]  Pod cast are weighted depending on matching, age, and ?  
[ ]  Items are marked as in queue on searches  
[ ]  Adding an item to the queue marks it as in queue even after scrolling away from it  
[ ]  Removing an item from the queue insures that it will show up in the next search as a non-queued item  
[ ]  Sharing (TODO)  
[ ]      
[ ]  
[ ]  
[ ]  
[ ]  
[ ]  
[ ]  
[ ]  
[ ]  
[ ]   
[ ]  [Current Results cap](https://github.com/codingblocks/qit.cloud/issues/52)  
[ ]  [Online or offline indicated](https://github.com/codingblocks/qit.cloud/issues/103)  
[ ]  [Results panel matches the play list height](https://github.com/codingblocks/qit.cloud/issues/176)  
[ ]  [Podcast can return to specific time](https://github.com/codingblocks/qit.cloud/issues/189)  
[ ]  [When searching for a podcast, all shows are shown](https://github.com/codingblocks/qit.cloud/issues/247)  
[ ]  [Password can be reset](https://github.com/codingblocks/qit.cloud/issues/265)  
[ ]  [Sign-up has validation](https://github.com/codingblocks/qit.cloud/issues/269)  
[ ]  [Tags show in search results](https://github.com/codingblocks/qit.cloud/issues/278)  
[ ]  [Track duration](https://github.com/codingblocks/qit.cloud/issues/96)  
[ ]  [FOSSA Scans and badge](https://github.com/codingblocks/qit.cloud/issues/149)  
[ ]  


##Features Not To Be Tested##

This section needs a redesign, to allow room to place the reason why these items are not yet tested: such as a feature that has been used before and has not yet caused problems, or one that is not in this release. All of these tests and checks need to be looked at from the USERS point of view, and fail or pass on that criteria.

This list is incomplete, and needs additions to it.

[ ] [Common searches should have informational page](https://github.com/codingblocks/qit.cloud/issues/12)   
[ ]  [Language localization](https://github.com/codingblocks/qit.cloud/issues/49)  
[ ]  [Should be able to work locally, sans cloud dependency](https://github.com/codingblocks/qit.cloud/issues/6)  
[ ]  [Loading Messages, tips and suggestions](https://github.com/codingblocks/qit.cloud/issues/10)  
[ ]  [Should be able to view full screen content for episode](https://github.com/codingblocks/qit.cloud/issues/53)  
[ ]  [More information button](https://github.com/codingblocks/qit.cloud/issues/102)   
[ ]  Email verification  
[ ]  Sharing    
[ ]    
[ ]  
[ ]  
[ ]  


##Approach##

·  What metrics will be collected?
·  Which level is each metric to be collected at?
·  How is Configuration Management to be handled?
·  How many different configurations will be tested
·  Hardware
·  Software
·  What are the regression test rules? How much will be done and how much at each test
level.
·  Will regression testing be based on severity of defects detected?
·  Are there any recommended testing techniques that should be used, if so why?

##Item Pass/Fail Criteria##
What are the Completion criteria for this plan? This is a critical aspect of any test plan
and should be appropriate to the level of the plan. The goal is to identify whether or not a test
item has passed the test process.
·  At the Unit test level this could be items such as:
·  All test cases completed.
·  A specified percentage of cases completed with a percentage containing some
number of minor defects.
·  Code coverage tool indicates all code covered.
·  At the Master test plan level this could be items such as:
·  All lower level plans completed.
·  A specified number of plans completed without errors and a percentage with
minor defects.
·  This could be an individual test case level criterion or a unit level plan or it can be
general functional requirements for higher level plans.
·  What is the number and severity of defects located?
·  Is it possible to compare this to the total number of defects? This may be impossible,
as some defects are never detected.
·  A defect is something that may cause a failure, and may be acceptable to leave in the
application.
·  A failure is the result of a defect as seen by the User, the system crashes, etc.

##Suspension Criteria and Resumption Requirements##
Know when to pause in a series of tests or possibly terminate a set of tests. Once testing
is suspended how is it resumed and what are the potential impacts, (i.e. regression tests).
If the number or type of defects reaches a point where the follow on testing has no value,
it makes no sense to continue the test; you are just wasting resources.
·  Specify what constitutes stoppage for a test or series of tests and what is the
acceptable level of defects that will allow the testing to proceed past the defects.
·  Testing after a truly fatal error will generate conditions that may be identified as
defects but are in fact ghost errors caused by the earlier defects that were ignored.

##Test Deliverables##
What is to be delivered as part of this plan?
·  Test plan
·  Test item transmittal reports
·  Test logs
·  Test Incident Reports
·  Test Summary reports

Test data can also be considered a deliverable as well as possible test tools to aid in the
testing process

##Risks and Contingencies##
What are the overall risks to the project with an emphasis on the testing process?
·  Lack of personnel resources when testing is to begin.
·  Lack of availability of required hardware, software, data or tools.
·  Late delivery of the software, hardware or tools.
·  Delays in training on the application and/or tools.
·  Changes to the original requirements or designs.