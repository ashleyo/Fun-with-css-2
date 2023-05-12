## Alternative

You might prefer this way of doing it, it is simpler and manipulates just class lists.

1. When the buttons are added they get a glass `greyed` which has `background-colour: grey important!`. The important means that this will override any other background-colours applied to the element.
2. Correct answer ALSO get a class `correct` and incorrect ones get a class `incorrect` which would make them green/red except for 1.
3. When an answer button is clicked the class `greyed` is removed from all the answers - now we get to see their true colours.
