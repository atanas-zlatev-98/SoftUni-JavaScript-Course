function gladiatorExpenses(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice) {
    
  let isHelmBroken = 0;
  let isSwordBroken = 0;
  let isShieldBroken = 0;
  let isArmorBroken = 0;

  let counter = 0;

  for (let i = 1; i <= lostFights; i++) {
    counter++;

    if (counter % 2 === 0) {
      isHelmBroken++;
    }

    if (counter % 3 === 0) {
      isSwordBroken++;
    }

    if (counter % 6 === 0) {
      isShieldBroken++;
      if (isShieldBroken % 2 === 0) {
        isArmorBroken++;
      }
    }
  }

  let helmRepair = isHelmBroken * helmetPrice;
  let swordRepair = isSwordBroken * swordPrice;
  let shieldRepair = isShieldBroken * shieldPrice;
  let armorRepair = isArmorBroken * armorPrice;

  let total = helmRepair + swordRepair + shieldRepair + armorRepair;

  console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
