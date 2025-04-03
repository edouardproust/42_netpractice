# NetPractice (42 Barcelona)

**The "NetPractice" project from 42 School focuses on developing network programming skills in C. This project involves implementing socket programming, TCP/UDP communication, asynchronous I/O handling, and error management, providing hands-on experience with low-level networking concepts.**

- **Subject:** [English](subject/en.subject.pdf) / [French](subject/fr.subject.pdf)
- **Location:** 42 School Barcelona
- **Validation:** May 2025

![NetPractice 42 Barcelona](test/screenshot/netpractice.gif "NetPractice 42 Barcelona project GIF")

## How to Use

To run the exercices, you need to files in `net_practice.1.5.tgz` available in the 42 intra (intra.42.fr).
Then, open in you internet browser with this command:

```bash
open net_practice/index.htm
```

## Tips

### Quickly convert decimal to binary

0000 0001 -> 2^0 -> 1
0000 0010 -> 2^1 -> 2
0000 0100 -> 2^2 -> 4
0000 1000 -> 2^3 -> 8
0001 0000 -> 2^4 -> 16
0010 0000 -> 2^5 -> 32
0100 0000 -> 2^6 -> 64
1000 0000 -> 2^7 -> 128


234

234 = 128 + 64 + 32 + 8 + 2


192 = 128 + 64

  1100 0000
& 1111 1111




200:  1100 0100

mask: 1111 0000
 ----------------
      1100 0000

200:  1100 0100
mask: 0000 1111
 ---------------
      0000 0100

192.168.126.222 (ip address)
255.255.0.0     (mask)
192.168.126.222/16 (ip + mask)
192.168.0.0     (network address)
        126 222 (host number)

192.168.126.222/32

192.168.126.222

128 + 64 + 16 + 8 + 4 + 2
1101 1110

1100 0000 .                       . 1101 1110
1111 1111 . 1111 1111 . 1111 1111 . 0000 0000

1100 0000 .           .           . 0000 0000
