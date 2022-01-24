# Momentum

Momentum is "the stuff that makes things go". In the past, it was referred to as _patere_ (Latin for "to go"). Momentum, $P$, is represented in the momentum equation:

$$
P = mv
$$

Both _P_ and _v_ are vectors (they have direction and magnitude) that have the same direction. So momentum can be both positive and negative. Its units are typically either in $\mathrm{kg}\cdot m/s$ or newton-seconds ($ns$) - you can use either, it doesn't matter.

Note that the direction of momentum is _always_ the same as the direction of the object's velocity. So if an object is moving to the north, then its momentum is in the north direction as well.

## Conservation of Momentum

Momentum cannot be created nor destroyed; it can only be **transferred** between objects.

If forces on a system of objects (e.g. a truck, a plane, a person) are balanced, momentum is said to be **conserved** - "conserved" means "does not change".

This is the **law of the conservation of momentum**:  the sum of the momentum of two objects, $A$ and $B$, before the collision, is equal to the sum of the momentum of the two objects after the collision. In equation form, we say that:

$$
P_{A_i} + P_{B_i} = P_{A_f} + P_{B_f}
$$

Where $P_{A_i}$ and $P_{B_i}$ are momentum of $A$ and $B$ respectively before the collision ($i$ stands for 'initial'), and $P_{A_f}$ and $P_{B_f}$ are the momentum of $A$ and $B$ after the collision ($f$ stands for 'final').

If we already know the total initial momentum, and the total final momentum, we can simplify this equation to:

$$
P_i = P_F
$$

### Proving the conservation of momentum

You will often be given experimental data and asked whether the evidence supports the conservation of momentum. For example, this is a data table you might get:

|  Momentum of what?   | Before collision | After collision | Momentum change |
|---------|-----------|----------|-----------|
| Momentum of A | 30 | 15 | -15 |
| Momentum of B | 0 | 15 | +15 |
| Total momentum | 30 | 30 | 0 |

If we take the values from the table, and substitute them into the conservation of momentum formula, we get:

$$
30\mathrm{\ ns} + 0\mathrm{\ ns} = 15\mathrm{\ ns}  + 15 \mathrm{\ ns}
$$

Which simplifies to:

$$
30 \mathrm{\ ns} = 30 \mathrm{\ ns}
$$

Which is correct! So we can say that our experimental evidence **provides evidence to support the law of the conservation of momentum**. So long as the left and right hand sides of the equation are equal, the experimental evidence will support the law of the conservation of momentum.

### Factoring in experimental error

In practice though, real experimental data is rarely as perfect as our table. So instead of saying that the left and right-hand sides of the equation must be _equal_, we can approximate by saying that the left and right-hand sides are within 5% of each other.

In mathematical terms:

$$
P_i > P_f \pm 5\%
$$

Let's see how this works with real data. Suppose we know that the total initial momentum ($P_i$) is $0.22\mathrm{\ ns}$, and the total final momentum $(P_f)$ is $0.28\mathrm{\ ns}$.

Based on our equation, this data would only prove the conservation of momentum if $P_i$ is within 5% of $P_f$. In equation form, that would be:

$$
0.22\mathrm{\ ns} \geq 0.28\mathrm{\ ns} \pm 5\%
$$

Is this actually true though?

Well, $P_f \pm 5\%$ is $P_f \cdot 1.05$ at most, and $P_i \cdot 0.95$ at least. So, substituting those values into the equation. Let's try the minimum value ($P_f -5\%$) first:

$$
0.22 \mathrm{\ ns} \geq 0.28\mathrm{\ ns} \cdot 0.95
$$

$$
0.22 \mathrm{\ ns} \geq 0.266\mathrm{\ ns}
$$

$$
0.22 \mathrm{\ ns} \ngeq 0.266\mathrm{\ ns}
$$

As the equation obviously is false, we know that $P_f$ isn't within 5% under $P_i$. Let's now try the maximum value $(P_f + 5\%)$:

$$
0.22 \mathrm{\ ns} \geq 0.28\mathrm{\ ns} \cdot 1.05
$$

$$
0.22 \mathrm{\ ns} \geq 0.231\mathrm{\ ns}
$$

$$
0.22 \mathrm{\ ns} \ngeq 0.231\mathrm{\ ns}
$$

That equation is obviously false as well. So we know that $P_i \ngeq P_f \pm 5\%$, and our experimental figures **don't support the law of the conservation of momentum**.

### Why does conservation of momentum matter?

Conserved qualities stay the same, so they let us predict the future. Knowing that momentum is conserved helps us predict all sorts of phenomena, from how hurricanes form to whether an asteroid will hit the Earth.

## Impulse

The **impulse** is the product of a force acting across a certain time interval. It is represented with the equation:

$$
J = F_{net}\Delta t
$$

Here, $J$ is the impulse.

The impulse on an object is the **same as the change in momentum**. So we can say that:

$$
J = \Delta P = F_{net}\Delta t
$$

And, since the change in momentum is the same as the difference between the initial and final momenta, then it is also true that:

$$
J = P_{final} - P_{initial}
$$

The conservation of momentum means that changes of momentum must be equal and opposite:

$$
\Delta P_A = -\Delta P_B
$$

If we think of just the forces between A and B, that equation can be rephrased as:

$$
F_{A\rightarrow B} = -F_{B\rightarrow A}
$$

Which is **Newton's Third Law of Motion**: if two objects exert forces on each other, these forces are equal and opposite.

In any interaction between 2 objects, therefore, changes in momentum have to be paired. So, forces always occur in pairs.

### Finding Impulse

The impulse acting on an object is equal to the area under a force v. time graph. But, because impulse is also the difference between final and initial momentum, you can also find impulse by subtracting initial momentum from final momentum.

## Solving Questions involving Momentum

### Example 1

Two cars, a red car with a mass of 1200 kg and a blue car with a mass of 1500 kg, are involved in a head-on collision.  The red car was moving at +13 m/s, and the blue car was moving at -17 m/s before the collision.  After the collision, the blue car is moving at -2.5 m/s.  Assuming there were no external forces acting on the system of the two cars, what is the velocity of the red car after the collision?

#### Solution

To solve the question, it's helpful to organize this information into a table, like this:

|    | Mass | Initial velocity | Final velocity | Initial momentum | Final momentum |
|-----|---|---|---|---|---|
| Red car | | | | || 
| Blue car | | | | | |
| Total | | | | | |

Let's first put in the information we know. We'll get this:

|    | Mass | Initial velocity | Final velocity | Initial momentum | Final momentum |
|-----|---|---|---|---|---|
| Red car | 1200 kg | +13 m/s | ?| ||
| Blue car | 1500 kg | -17 m/s | -2.5 m/s | ||
| Total | | | | ||

Since we know that momentum is just the product of mass and velocity, then the initial momentum is **mass times initial velocity**, and the final momentum is **mass times final velocity**. Result:

|    | Mass | Initial velocity | Final velocity | Initial momentum | Final momentum |
|-----|---|---|---|---|---|
| Red car | 1200 kg | +13 m/s | ?| 15600 ns | ? |
| Blue car | 1500 kg | -17 m/s | -2.5 m/s | -25500 ns | -3750 ns |
| Total | | | | -9900 ns | |

And initial and final momentum should be equal, so:

|    | Mass | Initial velocity | Final velocity | Initial momentum | Final momentum |
|-----|---|---|---|---|---|
| Red car | 1200 kg | +13 m/s | ?| 15600 ns | ? |
| Blue car | 1500 kg | -17 m/s | -2.5 m/s | -25500 ns | -3750 ns |
| Total | | | | -9900 ns | -9900 ns |

And from that we can derive the final momentum of the red car:

|    | Mass | Initial velocity | Final velocity | Initial momentum | Final momentum |
|-----|---|---|---|---|---|
| Red car | 1200 kg | +13 m/s | ?| 15600 ns | -6150 ns |
| Blue car | 1500 kg | -17 m/s | -2.5 m/s | -25500 ns | -3750 ns |
| Total | | | | -9900 ns | -9900 ns |

We now know that the final momentum, and we can find the final velocity from it:

$$
v_{final} = \frac{P}{m}
$$

$$
\frac{-6150\mathrm{\ ns}}{1200} = -5.125\mathrm{\ m/s}
$$

So, the answer to the question is **-5.125 m/s**.

### Example 2

A blue cart of unknown mass is initially moving at 3.0 m/s when it collides with a 0.70 kg red cart which is moving at -5.0 m/s.  After the collision, the blue cart is moving at 0.093 m/s, and the red cart at -0.47 m/s.  Based on this collision data, what is the mass of the blue cart?

#### Solution

We can use the table approach as well for this question.

However, we'll need to use a bit of algebra to solve it. Will finish this later...

### Example 3

A forensic scientist is tasked with determining the speed of a bullet in order to help detectives solve a crime.  The scientist uses an apparatus called a balistic pendulum, a 2.4 kg wooden block hanging from the ceiling.  After firing a bullet into the block, the pendulum swings upward.  The height of the pednulum's swing indicates the velocity of the pendulum after the bullet collides with it.

In her experiment, the scientist fires the suspect's gun into the wooden block from a distance of 5.7 m - the distance between the shooter and the victim in the crime.  When the 0.012 kg bullet strikes the block, the block swings to a height of 0.095 m, indicating that the pendulum (bullet and block together) were moving at a velocity of 1.38 m/s immediately after the bullet's impact.

If the scientist assumes that there were no forces external to the bullet-block system that were acting during the collision, what velocity must the bullet have had when it struck the pendulum?  (Be sure to give your answer using appropriate units)

#### Solution

In this question, we rely on the conservation of momentum again. We know that the combined momentum of the bullet and the block _before_ the collision must be equal to the combined momentum of the bullet and the block _after_ the collision.

So let's make our table:

|        | Momentum before | Momentum after |
|--------|-------------|-----------|
| Block |  | | 
| Bullet |  | |
| Total |  |  |

We know that the block is stationary before the collision, which means that its momentum must be zero before the collision. We don't know the momentum of the bullet before the equation, so let's denote that with $x$.

|        | Momentum before | Momentum after |
|--------|-------------|-----------|
| Block | 0 ns | | 
| Bullet | $x$ | |
| Total | 0 + $x$ |  |

For the block, we know that its momentum after the collision is equal to the product of its final velocity and mass. We know that the final velocity of the block is 1.38 m/s, and its mass is 2.4 kg. Thus:

$$
P_{block} = 1.38\mathrm{\ m/s} \cdot 2.4\mathrm{\ kg} = 3.312\mathrm{\ ns}
$$

For the bullet, we can calculate its momentum after the collision in the same way:

$$
P_{bullet} = 1.38\mathrm{\ m/s} \cdot 0.012\mathrm{\ kg} = 0.017\mathrm{\ ns}
$$

The total momentum after the collision is just the sum of the final momentum of the bullet and the block, so:

$$
P_{combined} = 3.312\mathrm{\ ns} + 0.017\mathrm{\ ns} = 3.329\mathrm{\ ns}
$$

Let's put those numbers in our table:

|        | Momentum before | Momentum after |
|--------|-------------|-----------|
| Block | 0 ns | 3.312 ns | 
| Bullet | $x$ | 0.017 ns|
| Total | 0 + $x$ | 3.329 ns |

Based on the conservation of momentum, we know that $P_{initial} = P_{final}$. Thus:

$$
0 + x = 3.329\mathrm{\ ns}
$$

$$
x = 3.329\mathrm{\ ns}
$$

We now have a complete table:

|        | Momentum before | Momentum after |
|--------|-------------|-----------|
| Block | 0 ns | 3.312 ns | 
| Bullet | 3.329 ns | 0.017 ns|
| Total | 3.329 ns | 3.329 ns |

From the bullet's initial momentum, we can finally find its initial velocity. Since $P = mv$, we can also say that $v = \frac{P}{m}$, and so:

$$
v_{bullet} = \frac{3.329\mathrm{\ ns}}{0.012\mathrm{\ kg}} \approx 277.42\mathrm{\ m/s}
$$

The final answer is therefore **277.42 m/s**.

## Collision safety

Before we understand how to make cars safer, we have to first think about the 3 collisions that happen in a car crash:

* First, the actual external collision of a car with another car
* Then, the collision of the passengers with the inside of a car
* Last, the collision of the brain with the skull

### The 3 safety areas

* The non-rigid crumple zone expands the time of the collision, which reduces the force transferred
* The rigid safety cell prevents the passenger from becoming crumpled with the rest of the car
* The airbags and seat belts provide protection for the _inside_ collisions of the passenger with the safety cell