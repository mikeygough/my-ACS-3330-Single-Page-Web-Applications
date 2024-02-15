# Handling Async Actions with Redux Toolkit

Handling async actions pose a problem to the dispatch and action methodology. Imagine that an action was sent but it needed to wait to be resolved. In this case any actions that came after would have to wait for the current action to be resolved before they could be processed. 

Redux Toolkit provides RTK Query to solve this problem. 