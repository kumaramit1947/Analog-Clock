# Analog Clock
Description: Displays a working clock showing current local time in 12-Hrs routine
*********************************************************
## Details...

Phase: Frontend

Tech used: Html, Css, Javascript

**Files**
1. index.html
2. clockScript.js
3. clockStyle.css
************************************************************
**Implementation**
1. All the HTML structures are created and inserted using javascript to the root element of the design.
2. Challenge: Displaying the timing number (from 1 to 12) in a circular design and correct order and position.
Solution: Implemented using individual "div" tags for each number and then rotating each with corresponding calculated angle.
3. Challenge: Changing the clock hands with respect to the time
Solution: Getting local time at every 1000ms interval from "Date()" object and then updating the rotation angle of each clock hand.
*****************************************************************
**Future**
1. Dark mode design
2. 3D Analog Clock
3. Implementing day and night effect dynamically
****************************************************************** 
![Analog Clock](https://user-images.githubusercontent.com/39863626/221980056-844b8461-e63a-45f0-bc09-de27323adc9a.png)
