// First approach, more like an OO paradigm

class Flok {
  constructor(n) {
    this.seagulls = n;
  }

  conjoin(other) {
    this.seagulls += other.seagulls;
    return this;
  }

  breed(other) {
    this.seagulls = this.seagulls * other.seagulls;
    return this;
  }
}

const flockA = new Flok(4);
const flockB = new Flok(2);
const flockC = new Flok(0);

const result = flockA
    .conjoin(flockC)
    .breed(flockB)
    .conjoin(flockA.breed(flockB))
    .seagulls;

console.log(result);

// Functional approach ^_^

const flockA_fp = 4;
const flockB_fp = 2;
const flockC_fp = 0;

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

const result_fp_unoptimized = add(
                                multiply(flockB_fp, add(flockA_fp, flockC_fp)),
                                multiply(flockA_fp, flockB_fp)
                            );
// Train of thoughts, we arrive here from the code above, 
// just applying simple mathematical operations & rules we already know
const result_fp = multiply(flockB_fp, add(flockA_fp, flockA_fp));

//* Arithmetic rules used *//


// Associative
console.log('/** Associative **/')
console.log(add(add(flockA_fp, flockB_fp), flockC_fp) === add(flockC_fp, add(flockA_fp, flockB_fp)));
// Commutative
console.log('/** Commutative **/')
console.log(add(flockA_fp, flockB_fp) === add(flockB_fp, flockA_fp));

// Identity
console.log('/** Identity **/')
console.log(add(flockA_fp, 0) === flockA_fp);

// Distributive
console.log('/** Distribute **/');
console.log(multiply(flockA_fp, add(flockB_fp, flockC_fp)) === add(multiply(flockA_fp, flockB_fp), multiply(flockA_fp, flockC_fp)));


//* Arithmetic rules used *//

console.log('/** Unoptimized **/')
console.log(result_fp_unoptimized);

console.log('/** Applying basic algebra **/')
console.log(result_fp);
