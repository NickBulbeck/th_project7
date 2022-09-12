Learning notes
++++++++++++++
Firstly, remember that application state is analogous to data design in some ways. Certainly, you need to design the state, and keep each element of the state as high up as possible so that everything that needs to access it, can.

Secondly, as an extension to this, remember that data flows down through the components via props. This is called uni-directional data flow. You need to design around this.

Thirdly, when two more more components need access to the same state, we put it into their nearest common ancestor. This is called lifting state up.

Fourthly, when a child component does need to modify state stored above it, you can design it to do so by passing a callback to it via props.

Routing
+++++++
A single-page app is one big bundle of webpack js, html and css. It doesn't reload as the user navigates
around it. The idea is that it may take a bit of time to load, but once it's loaded it works a bit like 
a desktop app; only occasionally requesting data fae elsewhere (like, the server that served it in the 
first place) in response to user actions. The routes in this context determine what components are 
rendered, and the posting of stuff in the browser is really just a dodge - you're not really sending
browser requests. It matches a url to the set of components being rendered and, in that way, keeps the
rendering in sync with what a user would expect if they were on a website.
The BrowserRouter component (probably via implicit props and state) keeps all the wean components inside
it up to date with what the route is.

IDEA TO TRY NEXT
================
Render the Foties from inside a container component that sets its own hard-coded
search term.

  Monday ToDo's:
   - A Home, Trains, Mountains and Bears component (Home could be removed in favour of a default, later maybe)

Major routing questions
=======================
 - Where are the routes actually declared?
 - How are the NavLink elements linked to the routes?
 - How do I get clicking the nav links to conduct a search?
 - How do I get the search function to display/edit the url?
 - How do I implement the search route, and what does the Search link do?
    - There is no search route - just a button. The instructions are a bit ambiguous here, I think.


Smaller ToDo's
=============

 - Pictures of The Bears for the no-results page
 - Small delay for the "loading" display
 - Updated function to deal with cats!
 
