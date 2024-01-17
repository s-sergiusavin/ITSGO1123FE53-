/**
 * additional values added for Smart Home App we made in session 19
 */

let lightsValue = false;
let acValue = false;
let curtainsValue = false;
let windowsValue = sumTwoNumbersAlternative;
// additional values
let ashtrayValue = false;
let vacuumCleanerValue = false;
let musicValue = false;

const toggleLights = () => {
  // if(lightsValue === true) {
  //     lightsValue = false;
  // } else {
  //     lightsValue = true;
  // }
  lightsValue = !lightsValue;

  if (lightsValue) {
    return "Luminile au fost aprinse";
  } else {
    return "Luminile au fost stinse";
  }
};

const toggleAc = () => {
  acValue = !acValue;
  if (acValue) {
    return "Ac-ul a fost pornit";
  } else {
    return "Ac-ul a fost oprit";
  }
};

const toggleCurtains = () => {
  curtainsValue = !curtainsValue;
  if (curtainsValue) {
    return "Draperiile au fost deschise";
  } else {
    return "Draperiile au fost inchise";
  }
};

const toggleWindows = () => {
  windowsValue = !windowsValue;
  if (windowsValue) {
    return "Geamurile au fost deschise";
  } else {
    return "Geamurile au fost inchise";
  }
};

const toggleAshtray = () => {
  ashtrayValue = !ashtrayValue;
  if (ashtrayValue) {
    return "Avem scrumiera";
  } else {
    return "Nu avem scrumiera";
  }
};

const toggleVacum = () => {
  vacuumCleanerValue = !vacuumCleanerValue;
  if (vacuumCleanerValue) {
    return "Aspiratorul robot a inceput sa aspire";
  } else {
    return "Aspiratorul robot nu a inceput sa aspire";
  }
};

const toggleMusic = () => {
  musicValue = !musicValue;
  if (musicValue) {
    return "Muzica e pornita si ma relaxez in timp ce fumez";
  } else {
    return "Muzica nu e pornita si nu ma pot relaxa in timp ce fumez";
  }
};
const smoke = () => {
  if (!windowsValue) {
    toggleWindows();
  }

  if (!curtainsValue) {
    toggleCurtains();
  }

  if (!acValue) {
    toggleAc();
  }

  if (!ashtrayValue) {
    toggleAshtray();
  }

  if (!vacuumCleanerValue) {
    toggleVacum();
  }

  if (!musicValue) {
    toggleMusic();
  }

  console.log("Smoking...");

  if ("Winter") {
    toggleWindows();
  }
  if ("Smoking")
    toggleVacum(), toggleMusic(), toggleAshtray();

};

console.log(toggleAc())
console.log(toggleWindows())
console.log(toggleLights());
console.log(toggleAshtray());
console.log(toggleVacum());
console.log(toggleMusic());

smoke();
