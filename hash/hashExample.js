const hash = (string, max) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) hash += string.charCodeAt(i);
    return hash % max;
  };
   
  const HashTable = function() {
    let storage = [];
    const storageLimit = 4;
   
    this.add = (key, value) => {
      const index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [[key, value]];
      } else {
        const inserted = false;
        for (let i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted == false) storage[index].push([key, value]);
      }
    };
   
    this.remove = key => {
      const index = hash(key, storageLimit);
      if (sotrage[index].lengh === 1 && storage[index][0][0] === key)
        delete storage[index];
      else {
        for (let i = 0; i < storage[index]; i++) {
          if (storage[index][i][0] === key) delete storage[index][i];
        }
      }
    };
   
    this.lookup = key => {
      const index = hash(key, storageLimit);
      if (storage[index] === undefined) return undefined;
      else {
        for (let i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) return storage[index][i][1];
        }
      }
    };
   
    this.print = () => {
      console.log(storage);
    };
  };
   
  console.log(hash('dongwoo', 10));
   
  const ht = new HashTable();
  ht.add('a', 'a');
  ht.add('b', 'b');
  ht.add('c', 'c');
  ht.add('d', 'd');
  console.log(ht.lookup('asd'));
  ht.print();
  