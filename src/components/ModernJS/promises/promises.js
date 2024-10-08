const eat = true;
const play = false;
const sleep = true;

const eating = new Promise((resolve, reject) => {
  if (eat) {
    resolve("yes the boy eat ");
  } else {
    reject("no the boy not eat");
  }
});

const playing = new Promise((resolve, reject) => {
  if (play) {
    resolve("yes the boy play ");
  } else {
    reject("no the boy not play");
  }
});

const sleeping = new Promise((resolve, reject) => {
  if (sleep) {
    resolve("yes the boy sleep ");
  } else {
    reject("no the boy not sleep");
  }
});

eating
  .then((resolve) => {
    console.log(resolve);
    return playing;
  })
  .then((resolve) => {
    console.log(resolve);
    return sleeping;
  })
  .catch((reject) => {
    console.error(reject);
    return sleeping; // هيرجع الـ sleeping عشان يكمل السلسلة
  })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.error(reject);
  });

export { eating, playing, sleeping };
