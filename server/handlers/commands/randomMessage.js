const randomMessage = (msgs) => {

  const number = Math.floor(Math.random() * (2 + 1));

  return msgs[number];
}

export default randomMessage;