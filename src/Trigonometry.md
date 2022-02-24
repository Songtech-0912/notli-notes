# Trigonometry

## Angles and Measures

* An **angle** is the space between two rays that share a common endpoint
* The point where the two rays of an angle meet is called the **vertex**
* The starting side of an angle is its **initial side**, and the ending side of an angle is its **terminal side**
* Positive angles go counterclockwise from the initial side, negative angles go clockwise from the initial side
* An angle is in **standard position** if its vertex is located at the origin and one ray is on the positive x-axis

### Coterminal Angles

* **Coterminal angles** start from standard position and share the same terminal side
* Two angles that are coterminal satisfy $\angle \beta = \angle \alpha \pm 360^\circ x$
	* E.g. they can add up to $0^\circ$, $360^\circ$, $720^\circ$, $1080^\circ$ (or negative equivalents, such as $-360\circ$, $-720^\circ$, $-1080^\circ$, etc.)
* To find the coterminal angle, either add or subtract $360x^\circ$ from an angle (both work so long as $x$ is a whole number)
* $x$ here can be any whole number, so you can use $x=1$ ($360^\circ$), $x = 2$ ($720^\circ$)
	* E.g. Let's try to find the coterminal angles of $-520^\circ$
	* To find a positive coterminal angle $\theta_+$, then $\theta_+ = (-520^\circ) + 360^\circ x$
	* To get a multiple of $360^\circ$ that will make the final coterminal angle positive, we need to set $x \geq 2$
	* If we set $x = 2$, we get a result of $200^\circ$, which is our **positive coterminal angle**
	* Let's also find a negative coterminal angle
	* To find a negative coterminal angle $\theta_-$, then $\theta_- = (-520^\circ - 360^\circ x$)
	* Since $-520^\circ$ is already negative, let's just set $x = 1$
	* If we set $x = 1$, we get a result of $-880^\circ$, which is our **negative coterminal angle**

### Complementary and Supplementary Angles

* **Complementary angles** are two angles that add up to 90 degrees
* A complementary angle _must_ be positive
	* This is why no angle above $90^\circ$ has a complement
* **Supplementary angles** are two angles that add up to 180 degrees
* A supplementary angle _must_ also be positive
	* This is why no angle above $180^\circ$ has a complement

### Decimal Degrees

* Historically, fractional parts of degrees were expressed in _minutes_ and _seconds_, e.g. $\theta = 64^\circ\ 32'\ 47''$ instead of decimal degrees (e.g. $\theta = 64.2345^\circ$) - this is called the **DMS system**
	* One minute, represented with the prime (\`) symbol, is defined as $\left(\frac{1}{60} \cdot 1^\circ\right)$
	* One second, represented with the double prime (\`\`) symbol, is defined as $\left(\frac{1}{3600} \cdot 1^\circ\right)$
* To convert from DMS to degrees we use:

$$
\mathrm{Degrees} = \mathrm{DMS\ Degrees} + \frac{\mathrm{DMS\ Minutes}}{60} + \frac{\mathrm{DMS\ Seconds}}{3600}
$$

* To convert from degrees to DMS we use:

$$
\mathrm{DMS\ Degrees} = \mathrm{Degrees} + \frac{\mathrm{Decimal\ part\ of\ degrees}}{60} + \frac{\mathrm{Decimal\ part\ of\ (decimal \ part\ of\ degrees)}}{60}
$$

## Radians

![](https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/2332/2018/01/11202419/CNX_Calc_Figure_01_03_001.jpg)


Take a look at this special circle. What do you notice?

Well, firstly, the radius is 1. So we call the circle a **unit circle**.

Second, the radius is actually part of a very special arc. We know that the radius is equal to one, which means the circle's circumference is $\pi (2 \cdot 1)$ which  is $2\pi$. Meanwhile, the arc length ($s$), radius (1), and central angle ($\theta$) are related like this:

$$
\theta = \frac{s}{r}
$$

In our case, since $r = 1$, we simplify to:

$$
\theta = s
$$

Wow! So the arc length is _also_ the measure of the angle? How could this be possible?

It makes more sense if we start thinking of angles as units of $\pi$.  Let's imagine that the central angle $\theta = 180^\circ$.  If that was the case, the arc would be a semicircle, like this:

![](https://www.mathopenref.com/images/circles/semicircle.png)

And since the arc length $s$ of a semicircle is exactly half of the circumference of a full circle, we can say that:

$$
s = \frac{1}{2}C = \frac{1}{2}\pi 2r = \pi r
$$

Based on our formula $\theta = s$ (because our radius is 1), we can also find that:

$$
\theta = s = \pi r
$$

And again, since we know that $r = 1$, this simplifies to:

$$
\theta = (\pi \cdot 1) = \pi
$$

So we find that $\theta$ is equal to $\pi$ degrees. We now have a new unit to measure angles: the **radian**. 

We also know that a **radian** can be roughly defined as degrees expressed in units of $\pi$ rather than decimal units. $2 \pi$ radians is a full 360 degrees, $\pi$ radians is 180 degrees, and we can keep dividing so on. Instead of counting from 0 to 360 degrees, in radians, we count from 0 to $2\pi$. And since $\pi$ radians is equal to $180^\circ$, 1 radian is also equal to $\frac{180^\circ}{\pi}$ which resolves to approximately $57.3^\circ$.

### Rules of radians

Radians are a **unit of measurement** for angles. We can express angles in:

* $\pi$ form, where we state radians in terms of $\pi$ (e.g. $2\pi \mathrm{\ rad.} = 360^\circ$)
* Exact form, where we state radians in terms of decimal units (e.g. $1.3\mathrm{\ rad.}$)

$$
1 \mathrm{\ radian} = 1^\circ \cdot \left(\frac{\pi}{180}\right)
$$

$$
1^\circ = 1 \mathrm{\ radian} \cdot \left(\frac{\pi}{180}\right)
$$

$$
\pi \mathrm{\ rad.} = 180^\circ
$$

| Radians ($\pi$) | Radians (exact) | Degrees |
|---------|----------|------|
| 0 radians | 0.0 radians | 0 degrees |
| $\frac{\pi}{2}$ radians | ~1.57 radians | 90 degrees |
| $\pi$ radians | ~3.14 radians | 180 degrees |
| $\frac{3\pi}{2}$ radians | ~4.7 radians | 270 degrees |
| $2\pi$ radians | ~6.28 radians | 360 degrees |

### Radian Measures

Illustration of radian measures by quadrant

Illustration of the 6 radian lengths


### Counting in Radians

Imagine you were given an angle $\theta = \frac{9\pi}{4}\mathrm{\ rad.}$ How would you be able to draw it?

Well, we know that $\frac{9\pi}{4}$ is just $\frac{\pi}{4}$ repeated 9 times. And $\frac{\pi}{4}$ is just a 45 degree angle. So let's try counting in 45 degrees around the graph:

(Add gif of counting in 45 degrees 9 times to get to the final position)

### Drawing radians in Standard Position

We can use the rules of radians and coterminal angles to help us draw radians.

For instance, let's try to draw $\theta = \frac{5\pi}{2}$. We know that $\frac{5\pi}{2}$ is equal to $\frac{4\pi}{2} + \frac{\pi}{2}$, so:

$$
\theta = 2\pi + \frac{\pi}{2}
$$

So, we'll need to rotate 360 degrees once (because $2\pi$ is one full revolution), and then we need to rotate by 1/4 of a revolution (because $\frac{\pi}{2}$ is 90 degrees)

Now for a harder example. Let's try to draw 4 radians on the graph.

### Finding coterminal angles for radians

Add 2 pi, minus 2 pi...

### Arc length

If we're using degrees, the arc length $s$ is given by:

$$
s = \frac{\theta}{360^\circ} \cdot 2 \pi r
$$

If we're using radians, the arc length is given by:

$$
s = r \theta
$$

where $\theta$ is in radians.

### Linear and angular speeds

**Linear speed** is distance travelled over time elapsed. We measure it in units of _distance_ per _time interval_ (e.g. meters per second)

Linear speed is given by:

$$
v = \frac{\mathrm{arc\ length}}{\mathrm{time}} = \frac{s}{t}
$$

A **revolution** is the fraction of a circumference travelled over time elapsed. We often abbreviate this as RPM (revolutions per minute) or RPS (revolutions per second). To get from linear speed to revolutions, we use:

$$
\mathrm{revolutions} = \frac{\mathrm{circumference}}{v}
$$

**Angular speed** is the angle displaced over time elapsed. We measure it in units of _angles_ per _time interval_ (e.g. degrees per second)

Angular speed is given by:

$$
\omega = \frac{v}{r} = \frac{\mathrm{linear\ speed}}{r}
$$

So the relationship between linear speed and angular speed is:

$$
v = \omega r
$$