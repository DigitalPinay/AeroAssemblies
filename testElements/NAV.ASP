<% OPTION EXPLICIT %>

 

<% ' This example creates a form with a drop-down %>
<% ' menu. The user selects a page from the list and %>
<% ' clicks GO! to move from page to page. Each time %>
<% ' the user clicks GO! they are sent to a page named %>
<% ' nav.asp where their selection is evaluated by a %>
<% ' CASE statement. The CASE statement then %>
<% ' redirects the user to the appropriate page. %>

 
<% SELECT CASE Request.Form("Category") %>
<%   CASE "Home" %>
<%     Response.Redirect "index.html" %>
<%   CASE "About Me" %>
<%     Response.Redirect "about_me.html" %>
<%   CASE "About HTML" %>
<%     Response.Redirect "about_html.html" %>
<%   CASE "About ASP" %>
<%     Response.Redirect "about_asp.html" %>
<% END SELECT %>

