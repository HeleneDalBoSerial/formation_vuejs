function asyncAction(): Promise<string[]> {
  var promise = new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      const clients = ["Titi", "Toto", "Tata"];
      resolve(clients);
    }, 1500);
  });
  return promise;
}

asyncAction().then(
  (clients: string[]) => console.log(clients)
);