# AP Physics C Notes

These notes are written for a combined AP Physics C kinematics and E & M (electricity and magnetism) course, with kinematics first and E & M after. Using `Ctrl F` to find relevant sections is highly recommended, as these notes are very long!

## Calculus review

The **derivative** is function that gives the rate of change of a function at each point. You can think of the derivative as a generalization of a function's slope.

The derivative is found by taking two points $(x_1, y_1)$ and $(x_2, y_2)$ on a curve, and moving them towards each other. If the two points are really, really close, then we can _approximate_ the slope with the slope formula:

$$
m \approx \frac{y_2 - y_1}{x_2 - x_1}
$$

As we take the points closer together until the distance apart between the points $a$ approaches zero, then the slope approaches the true slope of the curve. So:

$$
m = \lim_{a\rightarrow 0} \frac{f(x + a) - f(x)}{(x + a) - x}
$$

This is what we call the derivative. Simplifying the terms a bit, we see the derivative in its most typical form:

$$
\frac{df}{dx} = \lim_{a \rightarrow 0} \frac{f(x + a) - f(x)}{a}
$$

For instance, the derivative of $f(x) = x^2$ would be:

$$
\begin{aligned}
\frac{df}{dx} &= \lim_{a \rightarrow 0} \frac{(x + a)^2 - x^2}{a} \\
&= \lim_{a \rightarrow 0}  \frac{x^2 + 2ax + a^2 - x^2}{a} \\
&= 2x
\end{aligned}
$$

The **integral** is the area under a curve. Finding the integral first involves taking the finding a function $I(x)$ that whose derivative is the original function $f(x)$  - this is called finding the **antiderivative**:

$$
I(x) = \int f(x) dx
$$

$$
\frac{dI}{dx} = f(x)
$$

We would then say that the function $I(x)$ is the integral of $f(x)$, and evaluating $I(x)$ between two points, $a$ and $b$, gives the area under the curve.

$$
A = \int_a^b f(x)dx = [I(x)]^{b}_{a} = I(b) - I(a)
$$

Here, we call the process of finding $I(x)$ _integration_, and we call $a$ and $b$ the _bounds of integration_.

In-depth calculus notes will be available on Notli shortly.

### Differentiation

Power rule:

$$
\frac{d(x^n)}{dx} = nx^{n - 1}
$$

Constant multiplier rule:

$$
\frac{d[cf(x)]}{dx} = c \frac{df}{dx}
$$

Sum and difference rule:

$$
\frac{d[f(x) + g(x)]}{dx} = \frac{df}{dx} + \frac{dg}{dx}
$$

$$
\frac{d[f(x) - g(x)]}{dx} = \frac{df}{dx} - \frac{dg}{dx}
$$

### Integration

Fundamental theorem of calculusElectrical

$$
I(x) = \int f(x) dx, \frac{dI}{dx} = f(x)
$$

Power rule:

$$
\int x^n dx = \frac{1}{n + 1} x^{n + 1} + C
$$

Trig rules:

$$
\int \sin (x)dx = -\cos (x) + C
$$

$$
\int \cos (x)dx = \sin (x) + C
$$

The constant multiplier rule and the sum and difference rule is the same for integrals as for derivatives.

## Scalars and vectors

Scalars are **just numbers**. Their value is their **magnitude**. They are almost always positive.

Vectors have both a **magnitude** and **direction**. They can be **positive or negative**.

## Kinematic quantities

**Time** is a scalar denoted by $t$

A **time interval** is a scalar denoted by $\Delta t$, where $\Delta t = t_2 - t_1$

**Distance** is a scalar and is denoted by $s$, where it is the separation between two points $A$ and $B$:

$$
s = |AB|
$$

**Position** is a vector and is denoted by $\vec x$.

**Speed** is a scalar and is denoted by $v$, given by:

$$
v = \frac{ds}{dt}
$$

**Velocity** is a vector and is denoted by $\vec v$, given by:

$$
\vec v = \frac{d\vec x}{dt}
$$

**Displacement** is a vector and is denoted by $\Delta \vec x$, given by:

$$
\Delta \vec x = \vec x_2 - \vec x_1
$$

**Acceleration** is (usually) a vector denoted by $\vec a$, given by:

$$
\vec a = \frac{d\vec v}{dt} = \frac{d^2 \vec x}{dt^2}
$$

## Kinematic formulas

There are 5 kinematic formulas; each is missing one of the kinematic variables. Here, $\vec v_0$ is the initial velocity vector, and $\vec v$ is the final velocity vector.

$$
\vec v = \vec v_0 + \vec at
$$

$$
\Delta \vec x = \vec v_0 t + \frac{1}{2} \vec a t^2
$$

$$
\Delta \vec x = \left(\frac{\vec v_0 + \vec v}{2}\right)t
$$

$$
\vec v^2 = \vec v_0^2 + 2 \vec a \Delta \vec x
$$

$$
\Delta \vec x = \vec v t - \frac{1}{2} \vec a t^2
$$

All falling objects (and by extension, all projectiles) accelerate with a constant acceleration of $-g$, that is, $9.81 \mathrm{\ m/s^2}$

## 2D Projectile Motion

In 2D projectile motion, the velocity vector has two components, an $x$ component and a $y$ component:

$$
\vec v =
\begin{bmatrix}
v_x \\
v_y
\end{bmatrix}
$$

Here, the velocity vector's magnitude can be found with:

$$
\operatorname{magn} (v) = \sqrt{(v_x)^2 + (v_y)^2}
$$

The angle between the vectors can be found with:

$$
\theta = \arctan \left(\frac{\vec v_y}{\vec v_x}\right)
$$

We can also break down the velocity vector into an x-velocity (horizontal) vector and a y-velocity (vertical) vector, where:

$$
\vec v_x = \vec v \cos \theta \\
\vec v_y = \vec v \sin \theta
$$

The horizontal vector always obeys the following rules:

* $\vec v_x = \mathrm{const}$, the horizontal displacement varies linearly with time so motion is uniform along the horizontal

The vertical vector obeys the following rules **under freefall**:

* When $t = 0$, $\vec v_y = 0$

* $\vec v_y$ undergoes a constant **acceleration** of $\vec a_y = -g$ regardless of whether the projectile is rising or falling
  
  * However, remember that $\vec v_y$ still _can_ change, just with constant acceleration

The vertical vector obeys the following rules **if there is an applied vertical force** (like if the projectile is shot upwards):

* When $t = 0$, $\vec v_y$

* If the projectile travels in a parabola, $\vec v_y = 0$ at its peak height

The two components of a vector have no effect on each other. That means two balls launched with the same vertical velocity will hit the ground at the same time, even if one was thrown slightly sideways and one was thrown straight down.

A projectile's falling time is:

* Directly proportional to its vertical displacement $\Delta y$

* Unaffected by its horizontal displacement $\Delta x$

A projectile's velocity vector is:

* Inversely proportional to its vertical displacement $\Delta y$

* Unaffected by its horizontal displacement $\Delta x$

The range of a projectile launched at angle $\theta$ with initial velocity $v_0$ is given by:

$$
R = \frac{(v_0)^2 \sin (2 \theta)}{g}
$$

And its time of flight is given by:

$$
t = \frac{2 v_0 \sin (\theta)}{g}
$$

Thus $R \propto \sin (2\theta)$ and $t \propto \sin (\theta)$.

## 2D Forces

Newton's first law: when forces are balanced, objects stay in uniform motion

$$
\sum \vec F = 0 \rightarrow \Delta \vec v = 0
$$

Newton's second law: a net force applied to an object causes an acceleration in the same direction of the force and proportional to its mass:

$$
\vec F_{\mathrm{net}} = \sum \vec F_i = m \vec a_i
$$

The net force can be separated into a separate $x$ and $y$ component force:

$$
\vec F_{{\mathrm{net}}_x} = \sum \vec F_x = m \vec a_x
$$

$$
\vec F_{{\mathrm{net}}_y} = \sum \vec F_y = m \vec a_y
$$

Newton's third law: an action has an equal and opposite reaction

$$
\vec F_{AB} = - \vec F_{BA}
$$

Several types of forces have specific formulae. These are listed below.

The force of gravity between two objects, $m_1$ and $m_2$, is:

$$
F_g = - G\frac{m_1 m_2}{r^2}
$$

On Earth, the force of gravity is equal to an object's weight, and it can be approximated with:

$$
F_w = -mg, g = 9.81 \mathrm{\ m/s^2}
$$

The frictional force $F_f$ (sometimes notated $F_r$) is given by:

$$
F_f = \mu F_N
$$

Where $F_N$ is the normal force and $\mu$ is the frictional coefficient of the object.

The spring force is given by:

$$
F = kx
$$

Where $k$ is the spring constant.

A force at an angle, like any other 2D vector, can be decomposed with:

$$
\vec F_x = \vec F \cos \theta \\
\vec F_y = \vec F \sin \theta
$$

## Work, Power, Energy

Work is the dot product of the force and the displacement:

$$
W = \vec F \cdot \Delta \vec x = F \Delta x \cos (\theta)
$$

Work can also be defined in terms of energy:

$$
W = \Delta E
$$

Unlike most scalars, work _can_ be negative if the direction of the force and the displacement are opposite. If the force is at an angle, work only takes into account the component of the force parallel to the displacement.

Work and energy are both conserved in a system:

$$
W_i + E_i = W_f + E_f
$$

Gravitational potential energy on earth is given by:

$$
U = mgh = Wh
$$

And kinetic energy is given by:

$$
K = \frac{1}{2} mv^2
$$

The conservation of energy requires that:

$$
U + K = \mathrm{const}
$$

Total mechanical energy is the sum of potential energy and kinetic energy:

$$
E_M = U + K
$$

## Rotation and orbital mechanics

One **degree** is the angle formed by $1/ 360$ of a revolution of a circle.

One **radian** is the angle formed by $1 / 2\pi$  of a revolution of a circle and is roughly $57.3^\circ$.

Angular velocity is typically measured in radians per second (or degrees per second), and is defined as:

$$
\omega = \frac{d\theta}{dt}
$$

Tangential velocity can be found from angular velocity:

$$
\vec V_t = r \omega
$$

Angular acceleration can also be found from angular velocity:

$$
a = \frac{d\omega}{dt}
$$

The angular equations of motion are analogous to their linear versions:

$$
\omega = \omega_0 + at
$$

$$
\theta = \omega_0 t + \frac{1}{2}at^2
$$

$$
\omega^2 = (\omega_0)^2 + 2a \theta
$$

When an object is in circular motion, it experiences an acceleration towards its center of curvature, which keeps it on a curved path. The **centripetal acceleration** is given by:

$$
a_c = \frac{v^2}{r}
$$

And the corresponding **centripetal force** is:

$$
F_c = m a_c = m \frac{v^2}{r}
$$

**Kepler's laws** govern orbital mechanics. The first and second law state that:

* Any orbit is an ellipse with the two orbiting masses at the two foci

* A line joining the two orbiting massses sweeps out equal areas during equal intervals of time

Kepler's 3rd law (here, where $M_s$ is one solar mass):

$$
K = \frac{T^2}{R^3} = \frac{4\pi^2}{GM_s}
$$

Newton synthesized a "4th law", where:

$$
F_g = F_c = M_1 \frac{v^2}{r}
$$

## Momentum

Momentum is a vector:

$$
\vec p = m \vec v
$$

It is conserved immediately before and after collisions:

$$
P_i = P_f
$$

The force-momentum theorem:

$$
\vec F \Delta t = m \Delta \vec v
$$

There are two types of collision:

- **Elastic:** Both PE and KE are conserved

- **Inelastic:** Only PE is conserved

## Electrostatic Force

Objects are **charged** due to an imbalance in their number of protons and electrons. As protons are immobile, the *movement of electrons* causes changes in charge. Objects gaining electrons become negatively-charged, objects losing electrons become positively charged.

As is well-known, like charges attract, and opposing charges repel, causing a force between any two charges placed together. The magnitude of this attraction (or repulsion) can be found from Coulomb's law:

$$
F_e = k\frac{q_1 q_2}{r^2}
$$

The **vector form** of Coulomb's law is found by taking the scalar form and adding a unit vector:

$$
\vec F_e = k\frac{q_1 q_2}{r^2} \hat r
$$

The **electric field** is vector field produced by a charge and extends throughout space, exerting a force on charges. It is given by:

$$
\vec E = \frac{kQ}{r^2} \hat r
$$

Or, equivalently:

$$
\vec F_e = q \vec E
$$

Be sure to remember that the $q$ here is of the charge _creating_ the electric field.

The force vectors extend outwards for positive charges, and inwards for negative charges:

![](https://cdn.kastatic.org/ka-perseus-images/6db3d4851432e3cded684cd6748f779fea347f52.svg)

When the electric field is created by a dipole or any case with more than one charge, we must sum the individual electric fields from each charge:

$$
\vec E = \sum_i \frac{kQ_i}{r_i} \hat r
$$

## Electrical Potential Energy

The **electrical potential energy (EPE)** is the energy stored in the *position* of charges, given by:

$$
\Delta U_E = \frac{q_1 q_2}{r}
$$

This is because the EPE can be thought of as the negative work done by the electrostatic force to _move_ a charge to its position. That is, the EPE is the energy that is needed to move a charge _against_ an electric field:

$$
W = -U_E
$$

$$
U_E = -\int \vec F\  dr
$$

We see if we evaluate the previous integral, that:

$$
U_E = - k q_1 q_2 \int \frac{1}{r^2} dr = - k q_1 q_2 \left(-\frac{1}{r}\right) = k\frac{q_1 q_2}{r}
$$

The EPE only exists in a system, **never** for a single isolated charge.

If the two charges are opposite charges, then the EPE is **always** negative (except at infinity, where it is zero). The EPE becomes more and more negative the closer the two charges are brought:

![](https://i2.paste.pics/9aa274394d559d5ac71ac908922a5dcd.png)

Meanwhile, if the charges are like charges, then the EPE is **always** positive (again, except at infinity). The EPE becomes more and more positive the closer the two charges are brought:

![](https://gcdnb.pbrd.co/images/kpBH2J2ZJvZS.png?o=1)

## Electrical Potential & Voltage

The **electrical potential** can be thought of as the "electrical pressure" at a certain location in space.

**Voltage** is the _difference_ in electrical potential between two points - sort of like the "electrical pressure difference" between 2 points.

Just like typical pressure is associated with potential energy, electrical potential is associated with electrical potential energy.

And just like a _difference_ in pressure can be used to do work, an electrical potential _difference_ also has the _potential_ to do work. 

Charges placed in a region of high electrical potential in an electric field naturally move towards a lower electrical potential. Thus, the electrical field does work on the charge. 

Given that the formula for work is:

$$
W = \int \limits_a^b \vec F(x) \cdot \vec{dx}
$$

We can substitute to find:

$$
W = \int \limits_a^b q \vec E \cdot \vec{dx}
$$

Given that:

$$
\Delta U_E = -W
$$

We have:

$$
\frac{\Delta U_E}{q} = -\int \limits_a^b \vec E \cdot \vec{dx}
$$


And given:

$$
\frac{\Delta U_E}{q} = V_b - V_a = \Delta V
$$

We arrive at the voltage equation:

$$
\Delta v = -\int \limits_a^b \vec E \cdot \vec{dx}
$$

Rewritten in more general form, the relationship between voltage and the electrical field can be given as two equations:

$$
\Delta V = -\int \vec E\  dr
$$

$$
E_x = -\frac{dV}{dx}
$$

The potential is positive near the positive charge, and negative near the negative charge. The potential field lines are also perpendicular to the electric field lines, spreading out in concentric loops around the charges:

![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/VFPt_charges_plus_minus_potential%2Bcontour.svg/1280px-VFPt_charges_plus_minus_potential%2Bcontour.svg.png)

The electric field always points towards the area of lower potential; tightly spaced **potential** lines are where the electric field has the greatest magnitude.

The force on a positive charge is along the direction of the electric field. The force on a negative charge is opposite the direction of the electric field.

Additionally, it is helpful to remember these general facts about the electrical potential:

* If there is a positive charge, the potential would increase closer to the charge

* If there is a negative charge, the potential would decrease closer to the charge

* For any equipotential surface, the potential would be zero

* If the electric potential is **constant**, then the electric field is zero, and vice-versa

* However, if the electric potential is zero, the electric field isn't necessarily zero!

## Constant Electic Fields

In a **constant** electric field (which includes if $E = 0$), the electric potential is given by:

$$
\Delta V = -Ed
$$

## Finding the electrical potential to accelerate a charge to a certain speed

Recall the conservation of energy:

$$
U_i + K_i = U_f + K_f
$$

And recall also that:

$$
V = \frac{U_E}{q}
$$

So we can rearrange the equation to find that:

$$
U_E = qV
$$

From the conservation law, we find that:

$$
U_i = K_f
$$

$$
\frac{1}{2} mv^2 = qV
$$

$$
\frac{1}{2q} mv^2 = V
$$

The rest should be fairly straightforward to solve.

## Finding the work done by an external force to bring charges together

In these situations, it helps to move the charges in one by a time. For instance, suppose you had three charges, all of charge $+Q$, in a triangle, where the sides are length $s$. Just start with one charge so it is easiest:

![](https://gcdnb.pbrd.co/images/74XqYrPLt4z8.png?o=1)

The work with a single charge is always zero, because remember that work is the change in EPE, which always needs two objects. So $W_1 = 0$.

![](https://gcdnb.pbrd.co/images/svdz5oQd0K9G.png?o=1)

After adding a second charge, the work is now a nonzero quantity. As the charges are opposite, the work is positive - remember the EPE curves. We can find it with:

$$
W_2 = k \frac{Q^2}{s}
$$

![](https://gcdnb.pbrd.co/images/ml8pPV0GrnEs.png?o=1)

The third charge is also positive work, but there are two charges we must consider for the work. Thus:

$$
W_3 = k \frac{Q^2}{s} + k \frac{Q^2}{s} = 2\left(\frac{kQ^2}{s}\right)
$$

And the final charge would be the sum of the work:

$$
W_T = \sum_{i=1}^3 W_i = W_1 + W_2 + W_3
$$

The rest should be fairly straightforward to solve.

## Finding the electric field from the electrical potential (or vice-versa)

Recall that:

$$
E_x = - \frac{dV}{dx}
$$

So, just substitute in the electric field or potential (whichever you're given), and integrate (if you're trying to find the potential) or differentiate (if you're trying to find the electric field), the rest should be straightforward.

## Brute-force derivation for the electric field of a rod

![](https://gcdnb.pbrd.co/images/6TnH3HFAGME4.png?o=1)

We start with the general expression of the electric field:

$$
\vec E = \int dE
$$

We substitute in the differentials into the general formula for the electric field:

$$
E = \frac{kq}{r^2}
$$

$$
dE = \frac{kdq}{r^2}
$$

Using the uniform charge density equation (where here $r = \ell$):

$$
\frac{dq}{dr} = \frac{Q}{L}
$$

$$
dq = \frac{Q}{L} dr
$$

Substituting this into the electric field equation:

$$
\vec E = \int \frac{kdq}{r^2} \frac{Q}{L} dr
$$

$$
\vec E = k \frac{Q}{L} \int \frac{1}{r^2} dr
$$

Rewriting with exponents:

$$
\vec E = k \frac{Q}{L} \int r^{-2} dr
$$

Adding limits of integration:

$$
\vec E = k \frac{Q}{L} \int_a^{a + L} r^{-2} dr
$$

Using the power rule for integrals:

$$
\vec E = k \frac{Q}{L} \left[-\frac{1}{r}\right]_a^{a + L}
$$

With simplification and solving:

$$
\vec E = \frac{kQ}{a\left(a+L\right)}
$$

## Brute-force derivation for the electric field of a ring

![](https://i.ibb.co/tLXtcb0/Screenshot-20221006-205835-1.png)

Again, we start with the general expression of the electric field:

$$
\vec E = \int dE
$$

And we find $dE$:

$$
E = k \frac{q}{r^2}
$$

$$
dE = k \frac{dq}{r^2}
$$

The only difference, however, is that we only want the x-component of the electric field, as the y-components of the electric field cancel out to zero. So:

$$
dE_x = k \frac{dq}{r^2} \cos \theta
$$

Substituting in:

$$
\vec E = \int k \frac{dq}{r^2} \cos \theta
$$

However, we would rather give the electric field in terms of $x$ and $R$ rather than $r$. To do this, recall that:

$$
r^2 = x^2 + R^2
$$

Thus, substituting, we get:

$$
\vec E = \int k \frac{dq \cos \theta}{x^2 + R^2}
$$

And rearranging:

$$
\vec E = \frac{k \cos \theta}{x^2 + R^2} \int dq
$$

We know that:

$$
Q = \int dq
$$

Therefore:

$$
\vec E = Q\frac{k \cos \theta}{x^2 + R^2}
$$

## Brute-force derivation for the electric field of a semicircle

![](https://gcdnb.pbrd.co/images/KJMlNV8ud39K.png?o=1)

As always, we start with the general expression of the electric field:

$$
\vec E = \int dE
$$

And we find dE:

$$
E = k \frac{q}{r^2}
$$

$$
dE = k \frac{dq}{r^2}
$$

Here the radius is constant, thus:

$$
dE = k \frac{dq}{R^2}
$$

Once again, though, we just want the x-component of the electric field, so:

$$
dE = k \frac{dq}{R^2} \cos \theta
$$

We find $dq$ and substitute that in (here $\pi$ is because the charges are distributed over $\pi$ radians):

$$
\frac{dq}{d\theta} = \frac{Q}{\pi}
$$

$$
dq = \frac{Q}{\pi} d\theta
$$

$$
dE = k \frac{1}{R^2}\frac{Q}{\pi} d\theta \cos \theta
$$

We now simply need to solve the integral:

$$
\vec E = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}
k \frac{1}{r^2}\frac{Q}{\pi} d\theta \cos \theta
$$

$$
\vec E = \frac{k Q}{R^2 \pi}
\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}
\cos \theta \  d \theta
$$

$$
\vec E = \frac{k Q}{R^2 \pi}
\left[\sin \theta \right]_{-\frac{\pi}{2}}^{\frac{\pi}{2}}
$$

$$
\vec E = \frac{k Q}{R^2 \pi} (2)
$$

Therefore:

$$
\vec E = \frac{2kQ}{R^2 \pi}
$$

## Gauss's Law

![](https://i.ibb.co/82Z9XQZ/Screenshot-20221006-220159.png)

Gauss's law describes the electric flux flowing through a surface enclosing a charge:

$$
\Phi_E = \oint_{\mathcal{S}} \vec{E} \cdot d \vec{A}
= \frac{Q_{\mathrm{enc}}}{\epsilon_0}
$$

The electric flux is only present when the electric field vector is non-parallel relative to the surface. The sign of the electric flux is the same as the sign of the charge.

### Electric flux for sphere

**Problem:**

What is the electric flux through a sphere of radius 4m that contains a +50 microcoulomb charge at its center?

**Solution:**

We know that the flux is equal to the surface integral of the sphere, and at every point in the sphere, the electric field vector is perpendicular to the area of the surface. The surface area of a sphere is given by:

$$
A = 4 \pi r^2
$$

Therefore:

$$
E \cdot A = E (4 \pi r^2) = \frac{Q_{\mathrm{enc}}}{\epsilon_0}
$$

$$
\frac{kq}{r^2} (4 \pi r^2) = \frac{Q_{\mathrm{enc}}}{\epsilon_0}
$$

The terms cancel, so we are left with:

$$
\Phi_E = \frac{Q}{\epsilon_0} = 5.65 \times 10^6
\mathrm{\ N\cdot m^2}
$$

## Charge density equations

Linear charge density (for lines/rods):

$$
\lambda_q = \frac{dQ}{d\ell}
$$

Surface charge density (for 2D surfaces):

$$
\sigma_q = \frac{dQ}{dA}
$$

Volume charge density (for 3D volumes):

$$
\rho_q = \frac{dQ}{dV}
$$

## Gauss's law with a rod of charge

**Problem:**

Find the electric field produced by a rod of charge with charge density $\lambda$ at point $P$, assuming no edge effects.

**Solution:**

![](https://gcdnb.pbrd.co/images/ynDHpCkLb1AI.png?o=1)

Here, we use a cylinder as our Gaussian surface to surround our rod of charge. As we are told to ignore edge effects, we will simply use the curved surface of the cylinder to calculate the flux, which has a surface area of $2\pi r \ell$:

$$
\oint_{\mathcal{S}} \vec{E} \cdot d \vec{A} = E(2\pi r \ell)
$$

$$
E(2\pi r\ell) = \frac{\lambda \ell}{\epsilon_0}
$$

$$
E = \frac{\lambda}{2\pi \epsilon_0}
$$

## Gauss's law with an infinite sheet of charge

**Problem:**

Find the electric field produced by a sheet of charge with a charge density $\kappa$.

**Solution:**

![](https://gcdnb.pbrd.co/images/2lWobEPnQUcs.png?o=1)

To do so, we will use a cylinder - a Gaussian surface - to apply Gauss's law. Note that as the electric field vectors are **parallel** for the entire curved surface of the cylinder, the electric flux there is zero. That means the left-hand side of Gauss's law evaluates to just the electric field times the top and bottom of the cylinder, or:

$$
\oint_{\mathcal{S}} \vec{E} \cdot d \vec{A} = E(2A)
$$

Where $A$ is the area of the cylinder ends, which are circles, giving us:

$$
A = \pi r^2
$$

Now, we can add in the right-hand side as well:

$$
E (2A) = \frac{Q}{\epsilon_0}
$$

The charge can be found from the given charge density $\kappa$:

$$
\sigma_q = \frac{dQ}{dA} = \kappa
$$

$$
dQ = \kappa dA
$$

Since the sheet has uniform charge, we can take the integral of both sides, giving us:

$$
Q = \kappa A
$$

Substituting back in:

$$
E(2A) = \frac{\kappa A}{\epsilon_0}
$$

$$
E = \frac{\kappa}{2\epsilon_0} = 3390 \mathrm{\ N/C}
$$

## Gauss's law with a block of charge

**Problem:**

Find the electric field at point $P$ produced by a block of charge with uniform charge density $\rho$.

**Solution:**

![](https://gcdnb.pbrd.co/images/4AJsebxpj0H1.png?o=1)

Once again, we use a cylinder to apply Gauss's law:

$$
\oint_{\mathcal{S}} \vec{E} \cdot d \vec{A} = E(2A)
$$

$$
E(2A) = \frac{Q}{\epsilon_0}
$$

As we are told this is a case of constant charge density, we can find the enclosed charge like so:

$$
\rho = \frac{dQ}{dV} = \frac{Q}{V}
$$

$$
Q = \rho V
$$

$$
E(2A) = \frac{\rho V}{\epsilon_0}
$$

Therefore, substituting in the values, we have:

$$
V = 2Az
$$

$$
E(2A) = \frac{\rho (2Az)}{\epsilon_0}
$$

$$
E = \frac{\rho z}{\epsilon_0}
$$

## Conductors and insulators

**Conductors** are materials that permit the flow of charge through them. **Insulators**, (also called dielectrics) meanwhile, do not. Several rules about conductors are very handy:

* There is **no** net electric field inside of a conductor; conductors shield everything they enclose from all external electric fields

* Any excess charge on a conductor _always_ resides on its outer surface

* The entire conductor is equipotential

* Any two connected conductors have the **same** electrical potential

* The electric field outside of a conductor is given by:

$$
E = \frac{\sigma_{\mathrm{surface}}}{\epsilon_0} = \frac{Q}{A \epsilon_0}
$$

## Capacitance

**Capacitance** is the ability for an object to hold a charge. It is given by:

$$
C = \frac{Q}{|\Delta V|}
$$

The unit for capacitance is the ferret, where one ferret is equivalent to one coulomb per volt 

## Capacitance for a parallel plate capacitor

Let us presume we have two parallel plates of opposite charge    , a distance $d$ apart.

We use Gauss's law:

$$
\oint_s \vec E \cdot \vec {dA} = \frac{Q_\mathrm{enc}}{\epsilon_0}
$$

Recall that the electric field using Gauss's law for _one_ plate can be found like so:

$$
Q_\mathrm{enc} = \sigma A
$$

$$
E(2A) = \frac{Q_\mathrm{enc}}{\epsilon_0}
$$

$$
E = \frac{\sigma}{2 \epsilon_0}
$$

Thus, for the parallel plates, we have:

$$
E = 2\frac{\sigma}{2 \epsilon_0} = \frac{\sigma}{\epsilon_0} = \frac{Q}{A \epsilon_0}
$$

From there, we can find the voltage from the voltage equation:

$$
\Delta V = - \int \vec E \cdot dx
$$

$$
\Delta V = - \int_0^d \frac{Q}{A\epsilon_0} dx
$$

$$
\Delta V = - \frac{Q}{A\epsilon_0} \int_0^d  dx
$$

The integral evaluates to:

$$
\Delta V = -\frac{Q}{A\epsilon_0} (d)
$$

$$
\Delta V = -\frac{Qd}{A \epsilon_0}
$$

Thus, using the capacitance equation, we have:

$$
C = \frac{Q}{|\Delta V|} = \frac{A\epsilon_0}{d}
$$

## Capacitance for a parallel plate with a dielectric

For a dielectric,  we use a modified form of Gauss's law with a dielectric constant $k$ dependent on material:

$$
\oint_s \vec E \cdot \vec {dA} = \frac{Q_\mathrm{enc}}{k\epsilon_0}
$$

So the final capacitance for the parallel plate capacitor would instead be:

$$
C = \frac{Q}{|\Delta V|} = \frac{kA\epsilon_0}{d}
$$

## Capacitance for a spherical capacitor

For the spherical capacitor, we once again use Gauss's law (the normal, non-dielectric variant):

$$
\oint_s \vec E \cdot \vec {dA} = \frac{Q_\mathrm{enc}}{\epsilon_0}
$$

From which we find:

$$
E(4\pi r^2) = \frac{Q}{k \epsilon_0}
$$

$$
E = \frac{Q}{4\pi \epsilon_0 r^2}
$$

In integrating for the voltage, we set the bounds of integration from $a$ (that is, the inner sphere's radius) to $b$ (that is, the outer sphere's radius):

$$
\Delta V = -\int_{a}^{b} \frac{Q}{4\pi r^2  \epsilon_0} dr
$$

$$
\Delta V = -\frac{Q}{4\pi  \epsilon_0} \int_{a}^{b} r^{-2}dr
$$

$$
\Delta V = \frac{Q}{4\pi  \epsilon_0}
\left[\frac{1}{a} - \frac{1}{b}\right]
$$

$$
C = \frac{Q}{|\Delta V|} = \frac{4\pi \epsilon_0}{\left(\frac{1}{a} - \frac{1}{b}\right)}
$$

## Capacitance for a cylindrical capacitor

Once again, we use Gauss's law (the normal, non-dielectric variant):

$$
\oint_s \vec E \cdot \vec {dA} = \frac{Q_\mathrm{enc}}{\epsilon_0}
$$

From which we find the expression for the electric field:

$$
E  = \frac{\lambda}{2\pi \epsilon_0 r}
$$

Integrating from the inner cylinder surface ($a$) to the outer cylinder surface ($b$) gives the voltage:

$$
\Delta V = -\int_a^b \frac{\lambda}{2\pi \epsilon_0 r} dr
$$

$$
\Delta V = \frac{\lambda}{2\pi \epsilon_0} \ln\left(\frac{b}{a}\right)
$$

Writing $\lambda$ in terms of $L$ would give us the voltage as:

$$
\Delta V = \frac{Q}{2\pi L \epsilon_0} \ln\left(\frac{b}{a}\right)
$$

Thus, the capacitance would be:

$$
C = \frac{Q}{|\Delta V|} =\frac{2\pi L \epsilon_0}{
\ln \left(\frac{b}{a}\right)}
$$

And the capacitance per unit length would be:

$$
\frac{C}{L} = \frac{2\pi \epsilon_0}{\ln \left(\frac{b}{a}\right)}
$$

## Capacitance for Circuits

Electric circuits often contain combinations of capacitors. They come in two main types of arrangements:

* **Parallel circuits**, where all capacitors share the same voltage

* **Series circuits**, where all the capacitors share the same charge

Capacitors placed together in a circuit can be summed together to find the **total capacitance**.

Total capacitance in a **parallel circuit** is given by:

$$
C_T = \sum_i\frac{Q_i}{ \Delta V} =C_1 + C_2 + \dots + C_n
$$

Total capacitance in a **series circuit** is given by:

$$
C_T = \frac{1}{\sum_i\frac{ \Delta V}{Q_i}} = \frac{1}{\frac{1}{C_1} + \frac{1}{ C_2} + \dots + \frac{1}{C_n}}
$$

## Singular Parallel and Series Circuits

Consider a parallel circuit with two parallel plate capacitors. Then, the total capacitance would be:

$$
C_T  = \frac{Q_1}{V_1} + \frac{Q_1}{V_2}, \quad V_1 = V_2
$$

We can then find the voltage as follows:

$$
V = \frac{Q_1}{C_1} = \frac{Q_2}{C_2}
$$

And from there, computer the total capacitance.

Now, consider a series circuit with two parallel plate capacitors. Then, the total capacitance would be:

$$
C_T = \frac{1}{\frac{Q_1}{V_1} + \frac{Q_1}{V_2}}, \quad Q_1 = Q_2
$$

We can then find the charge as follows:

$$
Q = C_1 V_1 = C_2 V_2
$$

And likewise compute the total capacitance.

## Mixed Parallel and Series Circuits

## Capacitance Work

Two metal objects have net charges of $+Q$  and $-Q$, and have a potential difference $V$. 

The capacitance of the system would be equal to:

$$
C = \frac{|Q|}{V}
$$

## Electrical Potential Energy from Capacitance

$$
U_C = \frac{1}{2}C V^2
$$
