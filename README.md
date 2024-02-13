<h1 align="center" id="mfilipa97-title" style="font-size: 100px; text-decoration: none;"> <img src= "https://media.giphy.com/media/k6SmJDWCRopihmwnxw/giphy.gif?cid=790b7611q3547c4h1v5l2xtxypp9v9hbkh58znlcqafrzu2a&ep=v1_stickers_search&rid=giphy.gif&ct=s" width="40"> 26B Exercise <img src= "https://media.giphy.com/media/zhYSVCirREeIZtONCI/giphy.gif?cid=790b7611oqc7jyhnq3felvl1xf0inw441msu3oturnpjth5p&ep=v1_stickers_search&rid=giphy.gif&ct=s" width="50"> </h1>

<h1><img src="https://media.giphy.com/media/H1jSPXCJmo8AZi3gdP/giphy.gif?cid=790b7611ufzzj5bvdkeklf6rkocmxjwihzoej6sbadtcwbg1&ep=v1_stickers_search&rid=giphy.gif&ct=s" width="40"> The Exercise</h1>

<h3><img src="https://media.giphy.com/media/WnoL3TgjKJuDEgaPfI/giphy.gif?cid=790b7611owtnobng9dt4yi6bj14jsc80ksc38mx52lmqaed6&ep=v1_stickers_search&rid=giphy.gif&ct=s" width="50">First Step</h3>
I was tasked with creating a program that generates specific outputs for consecutive integers within a range:

  * "fizz" for multiples of 3
  * "buzz" for multiples of 5
  * "fizzbuzz" for multiples of 15
    
Otherwise, the program should output the number itself, ensuring no trailing spaces. For example, when the program runs with a range from 1 to 20, the expected result is: 
<h5 align="center" style="bold"> "1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz".</h5>

<h3><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWF6eXh1Z2JlamVvOHQ3NWVmNGdmOGcyMDV6dWJ1NGp3dXhhdWF3diZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9dHM/6GQ8okFH2f35Z56NVo/giphy.gif"width="50">Second Step</h3>
I've updated the solution to include a report at the end of the output, detailing the counts of "fizz", "buzz", "fizzbuzz", and integers printed. For instance, when running the program with a range from 1 to 20, it will now display:

makefile

    1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz
    fizz: 5
    buzz: 3
    fizzbuzz: 1
    integer: 11

This report summarizes the occurrences of each category in the output.

<h3><img src="https://media.giphy.com/media/V1N1BZLho3ndGDBNpi/giphy.gif" width="50">Third Step</h3>
Finally, I enhanced my existing solution with a visual interface that matches the design specs.
<h4 align="center"> This is how it looks </h4>
<p align="center">
  <img src="https://i.ibb.co/cvwfSPY/Captura-de-ecr-2024-02-12-s-13-21-47.png" width="400px">
  <img src="https://i.ibb.co/X7XXc2q/Captura-de-ecr-2024-02-12-s-13-21-40.png" width="100px">
</p>

<h1> <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHNxM25yZzcxYmJkdTR3MnpnN2plbDZtNGwxZXg5dHdzYjV3YTZ5eCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/UVG0BN8TOMKkPOJS6e/giphy.gif" width="40"> SHA-1 CODES</h1>
<h4>Step 1:</h4> 
  
    edf5c8b93e600ce9a16bc2f4c83b1e7869a8b3ff

<h4>Step 2:</h4>

    a42e3ca32a68bf4579e140bb9416f70a1d5152af

<h4>Step 3:</h4>

    dbc3c6d9367255207b02f3faaeba03d9a9bbb572


<h1> <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTc3Y3k1eGUwamFjNHpzNzUyaThqY3ZxajJ3ZXFyc2czYzd6cGo3YiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/IdyAQJVN2kVPNUrojM/giphy.gif" width="40"> How to Use:</h1>

 <h3> Clone the repo </h3>
 
```bash
git clone https://github.com/mfilipa97/26b-fizzbuzz.git
```
### Install Every dependency:
```bash
npm install
```
### Install separated
Ensure that [Jest](https://jestjs.io/docs/getting-started) is installed. You can install it using:

```bash
npm install --save-dev jest
```
Ensure that [Parcel](https://parceljs.org/getting-started/webapp/) is installed. You can install it using:
```bash
npm install --save-dev parcel
```
### Branches
Choose the branch you want to test.
```bash
git checkout [step-1] or [step-2] or [step-3]
```

<h3>Testing</h3>

<p>Execute the testing via your terminal by running:</p>

```bash:
npx jest  
```
or
```bash:
npm test 
```
