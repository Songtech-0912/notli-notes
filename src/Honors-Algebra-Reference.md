# Honors Algebra Exam Reference Notes

*An unofficial guide from the notes of Jacky Song, a.k.a. @Songtech-0912*

## Trigonometry

### Things you'll need to know!

- [ ] Trigonometric Identities
  
  - [ ] SOH CAH TOA
  
  - [ ] Trig song
  
  - [ ] Converting radians and degrees
  
  - [ ] Trig inverse equivalents
  
  - [ ] Trig ratio rules

### SOH CAH TOA!

**S**ine is **O** over **H** (SOH)!

**C**osine is **A** over **H** (CAH)!

**T**angent is **O** over **A** (TOA)!

With that, as long as we know one of leg of the triangle, be it opposite (O), hypotenuse (H), or adjacent (A), we can find any other side!

### The Trig Song

One, two three!

Three, two, one!

Two under the bar!

Square root all that's not one!

Square root of three over three!

One, then square root of three!

Now that you know the song!

You can sing it again, to me!

*And this is how you get to this:*

|         | 30 degrees           | 45 degrees           | 60 degrees           |
| ------- | -------------------- | -------------------- | -------------------- |
| sine    | $\frac{1}{2}$        | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ |
| cosine  | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$        |
| tangent | $\frac{\sqrt{3}}{3}$ | $1$                  | $\sqrt{3}$           |

**Explanation:**

"One, Two, Three" is the first row of the table

"Three, Two, One" is the second row

"Two under the bar" means to make 2 the denominator of every number (so 1 will become $\frac{1}{2}$, 2 will become $\frac{2}{2}$, you get the idea)

"Square root all that's not one" means to add a square root to every number (in rows 1) and 2) that, as you might have guessed, is **not 1**)

"Square root of three over three" is for the first column of the third row ($\tan 30^\circ$)

"One, then square root of three" is for the second and third columns of the third row ($\tan 45^\circ$ and $\tan 60^\circ$)

And you've got that done!

### Converting between radians and degrees

Here's a base rule to memorize: $2\pi$ radians is **equal to** $360^\circ$

Using that, you can quickly find that:

| Radians         | Degrees |
| --------------- | ------- |
| $\pi$           | 180     |
| $\frac{\pi}{2}$ | 90      |
| $\frac{\pi}{3}$ | 60      |
| $\frac{\pi}{4}$ | 45      |
| $\frac{\pi}{6}$ | 30      |

### Trig Inverse Equivalents

Aside from the main trigonometric ratios, we also have secants, cosecants, and cotangents. These are inverses of the three we already know and love.

| Secant                                 | Cosecant                               | Cotangent                              |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| $\sec \theta = \dfrac{1}{\cos \theta}$ | $\csc \theta = \dfrac{1}{\sin \theta}$ | $\cot \theta = \dfrac{1}{\tan \theta}$ |

* **Secant** is the inverse to cosine (remember that by noticing that if you spell cos backwards, it looks like sec!)
  
  * If you have a fraction like $\sec \frac{1}{x}$, just flip the fraction to get the equivalent in cosine ($\cos \frac{x}{1} = \cos x$)

* **Cosecant** is the inverse to sine (think of it as the one that has a name the most unlike its inverse counterpart)

* **Cotangent** is the inverse to tangent (remember it because of the obvious name)

### Trig Ratio Rules

Several trigonometric ratios can be derived via the Pythagorean Theorem. These, unfortunately, you have to memorize (and there's no easy song for it)

To be completed...

### Trig Ratios and Quadrants

In case you've forgotten, here are the four quadrants:

![The Coordinate Plane: Understanding Quadrants, Coordinates, and the Origin  | Free Homework Help](https://schooltutoring.com/wp-content/uploads/sites/2/CP3.png?w=640)

**Trick to remember** The quadrants start from the positive x and positive y, then go left. So start counting from the region of $(+x,+x)$ which is the first quadrant, and to the left of that is the second quadrant, next is the third, and next is the forth.

How do trig ratios have anything to do with the quadrants? Because quadrants determine whether these ratios are positive or negative. Like this:

| Sector I                                        | Sector II                                      | Sector III                                        | Sector IV                                        |
| ----------------------------------------------- | ---------------------------------------------- | ------------------------------------------------- | ------------------------------------------------ |
| **A**ll                                         | **S**tudents                                   | **T**ake                                          | **C**alculus                                     |
| **All** ratios positive ($+\sin, +\cos, +\tan$) | **Sine** positive only $(+\sin, -\cos, -\tan)$ | **Tangent** positive only ($-\sin, -\cos, +\tan$) | **Cosine** positive only $(-\sin, +\cos, -\tan)$ |

#### Finding Trig values from a point

If you were given the point $P = (-3, 4)$, we can solve for the values of $\sin, \cos, \tan, \csc, \sec$, and $\cot$:

* We know that the point is in the second quadrant

* Using our *all students take calculus* trick, we know that the second quadrant is where only **sine is positive**

* We can draw a triangle to point $P$ from the origin of the graph, which has a width of 3 units and a height of 4 units, and using Pythagoras's $x^2 + y^2 = h^2$, we know that the hypotenuse is $\sqrt{3^2 + 4^2}=5$

* So we know that $H = 5, O = 4, A = 3$

* We also know that $\sin \theta = O/H$, so $\sin \theta = 4/5$

* Then we can work out $\cos \theta = 3/5$, and $\tan \theta = 4/3$ 

* Lastly, because sine and cosecant are inverses, we know that $\csc \theta = 5/4, \sec \theta = 5/3,$ and $\cot \theta = 3/4$

#### Finding Trig values from an angle

If you were given the expression $\tan \frac{5\pi}{2}$, we can find its exact value:

* We know that $\tan \frac{5\pi}{2} = \tan \frac{\pi}{2}$ because $\frac{4\pi}{2} = 360^\circ$, which is a full revolution, and we can effectively ignore a full revolution, and $\frac{5\pi}{2} - \frac{4\pi}{2} = \frac{\pi}{2}$
* We also know that $\tan \frac{\pi}{2}$ is the same as $\tan 45^\circ$, which we know to be equal to 1
* Sometimes, you will also be asked to provide the reference angle, such as the reference angle of $\tan \frac{5\pi}{2}$
* The **reference angle** is how far an angle is from the x-axis
* $180^\circ, 360^\circ, 540^\circ,$ and $720^\circ$ are angles that are on the x-axis, and when finding the reference angle, we just need to find the difference to the closest reference angle
* In the case of $\frac{5\pi}{2}$, the closest reference angle is $\frac{4\pi}{2} = 2\pi = 360^\circ$
* The difference between $\frac{5\pi}{2}$ and $\frac{4\pi}{2}$ is $\frac{\pi}{2}$ which is $45^\circ$
* Thus, we know that the reference angle of $\tan \frac{5\pi}{2}$ is $\tan \frac{4\pi}{2}$ or 360 degrees

## Trigonometric Identities

* The trigonometric identities are a series of ratios between trig functions; unfortunately, you'll need to memorize them!

$$
\sin^2 \theta + \cos^2 \theta = 1
$$

$$
\tan^2 \theta + 1 = \sec^2 \theta
$$

$$
\cot^2 \theta + 1 = \csc^2 \theta
$$

$$
\tan \theta = \frac{\sin \theta}{\cos \theta}
$$

## Sine vs Cosine Graphs

## Transformations of Sine/Cosine Graphs

<img src="file:///home/songtech/.config/marktext/images/2021-03-27-01-26-05-image.png" title="" alt="" data-align="center">

### Sine/Cosine Graph General Equation

$$
y = A ⋅ sin(k(x + c)) + d
$$

In this equation:

* $A$ is the amplitude, or the absolute value of the maximum of the graph
  
  * You can remember it by recalling that $y= sin x$ is basically $y = 1 sin x, A = 1$ if you forget

* $k$ is distance between two maximums of the graph, which you can find from the period $P$ using the equation $k = 2\pi/P$

* $c$ is how far the graph is shifted to the left or right (it is negative if the graph is shifted to the left, positive when shifted to the right)

* $d$ is how far the graph is shifted up or down

* The maximum of a sinosoid graph is $(d+A)$, and the minimum is $(d+-A)$

* The range of a sinosoid graph is $(d+-A) \leq y \leq (d+A)$, and the range is always $[-\infty, \infty]$

## Solving Problems with Sinusoidal Graphs

* Sinosoidal graphs are often useful (and sometimes required!) in solving word problems

* Example: The Ferris wheel at the Puyallup Fair has a diameter of about 70 feet and takes 3 minutes to complete a full rotation. Passengers board from a platform 10 feet above the ground. Write an equation for a rider’s height above ground over time.

<img src="images/puyallup-ferris-wheel-problem.png" title="" alt="" data-align="center">

* To solve this problem, we need to find the horizontal stretch (amplitude), horizontal shift, vertical stretch (period), and vertical shift
* Amplitude, or $A$, can be found with this formula:

$$
A = \frac{H_{max}-H_{min}}{2}
$$

* To find $H_{max}$, we simply need to find how high from the ground we will be when we get to the top of the Ferris wheel. We know that the Ferris wheel is 10 feet above the ground, and is 70 feet high (because its diameter is 70 feet), so $H_{max} = 70 + 10 = 80\ \mathrm{ft.}$

* To find $H_{min}$, we just need the lowest point of the Ferris wheel. The lowest point on the Ferris wheel is at 0 feet, but the Ferris wheel is also 10 feet above the ground, so its lowest point $H_{min} = 10+ 0 = 10\ \mathrm{ft.}$

* Using the amplitude formula with our values of $H_{max}$ and $H_{min}$, we find that our amplitude is $\frac{80 - 10}{2}=\frac{70}{2}$

* The period is the amount of time we need for a complete revolution, so in this case, it would be 3 minutes, or simply 3

* To find out $k$, we simply use this formula:

$$
k = \frac{2\pi}{P}; P = \frac{2\pi}{k}
$$

* So we know that $k = \frac{2\pi}{3}$

* There is no horizontal shift, but there is a vertical shift $d$ because the Ferris wheel is above the ground, and it is determined with this formula:

$$
d = \frac{H_{max} + H_{min}}{2}
$$

* Using this formula, $d = \frac{80 + 10}{2} = 45$

* Now, we can plug all of those numbers into our formula of $y = A \sin (k(x)) + d$

* Because our graph goes up, but doesn't pass its starting point (see the chart below for details), we won't be writing $y = A \sin (k(x)) + d$; instead, we will be using the inverse cosine graph, so our equation changes to $y = -A \cos (k(x)) + d$

* Then, just plug in the numbers to get $y = -\frac{70}{2}\cos \left(\frac{2\pi}{3}x\right) + 45$

* Graph it out, and you'll get this!

[ADD GRAPH HERE]

### What equation do I use for a sinusoidal graph?

| If the graph goes like...                                                                                      | And it looks like...          | Then its formula is... | And you're looking at a...                                          |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------- | ------------------------------------------------------------------- |
| Starts at $(0,Y_{min})$, and goes up first, but never goes **lower** than its starting point                   | ![](images/cos-graph.png)     | $y = - \cos x$         | Inverse cosine graph (most commonly found in ferris wheel problems) |
| Starts at $(0, Y_{max})$, and goes down first, but never goes **higher** than its starting point               | ![](images/inv-cos-graph.png) | $y = \cos x$           | Cosine graph                                                        |
| Starts at $(0, Y_{midline})$, and goes up first, then goes **both higher and lower** than its starting point   | ![](images/sin-graph.png)     | $y = \sin x$           | Sine graph                                                          |
| Starts at $(0, Y_{midline})$, and goes down first, then goes **both higher and lower** than its starting point | ![](images/inv-sin-graph.png) | $y = -\sin x$          | Inverse sine graph                                                  |