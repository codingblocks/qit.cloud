# QIT #

- MVP Test Plan 1.0
- Versioned for Core User Experience 1.0; produced on 24 January, 2018
- Plan produced by Arlene Andrews (@ArleneAndrews)
- Initial plan 

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
The podcast has a **search engine** installed, however for offline testing, we will need similar data. This would be a **JSON** file similar to ``` 
"feeds": [ { "url": "https://codingblocks.libsyn.com/rss", "title": "Coding Blocks", "titleCleanser": "^\\d+.\\s", "forceHttps": true }]```



## Test Items ##

Both of these test suites should run in **online** and **offline** mode; there are some obvious things that will fail, and should have a graceful **fallback** (such as downloading a new pod cast while offline).

A checkbox has been added to indicate if a test in in place [x], in the process of being written [?], or needs to be added [ ]. Keeping this up-to-date will ensure that duplicate tests in the same level are not created.

This will also allow us to have a better grasp on what the [Code Coverage](https://github.com/codingblocks/qit.cloud/issues/110) **badge** actually means for the vital areas. 

###Unit tests:###
[ ]  [All areas that are user-facing are a11y](https://github.com/codingblocks/qit.cloud/issues/228)  
[ ]  [Unique ids](https://github.com/codingblocks/qit.cloud/issues/230)  
[ ]  [Meta description is included](https://github.com/codingblocks/qit.cloud/issues/275)  
[ ]  All units should be working before being committed - simple check to insure it shows on screen  
[ ]  Tests should be kept together  
[ ]  Mocks should be kept close to what they are mocking  
[ ]  Individual areas will have their own subsection for test coverage
     
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


###Integration tests:###
[ ]  Basic tests pass for all units in the integration  
[ ]  Feed loader adds new pod casts to search engine   
[ ]  Any errors are logged  
[ ]  
[ ]   
[ ]  
[ ]   
[ ]  
[ ]  
[ ]  
[ ] 

###End-to-End tests###
[ ] [Offline graceful fails](https://github.com/codingblocks/qit.cloud/issues/137)   
[ ] [Stubs/mocks are correct](https://github.com/codingblocks/qit.cloud/issues/198)   
[ ] [The site is easily crawled for searching](https://github.com/codingblocks/qit.cloud/issues/276)   
[ ]  



## Features To Be Tested ##
[ ]  [Current Results cap](https://github.com/codingblocks/qit.cloud/issues/52)  
[ ]  [Online or offline indicated](https://github.com/codingblocks/qit.cloud/issues/103)  
[ ]  [Results panel matches the playlist height](https://github.com/codingblocks/qit.cloud/issues/176)  
[ ]  [Podcast can return to specific time](https://github.com/codingblocks/qit.cloud/issues/189)  
[ ]  [When searching for a podcast, all shows are shown](https://github.com/codingblocks/qit.cloud/issues/247)  
[ ]  [Password can be reset](https://github.com/codingblocks/qit.cloud/issues/265)  
[ ]  [Sign-up has validation](https://github.com/codingblocks/qit.cloud/issues/269)  
[ ]  [Tags show in search results](https://github.com/codingblocks/qit.cloud/issues/278)  
[ ]  [Track duration](https://github.com/codingblocks/qit.cloud/issues/96)  
[ ]  [FOSSA Scans and badge](https://github.com/codingblocks/qit.cloud/issues/149)  
[ ]  
[ ]  
[ ]  
[ ]  
[ ]  
[ ]  
[ ]  

This is a listing of what is to be tested from the USERS viewpoint of what the system
does. This is not a technical description of the software but a USERS view of the functions. It
is recommended to identify the test design specification associated with each feature or set of
features.
Set the level of risk for each feature. Use a simple rating scale such as (H, M, L); High,
Medium and Low. These types of levels are understandable to a User. You should be
prepared to discuss why a particular level was chosen.

##Features Not To Be Tested##
[ ] [Common searches should have informational page](https://github.com/codingblocks/qit.cloud/issues/12)   
[ ] [Basic metrics and button to clear cache/sw](https://github.com/codingblocks/qit.cloud/issues/7)  
[ ]  [Text completion / auto suggestion for search terms?](https://github.com/codingblocks/qit.cloud/issues/48)  
[ ]  [Language localization](https://github.com/codingblocks/qit.cloud/issues/49)
[ ]  [Should be able to work locally, sans cloud dependency](https://github.com/codingblocks/qit.cloud/issues/6)  
[ ]  [Loading Messages, tips and suggestions](https://github.com/codingblocks/qit.cloud/issues/10)  
[ ]  [SSL Proxy Bug](https://github.com/codingblocks/qit.cloud/issues/45)  
[ ]  [Google analytics code should be extracted from the code base](https://github.com/codingblocks/qit.cloud/issues/47) 
[ ]  [Should be able to view full screen content for episode](https://github.com/codingblocks/qit.cloud/issues/53)  
[ ]  [More information button](https://github.com/codingblocks/qit.cloud/issues/102)  
[ ]  [Automated dependency management](https://github.com/codingblocks/qit.cloud/issues/154)  
[ ]  [Automatic deployment](https://github.com/codingblocks/qit.cloud/issues/163)  
[ ]  [Optimize SVG images during build/test](https://github.com/codingblocks/qit.cloud/issues/170)  
[ ]  
[ ]  

This is a listing of what is NOT to be tested from both the Users viewpoint of what the
system does and a configuration management/version control view. This is not a technical
description of the software but a USERS view of the functions.
·  Identify WHY the feature is not to be tested, there can be any number of reasons.
·  Not to be included in this release of the Software.
·  Low risk, has been used before and is considered stable.
·  Will be released but not tested or documented as a functional part of the release of
this version of the software.

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