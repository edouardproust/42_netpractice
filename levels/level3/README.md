# Level 3

## Problem

![NetPractice 42 - Level 3 - Problem](assets/level3-problem.png "NetPractice 42 Level 3 problem")

### Goals
- **Host A** needs to communicate with **host B**
- **Host A** needs to communicate with **host C**
- **Host B** needs to communicate with **host C**

### Setup
- Host **A**
	- Interface **A1**: `104.198.173.125/?`
- Host **B**
	- Interface **B1**: `?/?`
- Host **C**
	- Interface **C1**: `?/255.255.255.128`

## Solution:

![NetPractice 42 - Level 3 - Solution](assets/level3-solution.png "NetPractice 42 Level 3 solution")

- Host **A**
	- Interface **A1**: `104.198.173.125/25`
- Host **B**
	- Interface **B1**: `104.198.173.124/255.255.255.128`
- Host **C**
	- Interface **C1**: `104.198.173.123/25`
