<% OPTION EXPLICIT %>

  <HTML>

  <HEAD>

    <TITLE>Auto-generate Year</TITLE>

  </HEAD>

  <BODY>

  <FORM METHOD="POST" ACTION="thispage.asp">


  <P>


    <SELECT SIZE="1" NAME="year">
    <OPTION>Please select a year ...</OPTION>

    <% DIM intYearCounter, intCurrentYear %>

    <% intCurrentYear = Year(Date) %>

    <% FOR intYearCounter = intCurrentYear TO (intCurrentYear + 7) %>

      <% Response.Write "<OPTION>" & CStr(intYearCounter) & "</OPTION>" %>

    <% NEXT %>

  </SELECT>


  </P>


  </FORM>

  </BODY>

  </HTML>

