<% DIM intDice, intRollCounter %>

  <% intRollCounter = 0 %>

 

  <% Randomize %>

 

  <% DO UNTIL intDice = 6 %>

 

    <% intRollCounter = intRollCounter + 1 %>

    <% intDice = Int(Rnd * 6) + 1 %>

 

  <% LOOP %>

 

  <% Response.Write "It took " & CStr(intDice) & " tries to roll a 6!" %>
