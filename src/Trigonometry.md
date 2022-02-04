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

So we find that $\theta$ is equal to $\pi$ degrees. We now have a new unit to measure degrees: the **radian**. 

So a **radian** can be roughly defined as degrees expressed in units of $\pi$ rather than decimal units. $2 \pi$ radians is a full 360 degrees, $\pi$ radians is 180 degrees, and we can keep dividing so on. Instead of counting from 0 to 360 degrees, in radians, we count from 0 to $2\pi$. And since $\pi$ radians is equal to $180^\circ$, 1 radian is also equal to $\frac{180^\circ}{\pi}$ which resolves to approximately $57.3^\circ$.

### Rules of radians

$$
1 \mathrm{\ radian} = 1^\circ \cdot \left(\frac{\pi}{180}\right)
$$

$$
1^\circ = 1 \mathrm{\ radian} \cdot \left(\frac{\pi}{180}\right)
$$