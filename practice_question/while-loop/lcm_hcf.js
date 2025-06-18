// lcm and hcf of the numbers

const getLcm_Hcf = function (a, b) {
  let n1 = a;
  let n2 = b;

  let remainder = null;
  let HCF = null;

  while (remainder != 0) {
    remainder = n1 % n2;
    n1 = n2;
    n2 = remainder;
    if (remainder == 0) HCF = n2;
  }
  const LCM = (a * b) / HCF;
  return [LCM, HCF];
};
const res = getLcm_Hcf(12, 7);
console.log(res);
