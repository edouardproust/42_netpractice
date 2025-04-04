# Level 1

## Problem

![NetPractice 42 - Level 2 - Problem](assets/level2-problem.png "NetPractice 42 Level 2 problem")

### Goals
- *host A* needs to communicate with *host B*
- *host C* needs to communicate with *host D*

### Setup
- Host **A**
	- Interface **A1**: `?/255.255.255.224`
- Host **B**
	- Interface **B1**: `192.168.126.222/?`
- Host **C**
	- Interface **C1**: IP `?/255.255.255.252`
- Host **D**
	- Interface **D1**: IP `?/30`

## Solution:

![NetPractice 42 - Level 2 - Solution](assets/level2-solution.png "NetPractice 42 Level 2 solution")

- Host **A**
	- Interface **A1**: `192.168.126.221/255.255.255.224`
- Host **B**
	- Interface **B1**: `192.168.126.222/255.255.255.224`

- Host **C**
	- Interface **C1**: IP `192.168.126.1/255.255.255.252`
- Host **D**
	- Interface **D1**: IP `192.168.126.2/30`
